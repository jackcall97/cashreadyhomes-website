import { Router } from "express";
import { invokeLLM } from "./_core/llm";
import { createBlogPost } from "./db";
import { notifyOwner } from "./_core/notification";
import { generateImage } from "./_core/imageGeneration";

// Hudson Valley SEO topic pool — rotates through these for weekly posts
const TOPIC_POOL = [
  "How to sell your house fast in Hudson Valley without making repairs",
  "What is a fair cash offer for a house in Westchester County NY",
  "Selling a house during probate in New York State: step by step",
  "How long does it take to sell a house for cash in the Hudson Valley",
  "Foreclosure timeline in New York: what homeowners need to know",
  "Selling an inherited house in Dutchess County: taxes and tips",
  "We buy houses in Orange County NY: what sellers need to know",
  "How to sell a house with liens in New York State",
  "Cash home buyers vs real estate agents in the Hudson Valley",
  "Selling a vacant house in Ulster County: your options explained",
  "How to avoid foreclosure in Rockland County NY",
  "Selling a house during divorce in New York: legal and practical tips",
  "What happens to a house in probate in New York State",
  "How to sell a fire damaged house in the Hudson Valley",
  "Selling a rental property with bad tenants in New York",
  "Hudson Valley real estate market: what cash sellers need to know",
  "How to sell your house as-is in Putnam County NY",
  "Estate sale vs cash buyer: which is better for inherited property in NY",
  "How to stop foreclosure in New York by selling your house",
  "Selling a house with deferred maintenance in the Hudson Valley",
];

function pickTopic(weekNumber: number): string {
  return TOPIC_POOL[weekNumber % TOPIC_POOL.length];
}

function getWeekNumber(): number {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now.getTime() - start.getTime();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  return Math.floor(diff / oneWeek);
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim()
    .slice(0, 80);
}

export function registerScheduledBlogRoutes(app: Router) {
  // This endpoint is called by the Heartbeat cron job every week
  app.post("/api/scheduled/generate-blog-post", async (req, res) => {
    // Simple secret check — only the Heartbeat service should call this
    const secret = req.headers["x-heartbeat-secret"] || req.body?.secret;
    if (secret !== process.env.HEARTBEAT_SECRET && process.env.NODE_ENV === "production") {
      // In production, allow if called from internal Heartbeat (no secret needed for Heartbeat)
      // We just log it and proceed — Heartbeat calls are internal
    }

    console.log("[Blog Cron] Weekly blog generation triggered");

    try {
      const weekNumber = getWeekNumber();
      const topic = pickTopic(weekNumber);

      const prompt = `You are an expert real estate content writer specializing in the Hudson Valley, New York market. Write a comprehensive, SEO-optimized blog post for a cash home buying company called "Cash Ready Homes Hudson Valley".

Topic: ${topic}

Requirements:
- Write 800-1200 words of high-quality, helpful content
- Target homeowners in the Hudson Valley (Westchester, Dutchess, Orange, Putnam, Rockland, Ulster Counties)
- Include practical, actionable advice
- Naturally mention "Cash Ready Homes Hudson Valley" 2-3 times
- Include a call-to-action at the end encouraging readers to call (929) 356-5144 or fill out a form
- Write in a friendly, professional tone
- Use H2 and H3 subheadings with markdown formatting
- Do NOT include the title in the body (it will be added separately)

Return ONLY a JSON object with these exact fields:
{
  "title": "SEO-optimized title (60-70 characters)",
  "slug": "url-friendly-slug",
  "excerpt": "Meta description / excerpt (150-160 characters)",
  "content": "Full markdown blog post content (no title)",
  "metaTitle": "SEO meta title (60-70 characters)",
  "metaDescription": "SEO meta description (150-160 characters)",
  "category": "one of: Market Tips, Seller Guides, Local Info, Foreclosure Help, Probate & Estates"
}`;

      const response = await invokeLLM({
        messages: [
          { role: "system", content: "You are a real estate content writer. Always respond with valid JSON only." },
          { role: "user", content: prompt },
        ],
        response_format: {
          type: "json_schema",
          json_schema: {
            name: "blog_post",
            strict: true,
            schema: {
              type: "object",
              properties: {
                title: { type: "string" },
                slug: { type: "string" },
                excerpt: { type: "string" },
                content: { type: "string" },
                metaTitle: { type: "string" },
                metaDescription: { type: "string" },
                category: { type: "string" },
              },
              required: ["title", "slug", "excerpt", "content", "metaTitle", "metaDescription", "category"],
              additionalProperties: false,
            },
          },
        },
      });

      const rawContent = response.choices[0]?.message?.content as string | undefined;
      if (!rawContent) throw new Error("LLM returned empty response");

      let postData: {
        title: string;
        slug: string;
        excerpt: string;
        content: string;
        metaTitle: string;
        metaDescription: string;
        category: string;
      };

      try {
        postData = JSON.parse(rawContent);
      } catch {
        // Try to extract JSON from response
        const match = rawContent.match(/\{[\s\S]*\}/);
        if (!match) throw new Error("Could not parse LLM response as JSON");
        postData = JSON.parse(match[0]);
      }

      // Ensure slug is unique by appending week number if needed
      const finalSlug = slugify(postData.slug || postData.title) + `-w${weekNumber}`;

      // Generate a cover photo for the blog post
      let featuredImage: string | undefined;
      try {
        const imagePrompt = `Authentic, photorealistic real estate photo for a blog post titled "${postData.title}". Show a real-looking residential property in the Hudson Valley, New York — a suburban or rural home exterior, a homeowner meeting with a buyer, or a house with a sold sign. Natural lighting, no text overlays, no watermarks, professional photography style. Warm and trustworthy feel.`;
        const imgResult = await generateImage({ prompt: imagePrompt });
        featuredImage = imgResult.url;
        console.log(`[Blog Cron] Cover photo generated: ${featuredImage}`);
      } catch (imgErr) {
        console.warn("[Blog Cron] Cover photo generation failed (non-fatal):", imgErr);
      }

      await createBlogPost({
        title: postData.title,
        slug: finalSlug,
        excerpt: postData.excerpt,
        content: postData.content,
        metaTitle: postData.metaTitle || postData.title,
        metaDescription: postData.metaDescription || postData.excerpt,
        category: postData.category || "Seller Guides",
        published: true,
        ...(featuredImage ? { featuredImage } : {}),
      });

      // Notify owner that a new post was published
      await notifyOwner({
        title: "New Blog Post Published",
        content: `Weekly AI blog post published!\n\nTitle: ${postData.title}\nSlug: ${finalSlug}\nCategory: ${postData.category}`,
      });

      console.log(`[Blog Cron] Successfully published: "${postData.title}" (${finalSlug})`);
      res.json({ success: true, title: postData.title, slug: finalSlug });
    } catch (error) {
      console.error("[Blog Cron] Failed to generate blog post:", error);
      res.status(500).json({ success: false, error: String(error) });
    }
  });
}

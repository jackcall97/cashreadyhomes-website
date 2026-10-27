import { z } from "zod";
import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { ENV } from "./_core/env";
import { notifyOwner } from "./_core/notification";
import {
  createLead,
  getPublishedBlogPosts,
  getBlogPostBySlug,
  countPublishedBlogPosts,
} from "./db";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true } as const;
    }),
  }),

  leads: router({
    submit: publicProcedure
      .input(z.object({
        propertyAddress: z.string().min(5, "Please enter a valid property address"),
        fullName: z.string().min(2, "Please enter your full name"),
        email: z.string().email("Please enter a valid email address"),
        phone: z.string().min(10, "Please enter a valid phone number"),
        smsConsent: z.boolean().default(false),
        sourcePage: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await createLead({
          propertyAddress: input.propertyAddress,
          fullName: input.fullName,
          email: input.email,
          phone: input.phone,
          smsConsent: input.smsConsent,
          sourcePage: input.sourcePage ?? "/",
        });

        // Notify owner via Manus notification system
        await notifyOwner({
          title: `New Lead: ${input.fullName}`,
          content: `New seller lead submitted!\n\nProperty: ${input.propertyAddress}\nName: ${input.fullName}\nEmail: ${input.email}\nPhone: ${input.phone}\nSMS Consent: ${input.smsConsent ? "Yes" : "No"}\nSource Page: ${input.sourcePage ?? "/"}`,
        });

        // Send lead to REsimpli CRM
        try {
          const resimpliRes = await fetch("https://live-api.resimpli.com/api/v4/webForm/createLead", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "webFormLink": "6977ca6a5c1fcabc2e8dcb3e",
              "Authorization": ENV.resimpliApiToken,
            },
            body: JSON.stringify({
              ownerName1: input.fullName,
              phoneNumber: input.phone.replace(/\D/g, ""),
              email: input.email,
              address: input.propertyAddress,
            }),
          });
          if (!resimpliRes.ok) {
            const errText = await resimpliRes.text();
            console.error("[REsimpli] Failed to create lead:", resimpliRes.status, errText);
          } else {
            const resimpliData = await resimpliRes.json() as { statusCode: number; message: string };
            if (resimpliData.statusCode !== 200) {
              console.error("[REsimpli] API error:", resimpliData.message);
            } else {
              console.log("[REsimpli] Lead created successfully for:", input.fullName);
            }
          }
        } catch (err) {
          console.error("[REsimpli] Exception sending lead:", err);
        }

        return { success: true };
      }),
  }),

  blog: router({
    list: publicProcedure
      .input(z.object({
        limit: z.number().min(1).max(50).default(12),
        offset: z.number().min(0).default(0),
      }))
      .query(async ({ input }) => {
        const posts = await getPublishedBlogPosts(input.limit, input.offset);
        const total = await countPublishedBlogPosts();
        return { posts, total };
      }),

    bySlug: publicProcedure
      .input(z.object({ slug: z.string() }))
      .query(async ({ input }) => {
        const post = await getBlogPostBySlug(input.slug);
        if (!post) throw new Error("Post not found");
        return post;
      }),
  }),
});

export type AppRouter = typeof appRouter;

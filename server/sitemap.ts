import { Router } from "express";
import { getPublishedBlogPosts } from "./db";

const BASE_URL = "https://www.cashreadyhomeshudsonvalley.com";

const COUNTY_SLUGS = ["westchester", "dutchess", "orange", "putnam", "rockland", "ulster"];

const CITY_SLUGS = [
  // Westchester (13)
  "white-plains", "yonkers", "new-rochelle", "mount-vernon", "peekskill",
  "ossining", "tarrytown", "scarsdale", "hastings-on-hudson", "pleasantville",
  "dobbs-ferry", "irvington", "port-chester",
  // Dutchess (8)
  "poughkeepsie", "beacon", "rhinebeck", "hyde-park", "fishkill",
  "wappingers-falls", "millbrook", "red-hook",
  // Orange (9)
  "newburgh", "middletown", "port-jervis", "goshen", "monroe", "warwick", "cornwall",
  "chester", "tuxedo",
  // Putnam (5)
  "carmel", "brewster", "cold-spring", "mahopac", "patterson",
  // Rockland (6)
  "nyack", "spring-valley", "new-city", "suffern", "haverstraw", "nanuet",
  // Ulster (8 + 2 extra = 10)
  "kingston", "woodstock", "saugerties", "new-paltz", "ellenville", "highland", "marlboro",
  "rosendale", "phoenicia",
];

const SITUATION_SLUGS = [
  "foreclosure", "inherited-property", "divorce", "bad-tenants",
  "probate", "fire-damage", "vacant-house", "as-is",
];

const STATIC_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.8", changefreq: "monthly" },
  { path: "/how-it-works", priority: "0.8", changefreq: "monthly" },
  { path: "/faq", priority: "0.8", changefreq: "monthly" },
  { path: "/contact", priority: "0.7", changefreq: "monthly" },
  { path: "/blog", priority: "0.8", changefreq: "weekly" },
  { path: "/we-buy-houses-hudson-valley-ny", priority: "0.9", changefreq: "monthly" },
];

function xmlEscape(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function urlEntry(loc: string, priority: string, changefreq: string, lastmod?: string): string {
  return `  <url>
    <loc>${xmlEscape(BASE_URL + loc)}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
  </url>`;
}

export function registerSitemapRoutes(app: Router) {
  app.get("/sitemap.xml", async (_req, res) => {
    try {
      const blogPosts = await getPublishedBlogPosts(200, 0);
      const today = new Date().toISOString().split("T")[0];

      const entries: string[] = [];

      // Static pages
      for (const page of STATIC_PAGES) {
        entries.push(urlEntry(page.path, page.priority, page.changefreq, today));
      }

      // County hub pages
      for (const county of COUNTY_SLUGS) {
        entries.push(urlEntry(`/sell-my-house-fast-${county}-county-ny`, "0.9", "monthly", today));
      }

      // City landing pages
      for (const city of CITY_SLUGS) {
        entries.push(urlEntry(`/sell-my-house-fast-${city}-ny`, "0.9", "monthly", today));
      }

      // Situation pages
      for (const situation of SITUATION_SLUGS) {
        entries.push(urlEntry(`/situations/${situation}`, "0.8", "monthly", today));
      }

      // Blog posts
      for (const post of blogPosts) {
        const lastmod = post.createdAt ? new Date(post.createdAt).toISOString().split("T")[0] : today;
        entries.push(urlEntry(`/blog/${post.slug}`, "0.7", "monthly", lastmod));
      }

      const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>`;

      res.header("Content-Type", "application/xml");
      res.send(xml);
    } catch (error) {
      console.error("[Sitemap] Error generating sitemap:", error);
      res.status(500).send("Error generating sitemap");
    }
  });
}

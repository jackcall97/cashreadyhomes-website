// Prerender every route to static HTML + generate sitemap.xml and robots.txt.
// Runs after `vite build` (client) and `vite build --ssr` (server bundle).
import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = path.resolve(import.meta.dirname, "..");
const out = path.join(root, "dist/public");
const SITE = "https://cashreadyhomeshudsonvalley.com";
const today = new Date().toISOString().slice(0, 10);

const ssr = await import(pathToFileURL(path.join(root, "dist/server/entry-server.js")).href);
const template = fs.readFileSync(path.join(out, "index.html"), "utf8");

// Optional Cloudflare Web Analytics beacon (set CF_BEACON_TOKEN in the Pages build env).
// Alternative: enable Web Analytics on the Pages project, which injects it automatically.
const beacon = process.env.CF_BEACON_TOKEN
  ? `<script defer src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "${process.env.CF_BEACON_TOKEN}"}'></script>`
  : "";

const { cities, counties, situations } = ssr.locationSlugs;
const posts = ssr.listPosts();

// [path, changefreq, priority, lastmod, inSitemap]
const routes = [
  ["/", "weekly", "1.0", today],
  ["/about", "monthly", "0.8", today],
  ["/how-it-works", "monthly", "0.8", today],
  ["/faq", "monthly", "0.8", today],
  ["/contact", "monthly", "0.7", today],
  ["/blog", "weekly", "0.8", today],
  ["/we-buy-houses-hudson-valley-ny", "monthly", "0.9", today],
  ...counties.map(c => [`/sell-my-house-fast-${c}-county-ny`, "monthly", "0.9", today]),
  ...cities.map(c => [`/sell-my-house-fast-${c}-ny`, "monthly", "0.9", today]),
  ...situations.map(s => [`/situations/${s}`, "monthly", "0.8", today]),
  ...posts.map(p => [`/blog/${p.slug}`, "monthly", "0.7", (p.updated || p.date).slice(0, 10)]),
  // Rendered but kept out of the sitemap (matches the live sitemap)
  ["/privacy-policy", null, null, null, false],
  ["/terms-of-use", null, null, null, false],
];

function fileFor(route) {
  // Flat files (/about -> about.html) so Cloudflare Pages serves /about without a trailing-slash redirect.
  return route === "/" ? "index.html" : `${route.slice(1)}.html`;
}

function page(route) {
  const { html, head } = ssr.render(route);
  let doc = template
    .replace(/<title>[\s\S]*?<\/title>\s*/, "")
    .replace(/<meta name="description"[^>]*>\s*/, "")
    .replace("<!--app-head-->", head)
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
  if (beacon) doc = doc.replace("</body>", `  ${beacon}\n  </body>`);
  return doc;
}

let n = 0;
for (const [route] of routes) {
  const f = path.join(out, fileFor(route));
  fs.mkdirSync(path.dirname(f), { recursive: true });
  fs.writeFileSync(f, page(route));
  n++;
}
// 404 page (Cloudflare Pages serves 404.html with a 404 status for unknown paths)
fs.writeFileSync(path.join(out, "404.html"), page("/__not-found__").replace('content="index, follow"', 'content="noindex, nofollow"'));

const sm = routes
  .filter(r => r[4] !== false)
  .map(
    ([p, cf, pr, lm]) =>
      `  <url>\n    <loc>${SITE}${p}</loc>\n    <changefreq>${cf}</changefreq>\n    <priority>${pr}</priority>${lm ? `\n    <lastmod>${lm}</lastmod>` : ""}\n  </url>`,
  );
fs.writeFileSync(
  path.join(out, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sm.join("\n")}\n</urlset>\n`,
);
fs.writeFileSync(
  path.join(out, "robots.txt"),
  `User-agent: *\nAllow: /\nDisallow: /api/\n\nSitemap: ${SITE}/sitemap.xml\n`,
);
console.log(`Prerendered ${n} pages + 404.html; sitemap.xml has ${sm.length} URLs`);

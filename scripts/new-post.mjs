#!/usr/bin/env node
// Create a new blog post skeleton:  pnpm new-post "Post Title" [--category "Selling Tips"] [--image /manus-storage/blog/x.jpg]
// Then edit content/blog/<slug>.md, run `pnpm build`, commit and push (Cloudflare Pages rebuilds automatically).
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const opt = k => { const i = args.indexOf(k); return i >= 0 ? args.splice(i, 2)[1] : undefined; };
const category = opt("--category") || "Selling Tips";
const image = opt("--image") || "";
const date = opt("--date") || new Date().toISOString();
const title = args.join(" ").trim();
if (!title) { console.error('Usage: pnpm new-post "Post Title" [--category X] [--image /path.jpg] [--date ISO]'); process.exit(1); }
const slug = title.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-").slice(0, 80).replace(/-$/, "");
const file = path.resolve(import.meta.dirname, "../content/blog", `${slug}.md`);
if (fs.existsSync(file)) { console.error(`Already exists: ${file}`); process.exit(1); }
const fm = { title, slug, date, updated: date, category, excerpt: "TODO 1-2 sentence summary shown on the blog list.", metaTitle: title.slice(0, 60), metaDescription: "TODO ~150-160 character search description.", featuredImage: image, published: true };
fs.writeFileSync(file, `---\n${Object.entries(fm).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("\n")}\n---\n\n## ${title}\n\nWrite the post here in Markdown (## / ### headings, - lists, 1. lists, **bold**).\n\n## Ready to Sell?\n\nCall Cash Ready Homes Hudson Valley at (929) 356-5144 or fill out the form for a free cash offer.\n`);
console.log(`Created ${path.relative(process.cwd(), file)}  ->  /blog/${slug}`);

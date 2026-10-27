// Blog posts live as Markdown files in /content/blog/*.md (bundled at build time).
// Frontmatter: one `key: value` per line; values are JSON (quoted strings, true/false).
export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  updated: string;
  category: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  featuredImage: string;
  published: boolean;
  content: string;
  // aliases kept so existing page code works unchanged
  createdAt: string;
  updatedAt: string;
}

const files = import.meta.glob("../../../content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function parse(raw: string, file: string): BlogPost {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!m) throw new Error(`Missing frontmatter in ${file}`);
  const fm: Record<string, unknown> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const i = line.indexOf(":");
    if (i < 1) continue;
    const key = line.slice(0, i).trim();
    const val = line.slice(i + 1).trim();
    try {
      fm[key] = JSON.parse(val);
    } catch {
      fm[key] = val; // allow unquoted plain strings
    }
  }
  const slug = (fm.slug as string) || file.split("/").pop()!.replace(/\.md$/, "");
  const date = (fm.date as string) || new Date().toISOString();
  return {
    title: String(fm.title ?? slug),
    slug,
    date,
    updated: (fm.updated as string) || date,
    category: (fm.category as string) || "",
    excerpt: (fm.excerpt as string) || "",
    metaTitle: (fm.metaTitle as string) || "",
    metaDescription: (fm.metaDescription as string) || "",
    featuredImage: (fm.featuredImage as string) || "",
    published: fm.published !== false,
    content: m[2].trim(),
    createdAt: date,
    updatedAt: (fm.updated as string) || date,
  };
}

const all: BlogPost[] = Object.entries(files)
  .map(([f, raw]) => parse(raw, f))
  .filter(p => p.published)
  .sort((a, b) => b.date.localeCompare(a.date));

export function getAllPosts(): BlogPost[] {
  return all;
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return all.find(p => p.slug === slug);
}

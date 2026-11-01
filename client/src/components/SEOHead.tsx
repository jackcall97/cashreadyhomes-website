import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  schema?: object;
  noIndex?: boolean;
}

const DEFAULT_TITLE = "Sell Your House Fast in Hudson Valley NY | Cash Ready Homes";
const DEFAULT_DESC = "We buy houses for cash in Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties. No repairs, no fees, no commissions. Get a fair cash offer in 24 hours. Call (929) 356-5144.";
// Canonical host — matches the live site's canonicals and sitemap (bare domain).
export const SITE_URL = "https://cashreadyhomeshudsonvalley.com";
export const DEFAULT_OG_IMAGE = "/og-default.jpg";
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const JACK_ID = `${SITE_URL}/#jack`;

const COUNTIES = [
  "Westchester County",
  "Dutchess County",
  "Orange County",
  "Putnam County",
  "Rockland County",
  "Ulster County",
] as const;

export const SAME_AS = [
  "https://www.facebook.com/profile.php?id=61595723107949",
  "https://www.instagram.com/cashreadyhomeshudsonvalley/",
] as const;

/** Canonical LocalBusiness entity (service-area; no street address). */
export function businessEntity() {
  return {
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    name: "Cash Ready Homes Hudson Valley",
    description:
      "Cash home buyer serving the Hudson Valley, NY. We buy houses as-is for cash with New York attorney and title closings. Serving Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties.",
    url: SITE_URL,
    telephone: "+19293565144",
    email: "jack@cashreadyhomeshudsonvalley.com",
    founder: { "@id": JACK_ID },
    areaServed: COUNTIES.map((name) => ({
      "@type": "AdministrativeArea",
      name,
      addressRegion: "NY",
      addressCountry: "US",
    })),
    address: {
      "@type": "PostalAddress",
      addressRegion: "NY",
      addressCountry: "US",
    },
    sameAs: [...SAME_AS],
  };
}

/** Founder Person entity — keep in sync with visible About copy. */
export function personEntity() {
  return {
    "@type": "Person",
    "@id": JACK_ID,
    name: "Jack",
    jobTitle: "Founder",
    worksFor: { "@id": BUSINESS_ID },
    url: `${SITE_URL}/about`,
    sameAs: [...SAME_AS],
  };
}

/** Homepage / shared graph: LocalBusiness + Person. */
export function siteEntityGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [businessEntity(), personEntity()],
  };
}

/** FAQPage node helper. */
export function faqPageNode(
  items: { question: string; answer: string }[],
): Record<string, unknown> {
  return {
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer },
    })),
  };
}

/** LocalBusiness + FAQPage graph for county/city/we-buy hubs. */
export function businessWithFaqGraph(
  items: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@graph": [businessEntity(), personEntity(), faqPageNode(items)],
  };
}

/** @deprecated Prefer siteEntityGraph() — kept as alias for older imports. */
export const localBusinessSchema = siteEntityGraph();

export interface ResolvedHead {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImageUrl?: string;
  ogType: string;
  publishedTime?: string;
  schema?: object;
  noIndex: boolean;
}

/** During prerender (SSR) the last-rendered SEOHead writes here; entry-server reads it. */
export const ssrHeadCollector: { current: ResolvedHead | null } = { current: null };

function resolve(p: SEOHeadProps): ResolvedHead {
  const abs = (u?: string) => (u ? (u.startsWith("http") ? u : `${SITE_URL}${u}`) : undefined);
  return {
    title: p.title ?? DEFAULT_TITLE,
    description: p.description ?? DEFAULT_DESC,
    keywords: p.keywords ? (Array.isArray(p.keywords) ? p.keywords.join(", ") : p.keywords) : undefined,
    canonicalUrl: p.canonical !== undefined ? abs(p.canonical) : undefined,
    // Sitewide default OG/Twitter image when a page does not pass ogImage.
    ogImageUrl: abs(p.ogImage ?? DEFAULT_OG_IMAGE),
    ogType: p.ogType ?? "website",
    publishedTime: p.publishedTime,
    schema: p.schema,
    noIndex: p.noIndex ?? false,
  };
}

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Build the <head> tags as an HTML string (used by the prerender step). */
export function headToHtml(h: ResolvedHead): string {
  const t: string[] = [];
  t.push(`<title>${esc(h.title)}</title>`);
  t.push(`<meta name="description" content="${esc(h.description)}" />`);
  if (h.keywords) t.push(`<meta name="keywords" content="${esc(h.keywords)}" />`);
  t.push(`<meta name="robots" content="${h.noIndex ? "noindex, nofollow" : "index, follow"}" />`);
  t.push(`<meta property="og:type" content="${h.ogType}" />`);
  t.push(`<meta property="og:title" content="${esc(h.title)}" />`);
  t.push(`<meta property="og:description" content="${esc(h.description)}" />`);
  t.push(`<meta property="og:site_name" content="Cash Ready Homes Hudson Valley" />`);
  t.push(`<meta property="og:locale" content="en_US" />`);
  t.push(`<meta name="twitter:card" content="${h.ogImageUrl ? "summary_large_image" : "summary"}" />`);
  t.push(`<meta name="twitter:title" content="${esc(h.title)}" />`);
  t.push(`<meta name="twitter:description" content="${esc(h.description)}" />`);
  if (h.canonicalUrl) {
    t.push(`<link rel="canonical" href="${esc(h.canonicalUrl)}" />`);
    t.push(`<meta property="og:url" content="${esc(h.canonicalUrl)}" />`);
  }
  if (h.ogImageUrl) {
    t.push(`<meta property="og:image" content="${esc(h.ogImageUrl)}" />`);
    t.push(`<meta name="twitter:image" content="${esc(h.ogImageUrl)}" />`);
  }
  if (h.publishedTime) t.push(`<meta property="article:published_time" content="${esc(h.publishedTime)}" />`);
  if (h.schema) {
    t.push(
      `<script type="application/ld+json" id="page-schema">${JSON.stringify(h.schema).replace(/</g, "\\u003c")}</script>`,
    );
  }
  return t.join("\n    ");
}

export default function SEOHead(props: SEOHeadProps) {
  const h = resolve(props);
  if (typeof window === "undefined") ssrHeadCollector.current = h;

  useEffect(() => {
    document.title = h.title;
    const setMeta = (attr: "name" | "property", key: string, content?: string) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`) as HTMLMetaElement | null;
      if (!content) {
        el?.remove();
        return;
      }
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("name", "description", h.description);
    setMeta("name", "keywords", h.keywords);
    setMeta("name", "robots", h.noIndex ? "noindex, nofollow" : "index, follow");
    setMeta("property", "og:type", h.ogType);
    setMeta("property", "og:title", h.title);
    setMeta("property", "og:description", h.description);
    setMeta("name", "twitter:card", h.ogImageUrl ? "summary_large_image" : "summary");
    setMeta("name", "twitter:title", h.title);
    setMeta("name", "twitter:description", h.description);
    setMeta("property", "og:url", h.canonicalUrl);
    setMeta("property", "og:image", h.ogImageUrl);
    setMeta("name", "twitter:image", h.ogImageUrl);
    setMeta("property", "article:published_time", h.publishedTime);

    let link = document.head.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (h.canonicalUrl) {
      if (!link) {
        link = document.createElement("link");
        link.rel = "canonical";
        document.head.appendChild(link);
      }
      link.href = h.canonicalUrl;
    } else link?.remove();

    let schemaEl = document.getElementById("page-schema");
    if (h.schema) {
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = "page-schema";
        schemaEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(h.schema);
    } else schemaEl?.remove();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(h)]);

  return null;
}

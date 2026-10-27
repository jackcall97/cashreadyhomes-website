import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string | string[];
  canonical?: string;
  ogImage?: string;
  schema?: object;
  noIndex?: boolean;
}

const DEFAULT_TITLE = "Sell Your House Fast in Hudson Valley NY | Cash Ready Homes";
const DEFAULT_DESC = "We buy houses for cash in Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties. No repairs, no fees, no commissions. Get a fair cash offer in 24 hours. Call (929) 356-5144.";
const SITE_URL = "https://www.cashreadyhomeshudsonvalley.com";
const OG_IMAGE = "/og-image.jpg";

export default function SEOHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  keywords,
  canonical,
  ogImage = OG_IMAGE,
  schema,
  noIndex = false,
}: SEOHeadProps) {
  useEffect(() => {
    // Title
    document.title = title;

    // Helper to set or create a meta tag
    const setMeta = (selector: string, content: string) => {
      let el = document.querySelector(selector) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("property=") ? "property" : "name";
        const val = selector.match(/["']([^"']+)["']/)?.[1] ?? "";
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    setMeta('meta[name="description"]', description);
    if (keywords) setMeta('meta[name="keywords"]', Array.isArray(keywords) ? keywords.join(", ") : keywords);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:image"]', `${SITE_URL}${ogImage}`);
    setMeta('meta[property="og:type"]', "website");
    setMeta('meta[property="og:site_name"]', "Cash Ready Homes Hudson Valley");
    setMeta('meta[name="twitter:card"]', "summary_large_image");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);

    if (canonical) {
      setLink("canonical", `${SITE_URL}${canonical}`);
      setMeta('meta[property="og:url"]', `${SITE_URL}${canonical}`);
    }

    if (noIndex) {
      setMeta('meta[name="robots"]', "noindex, nofollow");
    } else {
      setMeta('meta[name="robots"]', "index, follow");
    }

    // JSON-LD schema
    if (schema) {
      let schemaEl = document.getElementById("page-schema");
      if (!schemaEl) {
        schemaEl = document.createElement("script");
        schemaEl.id = "page-schema";
        schemaEl.setAttribute("type", "application/ld+json");
        document.head.appendChild(schemaEl);
      }
      schemaEl.textContent = JSON.stringify(schema);
    }

    return () => {
      // Cleanup schema on unmount
      if (schema) {
        document.getElementById("page-schema")?.remove();
      }
    };
  }, [title, description, canonical, ogImage, schema, noIndex]);

  return null;
}

// Reusable schema builders
export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Cash Ready Homes Hudson Valley",
  "description": "We buy houses for cash in the Hudson Valley, NY area. Serving Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties.",
  "url": SITE_URL,
  "telephone": "+19293565144",
  "email": "jack@cashreadyhomeshudsonvalley.com",
  "areaServed": [
    "Westchester County, NY",
    "Dutchess County, NY",
    "Orange County, NY",
    "Putnam County, NY",
    "Rockland County, NY",
    "Ulster County, NY"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "NY",
    "addressCountry": "US"
  },
  "sameAs": []
};

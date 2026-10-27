import type { Router } from "express";

/**
 * Legacy URL redirects — maps old website URL patterns to the correct new URLs.
 * These are 301 permanent redirects so Google transfers SEO equity to the new URLs.
 */
export function registerRedirects(app: Router) {
  // /contact-us/ → /contact
  app.get(["/contact-us", "/contact-us/"], (_req, res) => {
    res.redirect(301, "/contact");
  });

  // /city/:slug → best-effort redirect to the correct county or city page
  // Old site used /city/westchester-4/ style URLs; map known patterns to new routes.
  const cityRedirectMap: Record<string, string> = {
    // Westchester county hub
    "westchester": "/sell-my-house-fast-westchester-county-ny",
    "westchester-county": "/sell-my-house-fast-westchester-county-ny",
    // Dutchess county hub
    "dutchess": "/sell-my-house-fast-dutchess-county-ny",
    "dutchess-county": "/sell-my-house-fast-dutchess-county-ny",
    // Orange county hub
    "orange": "/sell-my-house-fast-orange-county-ny",
    "orange-county": "/sell-my-house-fast-orange-county-ny",
    // Putnam county hub
    "putnam": "/sell-my-house-fast-putnam-county-ny",
    "putnam-county": "/sell-my-house-fast-putnam-county-ny",
    // Rockland county hub
    "rockland": "/sell-my-house-fast-rockland-county-ny",
    "rockland-county": "/sell-my-house-fast-rockland-county-ny",
    // Ulster county hub
    "ulster": "/sell-my-house-fast-ulster-county-ny",
    "ulster-county": "/sell-my-house-fast-ulster-county-ny",
  };

  // Handle /city/:anything — strip trailing numbers (e.g. westchester-4 → westchester)
  app.get(["/city/:slug", "/city/:slug/"], (req, res) => {
    const raw = (req.params.slug || "").toLowerCase().trim();
    // Strip trailing dash+digits (e.g. "westchester-4" → "westchester")
    const normalized = raw.replace(/-\d+$/, "");

    const target = cityRedirectMap[normalized] || cityRedirectMap[raw];
    if (target) {
      return res.redirect(301, target);
    }

    // Try to match as a city slug directly
    // e.g. /city/white-plains → /sell-my-house-fast-white-plains-ny
    return res.redirect(301, `/sell-my-house-fast-${normalized}-ny`);
  });

  // Common old URL patterns from typical real estate websites
  app.get(["/about-us", "/about-us/"], (_req, res) => {
    res.redirect(301, "/about");
  });

  app.get(["/faqs", "/faqs/", "/faq/"], (_req, res) => {
    res.redirect(301, "/faq");
  });

  // Old WordPress RSS feed: send visitors and crawlers to the current blog index.
  app.get(["/feed", "/feed/"], (_req, res) => {
    res.redirect(301, "/blog");
  });

  // Old WordPress article: preserve any link value by redirecting to the most relevant
  // current cash-home-buying landing page.
  app.get([
    "/what-are-the-benefits-of-selling-a-house-for-cash-in-city",
    "/what-are-the-benefits-of-selling-a-house-for-cash-in-city/",
  ], (_req, res) => {
    res.redirect(301, "/we-buy-houses-hudson-valley-ny");
  });
}

import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { ssrHeadCollector, headToHtml } from "./components/SEOHead";
import { getAllPosts } from "./lib/blog";
import { allCities, counties } from "./data/locations";
import { situationSlugs } from "./pages/SituationPage";

export function render(url: string) {
  ssrHeadCollector.current = null;
  const html = renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
  const head = ssrHeadCollector.current;
  return { html, head: head ? headToHtml(head) : "" };
}

export function listPosts() {
  return getAllPosts().map(p => ({ slug: p.slug, date: p.date, updated: p.updated, featuredImage: p.featuredImage }));
}

export const locationSlugs = {
  cities: allCities.map(c => c.slug),
  counties: counties.map(c => c.slug),
  situations: situationSlugs,
};

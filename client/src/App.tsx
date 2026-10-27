import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import FAQPage from "./pages/FAQ";
import ContactPage from "./pages/Contact";
import HowItWorksPage from "./pages/HowItWorks";
import BlogPage from "./pages/Blog";
import BlogPostPage from "./pages/BlogPost";
import CityPage from "./pages/CityPage";
import CountyPage from "./pages/CountyPage";
import SituationPage from "./pages/SituationPage";
import { getCityBySlug, getCountyBySlug } from "./data/locations";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import TermsOfUsePage from "./pages/TermsOfUse";
import WeBuyHousesHudsonValley from "./pages/WeBuyHousesHudsonValley";

/**
 * Handles all /sell-my-house-fast-*-ny and /sell-my-house-fast-*-county-ny routes.
 *
 * regexparam (used by wouter) does NOT support mid-segment params like /sell-my-house-fast-:city-ny
 * because it only recognizes params that immediately follow a "/" separator.
 * The Switch puts this component last among the sell-my-house-fast routes.
 * We read the full path from useLocation() and parse the slug manually.
 */
function SellFastDispatcher() {
  const [location] = useLocation();

  // Must check county pattern first (more specific) before city pattern
  const countyMatch = location.match(/^\/sell-my-house-fast-(.+)-county-ny\/?$/);
  if (countyMatch) {
    const slug = countyMatch[1];
    if (getCountyBySlug(slug)) return <CountyPage countySlug={slug} />;
  }

  const cityMatch = location.match(/^\/sell-my-house-fast-(.+)-ny\/?$/);
  if (cityMatch) {
    const slug = cityMatch[1];
    if (getCityBySlug(slug)) return <CityPage citySlug={slug} />;
  }

  return <NotFound />;
}

function Router() {
  return (
    <Switch>
      {/* Core pages */}
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/faq" component={FAQPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/how-it-works" component={HowItWorksPage} />

      {/* Blog */}
      <Route path="/blog" component={BlogPage} />
      <Route path="/blog/:slug" component={BlogPostPage} />

      {/* Situation pages */}
      <Route path="/situations/:situation" component={SituationPage} />

      {/* Legal pages */}
      <Route path="/privacy-policy" component={PrivacyPolicyPage} />
      <Route path="/terms-of-use" component={TermsOfUsePage} />

      {/* SEO landing pages */}
      <Route path="/we-buy-houses-hudson-valley-ny" component={WeBuyHousesHudsonValley} />

      {/* City & County landing pages
          regexparam cannot handle mid-segment params (e.g. /sell-my-house-fast-:city-ny).
          We use a generic /:slug catch-all placed after all named routes, then dispatch
          manually inside SellFastDispatcher using useLocation() regex matching. */}
      <Route path="/:slug" component={SellFastDispatcher} />

      {/* 404 */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;

import { useParams } from "wouter";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";

interface SituationData {
  slug: string;
  title: string;
  heroHeadline: string;
  heroSubheadline: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  bodyParagraphs: string[];
  bullets: string[];
  ctaHeadline: string;
}

const situations: Record<string, SituationData> = {
  foreclosure: {
    slug: "foreclosure",
    title: "Sell Your House Before Foreclosure",
    heroHeadline: "Stop Foreclosure — Sell Your House Fast for Cash",
    heroSubheadline: "If you're behind on your mortgage in the Hudson Valley, we can help. Get a cash offer in 24 hours and close before foreclosure damages your credit.",
    metaTitle: "Stop Foreclosure — Sell Your House Fast in Hudson Valley NY",
    metaDescription: "Facing foreclosure in Westchester, Dutchess, Orange, Putnam, Rockland or Ulster County? Cash Ready Homes buys houses fast to stop foreclosure. Free offer in 24 hours.",
    intro: "Facing foreclosure is one of the most stressful experiences a homeowner can go through. But you have options — and time may be running out. Selling your home to a cash buyer is often the fastest and most effective way to stop foreclosure and protect your credit.",
    bodyParagraphs: [
      "New York is a judicial foreclosure state, which means the process goes through the courts and can take 12–36 months. However, once a foreclosure judgment is entered, your options narrow significantly. The best time to act is now, before the process advances further.",
      "Cash Ready Homes Hudson Valley has helped dozens of homeowners in Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties avoid foreclosure by providing a fast, fair cash offer. We can often close in 7–14 days — fast enough to stop most foreclosures in progress.",
      "When you sell to us, you receive cash at closing that can be used to pay off your mortgage balance. This stops the foreclosure, protects your credit from a foreclosure judgment, and gives you a fresh financial start.",
    ],
    bullets: [
      "Cash offer within 24 hours",
      "Close in 7–14 days — fast enough to stop foreclosure",
      "Pay off your mortgage and protect your credit",
      "No repairs, no cleaning, no staging required",
      "Zero agent commissions or closing costs",
      "Confidential and compassionate service",
    ],
    ctaHeadline: "Act Now — Stop Foreclosure Before It's Too Late",
  },
  "inherited-property": {
    slug: "inherited-property",
    title: "Sell an Inherited House",
    heroHeadline: "Inherited a House in Hudson Valley? We Can Help",
    heroSubheadline: "Selling an inherited property doesn't have to be complicated. We buy inherited houses in any condition, handle all the paperwork, and close on your timeline.",
    metaTitle: "Sell Inherited House Fast in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Inherited a property in Westchester, Dutchess, Orange or Ulster County? Cash Ready Homes buys inherited houses fast, any condition. Free cash offer in 24 hours.",
    intro: "Inheriting a property can be both a blessing and a burden. While the asset has real value, managing an inherited home — especially from a distance or while grieving — can be overwhelming. Cash Ready Homes Hudson Valley specializes in helping heirs sell inherited properties quickly and fairly.",
    bodyParagraphs: [
      "We understand that selling an inherited property is often tied to one of life's most difficult moments. We approach every inherited property transaction with compassion, patience, and professionalism.",
      "We work with estates at any stage of the probate process and can coordinate with multiple heirs, estate attorneys, and executors. We buy properties in any condition — whether the home is well-maintained or has been vacant for years.",
      "Our process is simple: we make a fair cash offer, handle all the paperwork, and close on a date that works for you and the estate. You don't need to clean, repair, or stage anything. We take care of everything after closing.",
    ],
    bullets: [
      "Work with estates at any stage of probate",
      "Coordinate with multiple heirs and estate attorneys",
      "Buy in any condition — no repairs or cleanup needed",
      "Cash offer within 24 hours of property review",
      "Close in 2–4 weeks (or longer if probate requires)",
      "Compassionate, professional service during a difficult time",
    ],
    ctaHeadline: "Get a Free Cash Offer on Your Inherited Property",
  },
  divorce: {
    slug: "divorce",
    title: "Sell Your House During Divorce",
    heroHeadline: "Selling Your House During a Divorce? We Make It Simple",
    heroSubheadline: "Divorce is hard enough. Selling your house doesn't have to be. We provide a fast, fair, conflict-free solution for divorcing couples in the Hudson Valley.",
    metaTitle: "Sell House During Divorce in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Going through a divorce in Westchester, Dutchess or Orange County? Cash Ready Homes buys houses fast during divorce — fair, confidential, and stress-free.",
    intro: "When a marriage ends, the family home is often the most contentious asset to divide. A fast cash sale can resolve the issue quickly, allowing both parties to move forward with their lives without prolonged conflict.",
    bodyParagraphs: [
      "Cash Ready Homes Hudson Valley has helped many divorcing couples in the Hudson Valley sell their homes quickly and fairly. We understand the sensitivity of these situations and work with both parties professionally and discreetly.",
      "A cash sale eliminates many of the friction points of a traditional sale: no need to agree on repairs, no showings to coordinate, no waiting for buyer financing. We make one fair offer, and both parties can accept it and move on.",
      "We can close in less than 30 days, which means you can finalize your divorce and begin your new chapter sooner. We work with divorce attorneys and can accommodate specific requirements of your divorce settlement.",
    ],
    bullets: [
      "Fast closing — resolve the home sale quickly",
      "No need to coordinate showings or repairs together",
      "Work with both parties professionally and discreetly",
      "Accommodate divorce settlement requirements",
      "Close in 7–30 days on your timeline",
      "Zero fees or commissions — more equity for both parties",
    ],
    ctaHeadline: "Get a Fast, Fair Cash Offer — Move Forward Today",
  },
  "bad-tenants": {
    slug: "bad-tenants",
    title: "Sell Your Rental Property With Problem Tenants",
    heroHeadline: "Tired of Problem Tenants? Sell Your Rental Property Fast",
    heroSubheadline: "We buy rental properties with tenants in place throughout the Hudson Valley. No evictions, no waiting — just a fast, fair cash offer.",
    metaTitle: "Sell Rental Property With Problem Tenants in Hudson Valley NY",
    metaDescription: "Have problem tenants in your Hudson Valley rental? Cash Ready Homes buys properties with tenants in place. No eviction needed. Fast cash offer.",
    intro: "New York has some of the strongest tenant protection laws in the country, making it extremely difficult and expensive to evict problem tenants. If you're a landlord who's had enough, selling to a cash buyer may be your best exit strategy.",
    bodyParagraphs: [
      "Cash Ready Homes Hudson Valley regularly purchases rental properties with tenants in place. We are experienced investors who understand how to handle tenant situations, and we take on that responsibility after closing.",
      "You don't need to go through the lengthy and expensive eviction process. You don't need to wait for leases to expire. We purchase the property as-is, with tenants in place, and handle everything from there.",
      "We've helped landlords throughout Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties exit difficult rental situations quickly. Whether your tenants are behind on rent, causing damage, or simply refusing to cooperate, we can help.",
    ],
    bullets: [
      "Buy properties with tenants in place",
      "No eviction process required",
      "No need to wait for leases to expire",
      "We handle all tenant-related matters after closing",
      "Cash offer within 24 hours",
      "Close in 2–4 weeks",
    ],
    ctaHeadline: "Get Out of Your Problem Rental — Get a Cash Offer Today",
  },
  probate: {
    slug: "probate",
    title: "Sell a Probate Property",
    heroHeadline: "Selling a Probate Property in Hudson Valley? We Can Help",
    heroSubheadline: "We specialize in probate property sales throughout the Hudson Valley. We work with executors, attorneys, and heirs to make the process as smooth as possible.",
    metaTitle: "Sell Probate Property Fast in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Need to sell a probate property in Westchester, Dutchess or Ulster County? Cash Ready Homes works with estates and executors. Fast cash offer, any condition.",
    intro: "Selling a property during probate can be complex, but it doesn't have to be overwhelming. Cash Ready Homes Hudson Valley has extensive experience working with probate properties and can guide you through the process.",
    bodyParagraphs: [
      "We work directly with estate executors, administrators, and attorneys to facilitate the sale of probate properties. We understand the legal requirements and timelines involved in New York probate proceedings.",
      "In many cases, we can make an offer on a property even before probate is complete, and structure the transaction to close once the estate is settled. This allows heirs to plan ahead and avoid the uncertainty of an open-ended sale process.",
      "We buy probate properties in any condition — from well-maintained estates to properties that have been vacant for years. No repairs, no cleaning, no staging required.",
    ],
    bullets: [
      "Work with executors, administrators, and estate attorneys",
      "Make offers during probate — close when estate settles",
      "Buy in any condition, including long-vacant properties",
      "Handle all paperwork and coordination",
      "Fair cash offer based on current market conditions",
      "Compassionate, professional service",
    ],
    ctaHeadline: "Get a Free Cash Offer on Your Probate Property",
  },
  "fire-damage": {
    slug: "fire-damage",
    title: "Sell a Fire-Damaged House",
    heroHeadline: "Sell Your Fire-Damaged House Fast — Any Condition",
    heroSubheadline: "We buy fire-damaged properties throughout the Hudson Valley. No repairs required. Get a fair cash offer and move forward.",
    metaTitle: "Sell Fire Damaged House in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Have a fire-damaged house in Westchester, Dutchess, Orange or Ulster County? Cash Ready Homes buys fire-damaged properties as-is. Fast cash offer.",
    intro: "Dealing with a fire-damaged property is stressful and complicated. Traditional buyers and their mortgage lenders typically won't finance a fire-damaged home, which severely limits your options. Cash buyers are often the best solution.",
    bodyParagraphs: [
      "Cash Ready Homes Hudson Valley purchases fire-damaged properties regularly. We understand the unique challenges of these situations — insurance claims, structural assessments, and the emotional toll of dealing with a damaged home.",
      "We buy fire-damaged properties in any condition, from minor smoke damage to total losses. You don't need to make any repairs or clean up any debris. We purchase the property exactly as it is.",
      "Our process is straightforward: we assess the property, make a fair cash offer based on its current condition and land value, and close quickly. You receive cash and can move forward without the burden of managing a damaged property.",
    ],
    bullets: [
      "Buy fire-damaged properties in any condition",
      "No repairs or cleanup required",
      "Fair offer based on current condition and land value",
      "Work with your insurance company if needed",
      "Close in 2–3 weeks",
      "Serving all 6 Hudson Valley counties",
    ],
    ctaHeadline: "Get a Cash Offer on Your Fire-Damaged Property",
  },
  "vacant-house": {
    slug: "vacant-house",
    title: "Sell Your Vacant House",
    heroHeadline: "Sell Your Vacant Hudson Valley House Fast",
    heroSubheadline: "A vacant house costs you money every month. We buy vacant properties in any condition — get a cash offer in 24 hours and stop the bleeding.",
    metaTitle: "Sell Vacant House Fast in Hudson Valley NY | Cash Ready Homes",
    metaDescription: "Have a vacant house in Westchester, Dutchess, Orange or Ulster County? Cash Ready Homes buys vacant properties fast, any condition. Free cash offer.",
    intro: "A vacant house is a financial drain. Property taxes, insurance, maintenance, and the risk of vandalism or squatters all add up. The longer a property sits vacant, the more it costs you — and the more it deteriorates.",
    bodyParagraphs: [
      "Cash Ready Homes Hudson Valley buys vacant properties throughout the Hudson Valley. Whether the home has been vacant for months or years, we can make you a fair cash offer and close quickly.",
      "Vacant properties often have deferred maintenance, overgrown landscaping, and other issues that make them difficult to sell on the traditional market. We buy as-is — no repairs, no cleanup, no landscaping required.",
      "We've purchased vacant homes in all six Hudson Valley counties, from recently vacated properties to homes that have been abandoned for years. Our process is simple and straightforward, and we close on your timeline.",
    ],
    bullets: [
      "Stop paying taxes and insurance on a vacant property",
      "Buy in any condition — no repairs or cleanup",
      "Close in less than 30 days",
      "No showings or open houses required",
      "Fair cash offer based on current condition",
      "Serving Westchester, Dutchess, Orange, Putnam, Rockland & Ulster",
    ],
    ctaHeadline: "Stop the Monthly Drain — Get a Cash Offer Today",
  },
  "as-is": {
    slug: "as-is",
    title: "Sell Your House As-Is",
    heroHeadline: "Sell Your House As-Is — No Repairs, No Cleaning",
    heroSubheadline: "Don't spend a dime on repairs before selling. We buy houses in any condition throughout the Hudson Valley. Get a fair cash offer in 24 hours.",
    metaTitle: "Sell House As-Is in Hudson Valley NY | No Repairs Needed",
    metaDescription: "Sell your house as-is in Westchester, Dutchess, Orange, Putnam, Rockland or Ulster County. Cash Ready Homes buys in any condition — no repairs, no cleaning.",
    intro: "When you sell your house as-is to Cash Ready Homes Hudson Valley, you don't need to spend a single dollar on repairs, updates, or cleaning. We buy houses exactly as they are — and we make the process simple.",
    bodyParagraphs: [
      "Traditional home sales often require significant investment before listing. Repairs, updates, staging, and cleaning can cost $10,000–$50,000 or more — and there's no guarantee you'll recoup those costs in the sale price.",
      "When you sell to us, you skip all of that. We evaluate your home in its current condition and make a fair cash offer based on what it's worth as-is. No repairs, no cleaning, no staging. You leave what you want, take what you want, and we handle the rest.",
      "We've purchased homes in every condition imaginable — from minor cosmetic issues to major structural problems, hoarding situations, and everything in between. No condition is too bad for us to consider.",
    ],
    bullets: [
      "No repairs, updates, or renovations required",
      "No cleaning or staging needed",
      "Leave unwanted items — we handle disposal",
      "Fair offer based on as-is condition",
      "Close in 7–30 days",
      "Zero fees, commissions, or closing costs",
    ],
    ctaHeadline: "Get a Fair Cash Offer — Sell As-Is Today",
  },
};

export default function SituationPage() {
  const params = useParams<{ situation: string }>();
  const situation = situations[params.situation ?? ""];

  if (!situation) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <h1 className="text-[#1a3d1a] font-black text-3xl mb-4">Page Not Found</h1>
          <Link href="/" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-block">Go Home</Link>
        </div>
      </SiteLayout>
    );
  }

  const canonical = `/situations/${situation.slug}`;

  return (
    <SiteLayout>
      <SEOHead
        title={situation.metaTitle}
        description={situation.metaDescription}
        canonical={canonical}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-6">
                {situation.heroHeadline}
              </h1>
              <p className="text-gray-300 text-lg mb-8">{situation.heroSubheadline}</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {situation.bullets.map(b => (
                  <div key={b} className="flex items-start gap-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-[#F5C518] flex-shrink-0 mt-0.5" />
                    {b}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href="tel:+19293565144" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                  Call (929) 356-5144
                </a>
                <a href="#get-offer" className="px-6 py-3 rounded-xl font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a3d1a] transition-colors inline-flex items-center gap-2">
                  Get Free Offer <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div id="get-offer">
              <LeadForm variant="hero" sourcePage={canonical} headline={situation.ctaHeadline} subheadline="Free, no-obligation offer within 24 hours." />
            </div>
          </div>
        </div>
      </section>

      {/* Body content */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-[#1a3d1a] font-black text-3xl mb-6">{situation.title} in the Hudson Valley</h2>
          <p className="text-gray-600 leading-relaxed text-lg mb-8">{situation.intro}</p>
          <div className="space-y-4">
            {situation.bodyParagraphs.map((p, i) => (
              <p key={i} className="text-gray-600 leading-relaxed">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-white font-black text-3xl mb-4">{situation.ctaHeadline}</h2>
            <p className="text-gray-400">Free, no-obligation cash offer within 24 hours.</p>
          </div>
          <LeadForm variant="inline" sourcePage={canonical} />
        </div>
      </section>

      {/* Other situations */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container">
          <p className="text-center text-gray-500 text-sm mb-6">We also help with other situations:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.values(situations).filter(s => s.slug !== situation.slug).map(s => (
              <Link key={s.slug} href={`/situations/${s.slug}`} className="text-sm px-4 py-2 rounded-full border border-gray-200 text-gray-600 hover:border-[#F5C518] hover:text-[#1a3d1a] transition-colors">
                {s.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

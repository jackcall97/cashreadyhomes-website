import { useParams } from "wouter";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";
import { getCountyBySlug } from "@/data/locations";

const PHONE = "(929) 356-5144";
const PHONE_HREF = "tel:+19293565144";

export default function CountyPage({ countySlug }: { countySlug?: string } = {}) {
  const params = useParams<{ county: string }>();
  const county = getCountyBySlug(countySlug ?? params.county ?? "");

  if (!county) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <h1 className="text-[#1a3d1a] font-black text-3xl mb-4">Page Not Found</h1>
          <Link href="/" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-block">Go Home</Link>
        </div>
      </SiteLayout>
    );
  }

  const title = `Sell My House Fast in ${county.name} County, NY | Cash Ready Homes`;
  const description = `We buy houses in ${county.name} County, NY for cash. Any condition, any situation. Get a free cash offer in 24 hours and close in less than 30 days. No repairs, no fees.`;
  const canonical = `/sell-my-house-fast-${county.slug}-county-ny`;

  const faqItems = [
    {
      question: `How do I sell my house fast in ${county.name} County, NY?`,
      answer: `Contact Cash Ready Homes Hudson Valley by filling out our online form or calling (929) 356-5144. We'll make a fair all-cash offer within 24 hours and can close in as little as 7 days — no repairs, no agent fees, no commissions.`,
    },
    {
      question: `Do you buy houses in all cities in ${county.name} County?`,
      answer: `Yes. We buy houses throughout all of ${county.name} County, NY, including every city, town, and village in the county. No matter where your property is located in ${county.name} County, we can make you a cash offer.`,
    },
    {
      question: `What is the cash home buying process in ${county.name} County?`,
      answer: `The process has three steps: (1) Tell us about your property — fill out our form or call us; (2) Receive a fair cash offer within 24 hours with no obligation; (3) Choose your closing date and receive your cash. We handle all paperwork and there are no fees or commissions.`,
    },
    {
      question: `Will you buy my ${county.name} County house if it needs major repairs?`,
      answer: `Absolutely. We buy houses in ${county.name} County in any condition — fire damage, structural problems, outdated systems, code violations, or anything else. You don't need to fix a thing before selling to us.`,
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "name": "Cash Ready Homes Hudson Valley",
        "description": description,
        "url": `https://cashreadyhomeshudsonvalley.com${canonical}`,
        "telephone": "+19293565144",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": `${county.name} County`,
          "addressRegion": "NY",
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqItems.map(({ question, answer }) => ({
          "@type": "Question",
          "name": question,
          "acceptedAnswer": { "@type": "Answer", "text": answer },
        })),
      },
    ],
  };

  return (
    <SiteLayout>
      <SEOHead
        title={title}
        description={description}
        canonical={canonical}
        schema={schema}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#F5C518] text-sm font-bold mb-4">
                <MapPin className="w-4 h-4" />
                Hudson Valley, New York
              </div>
              <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-6">
                Sell Your House Fast in {county.name} County, NY
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                We buy houses throughout {county.name} County for cash — any condition, any situation. Free offer in 24 hours. Close in less than 30 days.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Cash offer in 24 hours", "Close in 7–30 days", "No repairs needed", "Zero fees or commissions"].map(b => (
                  <div key={b} className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-[#F5C518]" />
                    {b}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={PHONE_HREF} className="btn-yellow px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                  Call {PHONE}
                </a>
                <a href="#get-offer" className="px-6 py-3 rounded-xl font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a3d1a] transition-colors inline-flex items-center gap-2">
                  Get Free Offer <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div id="get-offer">
              <LeadForm variant="hero" sourcePage={canonical} headline={`Get Your Cash Offer in ${county.name} County`} subheadline="Free, no-obligation offer within 24 hours." />
            </div>
          </div>
        </div>
      </section>

      {/* About the county */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-[#1a3d1a] font-black text-3xl mb-6">We Buy Houses in {county.name} County, NY</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Cash Ready Homes Hudson Valley is a locally owned cash home buying company that purchases properties throughout {county.name} County, New York. We buy houses in any condition — from move-in ready to severely distressed — and we close on your timeline.
            </p>
            <p>{county.description}</p>
            <p>
              Whether you're in {county.cities.slice(0, 3).map(c => c.name).join(", ")}, or anywhere else in {county.name} County, we can make you a fair cash offer within 24 hours and close in less than 30 days.
            </p>
          </div>
        </div>
      </section>

      {/* City grid */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Service Area</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">Cities & Towns We Buy Houses In</h2>
            <p className="text-gray-500 mt-3">Click any city to learn more about selling your home there.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {county.cities.map(city => (
              <Link
                key={city.slug}
                href={`/sell-my-house-fast-${city.slug}-ny`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F5C518] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: "#F5C518" }}>
                    <MapPin className="w-5 h-5 text-[#1a3d1a]" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F5C518] transition-colors" />
                </div>
                <h3 className="text-[#1a3d1a] font-black text-lg mb-1">{city.name}</h3>
                <p className="text-gray-400 text-xs">{county.name} County, NY</p>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">{city.description.split(".")[0]}.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-white font-black text-3xl mb-4">Ready to Sell Your {county.name} County Home?</h2>
            <p className="text-gray-400">Get your free cash offer in 24 hours. No obligation, no pressure.</p>
          </div>
          <LeadForm variant="inline" sourcePage={canonical} />
        </div>
      </section>
    </SiteLayout>
  );
}

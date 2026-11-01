import { useParams } from "wouter";
import { ArrowRight, CheckCircle, Star, MapPin } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead, { businessWithFaqGraph } from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";
import { getCityBySlug } from "@/data/locations";

const PHONE = "(929) 356-5144";
const PHONE_HREF = "tel:+19293565144";

export default function CityPage({ citySlug }: { citySlug?: string } = {}) {
  const params = useParams<{ city: string }>();
  const city = getCityBySlug(citySlug ?? params.city ?? "");

  if (!city) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <h1 className="text-[#1a3d1a] font-black text-3xl mb-4">Page Not Found</h1>
          <Link href="/" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-block">Go Home</Link>
        </div>
      </SiteLayout>
    );
  }

  const title = `Sell My House Fast in ${city.name}, NY | Cash Ready Homes`;
  const description = `Need to sell your house fast in ${city.name}, NY? Cash Ready Homes Hudson Valley buys houses in ${city.name} for cash — any condition, no repairs, close in less than 30 days. Free offer in 24 hours.`;
  const canonical = `/sell-my-house-fast-${city.slug}-ny`;

  const faqItems = [
    {
      question: `How fast can I sell my house in ${city.name}, NY for cash?`,
      answer: `Cash Ready Homes can typically close on your ${city.name} property in as little as 7 days, and always within 30 days. We make a cash offer within 24 hours of your inquiry — no waiting for bank approvals or buyer financing.`,
    },
    {
      question: `Do I need to make repairs before selling my ${city.name} house?`,
      answer: `No. We buy houses in ${city.name} in any condition — fire damage, water damage, outdated kitchens, structural issues, or anything else. You sell as-is and we handle all repairs after closing.`,
    },
    {
      question: `Are there any fees or commissions when selling to Cash Ready Homes in ${city.name}?`,
      answer: `None. There are no agent commissions, no closing costs, and no hidden fees. The cash offer we make is the amount you receive at closing.`,
    },
    {
      question: `What types of ${city.name} properties do you buy?`,
      answer: `We buy single-family homes, multi-family properties, condos, townhouses, and vacant land throughout ${city.name} and ${city.county} County. We purchase properties regardless of condition or situation — foreclosure, probate, divorce, inherited, problem tenants, and more.`,
    },
  ];

  const schema = businessWithFaqGraph(faqItems);

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
                {city.county} County, New York
              </div>
              <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-6">
                Sell Your House Fast in {city.name}, NY
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                We buy houses in {city.name} for cash — any condition, any situation. Get a free offer in 24 hours and close in less than 30 days. No repairs, no fees, no commissions.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Cash offer in 24 hours", "Close in less than 30 days", "No repairs needed", "Zero fees"].map(b => (
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
              <LeadForm variant="hero" sourcePage={canonical} headline={`Get Your Cash Offer for Your ${city.name} Home`} subheadline="Free, no-obligation offer within 24 hours." />
            </div>
          </div>
        </div>
      </section>

      {/* About the city */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-[#1a3d1a] font-black text-3xl mb-6">We Buy Houses in {city.name}, NY</h2>
          <div className="text-gray-600 leading-relaxed space-y-4">
            <p>
              Cash Ready Homes Hudson Valley is a locally owned cash home buying company serving {city.name} and all of {city.county} County. If you need to sell your house fast in {city.name}, we can help — regardless of your situation or the condition of your property.
            </p>
            <p>{city.description}</p>
            <p>
              Whether you're facing foreclosure, going through a divorce, dealing with an inherited property, or simply need to sell quickly, we provide a fast, fair, and hassle-free solution. We've helped dozens of homeowners in {city.name} and the surrounding area sell their homes without the stress of traditional real estate.
            </p>
          </div>

          {city.nearbyTowns && city.nearbyTowns.length > 0 && (
            <div className="mt-8 p-6 rounded-2xl bg-gray-50">
              <p className="font-bold text-[#1a3d1a] mb-3">We Also Buy Houses Near {city.name}:</p>
              <div className="flex flex-wrap gap-2">
                {city.nearbyTowns.map(town => (
                  <span key={town} className="text-sm bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">{town}, NY</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* How it works */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">How to Sell Your {city.name} House for Cash</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Tell Us About Your Property", desc: `Fill out our form or call us. We'll ask a few quick questions about your ${city.name} home.` },
              { num: "2", title: "Get Your Cash Offer", desc: "We'll make you a fair, all-cash offer within 24 hours — no obligation to accept." },
              { num: "3", title: "Close & Get Paid", desc: "Pick your closing date. We handle all the paperwork. You get cash at closing." },
            ].map(step => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl text-[#1a3d1a] mx-auto mb-4" style={{ backgroundColor: "#F5C518" }}>
                  {step.num}
                </div>
                <h3 className="text-[#1a3d1a] font-black text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Any Situation</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">We Buy {city.name} Houses in Any Situation</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Facing Foreclosure", "Inherited Property", "Going Through Divorce",
              "Problem Tenants", "Behind on Taxes", "Fire or Water Damage",
              "Needs Major Repairs", "Vacant or Abandoned", "Probate Property",
            ].map(situation => (
              <div key={situation} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100">
                <CheckCircle className="w-5 h-5 text-[#F5C518] flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center gap-0.5 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#F5C518] text-[#F5C518]" />)}
            </div>
            <h2 className="text-[#1a3d1a] font-black text-3xl">What Hudson Valley Sellers Say</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { name: "Maria S.", city: "Poughkeepsie, NY", text: "I needed to sell my mom's house after she passed. Cash Ready Homes made the whole process so easy during a really hard time. They were honest, fair, and closed in 3 weeks." },
              { name: "James T.", city: "Newburgh, NY", text: "I was behind on my mortgage and panicking. They gave me a fair offer the next day and we closed before foreclosure. Couldn't be more grateful." },
            ].map(r => (
              <div key={r.name} className="bg-white rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1a3d1a] flex items-center justify-center text-white font-bold text-sm">{r.name[0]}</div>
                  <div>
                    <p className="font-bold text-[#1a3d1a] text-sm">{r.name}</p>
                    <p className="text-gray-400 text-xs">{r.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-white font-black text-3xl mb-4">Ready to Sell Your {city.name} Home?</h2>
            <p className="text-gray-400">Get your free cash offer in 24 hours. No obligation, no pressure.</p>
          </div>
          <LeadForm variant="inline" sourcePage={canonical} />
        </div>
      </section>

      {/* County link */}
      <section className="py-10 bg-white border-t border-gray-100">
        <div className="container text-center">
          <p className="text-gray-500 text-sm">
            We buy houses throughout {city.county} County.{" "}
            <Link href={`/sell-my-house-fast-${city.countySlug}-county-ny`} className="text-[#F5C518] font-bold hover:underline">
              View all {city.county} County cities →
            </Link>
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}

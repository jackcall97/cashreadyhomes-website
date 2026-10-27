import { Link } from "wouter";
import { ArrowRight, CheckCircle, MapPin, Star, Phone } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";

const PHONE = "(929) 356-5144";
const PHONE_HREF = "tel:+19293565144";

const counties = [
  { name: "Westchester County", slug: "westchester", cities: ["White Plains", "Yonkers", "New Rochelle", "Mount Vernon", "Peekskill"] },
  { name: "Dutchess County", slug: "dutchess", cities: ["Poughkeepsie", "Beacon", "Hyde Park", "Rhinebeck", "Fishkill"] },
  { name: "Orange County", slug: "orange", cities: ["Newburgh", "Middletown", "Port Jervis", "Goshen", "Warwick"] },
  { name: "Putnam County", slug: "putnam", cities: ["Carmel", "Brewster", "Cold Spring", "Mahopac", "Patterson"] },
  { name: "Rockland County", slug: "rockland", cities: ["Spring Valley", "Nyack", "New City", "Suffern", "Haverstraw"] },
  { name: "Ulster County", slug: "ulster", cities: ["Kingston", "Woodstock", "New Paltz", "Saugerties", "Highland"] },
];

const faqItems = [
  {
    question: "How does the cash home buying process work in Hudson Valley, NY?",
    answer: "The process is simple and takes as little as 7 days. First, contact us by filling out our form or calling (929) 356-5144. We'll ask a few questions about your property and schedule a quick walkthrough. Within 24 hours, we'll present you with a fair, all-cash offer — no obligation to accept. If you accept, we handle all the paperwork and you choose your closing date. You receive your cash at closing with no fees, no commissions, and no surprises.",
  },
  {
    question: "Do I need to make repairs before selling my Hudson Valley house for cash?",
    answer: "No. We buy houses in any condition throughout the Hudson Valley — fire damage, water damage, foundation issues, outdated kitchens and bathrooms, code violations, or anything else. You sell as-is and we take care of all repairs after closing. You don't need to clean, stage, or fix a single thing.",
  },
  {
    question: "How fast can you close on a house in Hudson Valley, NY?",
    answer: "We can close in as little as 7 days if needed, and always within 30 days. Because we pay cash, there are no bank appraisals, no mortgage contingencies, and no waiting for financing approval. You pick the closing date that works best for your situation.",
  },
  {
    question: "Are there any fees or commissions when selling to Cash Ready Homes?",
    answer: "None. There are no real estate agent commissions (which typically run 5–6%), no closing costs, and no hidden fees. The cash offer we make is exactly what you receive at closing. What we offer is what you get.",
  },
  {
    question: "What types of situations do you help Hudson Valley homeowners with?",
    answer: "We help homeowners in a wide range of situations: facing foreclosure, going through divorce, dealing with an inherited property or probate estate, problem tenants in rental properties, behind on taxes, fire or water damage, job relocation, or simply wanting to sell quickly without the hassle of the traditional market.",
  },
  {
    question: "Which areas of the Hudson Valley do you buy houses in?",
    answer: "We buy houses throughout all six Hudson Valley counties: Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster. This includes every city, town, and village in these counties — from Yonkers and White Plains in the south to Kingston and Woodstock in the north.",
  },
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "name": "Cash Ready Homes Hudson Valley",
      "description": "We buy houses for cash throughout the Hudson Valley, NY — Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties. Any condition, any situation. Free offer in 24 hours.",
      "url": "https://www.cashreadyhomeshudsonvalley.com/we-buy-houses-hudson-valley-ny",
      "telephone": "+19293565144",
      "areaServed": [
        { "@type": "AdministrativeArea", "name": "Westchester County", "addressRegion": "NY" },
        { "@type": "AdministrativeArea", "name": "Dutchess County", "addressRegion": "NY" },
        { "@type": "AdministrativeArea", "name": "Orange County", "addressRegion": "NY" },
        { "@type": "AdministrativeArea", "name": "Putnam County", "addressRegion": "NY" },
        { "@type": "AdministrativeArea", "name": "Rockland County", "addressRegion": "NY" },
        { "@type": "AdministrativeArea", "name": "Ulster County", "addressRegion": "NY" },
      ],
      "serviceType": "Cash Home Buyer",
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

export default function WeBuyHousesHudsonValley() {
  return (
    <SiteLayout>
      <SEOHead
        title="We Buy Houses Hudson Valley NY | Cash Ready Homes | Any Condition"
        description="We buy houses for cash throughout Hudson Valley, NY. Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties. Any condition. Free offer in 24 hours."
        canonical="/we-buy-houses-hudson-valley-ny"
        keywords={["we buy houses Hudson Valley NY", "cash home buyers Hudson Valley", "sell house fast NY", "buy houses any condition Hudson Valley", "cash offer Hudson Valley"]}
        schema={schema}
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#F5C518] text-sm font-bold mb-4">
                <MapPin className="w-4 h-4" />
                Serving All 6 Hudson Valley Counties
              </div>
              <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-6">
                We Buy Houses in the Hudson Valley, NY
              </h1>
              <p className="text-gray-300 text-lg mb-8">
                Cash Ready Homes buys houses throughout Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties — in any condition, for any reason. Get a free cash offer in 24 hours and close in as little as 7 days.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                {["Cash offer in 24 hours", "Close in 7–30 days", "No repairs needed", "Zero fees or commissions", "Any condition accepted"].map(b => (
                  <div key={b} className="flex items-center gap-2 text-white text-sm">
                    <CheckCircle className="w-4 h-4 text-[#F5C518]" />
                    {b}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a href={PHONE_HREF} className="btn-yellow px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                  <Phone className="w-4 h-4" /> Call {PHONE}
                </a>
                <a href="#get-offer" className="px-6 py-3 rounded-xl font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a3d1a] transition-colors inline-flex items-center gap-2">
                  Get Free Offer <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div id="get-offer">
              <LeadForm variant="hero" sourcePage="/we-buy-houses-hudson-valley-ny" headline="Get Your Free Cash Offer Today" subheadline="No obligation. No repairs. Close in as little as 7 days." />
            </div>
          </div>
        </div>
      </section>

      {/* Why Cash Ready Homes */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl mb-4">The Fastest Way to Sell Your Hudson Valley Home</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cash Ready Homes is a locally owned company based in the Hudson Valley. We've helped dozens of homeowners across Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties sell their homes quickly, fairly, and without the stress of the traditional real estate process.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Local Experts", desc: "We know the Hudson Valley market — every county, every city, every neighborhood. You're dealing with a local team, not a national call center." },
              { title: "Any Condition", desc: "Fire damage, water damage, foundation issues, outdated systems, code violations — we buy it all. You don't repair a thing." },
              { title: "Any Situation", desc: "Foreclosure, divorce, inherited property, problem tenants, behind on taxes, job relocation — we've seen it all and we can help." },
              { title: "No Fees or Commissions", desc: "No agent commissions (5–6%), no closing costs, no hidden fees. The offer we make is what you receive at closing." },
              { title: "Fast Closing", desc: "Close in as little as 7 days. No waiting for bank approvals, appraisals, or buyer financing. You pick the date." },
              { title: "Guaranteed Offer", desc: "Once we make an offer and you accept, we close. No last-minute price reductions, no deal falling through at the finish line." },
            ].map(item => (
              <div key={item.title} className="p-6 rounded-2xl border border-gray-100 hover:border-[#F5C518] transition-colors">
                <CheckCircle className="w-8 h-8 text-[#F5C518] mb-3" />
                <h3 className="text-[#1a3d1a] font-black text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">How We Buy Houses in Hudson Valley, NY</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { num: "1", title: "Tell Us About Your Property", desc: "Fill out our form or call (929) 356-5144. We'll ask a few quick questions about your home and schedule a brief walkthrough." },
              { num: "2", title: "Receive Your Cash Offer", desc: "Within 24 hours, we'll present you with a fair, all-cash offer. No obligation to accept. No pressure." },
              { num: "3", title: "Close & Get Paid", desc: "You choose the closing date. We handle all the paperwork. You receive your cash at closing — no fees, no surprises." },
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

      {/* Areas We Serve */}
      <section className="py-20 bg-white">
        <div className="container max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Service Area</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl mb-4">We Buy Houses Throughout the Hudson Valley</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From Yonkers in the south to Kingston in the north, we buy houses in every city, town, and village across all six Hudson Valley counties.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {counties.map(county => (
              <div key={county.slug} className="p-6 rounded-2xl bg-gray-50 border border-gray-100">
                <Link href={`/sell-my-house-fast-${county.slug}-county-ny`} className="text-[#1a3d1a] font-black text-lg hover:text-[#F5C518] transition-colors block mb-3">
                  {county.name} →
                </Link>
                <div className="space-y-1">
                  {county.cities.map(city => (
                    <p key={city} className="text-gray-500 text-sm">{city}</p>
                  ))}
                  <p className="text-gray-400 text-xs mt-2">+ many more cities & towns</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Situations */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Any Situation</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">We Help Hudson Valley Homeowners in Every Situation</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { label: "Facing Foreclosure", href: "/situations/foreclosure" },
              { label: "Inherited Property", href: "/situations/inherited-property" },
              { label: "Going Through Divorce", href: "/situations/divorce" },
              { label: "Problem Tenants", href: "/situations/bad-tenants" },
              { label: "Probate Property", href: "/situations/probate" },
              { label: "Fire or Water Damage", href: "/situations/fire-damage" },
              { label: "Behind on Taxes", href: "/situations/as-is" },
              { label: "Needs Major Repairs", href: "/situations/as-is" },
              { label: "Job Relocation", href: "/situations/as-is" },
            ].map(s => (
              <Link key={s.label} href={s.href} className="flex items-center gap-3 p-4 rounded-xl border border-gray-100 hover:border-[#F5C518] hover:bg-white transition-colors">
                <CheckCircle className="w-5 h-5 text-[#F5C518] flex-shrink-0" />
                <span className="text-gray-700 font-medium text-sm">{s.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Common Questions</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-6">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-gray-100 rounded-2xl p-6">
                <h3 className="text-[#1a3d1a] font-black text-lg mb-3">{item.question}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              { name: "David K.", city: "Yorktown Heights, NY", text: "Inherited a house that needed a ton of work. Didn't want to deal with contractors or a long listing process. Cash Ready Homes gave us a fair offer and we closed in two weeks. Stress-free." },
              { name: "Sandra M.", city: "Spring Valley, NY", text: "Going through a divorce and needed to sell fast. They were professional, compassionate, and made the whole thing simple. I'd recommend them to anyone in a tough situation." },
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
            <h2 className="text-white font-black text-3xl mb-4">Ready to Sell Your Hudson Valley Home?</h2>
            <p className="text-gray-400">Get your free cash offer in 24 hours. No obligation, no pressure, no fees.</p>
          </div>
          <LeadForm variant="inline" sourcePage="/we-buy-houses-hudson-valley-ny" />
        </div>
      </section>
    </SiteLayout>
  );
}

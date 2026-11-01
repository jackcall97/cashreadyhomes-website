import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Star, ArrowRight, Home as HomeIcon, ChevronLeft, ChevronRight, Wrench, Calendar, DollarSign, CheckCircle, MapPin, AlertTriangle, Key, FileText, Flame, Building2, ClipboardCheck } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import LeadForm from "@/components/LeadForm";
import SEOHead, { siteEntityGraph } from "@/components/SEOHead";

const PHONE = "(929) 356-5144";
const PHONE_HREF = "tel:+19293565144";

// Before/After data
const beforeAfterPhotos = [
  {
    before: "/manus-storage/before-living-room_c722afb0.png",
    after: "/manus-storage/after-living-room_bdb56f78.png",
    location: "",
  },
  {
    before: "/manus-storage/before-kitchen_01c4b59c.png",
    after: "/manus-storage/after-kitchen_f7ec6726.png",
    location: "",
  },
];

const benefits = [
  { Icon: Wrench, title: "No Repairs Needed", desc: "We buy your house exactly as it is. Don't spend a dime fixing it up." },
  { Icon: Calendar, title: "Close in Less Than 30 Days", desc: "Pick your closing date. We work on your timeline, not ours." },
  { Icon: DollarSign, title: "Zero Fees or Commissions", desc: "No agent commissions, no closing costs, no hidden fees. Ever." },
  { Icon: CheckCircle, title: "Guaranteed Cash Offer", desc: "We make a real offer within 24 hours. No lowballing, no games." },
  { Icon: HomeIcon, title: "Any Condition, Any Situation", desc: "Foreclosure, probate, divorce, inherited, fire damage - we handle it all." },
  { Icon: MapPin, title: "Local Hudson Valley Experts", desc: "We live and work here. We know your neighborhood and your market." },
];

const steps = [
  { num: "01", title: "Tell Us About Your Property", desc: "Fill out our short form or give us a call. We'll ask a few quick questions about your home." },
  { num: "02", title: "Get Your Cash Offer in 24 Hours", desc: "We'll evaluate your property and present you with a fair, no-obligation cash offer — no pressure." },
  { num: "03", title: "Pick Your Closing Date & Get Paid", desc: "Choose when you want to close — in less than 30 days. We handle all the paperwork. You get cash." },
];

const comparisonRows = [
  { feature: "Commissions & Fees", cash: "None — zero", agent: "5–6% of sale price" },
  { feature: "Closing Costs", cash: "We pay them", agent: "2–3% paid by seller" },
  { feature: "Repairs Required", cash: "None — sell as-is", agent: "Often $10,000–$50,000+" },
  { feature: "Time to Close", cash: "7–30 days", agent: "60–90+ days" },
  { feature: "Showings & Open Houses", cash: "None", agent: "Weeks of disruption" },
  { feature: "Financing Contingencies", cash: "No — cash deal", agent: "Deals fall through often" },
  { feature: "Certainty of Sale", cash: "Guaranteed", agent: "Never guaranteed" },
];

const reviews = [
  { name: "Maria S.", city: "Poughkeepsie, NY", stars: 5, text: "I needed to sell my mom's house after she passed. Cash Ready Homes made the whole process so easy during a really hard time. They were honest, fair, and closed in 3 weeks." },
  { name: "James T.", city: "Newburgh, NY", stars: 5, text: "I was behind on my mortgage and panicking. They gave me a fair offer the next day and we closed before foreclosure. Couldn't be more grateful." },
  { name: "Linda R.", city: "Beacon, NY", stars: 5, text: "Sold my rental property with problem tenants still in it. They handled everything. No repairs, no drama. I got my check and moved on." },
  { name: "David K.", city: "Yorktown Heights, NY", stars: 5, text: "Very professional and straightforward. The offer was fair and there were no surprises at closing. I'd recommend them to anyone in the Hudson Valley." },
];

export default function Home() {
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Scroll to #get-offer when navigated here via /#get-offer link
  useEffect(() => {
    if (window.location.hash === '#get-offer') {
      const el = document.getElementById('get-offer');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
      }
    }
  }, []);

  const prevSlide = () => setCarouselIdx((i) => (i - 1 + beforeAfterPhotos.length) % beforeAfterPhotos.length);
  const nextSlide = () => setCarouselIdx((i) => (i + 1) % beforeAfterPhotos.length);

  return (
    <SiteLayout>
      <SEOHead
        title="Sell Your House Fast in Hudson Valley NY | Cash Ready Homes"
        description="We buy houses for cash in Hudson Valley NY. No repairs, no fees, no commissions. Fair cash offer in 24 hours. Serving Westchester, Dutchess & more."
        keywords="sell house fast Hudson Valley, cash home buyers NY, we buy houses Westchester, sell house as-is, cash offer Hudson Valley"
        canonical="/"
        schema={siteEntityGraph()}
      />

      {/* ===== HERO ===== */}
      <section
        className="relative overflow-hidden pt-16 pb-20 lg:pt-24 lg:pb-28"
        style={{
          backgroundImage: "url('/manus-storage/bear-mountain-bridge-hero_cf41fa57.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0a1e0a",
          minHeight: "560px",
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(10, 30, 10, 0.60)" }} />

        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: headline + trust signals */}
            <div>
              <div className="inline-flex items-center gap-2 bg-[#F5C518]/10 border border-[#F5C518]/30 rounded-full px-4 py-2 mb-6">
                <span className="text-[#F5C518] text-sm font-bold">Hudson Valley's #1 Cash Home Buyer</span>
              </div>
              <h1 className="text-white font-black text-4xl lg:text-5xl xl:text-6xl leading-tight mb-6">
                Sell Your House Fast in{" "}
                <span style={{ color: "#F5C518" }}>the Hudson Valley</span>
              </h1>
              <p className="text-gray-200 text-lg lg:text-xl mb-8 leading-relaxed">
                We buy houses in any condition, any situation.<br />
                No repairs. No fees. No commission. Close on your timeline.
              </p>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-4 mb-8">
              {["No Repairs Needed", "Close in Less Than 30 Days", "Zero Fees", "Cash Guaranteed"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-gray-300 text-sm">
                  <span className="text-[#F5C518] flex-shrink-0">✓</span>
                  {badge}
                </div>
              ))}
              </div>

              {/* Phone CTA */}
              <a
                href={PHONE_HREF}
                className="btn-yellow inline-flex items-center gap-3 px-8 py-4 rounded-xl text-lg font-black"
              >
                Call {PHONE}
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-gray-500 text-sm mt-3">Available Mon–Sat, 8am–7pm</p>
            </div>

            {/* Right: Lead form */}
            <div id="get-offer">
              <LeadForm variant="hero" sourcePage="/" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section style={{ backgroundColor: "#F5C518" }} className="py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { num: "6", label: "Counties Served" },
              { num: "10+", label: "Years Experience" },
              { num: "24hr", label: "Cash Offer Turnaround" },
              { num: "$0", label: "Fees or Commissions" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">{stat.num}</div>
                <div className="text-[#1a3d1a]/70 font-semibold text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Simple Process</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">How It Works</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">Selling your house to us is easier than you think. Three simple steps and you're done.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <div key={step.num} className="relative text-center">
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[40%] h-0.5 bg-[#F5C518]/30" />
                )}
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 font-black text-2xl text-[#1a3d1a]" style={{ backgroundColor: "#F5C518" }}>
                  {step.num}
                </div>
                <h3 className="text-[#1a3d1a] font-black text-xl mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button onClick={() => document.getElementById('get-offer')?.scrollIntoView({ behavior: 'smooth', block: 'center' })} className="btn-yellow inline-flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg">
              Start Now — Get My Cash Offer <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ===== BENEFITS GRID ===== */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Why Choose Us</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">The Cash Ready Homes Difference</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-5" style={{ backgroundColor: "#F5C518" }}>
                  <b.Icon className="w-7 h-7 text-[#1a3d1a]" />
                </div>
                <h3 className="text-[#1a3d1a] font-black text-lg mb-2">{b.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BEFORE / AFTER CAROUSEL ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Real Results</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">Before & After</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">We buy houses in any condition and transform them into beautiful homes for the community.</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 gap-4 relative">
              {/* Before */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={beforeAfterPhotos[carouselIdx].before}
                  alt={`Before - ${beforeAfterPhotos[carouselIdx].location}`}
                  className="w-full h-full object-cover"
                />
                <div className="before-after-label">BEFORE</div>
              </div>
              {/* After */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src={beforeAfterPhotos[carouselIdx].after}
                  alt={`After - ${beforeAfterPhotos[carouselIdx].location}`}
                  className="w-full h-full object-cover"
                />
                <div className="before-after-label">AFTER</div>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <button onClick={prevSlide} className="p-3 rounded-full border-2 border-gray-200 hover:border-[#F5C518] hover:bg-[#F5C518] transition-all group">
                <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-[#1a3d1a]" />
              </button>
              <div className="text-center">
                <div className="flex gap-2 justify-center mt-2">
                  {beforeAfterPhotos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCarouselIdx(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${i === carouselIdx ? "bg-[#F5C518] w-6" : "bg-gray-300"}`}
                    />
                  ))}
                </div>
              </div>
              <button onClick={nextSlide} className="p-3 rounded-full border-2 border-gray-200 hover:border-[#F5C518] hover:bg-[#F5C518] transition-all group">
                <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-[#1a3d1a]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== COMPARISON TABLE ===== */}
      <section className="py-20" style={{ backgroundColor: "#1a3d1a" }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">The Numbers Don't Lie</p>
            <h2 className="text-white font-black text-3xl lg:text-4xl">Cash Offer vs. Traditional Agent</h2>
            <p className="text-gray-400 mt-3 max-w-xl mx-auto">See exactly how much more you keep when you sell directly to us.</p>
          </div>
          <div className="max-w-3xl mx-auto overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 px-6 text-gray-400 font-semibold text-sm w-1/3"></th>
                  <th className="py-4 px-6 text-center font-black text-[#1a3d1a] text-sm rounded-t-xl" style={{ backgroundColor: "#F5C518" }}>
                    Cash Ready Homes
                  </th>
                  <th className="py-4 px-6 text-center text-gray-400 font-semibold text-sm">Traditional Agent</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? "bg-white/5" : ""}>
                    <td className="py-4 px-6 text-gray-300 text-sm font-medium">{row.feature}</td>
                    <td className="py-4 px-6 text-center font-bold text-[#1a3d1a] text-sm" style={{ backgroundColor: i % 2 === 0 ? "#F5C518" : "#f7d44e" }}>
                      ✓ {row.cash}
                    </td>
                    <td className="py-4 px-6 text-center text-gray-400 text-sm">✗ {row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===== REVIEWS ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Real Homeowners, Real Results</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">What Our Sellers Say</h2>
            <div className="flex items-center justify-center gap-1 mt-4">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#F5C518] text-[#F5C518]" />)}
              <span className="ml-2 text-gray-600 font-semibold">5.0 / 5.0</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex gap-0.5 mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />)}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div>
                  <p className="font-bold text-[#1a3d1a] text-sm">{r.name}</p>
                  <p className="text-gray-400 text-xs">{r.city}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">About Us</p>
              <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl mb-6">
                Locally Owned & Operated in the Hudson Valley
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Cash Ready Homes Hudson Valley is a locally owned real estate investment company serving homeowners across Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties. We are not a national chain — we are your neighbors.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We specialize in buying houses quickly and fairly, especially in challenging situations like foreclosure, probate, inherited properties, divorce, and distressed conditions. Our mission is simple: make selling your house as easy and stress-free as possible.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/about" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
                  Our Story <ArrowRight className="w-4 h-4" />
                </Link>
                <a href={PHONE_HREF} className="px-6 py-3 rounded-xl font-bold border-2 border-[#1a3d1a] text-[#1a3d1a] hover:bg-[#1a3d1a] hover:text-white transition-colors inline-flex items-center gap-2">
                  Call Us: {PHONE}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Westchester County", href: "/sell-my-house-fast-westchester-county-ny" },
                { title: "Dutchess County", href: "/sell-my-house-fast-dutchess-county-ny" },
                { title: "Orange County", href: "/sell-my-house-fast-orange-county-ny" },
                { title: "Putnam County", href: "/sell-my-house-fast-putnam-county-ny" },
                { title: "Rockland County", href: "/sell-my-house-fast-rockland-county-ny" },
                { title: "Ulster County", href: "/sell-my-house-fast-ulster-county-ny" },
              ].map((county) => (
                <Link
                  key={county.href}
                  href={county.href}
                  className="bg-white rounded-xl p-5 border border-gray-200 hover:border-[#F5C518] hover:shadow-md transition-all group"
                >
                  <div className="w-8 h-8 rounded-lg mb-3 flex items-center justify-center" style={{ backgroundColor: "#F5C518" }}>
                    <HomeIcon className="w-4 h-4 text-[#1a3d1a]" />
                  </div>
                  <p className="font-bold text-[#1a3d1a] text-sm group-hover:text-[#F5C518] transition-colors">{county.title}</p>
                  <p className="text-gray-400 text-xs mt-1">View cities →</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SITUATION LINKS ===== */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">We Handle Every Situation</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">Whatever Your Reason for Selling</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Facing Foreclosure", href: "/situations/foreclosure", Icon: AlertTriangle },
              { title: "Inherited Property", href: "/situations/inherited-property", Icon: HomeIcon },
              { title: "Going Through Divorce", href: "/situations/divorce", Icon: FileText },
              { title: "Problem Tenants", href: "/situations/bad-tenants", Icon: Key },
              { title: "Probate Property", href: "/situations/probate", Icon: ClipboardCheck },
              { title: "Fire Damage", href: "/situations/fire-damage", Icon: Flame },
              { title: "Vacant House", href: "/situations/vacant-house", Icon: Building2 },
              { title: "Sell As-Is", href: "/situations/as-is", Icon: CheckCircle },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="flex items-center gap-4 p-5 rounded-xl border border-gray-200 hover:border-[#F5C518] hover:bg-[#F5C518]/5 transition-all group"
              >
                <s.Icon className="w-5 h-5 text-[#1a3d1a] flex-shrink-0" />
                <span className="font-bold text-[#1a3d1a] text-sm group-hover:text-[#1a3d1a]">{s.title}</span>
                <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F5C518] ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BOTTOM LEAD FORM ===== */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-white font-black text-3xl lg:text-4xl mb-4">
                Ready to Sell Your Hudson Valley Home?
              </h2>
              <p className="text-gray-400 text-lg">
                Get a fair cash offer within 24 hours. No obligation. No pressure.
              </p>
            </div>
            <LeadForm
              variant="inline"
              sourcePage="/#bottom-form"
              headline="Request Your Free Cash Offer"
              subheadline="Fill out the form below and we'll be in touch within 24 hours."
            />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

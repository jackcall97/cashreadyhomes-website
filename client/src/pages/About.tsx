import { Star, CheckCircle, ArrowRight, Handshake, Zap, Heart, Home as HomeIcon, ClipboardList, Target } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";

const PHONE_HREF = "tel:+19293565144";
const PHONE = "(929) 356-5144";

const reviews = [
  { name: "Maria S.", city: "Poughkeepsie, NY", stars: 5, date: "March 2024", text: "I needed to sell my mom's house after she passed. Cash Ready Homes made the whole process so easy during a really hard time. They were honest, fair, and closed in 3 weeks. I can't thank them enough." },
  { name: "James T.", city: "Newburgh, NY", stars: 5, date: "January 2024", text: "I was behind on my mortgage and panicking. They gave me a fair offer the next day and we closed before foreclosure. Couldn't be more grateful for how they handled everything." },
  { name: "Linda R.", city: "Beacon, NY", stars: 5, date: "November 2023", text: "Sold my rental property with problem tenants still in it. They handled everything. No repairs, no drama. I got my check and moved on with my life. Highly recommend." },
  { name: "David K.", city: "Yorktown Heights, NY", stars: 5, date: "October 2023", text: "Very professional and straightforward. The offer was fair and there were no surprises at closing. I'd recommend them to anyone in the Hudson Valley who needs to sell quickly." },
  { name: "Patricia M.", city: "White Plains, NY", stars: 5, date: "September 2023", text: "After my divorce, I needed to sell the house fast. They were compassionate and made the process stress-free. Closed in under 30 days. Exactly what I needed." },
  { name: "Robert H.", city: "Middletown, NY", stars: 5, date: "August 2023", text: "The house had been sitting vacant for two years and needed a lot of work. They bought it as-is for a fair price. No hassle, no repairs, no waiting. Great experience." },
];

export default function About() {
  return (
    <SiteLayout>
      <SEOHead
        title="About Cash Ready Homes Hudson Valley | Local Cash Home Buyers"
        description="Learn about Cash Ready Homes Hudson Valley — a locally owned cash home buying company serving Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties. Our mission is to make selling your house simple and stress-free."
        canonical="/about"
      />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container text-center">
          <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-3">Our Story</p>
          <h1 className="text-white font-black text-4xl lg:text-5xl mb-6">
            About Cash Ready Homes Hudson Valley
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            We are a locally owned real estate investment company dedicated to helping Hudson Valley homeowners sell their houses quickly, fairly, and without the hassle of traditional real estate.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl mb-6">
              A Local Investor Who Cares About This Community
            </h2>
          </div>
          <div className="space-y-5 text-gray-600 leading-relaxed text-lg max-w-3xl mx-auto">
            <p>
              Cash Ready Homes Hudson Valley was founded with a simple mission: to give homeowners in the Hudson Valley a better, faster, and more dignified way to sell their homes. We are not a national franchise or a faceless corporation — we are your neighbors.
            </p>
            <p>
              We have helped homeowners navigate difficult situations — foreclosure, probate, divorce, inherited properties, and more. We understand that selling a home is rarely just a financial transaction. It is often tied to one of life's most challenging moments.
            </p>
            <p>
              Our approach is simple: we make a fair cash offer, we close on your timeline, and we handle all the paperwork. You don't need to clean, repair, or stage anything. We buy houses exactly as they are.
            </p>
            <p>
              We are proud to serve Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties — the communities we call home.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              "Local Hudson Valley Experts",
              "No Hidden Fees",
              "Close in 7–30 Days",
              "Cash Offers in 24 Hours",
              "Serving All 6 Counties",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-gray-700 text-sm">
                <CheckCircle className="w-4 h-4 text-[#F5C518] flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/#get-offer" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-flex items-center gap-2">
              Get a Cash Offer <ArrowRight className="w-4 h-4" />
            </Link>
            <a href={PHONE_HREF} className="px-6 py-3 rounded-xl font-bold border-2 border-[#1a3d1a] text-[#1a3d1a] hover:bg-[#1a3d1a] hover:text-white transition-colors">
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      {/* SOLD Property Photo */}
      <section className="py-16 bg-white border-t border-gray-100">
        <div className="container max-w-3xl mx-auto text-center">
          <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-3">Real Results</p>
          <h2 className="text-[#1a3d1a] font-black text-3xl mb-8">A Recent Property We Purchased</h2>
          <div className="relative inline-block rounded-2xl overflow-hidden shadow-xl">
            <img
              src="/manus-storage/sold-house_675e71b9.png"
              alt="Sold house in Hudson Valley — Cash Ready Homes"
              className="w-full max-w-lg mx-auto object-cover"
            />
          </div>
          <p className="text-gray-500 mt-6 text-base max-w-xl mx-auto">We buy houses in any condition across the Hudson Valley. No repairs, no clean-up, no hassle — just a fair cash offer and a smooth closing.</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">What We Stand For</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">Our Core Values</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { Icon: Handshake, title: "Honesty First", desc: "We make fair offers based on real market data. No lowballing, no bait-and-switch. What we offer is what you get." },
              { Icon: Zap, title: "Speed & Efficiency", desc: "We know your time is valuable. We move fast — cash offer in 24 hours, close in less than 30 days." },
              { Icon: Heart, title: "Compassion", desc: "We understand that selling your home is often tied to a difficult life event. We treat every homeowner with respect and empathy." },
              { Icon: HomeIcon, title: "Community Focus", desc: "We reinvest in the Hudson Valley by renovating homes and putting them back into the community as beautiful, livable properties." },
              { Icon: ClipboardList, title: "Transparency", desc: "No hidden fees, no surprise deductions at closing. We walk you through every step of the process so you always know where you stand." },
              { Icon: Target, title: "Results Driven", desc: "We measure our success by your satisfaction. Our goal is to solve your problem and leave you feeling good about the transaction." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4" style={{ backgroundColor: "#F5C518" }}>
                  <v.Icon className="w-6 h-6 text-[#1a3d1a]" />
                </div>
                <h3 className="text-[#1a3d1a] font-black text-lg mb-2">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">Real Homeowners, Real Results</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl lg:text-4xl">What Our Sellers Say</h2>
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-6 h-6 fill-[#F5C518] text-[#F5C518]" />)}
              </div>
              <span className="text-gray-700 font-bold">5.0 out of 5.0</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-[#F5C518] text-[#F5C518]" />)}
                  </div>
                  <span className="text-gray-400 text-xs">{r.date}</span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#1a3d1a] flex items-center justify-center text-white font-bold text-sm">
                    {r.name[0]}
                  </div>
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
            <h2 className="text-white font-black text-3xl lg:text-4xl mb-4">Ready to Work With Us?</h2>
            <p className="text-gray-400 text-lg">Get a free, no-obligation cash offer on your Hudson Valley home today.</p>
          </div>
          <LeadForm variant="inline" sourcePage="/about" />
        </div>
      </section>
    </SiteLayout>
  );
}

import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead, { BUSINESS_ID, SITE_URL, businessEntity } from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";

const steps = [
  {
    num: "01",
    title: "Tell Us About Your Property",
    desc: "Fill out our short online form or call us at (929) 356-5144. We'll ask a few quick questions about your home — its condition, location, and your situation. This takes less than 5 minutes.",
    detail: "There's no obligation at this stage. We just need enough information to prepare a fair offer for you.",
  },
  {
    num: "02",
    title: "Receive Your Cash Offer in 24 Hours",
    desc: "After reviewing your property details, we'll present you with a fair, all-cash offer within 24 hours. In many cases, we can make an offer the same day.",
    detail: "Our offer is based on real market data, the current condition of your property, and comparable sales in your area. There are no lowball tactics — just a straightforward, honest offer.",
  },
  {
    num: "03",
    title: "Choose Your Closing Date",
    desc: "If you accept our offer, you pick the closing date. We can close in less than 30 days, or we can wait 30, 60, or even 90 days if you need more time.",
    detail: "We work on your schedule, not ours. Whether you need to move quickly or need time to make arrangements, we accommodate your timeline.",
  },
  {
    num: "04",
    title: "Close & Get Your Cash",
    desc: "We handle all the paperwork and coordinate with the title company. You show up at closing, sign the documents, and walk away with cash in hand.",
    detail: "No last-minute surprises, no hidden fees, no deductions. The amount we agreed on is the amount you receive.",
  },
];

export default function HowItWorks() {
  return (
    <SiteLayout>
      <SEOHead
        title="How It Works — Sell Your House Fast for Cash in Hudson Valley"
        description="Learn how our simple 4-step process works. Get a cash offer in 24 hours, close in less than 30 days, and walk away with cash — no repairs, no fees, no commissions."
        canonical="/how-it-works"
        schema={{
          "@context": "https://schema.org",
          "@graph": [
            businessEntity(),
            {
              "@type": "WebPage",
              "@id": `${SITE_URL}/how-it-works#webpage`,
              url: `${SITE_URL}/how-it-works`,
              name: "How It Works — Cash Ready Homes Hudson Valley",
              description: "Four-step cash home buying process: tell us about your property, get an offer in 24 hours, choose your closing date, and get paid.",
              about: { "@id": BUSINESS_ID },
              mainEntity: { "@id": BUSINESS_ID },
            },
          ],
        }}
      />

      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container text-center">
          <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-3">Simple Process</p>
          <h1 className="text-white font-black text-4xl lg:text-5xl mb-6">How It Works</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Selling your house to Cash Ready Homes Hudson Valley is easier than you think. Four simple steps and you're done — no repairs, no fees, no stress.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <div key={step.num} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl flex items-center justify-center font-black text-2xl text-[#1a3d1a]" style={{ backgroundColor: "#F5C518" }}>
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 h-8 bg-[#F5C518]/30 mx-auto mt-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <h2 className="text-[#1a3d1a] font-black text-2xl mb-3">{step.title}</h2>
                  <p className="text-gray-700 leading-relaxed mb-3">{step.desc}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison */}
          <div className="mt-16 p-8 rounded-2xl" style={{ backgroundColor: "#1a3d1a" }}>
            <h2 className="text-white font-black text-2xl mb-6 text-center">Traditional Sale vs. Cash Ready Homes</h2>
            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="text-gray-400 font-semibold"></div>
              <div className="text-center font-black text-[#1a3d1a] py-2 px-4 rounded-lg" style={{ backgroundColor: "#F5C518" }}>Cash Ready Homes</div>
              <div className="text-center text-gray-400 font-semibold py-2">Traditional Agent</div>
              {[
                ["Time to Close", "7–30 days", "60–90+ days"],
                ["Repairs Required", "None", "$10k–$50k+"],
                ["Commissions", "$0", "5–6%"],
                ["Closing Costs", "$0", "2–3%"],
                ["Certainty", "Guaranteed", "Never certain"],
              ].map(([feat, cash, agent]) => (
                <React.Fragment key={feat}>
                  <div className="text-gray-300 py-3 border-t border-white/10">{feat}</div>
                  <div className="text-center text-[#1a3d1a] font-bold py-3 border-t border-white/10 bg-[#F5C518]/10 rounded">✓ {cash}</div>
                  <div className="text-center text-gray-500 py-3 border-t border-white/10">✗ {agent}</div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-white font-black text-3xl mb-4">Ready to Get Started?</h2>
            <p className="text-gray-400">Get your free cash offer in 24 hours. No obligation, no pressure.</p>
          </div>
          <LeadForm variant="inline" sourcePage="/how-it-works" />
        </div>
      </section>
    </SiteLayout>
  );
}

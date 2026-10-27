import { useState } from "react";
import { ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";

const faqs = [
  {
    q: "How does the cash home buying process work?",
    a: "It's simple: (1) Fill out our short form or call us. (2) We evaluate your property and make a fair cash offer within 24 hours. (3) If you accept, we handle all the paperwork and close on a date of your choosing — in less than 30 days. You receive cash at closing with no fees, no commissions, and no repairs required.",
  },
  {
    q: "How fast can you close on my house?",
    a: "We can close in less than 30 days. However, we work on your timeline. If you need more time — 30, 60, or even 90 days — we can accommodate that too. You choose the closing date that works best for you.",
  },
  {
    q: "Do I need to make repairs before selling?",
    a: "Absolutely not. We buy houses in any condition — whether it needs a fresh coat of paint or a complete renovation. You don't need to clean, fix, or stage anything. We handle all of that after closing.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "No. Zero. We charge no commissions, no agent fees, and no closing costs. The cash offer we make is the amount you receive at closing. Compare that to a traditional sale where you'd pay 5–6% in agent commissions plus 2–3% in closing costs.",
  },
  {
    q: "How do you determine your cash offer?",
    a: "We evaluate your property based on its current condition, location, recent comparable sales in your area, and the cost of any repairs or renovations needed. We aim to make the fairest offer we can while still being able to make the numbers work for our business. There's never any obligation to accept.",
  },
  {
    q: "What types of properties do you buy?",
    a: "We buy single-family homes, multi-family properties, condos, townhouses, and vacant land throughout the Hudson Valley. We purchase properties in any condition — move-in ready, distressed, fire-damaged, vacant, or occupied.",
  },
  {
    q: "What if my house has tenants in it?",
    a: "No problem. We regularly purchase properties with tenants in place. We handle all tenant-related matters after closing. You don't need to deal with evictions or wait for leases to expire.",
  },
  {
    q: "Can you help if I'm facing foreclosure?",
    a: "Yes. If you're behind on your mortgage or facing foreclosure, time is critical. We can often close quickly enough to stop the foreclosure process and protect your credit. Contact us immediately so we can assess your timeline and options.",
  },
  {
    q: "What if I've inherited a property I don't want?",
    a: "We specialize in inherited properties. Whether the estate is in probate or already settled, we can work with you and any co-heirs to purchase the property quickly and fairly. We understand the emotional complexity of these situations.",
  },
  {
    q: "Do I have to accept the offer you make?",
    a: "Never. Our cash offer is completely free and comes with zero obligation. You can take time to consider it, compare it to other options, or simply decline. There is no pressure from us whatsoever.",
  },
  {
    q: "What areas do you serve?",
    a: "We buy houses throughout the Hudson Valley, including all of Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties. If you're unsure whether we serve your area, just call us at (929) 356-5144.",
  },
  {
    q: "Is Cash Ready Homes Hudson Valley a legitimate company?",
    a: "Yes. We are a locally owned and operated real estate investment company based in the Hudson Valley. We have helped homeowners throughout the Hudson Valley and have verified Google reviews from real sellers. We are transparent, honest, and committed to treating every seller with respect.",
  },
];

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-[#1a3d1a] text-base leading-snug">{q}</span>
        {open ? <ChevronUp className="w-5 h-5 text-[#F5C518] flex-shrink-0" /> : <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };

  return (
    <SiteLayout>
      <SEOHead
        title="FAQ — Selling Your House Fast for Cash in Hudson Valley NY"
        description="Get answers to the most common questions about selling your house for cash in the Hudson Valley. Learn how our process works, how fast we close, and why there are zero fees."
        canonical="/faq"
        schema={faqSchema}
      />

      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container text-center">
          <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-3">Got Questions?</p>
          <h1 className="text-white font-black text-4xl lg:text-5xl mb-6">Frequently Asked Questions</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Everything you need to know about selling your house for cash in the Hudson Valley. Can't find your answer? Call us at (929) 356-5144.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container max-w-3xl mx-auto">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
          <div className="mt-16 text-center bg-[#1a3d1a] rounded-2xl p-10">
            <h2 className="text-white font-black text-2xl mb-3">Still Have Questions?</h2>
            <p className="text-gray-400 mb-6">We're here to help. Call us or get a free cash offer — no obligation, no pressure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+19293565144" className="btn-yellow px-6 py-3 rounded-xl font-bold">
                Call (929) 356-5144
              </a>
              <Link href="/#get-offer" className="px-6 py-3 rounded-xl font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a3d1a] transition-colors inline-flex items-center gap-2 justify-center">
                Get Free Cash Offer <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

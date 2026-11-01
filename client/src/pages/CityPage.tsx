import { useParams } from "wouter";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead, { businessWithFaqGraph } from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";
import { getCityBySlug } from "@/data/locations";
import { getCityPageContent } from "@/data/cityPages";

const PHONE = "(929) 356-5144";
const PHONE_HREF = "tel:+19293565144";

export default function CityPage({ citySlug }: { citySlug?: string } = {}) {
  const params = useParams<{ city: string }>();
  const slug = citySlug ?? params.city ?? "";
  const city = getCityBySlug(slug);
  const custom = getCityPageContent(slug);

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

  const title =
    custom?.metaTitle ?? `Sell My House Fast in ${city.name}, NY | Cash Ready Homes`;
  const description =
    custom?.metaDescription ??
    `Need to sell your house fast in ${city.name}, NY? Cash Ready Homes Hudson Valley buys houses in ${city.name} for cash — any condition, no repairs, close in less than 30 days. Free offer in 24 hours.`;
  const canonical = `/sell-my-house-fast-${city.slug}-ny`;
  const h1 = custom?.h1 ?? `Sell Your House Fast in ${city.name}, NY`;

  const faqItems =
    custom?.faqItems ??
    [
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
      <SEOHead title={title} description={description} canonical={canonical} schema={schema} />

      {/* Hero */}
      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-[#F5C518] text-sm font-bold mb-4">
                <MapPin className="w-4 h-4" />
                {city.county} County, New York
              </div>
              <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-6">{h1}</h1>
              {custom ? (
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{custom.opener}</p>
              ) : (
                <p className="text-gray-300 text-lg mb-8">
                  We buy houses in {city.name} for cash — any condition, any situation. Get a free offer in 24 hours and close in less than 30 days. No repairs, no fees, no commissions.
                </p>
              )}
              <div className="flex flex-wrap gap-4 mb-8">
                {["Cash offer in 24 hours", "Close on your timeline", "No repairs needed", "Zero realtor commissions"].map((b) => (
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
                <a
                  href="#get-offer"
                  className="px-6 py-3 rounded-xl font-bold border-2 border-white text-white hover:bg-white hover:text-[#1a3d1a] transition-colors inline-flex items-center gap-2"
                >
                  Get Free Offer <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div id="get-offer">
              <LeadForm
                variant="hero"
                sourcePage={canonical}
                headline={`Get Your Cash Offer for Your ${city.name} Home`}
                subheadline="Free, no-obligation offer within 24 hours."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          {custom ? (
            <div className="space-y-12">
              {custom.sections.map((section) => (
                <div key={section.heading}>
                  <h2 className="text-[#1a3d1a] font-black text-3xl mb-6">{section.heading}</h2>
                  <div className="text-gray-600 leading-relaxed space-y-4">
                    {section.paragraphs.map((p) => (
                      <p key={p.slice(0, 48)}>{p}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h2 className="text-[#1a3d1a] font-black text-2xl mb-4">Helpful local links</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {custom.internalLinks.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-[#1a3d1a] font-semibold hover:text-[#F5C518] underline-offset-2 hover:underline">
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50">
                <p className="font-bold text-[#1a3d1a] mb-3">Nearby cities we also buy in:</p>
                <div className="flex flex-wrap gap-2">
                  {custom.nearbyCityLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-700 hover:border-[#F5C518] hover:text-[#1a3d1a]"
                    >
                      {l.label}, NY
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="text-gray-600 leading-relaxed space-y-4">
              <h2 className="text-[#1a3d1a] font-black text-3xl mb-6">We Buy Houses in {city.name}, NY</h2>
              <p>
                Cash Ready Homes Hudson Valley is a locally owned cash home buying company serving {city.name} and all of {city.county} County. If you need to sell your house fast in {city.name}, we can help — regardless of your situation or the condition of your property.
              </p>
              <p>{city.description}</p>
              <p>
                Whether you're facing foreclosure, going through a divorce, dealing with an inherited property, or simply need to sell quickly, we provide a fast, fair, and hassle-free solution.
              </p>
              {city.nearbyTowns && city.nearbyTowns.length > 0 && (
                <div className="mt-8 p-6 rounded-2xl bg-gray-50">
                  <p className="font-bold text-[#1a3d1a] mb-3">We Also Buy Houses Near {city.name}:</p>
                  <div className="flex flex-wrap gap-2">
                    {city.nearbyTowns.map((town) => (
                      <span key={town} className="text-sm bg-white border border-gray-200 rounded-full px-3 py-1 text-gray-600">
                        {town}, NY
                      </span>
                    ))}
                  </div>
                </div>
              )}
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
            <p className="text-gray-500 text-sm mt-3">
              Full details on{" "}
              <Link href="/how-it-works" className="text-[#F5C518] font-bold hover:underline">
                how it works
              </Link>
              .
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Tell Us About Your Property",
                desc: `Fill out our form or call us about your ${city.name} home.`,
              },
              {
                num: "2",
                title: "Get Your Cash Offer",
                desc: "Receive a fair, all-cash offer — no obligation to accept.",
              },
              {
                num: "3",
                title: "Close & Get Paid",
                desc: "Pick your closing date. NY attorney and title handle the paperwork.",
              },
            ].map((step) => (
              <div key={step.num} className="text-center">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center font-black text-2xl text-[#1a3d1a] mx-auto mb-4"
                  style={{ backgroundColor: "#F5C518" }}
                >
                  {step.num}
                </div>
                <h3 className="text-[#1a3d1a] font-black text-lg mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local FAQ */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">Selling a House in {city.name}: Common Questions</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-100 p-6">
                <h3 className="text-[#1a3d1a] font-bold text-lg mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
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
            <p className="text-gray-400">Get your free cash offer. No obligation, no pressure.</p>
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

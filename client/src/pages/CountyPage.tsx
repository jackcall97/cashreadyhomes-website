import { useParams } from "wouter";
import { ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import SEOHead, {
  BUSINESS_ID,
  SITE_URL,
  businessEntity,
  faqPageNode,
} from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";
import { getCountyBySlug } from "@/data/locations";
import { getCountyPageContent } from "@/data/countyPages";

const PHONE = "(929) 356-5144";
const PHONE_HREF = "tel:+19293565144";

export default function CountyPage({ countySlug }: { countySlug?: string } = {}) {
  const params = useParams<{ county: string }>();
  const slug = countySlug ?? params.county ?? "";
  const county = getCountyBySlug(slug);
  const custom = getCountyPageContent(slug);

  if (!county) {
    return (
      <SiteLayout>
        <div className="container py-20 text-center">
          <h1 className="text-[#1a3d1a] font-black text-3xl mb-4">Page Not Found</h1>
          <Link href="/" className="btn-yellow px-6 py-3 rounded-xl font-bold inline-block">
            Go Home
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const canonical = `/sell-my-house-fast-${county.slug}-county-ny`;
  const title =
    custom?.metaTitle ?? `Sell My House Fast in ${county.name} County, NY | Cash Ready Homes`;
  const description =
    custom?.metaDescription ??
    `We buy houses in ${county.name} County, NY for cash. Any condition, any situation. Get a free cash offer in 24 hours and close in less than 30 days. No repairs, no fees.`;
  const h1 = custom?.h1 ?? `Sell Your House Fast in ${county.name} County, NY`;

  const faqItems =
    custom?.faqItems ??
    [
      {
        question: `How do I sell my house fast in ${county.name} County, NY?`,
        answer: `Contact Cash Ready Homes Hudson Valley by filling out our online form or calling (929) 356-5144. We'll make a fair all-cash offer within 24 hours and can close in as little as 7 days — no repairs, no agent fees, no commissions.`,
      },
      {
        question: `Do you buy houses in all cities in ${county.name} County?`,
        answer: `Yes. We buy houses throughout all of ${county.name} County, NY, including every city, town, and village in the county.`,
      },
      {
        question: `What is the cash home buying process in ${county.name} County?`,
        answer: `Tell us about your property, receive a fair cash offer within 24 hours with no obligation, then choose your closing date. We handle paperwork with a New York attorney and title company; there are no fees or commissions from us.`,
      },
      {
        question: `Will you buy my ${county.name} County house if it needs major repairs?`,
        answer: `Yes. We buy houses in ${county.name} County in any condition. You don't need to fix a thing before selling to us.`,
      },
    ];

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      businessEntity(),
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}${canonical}#webpage`,
        url: `${SITE_URL}${canonical}`,
        name: title,
        description,
        about: { "@id": BUSINESS_ID },
        mainEntity: {
          "@type": "Service",
          name: `Cash home buying in ${county.name} County, NY`,
          serviceType: "Cash home buying",
          provider: { "@id": BUSINESS_ID },
          areaServed: {
            "@type": "AdministrativeArea",
            name: `${county.name} County`,
            addressRegion: "NY",
            addressCountry: "US",
          },
          description,
        },
      },
      faqPageNode(faqItems),
    ],
  };

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
                Hudson Valley, New York
              </div>
              <h1 className="text-white font-black text-4xl lg:text-5xl leading-tight mb-6">{h1}</h1>
              {custom ? (
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">{custom.opener}</p>
              ) : (
                <p className="text-gray-300 text-lg mb-8">
                  We buy houses throughout {county.name} County for cash — any condition, any
                  situation. Free offer in 24 hours. Close in less than 30 days.
                </p>
              )}
              <div className="flex flex-wrap gap-4 mb-8">
                {["Cash offer in 24 hours", "Close on your timeline", "No repairs needed", "Zero realtor commissions"].map(
                  (b) => (
                    <div key={b} className="flex items-center gap-2 text-white text-sm">
                      <CheckCircle className="w-4 h-4 text-[#F5C518]" />
                      {b}
                    </div>
                  ),
                )}
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
                headline={`Get Your Cash Offer in ${county.name} County`}
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
                <h2 className="text-[#1a3d1a] font-black text-2xl mb-4">Cities & towns we buy in</h2>
                <div className="flex flex-wrap gap-2">
                  {(custom.cityLinks.length > 0 ? custom.cityLinks : county.cities.map((c) => ({
                    href: `/sell-my-house-fast-${c.slug}-ny`,
                    label: c.name,
                  }))).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="text-sm bg-gray-50 border border-gray-200 rounded-full px-3 py-1 text-gray-700 hover:border-[#F5C518] hover:text-[#1a3d1a]"
                    >
                      {l.label}, NY
                    </Link>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-[#1a3d1a] font-black text-2xl mb-4">Helpful links</h2>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {custom.internalLinks.map((l) => (
                    <li key={l.href}>
                      <Link
                        href={l.href}
                        className="text-[#1a3d1a] font-semibold hover:text-[#F5C518] underline-offset-2 hover:underline"
                      >
                        {l.label} →
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ) : (
            <div className="text-gray-600 leading-relaxed space-y-4">
              <h2 className="text-[#1a3d1a] font-black text-3xl mb-6">
                We Buy Houses in {county.name} County, NY
              </h2>
              <p>
                Cash Ready Homes Hudson Valley is a locally owned cash home buying company that
                purchases properties throughout {county.name} County, New York. We buy houses in any
                condition — from move-in ready to severely distressed — and we close on your
                timeline.
              </p>
              <p>{county.description}</p>
              <p>
                Whether you're in {county.cities.slice(0, 3).map((c) => c.name).join(", ")}, or
                anywhere else in {county.name} County, we can make you a fair cash offer within 24
                hours and close in less than 30 days.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* City grid */}
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">
              Service Area
            </p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">Cities & Towns We Buy Houses In</h2>
            <p className="text-gray-500 mt-3">Click any city to learn more about selling your home there.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {county.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/sell-my-house-fast-${city.slug}-ny`}
                className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-[#F5C518] hover:shadow-md transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: "#F5C518" }}
                  >
                    <MapPin className="w-5 h-5 text-[#1a3d1a]" />
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#F5C518] transition-colors" />
                </div>
                <h3 className="text-[#1a3d1a] font-black text-lg mb-1">{city.name}</h3>
                <p className="text-gray-400 text-xs">{county.name} County, NY</p>
                <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                  {city.description.split(".")[0]}.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">
              Simple Process
            </p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">
              How to Sell Your {county.name} County House for Cash
            </h2>
            <p className="text-gray-500 text-sm mt-3">
              Full details on{" "}
              <Link href="/how-it-works" className="text-[#F5C518] font-bold hover:underline">
                how it works
              </Link>
              . Questions?{" "}
              <Link href="/contact" className="text-[#F5C518] font-bold hover:underline">
                Contact us
              </Link>
              .
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              {
                num: "1",
                title: "Tell Us About Your Property",
                desc: `Fill out our form or call us about your ${county.name} County home.`,
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
      <section className="py-20" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-[#1a3d1a] font-black text-3xl">
              Selling a House in {county.name} County: Common Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-gray-100 bg-white p-6">
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
            <h2 className="text-white font-black text-3xl mb-4">
              Ready to Sell Your {county.name} County Home?
            </h2>
            <p className="text-gray-400">Get your free cash offer. No obligation, no pressure.</p>
          </div>
          <LeadForm variant="inline" sourcePage={canonical} />
        </div>
      </section>
    </SiteLayout>
  );
}

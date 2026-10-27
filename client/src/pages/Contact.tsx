import { Phone, Mail, Clock, MapPin } from "lucide-react";
import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";
import LeadForm from "@/components/LeadForm";

export default function Contact() {
  return (
    <SiteLayout>
      <SEOHead
        title="Contact Cash Ready Homes Hudson Valley | Get a Cash Offer"
        description="Contact Cash Ready Homes Hudson Valley to get a free cash offer on your home. Call (929) 356-5144 or fill out our form. We serve Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties."
        canonical="/contact"
      />

      <section style={{ backgroundColor: "#1a3d1a" }} className="py-20">
        <div className="container text-center">
          <p className="text-[#F5C518] font-bold text-sm uppercase tracking-widest mb-3">Get In Touch</p>
          <h1 className="text-white font-black text-4xl lg:text-5xl mb-6">Contact Us</h1>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Ready to sell your Hudson Valley home for cash? Fill out the form below or give us a call. We respond within 24 hours — usually much faster.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div>
              <h2 className="text-[#1a3d1a] font-black text-3xl mb-8">How to Reach Us</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F5C518" }}>
                    <Phone className="w-5 h-5 text-[#1a3d1a]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3d1a] mb-1">Phone</p>
                    <a href="tel:+19293565144" className="text-gray-600 hover:text-[#F5C518] transition-colors text-lg font-semibold">(929) 356-5144</a>
                    <p className="text-gray-400 text-sm mt-1">Mon–Sat, 8am–7pm</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F5C518" }}>
                    <Mail className="w-5 h-5 text-[#1a3d1a]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3d1a] mb-1">Email</p>
                    <a href="mailto:jack@cashreadyhomeshudsonvalley.com" className="text-gray-600 hover:text-[#F5C518] transition-colors">
                      jack@cashreadyhomeshudsonvalley.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F5C518" }}>
                    <MapPin className="w-5 h-5 text-[#1a3d1a]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3d1a] mb-1">Service Area</p>
                    <p className="text-gray-600">Hudson Valley, New York</p>
                    <p className="text-gray-400 text-sm mt-1">Westchester, Dutchess, Orange, Putnam, Rockland & Ulster Counties</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ backgroundColor: "#F5C518" }}>
                    <Clock className="w-5 h-5 text-[#1a3d1a]" />
                  </div>
                  <div>
                    <p className="font-bold text-[#1a3d1a] mb-1">Response Time</p>
                    <p className="text-gray-600">Cash offer within 24 hours</p>
                    <p className="text-gray-400 text-sm mt-1">Close in less than 30 days</p>
                  </div>
                </div>
              </div>

              <div className="mt-10 p-6 rounded-2xl" style={{ backgroundColor: "#f8f9fa" }}>
                <h3 className="text-[#1a3d1a] font-black text-lg mb-3">Why Sellers Choose Us</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {[
                    "No repairs, cleaning, or staging required",
                    "No agent commissions or closing costs",
                    "Close in 7–30 days on your schedule",
                    "Cash in hand at closing",
                    "Any condition, any situation",
                    "Locally owned — we know your market",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="text-[#F5C518] font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div>
              <LeadForm
                variant="hero"
                sourcePage="/contact"
                headline="Get Your Free Cash Offer"
                subheadline="Fill out the form and we'll be in touch within 24 hours with a no-obligation cash offer."
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import { useState } from "react";
import { toast } from "sonner";

interface LeadFormProps {
  sourcePage?: string;
  variant?: "hero" | "inline" | "sidebar";
  headline?: string;
  subheadline?: string;
}

export default function LeadForm({
  sourcePage = "/",
  variant = "inline",
  headline = "Get Your FREE Cash Offer Today",
  subheadline = "No repairs. No fees. No commissions. Close in less than 30 days.",
}: LeadFormProps) {
  const [form, setForm] = useState({
    propertyAddress: "",
    fullName: "",
    email: "",
    phone: "",
    smsConsent: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const [pending, setPending] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.propertyAddress || !form.fullName || !form.email || !form.phone) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setPending(true);
    try {
      // Handled by the Cloudflare Pages Function in /functions/api/lead.js
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, sourcePage, website: honeypot }),
      });
      const data = (await res.json().catch(() => ({}))) as { success?: boolean; error?: string };
      if (!res.ok || !data.success) throw new Error(data.error || `HTTP ${res.status}`);
      setSubmitted(true);
      toast.success("We received your request! We'll be in touch within 24 hours.");
    } catch (err) {
      toast.error("Something went wrong. Please try again or call us directly.");
      console.error(err);
    } finally {
      setPending(false);
    }
  };

  if (submitted) {
    return (
      <div className={`rounded-xl p-8 text-center ${variant === "hero" ? "bg-white" : "bg-[#1a3d1a] text-white"}`}>
        <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: "#F5C518" }}>
          <svg className="w-8 h-8 text-[#1a3d1a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className={`text-2xl font-black mb-2 ${variant === "hero" ? "text-[#1a3d1a]" : "text-white"}`}>
          We Got Your Request!
        </h3>
        <p className={`mb-4 ${variant === "hero" ? "text-gray-600" : "text-gray-300"}`}>
          A member of our team will contact you within 24 hours with your no-obligation cash offer.
        </p>
        <a
          href="tel:+19293565144"
          className="btn-yellow inline-block px-6 py-3 rounded-lg font-bold"
        >
          Call Us Now: (929) 356-5144
        </a>
      </div>
    );
  }

  const isHero = variant === "hero";
  const containerClass = isHero
    ? "bg-white rounded-2xl shadow-2xl p-8"
    : "bg-[#245424] rounded-2xl p-8 border border-white/10";
  const labelClass = isHero ? "text-gray-700 font-semibold text-sm" : "text-gray-300 font-semibold text-sm";
  const inputClass = isHero
    ? "w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-transparent transition-all"
    : "w-full px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#F5C518] focus:border-transparent transition-all";
  const headlineClass = isHero ? "text-[#1a3d1a] font-black text-2xl mb-1" : "text-white font-black text-2xl mb-1";
  const subClass = isHero ? "text-gray-500 text-sm mb-6" : "text-gray-400 text-sm mb-6";

  return (
    <div className={containerClass} id="get-offer">
      <h3 className={headlineClass}>{headline}</h3>
      <p className={subClass}>{subheadline}</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Honeypot: hidden from people, bots fill it in. */}
        <div aria-hidden="true" style={{ position: "absolute", left: "-10000px", width: 1, height: 1, overflow: "hidden" }}>
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" value={honeypot} onChange={e => setHoneypot(e.target.value)} />
          </label>
        </div>
        <div>
          <label className={labelClass}>Property Address *</label>
          <input
            type="text"
            className={inputClass}
            placeholder="123 Main St, Poughkeepsie, NY"
            value={form.propertyAddress}
            onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Your Name *</label>
            <input
              type="text"
              className={inputClass}
              placeholder="John Smith"
              value={form.fullName}
              onChange={(e) => setForm({ ...form, fullName: e.target.value })}
              required
            />
          </div>
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="Your phone number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Email Address *</label>
          <input
            type="email"
            className={inputClass}
            placeholder="you@email.com"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
        </div>

        {/* SMS Consent */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            id={`sms-consent-${variant}`}
            className="mt-0.5 w-4 h-4 accent-[#F5C518] cursor-pointer flex-shrink-0"
            checked={form.smsConsent}
            onChange={(e) => setForm({ ...form, smsConsent: e.target.checked })}
          />
          <label htmlFor={`sms-consent-${variant}`} className={`text-xs leading-relaxed cursor-pointer ${isHero ? "text-gray-500" : "text-gray-400"}`}>
            I consent to receive SMS text messages from Cash Ready Homes Hudson Valley regarding my property inquiry. Message and data rates may apply. Reply STOP to opt out at any time.
          </label>
        </div>

        <button
          type="submit"
          disabled={pending}
          className="btn-yellow w-full py-4 rounded-xl text-base font-black tracking-wide disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {pending ? "Submitting..." : "GET MY FREE CASH OFFER →"}
        </button>

        <p className={`text-center text-xs ${isHero ? "text-gray-400" : "text-gray-500"}`}>
          100% Free. No obligation. No pressure. Your info is safe with us.
        </p>
      </form>
    </div>
  );
}

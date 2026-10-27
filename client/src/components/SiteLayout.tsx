import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone } from "lucide-react";

const PHONE = "(929) 356-5144";
const PHONE_HREF = "tel:+19293565144";

const navLinks = [
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

const countyLinks = [
  { label: "Westchester", href: "/sell-my-house-fast-westchester-county-ny" },
  { label: "Dutchess", href: "/sell-my-house-fast-dutchess-county-ny" },
  { label: "Orange", href: "/sell-my-house-fast-orange-county-ny" },
  { label: "Putnam", href: "/sell-my-house-fast-putnam-county-ny" },
  { label: "Rockland", href: "/sell-my-house-fast-rockland-county-ny" },
  { label: "Ulster", href: "/sell-my-house-fast-ulster-county-ny" },
];

function GetCashOfferButton() {
  const [location] = useLocation();
  const handleClick = () => {
    if (location === '/') {
      document.getElementById('get-offer')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
      window.location.href = '/#get-offer';
    }
  };
  return (
    <button
      onClick={handleClick}
      className="btn-yellow hidden sm:inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-bold"
    >
      Get Cash Offer
    </button>
  );
}

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top bar */}
      <div style={{ backgroundColor: "#F5C518" }} className="py-2 text-center text-sm font-bold text-[#1a3d1a]">
        Get a FREE Cash Offer in 24 Hours — No Repairs, No Fees, No Commissions
        <a href={PHONE_HREF} className="ml-3 underline">{PHONE}</a>
      </div>

      {/* Main header — white background */}
      <header className="sticky top-0 z-50 shadow-md bg-white border-b border-gray-100">
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/manus-storage/logo-icon-crisp_222c6ff1.png"
              alt="Cash Ready Homes Hudson Valley"
              className="h-20 w-auto object-contain flex-shrink-0"
            />
            <div className="flex flex-col leading-none">
              <span className="font-black tracking-tight leading-none" style={{ color: '#2d6a2d', fontSize: '1.2rem', lineHeight: 1.1 }}>CASH READY</span>
              <span className="font-black tracking-tight leading-none" style={{ color: '#2d6a2d', fontSize: '1.2rem', lineHeight: 1.1 }}>HOMES</span>
              <span className="font-bold tracking-widest uppercase" style={{ color: '#1a4a5a', fontSize: '0.65rem', lineHeight: 1.5, letterSpacing: '0.15em' }}>HUDSON VALLEY</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  location === link.href
                    ? "text-[#2d6a2d]"
                    : "text-gray-700 hover:text-[#2d6a2d]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Counties dropdown */}
            <div className="relative group">
              <button className="text-sm font-semibold text-gray-700 hover:text-[#2d6a2d] transition-colors flex items-center gap-1">
                Areas We Serve
                <svg className="w-3 h-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {countyLinks.map((c) => (
                  <Link key={c.href} href={c.href} className="block px-4 py-2 text-sm text-gray-700 hover:text-[#2d6a2d] hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors">
                    {c.label} County
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 text-gray-800 font-bold text-sm hover:text-[#2d6a2d] transition-colors"
            >
              <Phone className="w-4 h-4" />
              {PHONE}
            </a>
            <GetCashOfferButton />
            <button
              className="lg:hidden text-gray-800 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white">
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#2d6a2d] font-semibold py-2 border-b border-gray-100"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-2">Areas We Serve</p>
                {countyLinks.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    className="block text-gray-700 hover:text-[#2d6a2d] py-1.5 text-sm"
                    onClick={() => setMobileOpen(false)}
                  >
                    {c.label} County
                  </Link>
                ))}
              </div>
              <a href={PHONE_HREF} className="btn-yellow text-center py-3 rounded-lg font-bold mt-2">
                Call {PHONE}
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer — keep dark green */}
      <footer style={{ backgroundColor: "#1a3d1a" }} className="text-gray-400 pt-16 pb-8">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <img
              src="/manus-storage/logo-icon-crisp_222c6ff1.png"
              alt="Cash Ready Homes Hudson Valley"
              className="h-14 w-auto object-contain flex-shrink-0"
                />
                <div className="flex flex-col leading-none">
                  <span className="font-black tracking-tight leading-none" style={{ color: '#7ec87e', fontSize: '1.05rem', lineHeight: 1.1 }}>CASH READY</span>
                  <span className="font-black tracking-tight leading-none" style={{ color: '#7ec87e', fontSize: '1.05rem', lineHeight: 1.1 }}>HOMES</span>
                  <span className="font-bold tracking-widest uppercase" style={{ color: '#a8c4b0', fontSize: '0.65rem', lineHeight: 1.4, letterSpacing: '0.12em' }}>HUDSON VALLEY</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4">
                We buy houses for cash in Westchester, Dutchess, Orange, Putnam, Rockland, and Ulster Counties. Fast, fair, hassle-free.
              </p>
              <a href={PHONE_HREF} className="text-white font-bold hover:text-[#F5C518] transition-colors">
                {PHONE}
              </a>
            </div>

            {/* Counties */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Counties</h4>
              <ul className="space-y-2 text-sm">
                {countyLinks.map((c) => (
                  <li key={c.href}>
                    <Link href={c.href} className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>{c.label} County</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Situations */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Situations</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/situations/foreclosure" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Facing Foreclosure</Link></li>
                <li><Link href="/situations/inherited-property" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Inherited Property</Link></li>
                <li><Link href="/situations/divorce" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Going Through Divorce</Link></li>
                <li><Link href="/situations/bad-tenants" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Problem Tenants</Link></li>
                <li><Link href="/situations/probate" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Probate Property</Link></li>
                <li><Link href="/situations/as-is" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Sell As-Is</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-white font-bold mb-4 text-sm uppercase tracking-widest">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/about" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
                <li><Link href="/how-it-works" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>How It Works</Link></li>
                <li><Link href="/faq" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>FAQ</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Blog</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Contact</Link></li>
                <li><Link href="/we-buy-houses-hudson-valley-ny" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>We Buy Houses</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p>&copy; {new Date().getFullYear()} Cash Ready Homes Hudson Valley. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Privacy Policy</Link>
              <Link href="/terms-of-use" className="hover:text-white transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Terms of Use</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

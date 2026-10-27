import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";

export default function TermsOfUse() {
  return (
    <SiteLayout>
      <SEOHead
        title="Terms of Use | Cash Ready Homes Hudson Valley"
        description="Terms of Use for Cash Ready Homes Hudson Valley. Please read these terms carefully before using our website."
        canonical="/terms-of-use"
      />

      <section style={{ backgroundColor: "#1a3d1a" }} className="py-16">
        <div className="container text-center">
          <h1 className="text-white font-black text-4xl lg:text-5xl mb-4">Terms of Use</h1>
          <p className="text-gray-300 text-lg">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto prose prose-gray prose-headings:text-[#1a3d1a] prose-headings:font-black prose-a:text-[#1a3d1a]">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Cash Ready Homes Hudson Valley website, you accept and agree to be bound by these Terms of Use. If you do not agree to these terms, please do not use our website.
          </p>

          <h2>2. Use of the Website</h2>
          <p>
            This website is provided for informational purposes and to facilitate contact between homeowners and Cash Ready Homes Hudson Valley. You agree to use this website only for lawful purposes and in a manner that does not infringe the rights of others.
          </p>

          <h2>3. No Real Estate or Legal Advice</h2>
          <p>
            The information on this website is for general informational purposes only and does not constitute real estate, legal, tax, or financial advice. You should consult with qualified professionals before making any real estate decisions.
          </p>

          <h2>4. Cash Offers</h2>
          <p>
            Submitting a form on our website does not create a binding agreement or guarantee a specific offer amount. Any cash offer is subject to property inspection, title review, and mutual agreement between the parties. There is never any obligation to accept an offer.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Cash Ready Homes Hudson Valley and is protected by applicable intellectual property laws. You may not reproduce or distribute any content without our written permission.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            This website is provided "as is" without any warranties, express or implied. We do not warrant that the website will be error-free or uninterrupted.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Cash Ready Homes Hudson Valley shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this website.
          </p>

          <h2>8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the content or privacy practices of those sites.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to the website.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Use, please contact us:
          </p>
          <ul>
            <li><strong>Phone:</strong> <a href="tel:+19293565144">(929) 356-5144</a></li>
            <li><strong>Email:</strong> <a href="mailto:jack@cashreadyhomeshudsonvalley.com">jack@cashreadyhomeshudsonvalley.com</a></li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}

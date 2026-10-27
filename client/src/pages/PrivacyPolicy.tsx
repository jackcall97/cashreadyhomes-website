import SiteLayout from "@/components/SiteLayout";
import SEOHead from "@/components/SEOHead";

export default function PrivacyPolicy() {
  return (
    <SiteLayout>
      <SEOHead
        title="Privacy Policy | Cash Ready Homes Hudson Valley"
        description="Privacy Policy for Cash Ready Homes Hudson Valley. Learn how we collect, use, and protect your personal information."
        canonical="/privacy-policy"
      />

      <section style={{ backgroundColor: "#1a3d1a" }} className="py-16">
        <div className="container text-center">
          <h1 className="text-white font-black text-4xl lg:text-5xl mb-4">Privacy Policy</h1>
          <p className="text-gray-300 text-lg">Last updated: July 2026</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container max-w-3xl mx-auto prose prose-gray prose-headings:text-[#1a3d1a] prose-headings:font-black prose-a:text-[#1a3d1a]">
          <h2>1. Information We Collect</h2>
          <p>
            When you submit a form on our website, we collect the following personal information: your name, phone number, email address, and property address. We may also collect information about how you use our website through standard analytics tools.
          </p>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information you provide to:</p>
          <ul>
            <li>Contact you about your property and prepare a cash offer</li>
            <li>Respond to your inquiries and requests</li>
            <li>Send you SMS messages if you have provided consent</li>
            <li>Improve our website and services</li>
          </ul>

          <h2>3. SMS Messaging</h2>
          <p>
            By checking the SMS consent box on our forms, you agree to receive text messages from Cash Ready Homes Hudson Valley regarding your property inquiry. Message and data rates may apply. You may opt out at any time by replying STOP to any message. We do not share your phone number with third parties for marketing purposes.
          </p>

          <h2>4. Sharing of Information</h2>
          <p>
            We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided those parties agree to keep this information confidential.
          </p>

          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>

          <h2>6. Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience and collect analytics data. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>7. Your Rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal information at any time by contacting us at <a href="mailto:jack@cashreadyhomeshudsonvalley.com">jack@cashreadyhomeshudsonvalley.com</a> or by calling <a href="tel:+19293565144">(929) 356-5144</a>.
          </p>

          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
          </p>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li><strong>Phone:</strong> <a href="tel:+19293565144">(929) 356-5144</a></li>
            <li><strong>Email:</strong> <a href="mailto:jack@cashreadyhomeshudsonvalley.com">jack@cashreadyhomeshudsonvalley.com</a></li>
            <li><strong>Service Area:</strong> Hudson Valley, New York</li>
          </ul>
        </div>
      </section>
    </SiteLayout>
  );
}

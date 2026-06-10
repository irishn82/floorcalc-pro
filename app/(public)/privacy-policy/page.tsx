import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Privacy Policy",
  description: "How FloorCalc Pro handles analytics, server logs, and your information when you use our site.",
  path: "/privacy-policy"
});

const LAST_UPDATED = "June 10, 2026";
const contactEmail = "contact@floorcalcpro.net";

export default function PrivacyPolicyPage() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Privacy Policy" }
          ]}
        />
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Legal"
            title="Privacy Policy"
            description={`Last updated: ${LAST_UPDATED}`}
            headingLevel="h1"
          />

          <div className="mt-7 space-y-6 text-base leading-7 text-slate-600">
            <p>
              FloorCalc Pro (floorcalcpro.net) is a free flooring calculator and guide website. This policy describes
              what information is collected when you use the site and how it is handled.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Information we do not collect</h2>
            <p>
              The site does not require accounts, logins, or registration. We do not ask for your name, email address,
              or payment information to use any calculator or read any guide. Numbers you enter into calculators are
              processed in your browser and are not stored on our servers.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Analytics</h2>
            <p>
              We use privacy-focused, aggregate analytics to understand which pages are visited and how the site
              performs. Our analytics provider does not use cookies for tracking and does not collect personal
              information that identifies individual visitors. We see aggregate data such as page views, referring
              sites, and country-level location — not who you are.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Server logs</h2>
            <p>
              Like nearly all websites, our hosting infrastructure generates standard server logs, which may include IP
              addresses, browser type, and pages requested. These logs are used for security and operations and are
              retained by the hosting provider according to their retention policies.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Cookies</h2>
            <p>
              The public site does not set advertising or cross-site tracking cookies. If this changes in the future —
              for example, if we add advertising — this policy will be updated before those changes take effect, and
              any legally required consent mechanisms will be added.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Advertising and affiliate links</h2>
            <p>
              The site currently displays no third-party advertising and contains no affiliate links. If we add either
              in the future, this policy will be updated to describe what data is involved, and affiliate relationships
              will be disclosed on the pages where they appear.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Third-party links</h2>
            <p>
              Our guides link to external resources such as industry associations and standards organizations. We are
              not responsible for the privacy practices of external sites.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Children&apos;s privacy</h2>
            <p>
              The site is a general-audience reference resource and is not directed at children under 13. We do not
              knowingly collect personal information from children.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Changes to this policy</h2>
            <p>
              We may update this policy as the site evolves. The date at the top of this page reflects the most recent
              revision.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${contactEmail}`} className="font-bold text-accent-700 hover:text-accent-600">
                {contactEmail}
              </a>
              .
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Terms of Use",
  description: "Terms of use for FloorCalc Pro's free flooring calculators, guides, and troubleshooting resources.",
  path: "/terms"
});

const LAST_UPDATED = "June 10, 2026";
const contactEmail = "contact@floorcalcpro.net";

export default function TermsPage() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Terms of Use" }
          ]}
        />
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Legal"
            title="Terms of Use"
            description={`Last updated: ${LAST_UPDATED}`}
            headingLevel="h1"
          />

          <div className="mt-7 space-y-6 text-base leading-7 text-slate-600">
            <p>
              By using FloorCalc Pro (floorcalcpro.net), you agree to these terms. If you do not agree, please do not
              use the site.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Planning estimates, not professional advice</h2>
            <p>
              All calculators, guides, decision trees, and troubleshooting content on this site are general planning
              information. They are not professional, architectural, engineering, or installation advice, and they are
              not a substitute for a flooring manufacturer&apos;s written installation instructions, a professional
              measure, an on-site inspection, or local building requirements.
            </p>
            <p>
              Flooring products vary widely. Moisture limits, subfloor flatness tolerances, underlayment rules,
              acclimation requirements, transition placement, and warranty conditions are set by each manufacturer for
              each product. Always verify final quantities, methods, and site conditions with the product
              documentation, your retailer, or a qualified installer before ordering material or starting work.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">No warranty</h2>
            <p>
              The site and its content are provided &quot;as is&quot; without warranties of any kind, express or
              implied, including accuracy, completeness, or fitness for a particular purpose. We work to keep content
              consistent with published industry guidance, but standards change and errors are possible.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Limitation of liability</h2>
            <p>
              To the maximum extent permitted by law, FloorCalc Pro is not liable for any damages arising from use of
              the site, including material shortages or overages, installation outcomes, product failures, or decisions
              made based on site content.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Intellectual property</h2>
            <p>
              The content, design, and calculators on this site are owned by FloorCalc Pro. You may use the site for
              personal and internal business planning. You may not scrape, republish, or redistribute substantial
              portions of the content without permission.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Third-party resources</h2>
            <p>
              Links to industry associations, standards bodies, and other external resources are provided for
              reference. We do not control and are not responsible for external content.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Changes</h2>
            <p>
              We may update these terms as the site evolves. Continued use of the site after changes constitutes
              acceptance of the revised terms.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
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

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Contact FloorCalc Pro",
  description:
    "Contact FloorCalc Pro with questions, corrections, or feedback about our flooring calculators and guides.",
  path: "/contact"
});

const contactEmail = "contact@floorcalcpro.net";

export default function ContactPage() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Contact" }
          ]}
        />
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="Contact"
            title="Contact FloorCalc Pro"
            description="Questions, corrections, and feedback about our calculators and guides."
            headingLevel="h1"
          />

          <div className="mt-7 space-y-6 text-base leading-7 text-slate-600">
            <p>
              The fastest way to reach us is by email:{" "}
              <a href={`mailto:${contactEmail}`} className="font-bold text-accent-700 hover:text-accent-600">
                {contactEmail}
              </a>
            </p>

            <div className="rounded-lg border border-line bg-field p-4">
              <h2 className="text-base font-black text-ink">What we can help with</h2>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm leading-6">
                <li>Corrections or questions about a guide or calculator</li>
                <li>Suggestions for new calculators or topics</li>
                <li>Reporting a bug or display issue</li>
                <li>Partnership or licensing inquiries</li>
              </ul>
            </div>

            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
              <p className="font-black">A note on project advice</p>
              <p className="mt-1">
                We cannot diagnose your specific floor remotely or replace a professional inspection. For
                project-specific decisions, consult your flooring manufacturer&apos;s installation instructions, your
                retailer, or a qualified installer. Our{" "}
                <Link href="/guides/troubleshooting" className="font-bold underline">
                  troubleshooting guides
                </Link>{" "}
                can help you prepare for that conversation.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

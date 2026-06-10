import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "About FloorCalc Pro",
  description:
    "FloorCalc Pro builds free flooring calculators and troubleshooting guides grounded in published industry guidance from NWFA, TCNA, CRI, RFCI, NALFA, and ASTM standards.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "About" }
          ]}
        />
        <div className="max-w-3xl">
          <SectionHeading
            eyebrow="About"
            title="About FloorCalc Pro"
            description="Free flooring calculators and plain-language guides for homeowners planning, troubleshooting, or installing floors."
            headingLevel="h1"
          />

          <div className="mt-7 space-y-6 text-base leading-7 text-slate-600">
            <p>
              FloorCalc Pro exists to answer the practical questions that come up before and after a flooring project:
              how much material to order, why a floor is clicking or separating, whether a slab is ready for flooring,
              and which transition piece fits a doorway. Every calculator and guide is free to use, with no account
              required.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">How our content is produced</h2>
            <p>
              Our guides are written against published industry guidance rather than opinion. Where a topic is governed
              by a recognized standard or trade association, we reference it and link to the source, including:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>NWFA</strong> (National Wood Flooring Association) technical guidelines for hardwood
                installation, acclimation, and moisture evaluation
              </li>
              <li>
                <strong>TCNA</strong> (Tile Council of North America) Handbook and ANSI A108 series for tile substrate
                flatness, grout joints, and installation methods
              </li>
              <li>
                <strong>CRI</strong> (Carpet and Rug Institute) 104/105 installation standards for carpet and cushion
              </li>
              <li>
                <strong>RFCI</strong> (Resilient Floor Covering Institute) technical guidance for vinyl and resilient
                flooring
              </li>
              <li>
                <strong>NALFA</strong> (North American Laminate Flooring Association) guidance for laminate flooring
              </li>
              <li>
                <strong>ASTM</strong> standards referenced across the industry, such as ASTM F710 for concrete floor
                preparation, ASTM F1869 for calcium chloride moisture testing, and ASTM F2170 for in-situ relative
                humidity testing
              </li>
            </ul>
            <p>
              Specifications vary between products, which is why our guides consistently point you back to the written
              installation instructions for the exact product you are using. Where industry norms exist, we state them;
              where requirements differ by manufacturer, we say so instead of inventing a number.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">What our tools are — and are not</h2>
            <p>
              Our calculators produce planning-level estimates for square footage, waste, stairs, carpet seams, pattern
              repeats, and transitions. They are designed to help you prepare for a purchase or an installer
              conversation. They are not a substitute for a professional measure, a manufacturer&apos;s installation
              instructions, or local building requirements — final quantities and methods should always be verified
              before ordering.
            </p>

            <h2 className="text-xl font-black tracking-normal text-ink">Contact</h2>
            <p>
              Questions, corrections, or feedback are welcome. Visit the{" "}
              <Link href="/contact" className="font-bold text-accent-700 hover:text-accent-600">
                contact page
              </Link>{" "}
              to reach us. If you spot something in a guide that does not match current industry guidance, we want to
              know about it.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

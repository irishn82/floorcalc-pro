import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { getToolRelatedGuides } from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Calculators",
  description:
    "Browse free flooring calculators for square footage, waste, stairs, carpet seams, pattern repeats, and transitions.",
  path: "/tools"
});

export default function ToolsIndexPage() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Tools" }
          ]}
        />
        <div className="grid gap-6 border-b border-line pb-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeading
            eyebrow="Tools"
            title="Flooring calculators"
            description="Choose a calculator below to estimate the most common material planning questions before a flooring project."
            headingLevel="h1"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["ruler", "Room measurements", "/tools/flooring-square-footage-calculator"],
              ["waste", "Material waste", "/tools/waste-calculator"],
              ["carpet", "Carpet planning", "/tools/carpet-seam-planner"]
            ].map(([icon, label, href]) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-field px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
              >
                <FlooringIcon name={icon as "ruler" | "waste" | "carpet"} className="h-4 w-4 text-accent-700" />
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} relatedGuides={getToolRelatedGuides(tool.slug)} />
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Calculators",
  description:
    "Browse free flooring calculators for square footage, waste, stairs, carpet seams, pattern repeats, and transitions.",
  path: "/tools"
});

export default function ToolsIndexPage() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeading
            eyebrow="Tools"
            title="Flooring calculators"
            description="Choose a calculator below to estimate the most common material planning questions before a flooring project."
            headingLevel="h1"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["ruler", "Room measurements"],
              ["waste", "Material waste"],
              ["carpet", "Carpet planning"]
            ].map(([icon, label]) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-lg border border-line bg-field px-3 py-2 text-sm font-bold text-slate-700">
                <FlooringIcon name={icon as "ruler" | "waste" | "carpet"} className="h-4 w-4 text-accent-700" />
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}

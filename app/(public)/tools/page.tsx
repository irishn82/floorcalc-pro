import type { Metadata } from "next";
import { Container } from "@/components/Container";
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
        <SectionHeading
          eyebrow="Tools"
          title="Flooring calculators"
          description="Choose a calculator below to estimate the most common material planning questions before a flooring project."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </Container>
    </section>
  );
}

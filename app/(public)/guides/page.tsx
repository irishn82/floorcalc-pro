import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { GuideCard } from "@/components/GuideCard";
import { SectionHeading } from "@/components/SectionHeading";
import { guides } from "@/data/guides";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Guides",
  description:
    "Browse practical flooring guides for measuring, waste, carpet seams, transitions, pets, tile overlays, and radiant heat.",
  path: "/guides"
});

export default function GuidesIndexPage() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <SectionHeading
          eyebrow="Guides"
          title="Flooring planning guides"
          description="Production-ready starter articles built around practical search intent and internal links to the calculators."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </Container>
    </section>
  );
}

import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
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
        <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeading
            eyebrow="Guides"
            title="Flooring planning guides"
            description="Practical flooring articles for measuring rooms, estimating waste, planning carpet seams, choosing transitions, and checking installation details before you buy."
            headingLevel="h1"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["layers", "Floor systems"],
              ["transition", "Trim decisions"],
              ["guide", "Buying checks"]
            ].map(([icon, label]) => (
              <div key={label} className="inline-flex items-center gap-2 rounded-lg border border-line bg-field px-3 py-2 text-sm font-bold text-slate-700">
                <FlooringIcon name={icon as "layers" | "transition" | "guide"} className="h-4 w-4 text-accent-700" />
                {label}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      </Container>
    </section>
  );
}

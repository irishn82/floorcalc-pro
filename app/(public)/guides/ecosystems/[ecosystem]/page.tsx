import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { getGuideEcosystemBySlug, guideEcosystems } from "@/data/ecosystems";
import { getGuidesByEcosystem, getRelatedTools } from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";

type EcosystemPageProps = {
  params: Promise<{ ecosystem: string }>;
};

export function generateStaticParams() {
  return guideEcosystems.map((ecosystem) => ({ ecosystem: ecosystem.slug }));
}

export async function generateMetadata({ params }: EcosystemPageProps): Promise<Metadata> {
  const { ecosystem: ecosystemSlug } = await params;
  const ecosystem = getGuideEcosystemBySlug(ecosystemSlug);

  if (!ecosystem) {
    return {};
  }

  return createSeoMetadata({
    title: ecosystem.metadataTitle,
    description: ecosystem.metadataDescription,
    path: `/guides/ecosystems/${ecosystem.slug}`
  });
}

export default async function GuideEcosystemPage({ params }: EcosystemPageProps) {
  const { ecosystem: ecosystemSlug } = await params;
  const ecosystem = getGuideEcosystemBySlug(ecosystemSlug);

  if (!ecosystem) {
    notFound();
  }

  const ecosystemGuides = getGuidesByEcosystem(ecosystem.slug);
  const relatedTools = getRelatedTools(ecosystem.relatedTools);
  const siblingEcosystems = guideEcosystems.filter((item) => item.slug !== ecosystem.slug).slice(0, 4);

  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid gap-8 border-b border-line pb-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Flooring ecosystem"
            title={ecosystem.title}
            description={ecosystem.description}
            headingLevel="h1"
          />
          <div className="rounded-lg border border-line bg-field p-5">
            <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
              <FlooringIcon name={ecosystem.slug === "carpet-padding" ? "carpet" : "layers"} className="h-5 w-5 text-accent-700" />
              Planning focus
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use this hub to keep material-specific articles, measuring tools, and transition planning in the same workflow before ordering flooring.
            </p>
            <div className="mt-4">
              <Link className="text-sm font-bold text-accent-700 hover:text-accent-600" href="/guides">
                Back to all flooring guides
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-black tracking-normal text-ink">Guides in this ecosystem</h2>
          {ecosystemGuides.length > 0 ? (
            <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {ecosystemGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="mt-6 rounded-lg border border-dashed border-line bg-field p-5 text-sm leading-6 text-slate-600">
              Guides for this ecosystem are planned for a future editorial pass.
            </div>
          )}
        </div>

        <div className="mt-14 border-t border-line pt-10">
          <h2 className="text-2xl font-black tracking-normal text-ink">Useful calculators</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            These tools support the measuring, waste, stair, seam, pattern, and transition decisions connected to this flooring ecosystem.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-line pt-10 lg:grid-cols-[1fr_0.8fr]">
          <DisclaimerBox>
            Ecosystem pages organize general flooring planning information. Product compatibility, installation methods, subfloor requirements,
            transition profiles, and warranty-related requirements vary by manufacturer and project conditions.
          </DisclaimerBox>
          <div>
            <h2 className="text-lg font-bold text-ink">Related ecosystems</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {siblingEcosystems.map((sibling) => (
                <Link
                  key={sibling.slug}
                  href={`/guides/ecosystems/${sibling.slug}`}
                  className="rounded-md border border-line bg-field px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
                >
                  {sibling.shortTitle}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

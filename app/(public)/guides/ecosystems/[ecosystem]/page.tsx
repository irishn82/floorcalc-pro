import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { NextStepPanel } from "@/components/NextStepPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { getGuideEcosystemBySlug, guideEcosystems } from "@/data/ecosystems";
import {
  getPrimaryGuidesByEcosystem,
  getRelatedTools,
  getSecondaryGuidesByEcosystem,
  getTroubleshootingGuides
} from "@/lib/content/paths";
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

  const coreGuides = getPrimaryGuidesByEcosystem(ecosystem.slug);
  const relatedGuides = getSecondaryGuidesByEcosystem(ecosystem.slug);
  const relatedTools = getRelatedTools(ecosystem.relatedTools);
  const troubleshootingGuides = getTroubleshootingGuides()
    .filter((guide) => guide.primaryEcosystem === ecosystem.slug || Boolean(guide.secondaryEcosystems?.includes(ecosystem.slug)))
    .slice(0, 3);
  const siblingEcosystems = guideEcosystems.filter((item) => item.slug !== ecosystem.slug).slice(0, 4);
  const startGuide = coreGuides[0] ?? relatedGuides[0];

  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { href: "/guides", label: "Guides" },
            { label: ecosystem.shortTitle }
          ]}
        />
        <div className="grid gap-6 border-b border-line pb-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <SectionHeading
            eyebrow="Flooring type"
            title={ecosystem.title}
            description={ecosystem.description}
            headingLevel="h1"
          />
          <div className="rounded-lg border border-line bg-field p-3.5">
            <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
              <FlooringIcon name={ecosystem.slug === "carpet-padding" ? "carpet" : "layers"} className="h-5 w-5 text-accent-700" />
              Planning focus
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Use this page to keep material-specific articles, measuring tools, and transition planning in the same place before ordering flooring.
            </p>
            <div className="mt-4">
              <Link className="text-sm font-bold text-accent-700 hover:text-accent-600" href="/guides">
                Back to all flooring guides
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-3 rounded-lg border border-line bg-field p-3.5 md:grid-cols-3">
          <Link
            href={startGuide ? `/guides/${startGuide.slug}` : "/guides"}
            className="rounded-md border border-line bg-white p-3 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:text-accent-700"
          >
            Start here
            <span className="mt-1 block font-normal leading-6 text-slate-600">
              {startGuide ? startGuide.title : "Browse all flooring guides"}
            </span>
          </Link>
          <Link
            href={relatedTools[0] ? `/tools/${relatedTools[0].slug}` : "/tools"}
            className="rounded-md border border-line bg-white p-3 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:text-accent-700"
          >
            Recommended calculator
            <span className="mt-1 block font-normal leading-6 text-slate-600">
              {relatedTools[0] ? relatedTools[0].title : "All flooring calculators"}
            </span>
          </Link>
          <Link
            href={troubleshootingGuides[0] ? `/guides/${troubleshootingGuides[0].slug}` : "/guides/troubleshooting"}
            className="rounded-md border border-line bg-white p-3 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:text-accent-700"
          >
            Common problems
            <span className="mt-1 block font-normal leading-6 text-slate-600">
              {troubleshootingGuides[0] ? troubleshootingGuides[0].title : "Troubleshooting guides"}
            </span>
          </Link>
        </div>

        <div className="mt-7">
          <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Popular in this ecosystem</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            These guides are primarily about {ecosystem.shortTitle} or this exact planning category.
          </p>
          {coreGuides.length > 0 ? (
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {coreGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-lg border border-dashed border-line bg-field p-4 text-sm leading-6 text-slate-600">
              Guides for this flooring type are planned for a future editorial pass.
            </div>
          )}
        </div>

        {relatedGuides.length > 0 ? (
          <div className="mt-7 border-t border-line pt-6">
            <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Also relevant</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              These guides also apply here, but their main home is another flooring category.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {relatedGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        ) : null}

        {troubleshootingGuides.length > 0 ? (
          <div className="mt-7 border-t border-line pt-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Common problems for {ecosystem.shortTitle}</h2>
                <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                  Problem-based guides that help diagnose movement, noise, seams, transitions, and installation concerns.
                </p>
              </div>
              <Link href="/guides/troubleshooting" className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
                View all troubleshooting
              </Link>
            </div>
            <div className="mt-4 grid gap-3 md:grid-cols-3">
              {troubleshootingGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        ) : null}

        <div className="mt-7 border-t border-line pt-6">
          <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Recommended calculators</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            These tools support the measuring, waste, stair, seam, pattern, and transition decisions connected to this flooring type.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {relatedTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </div>

        <NextStepPanel
          description={`Start with the most relevant calculator for ${ecosystem.shortTitle}, then use the core guides to check layout, waste, subfloor, and transition decisions.`}
          primaryLink={{
            href: relatedTools[0] ? `/tools/${relatedTools[0].slug}` : "/tools",
            label: relatedTools[0] ? `Use ${relatedTools[0].shortTitle}` : "Open calculators"
          }}
          secondaryLinks={[
            { href: "/guides/troubleshooting", label: "Troubleshooting guides" },
            { href: "/tools", label: "All calculators" },
            { href: "/guides", label: "All flooring guides" }
          ]}
        />

        <div className="mt-7 grid gap-5 border-t border-line pt-6 lg:grid-cols-[1fr_0.8fr]">
          <DisclaimerBox>
            Flooring type pages organize general flooring planning information. Product compatibility, installation methods, subfloor requirements,
            transition profiles, and product-specific requirements vary by manufacturer and project conditions.
          </DisclaimerBox>
          <div>
            <h2 className="text-lg font-bold text-ink">Related flooring types</h2>
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

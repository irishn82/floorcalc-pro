import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { GuideTypeSelect } from "@/components/GuideTypeSelect";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { guideEcosystems } from "@/data/ecosystems";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";
import { getPrimaryGuidesByEcosystem, getSecondaryGuidesByEcosystem, getTroubleshootingGuides } from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Guides",
  description:
    "Browse practical flooring guides for measuring, waste, carpet seams, transitions, pets, tile overlays, and radiant heat.",
  path: "/guides"
});

const startHereGuideSlugs = [
  "how-much-flooring-do-i-need",
  "which-direction-should-flooring-run",
  "can-engineered-hardwood-go-over-concrete",
  "why-is-my-laminate-floor-separating",
  "why-are-my-carpet-seams-visible"
];

const authorityHubSlugs = [
  "flooring-separation-problems",
  "flooring-movement-problems",
  "concrete-floor-problems",
  "flooring-moisture-problems"
];

const planningTools = tools.filter((tool) =>
  ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"].includes(tool.slug)
);

export default function GuidesIndexPage() {
  const ecosystemSummaries = guideEcosystems
    .map((ecosystem) => {
      const coreGuides = getPrimaryGuidesByEcosystem(ecosystem.slug);
      const relatedGuides = getSecondaryGuidesByEcosystem(ecosystem.slug);

      return {
        ecosystem,
        coreGuides,
        relatedGuides,
        totalGuideCount: coreGuides.length + relatedGuides.length
      };
    })
    .filter((summary) => summary.totalGuideCount > 0);
  const startHereGuides = startHereGuideSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
  const authorityHubs = authorityHubSlugs
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
  const troubleshootingGuides = getTroubleshootingGuides();

  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Guides" }
          ]}
        />
        <div className="border-b border-line pb-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <SectionHeading
              eyebrow="Guides"
              title="Flooring planning guides"
              description="Practical flooring articles for measuring rooms, estimating waste, planning carpet seams, choosing transitions, and checking installation details before you buy."
              headingLevel="h1"
            />
            <div className="rounded-lg border border-line bg-field p-3.5 shadow-sm">
              <GuideTypeSelect options={ecosystemSummaries.map((summary) => summary.ecosystem)} />
              <div className="mt-3 border-t border-line pt-3">
                <p className="text-sm leading-6 text-slate-600">
                  Not sure what material category fits your issue? Browse flooring problems by symptom.
                </p>
                <Link
                  href="/guides/browse-problems"
                  className="mt-2 inline-flex rounded-md bg-accent-700 px-3 py-2 text-sm font-bold text-white transition hover:bg-accent-800"
                >
                  Browse Problems
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Browse by flooring type</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Open the flooring type that matches your project. Each hub keeps material-specific guides, calculators, and common problems together.
              </p>
            </div>
            <Link href="/guides/troubleshooting" className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
              Troubleshooting hub
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {ecosystemSummaries.map(({ ecosystem, totalGuideCount }) => {
              return (
                <Link
                  key={ecosystem.slug}
                  href={`/guides/ecosystems/${ecosystem.slug}`}
                  className="flooring-card group rounded-lg border border-line bg-white p-3 pt-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                      <FlooringIcon name={ecosystem.slug === "carpet-padding" ? "carpet" : "layers"} />
                    </span>
                    <span className="rounded-md bg-field px-2 py-1 text-xs font-bold text-slate-600">{totalGuideCount} guides</span>
                  </div>
                  <h3 className="mt-3 text-base font-black text-ink group-hover:text-accent-700">{ecosystem.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{ecosystem.description}</p>
                  <span className="mt-3 inline-flex text-sm font-bold text-accent-700 group-hover:text-accent-600">View guide hub</span>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Authority hubs</p>
              <h2 className="mt-2 text-xl font-black tracking-normal text-ink sm:text-2xl">Start with the main problem cluster</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Use these hubs when the symptom overlaps several flooring types, such as gaps, movement, moisture, or concrete slab conditions.
              </p>
            </div>
            <Link href="/guides/browse-problems" className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
              Browse by symptom
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {authorityHubs.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Start here</p>
              <h2 className="mt-2 text-xl font-black tracking-normal text-ink sm:text-2xl">Common flooring questions</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                A compact starting set for measurements, direction, concrete, movement, and carpet seam questions.
              </p>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {startHereGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Troubleshooting</p>
              <h2 className="mt-2 text-xl font-black tracking-normal text-ink sm:text-2xl">Solve common flooring problems</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Problem-based guides for clicking, squeaking, lifting, buckling, visible seams, moving transitions, hollow sounds, gaps, and cupping.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/guides/browse-problems" className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
                Browse by problem
              </Link>
              <Link href="/guides/troubleshooting" className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
                View troubleshooting
              </Link>
            </div>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {troubleshootingGuides.slice(0, 4).map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>

        <div className="mt-8 border-t border-line pt-7">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Calculators</p>
              <h2 className="mt-2 text-xl font-black tracking-normal text-ink sm:text-2xl">Start with measurements before choosing materials</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Estimate square footage, waste, and transition lengths, then open the flooring type hub that matches the project.
              </p>
              <Link href="/tools" className="mt-4 inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
                Open all calculators
              </Link>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {planningTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

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

const featuredGuides = [
  "how-much-flooring-do-i-need",
  "lvp-waste-percentage-guide",
  "luxury-vinyl-over-tile",
  "flooring-transition-guide"
];

const planningTools = tools.filter((tool) =>
  ["flooring-square-footage-calculator", "waste-calculator", "transition-estimator"].includes(tool.slug)
);

export default function GuidesIndexPage() {
  const featured = featuredGuides
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));
  const troubleshootingGuides = getTroubleshootingGuides();

  return (
    <section className="bg-white py-10 sm:py-12">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Guides" }
          ]}
        />
        <div className="border-b border-line pb-6">
          <SectionHeading
            eyebrow="Guides"
            title="Flooring planning guides"
            description="Practical flooring articles for measuring rooms, estimating waste, planning carpet seams, choosing transitions, and checking installation details before you buy."
            headingLevel="h1"
          />
        </div>

        <div className="mt-8" id="guide-categories">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-end">
            <div>
              <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Browse by flooring type</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Choose the flooring type you are planning so the right measuring, waste, transition, and installation articles stay together.
              </p>
            </div>
            <GuideTypeSelect options={guideEcosystems} />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {guideEcosystems.map((ecosystem) => {
              const coreGuides = getPrimaryGuidesByEcosystem(ecosystem.slug);
              const relatedGuides = getSecondaryGuidesByEcosystem(ecosystem.slug);

              return (
                <Link
                  key={ecosystem.slug}
                  href={`/guides/ecosystems/${ecosystem.slug}`}
                  className="flooring-card group rounded-lg border border-line bg-white p-4 pt-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                      <FlooringIcon name={ecosystem.slug === "carpet-padding" ? "carpet" : "layers"} />
                    </span>
                    <span className="rounded-md bg-field px-2 py-1 text-xs font-bold text-slate-600">
                      {coreGuides.length} guides
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-black text-ink group-hover:text-accent-700">{ecosystem.title}</h3>
                  <p className="mt-2.5 text-sm leading-6 text-slate-600">{ecosystem.description}</p>
                  {relatedGuides.length > 0 ? (
                    <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {relatedGuides.length} also relevant
                    </p>
                  ) : null}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Troubleshooting</p>
              <h2 className="mt-2 text-xl font-black tracking-normal text-ink sm:text-2xl">Solve common flooring problems</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Find problem-based guides for clicking floors, visible seams, lifting LVP, moving transitions, hollow sounds, gaps, and cupping.
              </p>
            </div>
            <Link href="/guides/troubleshooting" className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
              View troubleshooting guides
            </Link>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {troubleshootingGuides.slice(0, 4).map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-accent-600">Calculators</p>
              <h2 className="mt-2 text-xl font-black tracking-normal text-ink sm:text-2xl">Start with measurements before choosing materials</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Use calculators to estimate square footage, waste, and transition lengths, then move into the guide section that matches the flooring type.
              </p>
              <Link href="/tools" className="mt-4 inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
                Open all calculators
              </Link>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {planningTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-line pt-8">
          <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Featured flooring guides</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Start with the guides that support the most common measuring, waste, subfloor, and transition decisions.
          </p>
          <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-10 border-t border-line pt-8">
          {guideEcosystems.map((ecosystem) => {
            const coreGuides = getPrimaryGuidesByEcosystem(ecosystem.slug);
            const relatedGuides = getSecondaryGuidesByEcosystem(ecosystem.slug);

            return (
              <section key={ecosystem.slug} id={ecosystem.slug} className="scroll-mt-24">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-accent-600">{ecosystem.shortTitle}</p>
                    <h2 className="mt-2 text-xl font-black tracking-normal text-ink sm:text-2xl">{ecosystem.title}</h2>
                    <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">{ecosystem.description}</p>
                  </div>
                  <Link
                    href={`/guides/ecosystems/${ecosystem.slug}`}
                    className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600"
                  >
                    View all {ecosystem.shortTitle} guides
                  </Link>
                </div>
                {coreGuides.length > 0 ? (
                  <div className="mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    {coreGuides.slice(0, 6).map((guide) => (
                      <GuideCard key={guide.slug} guide={guide} />
                    ))}
                  </div>
                ) : (
                  <div className="mt-5 rounded-lg border border-dashed border-line bg-field p-5 text-sm leading-6 text-slate-600">
                    Guides for this flooring type are planned for a future editorial pass.
                  </div>
                )}
                {relatedGuides.length > 0 ? (
                  <div className="mt-5 rounded-lg border border-line bg-field p-4">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-slate-500">Also relevant</h3>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {relatedGuides.slice(0, 4).map((guide) => (
                        <Link
                          key={guide.slug}
                          href={`/guides/${guide.slug}`}
                          className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:text-accent-700"
                        >
                          {guide.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </section>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

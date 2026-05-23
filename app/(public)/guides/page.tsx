import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { GuideTypeSelect } from "@/components/GuideTypeSelect";
import { SectionHeading } from "@/components/SectionHeading";
import { guideEcosystems } from "@/data/ecosystems";
import { guides } from "@/data/guides";
import { getPrimaryGuidesByEcosystem, getSecondaryGuidesByEcosystem } from "@/lib/content/paths";
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

export default function GuidesIndexPage() {
  const featured = featuredGuides
    .map((slug) => guides.find((guide) => guide.slug === slug))
    .filter((guide): guide is (typeof guides)[number] => Boolean(guide));

  return (
    <section className="bg-white py-14 sm:py-16">
      <Container>
        <div className="grid gap-6 border-b border-line pb-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
          <SectionHeading
            eyebrow="Guides"
            title="Flooring planning guides"
            description="Practical flooring articles for measuring rooms, estimating waste, planning carpet seams, choosing transitions, and checking installation details before you buy."
            headingLevel="h1"
          />
          <GuideTypeSelect options={guideEcosystems} />
        </div>

        <div className="mt-10" id="guide-categories">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-normal text-ink">Browse by flooring type</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Choose the flooring type you are planning so the right measuring, waste, transition, and installation articles stay together.
              </p>
            </div>
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {guideEcosystems.map((ecosystem) => {
              const coreGuides = getPrimaryGuidesByEcosystem(ecosystem.slug);
              const relatedGuides = getSecondaryGuidesByEcosystem(ecosystem.slug);

              return (
                <Link
                  key={ecosystem.slug}
                  href={`/guides/ecosystems/${ecosystem.slug}`}
                  className="flooring-card group rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                      <FlooringIcon name={ecosystem.slug === "carpet-padding" ? "carpet" : "layers"} />
                    </span>
                    <span className="rounded-md bg-field px-2 py-1 text-xs font-bold text-slate-600">
                      {coreGuides.length} guides
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-black text-ink group-hover:text-accent-700">{ecosystem.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{ecosystem.description}</p>
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

        <div className="mt-14 border-t border-line pt-10">
          <h2 className="text-2xl font-black tracking-normal text-ink">Featured flooring guides</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Start with the guides that support the most common measuring, waste, subfloor, and transition decisions.
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {featured.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-12 border-t border-line pt-10">
          {guideEcosystems.map((ecosystem) => {
            const coreGuides = getPrimaryGuidesByEcosystem(ecosystem.slug);
            const relatedGuides = getSecondaryGuidesByEcosystem(ecosystem.slug);

            return (
              <section key={ecosystem.slug} id={ecosystem.slug} className="scroll-mt-24">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-sm font-bold uppercase tracking-wide text-accent-600">{ecosystem.shortTitle}</p>
                    <h2 className="mt-2 text-2xl font-black tracking-normal text-ink">{ecosystem.title}</h2>
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
                  <div className="mt-5 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
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

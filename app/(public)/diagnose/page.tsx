import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { FlooringProblemFinder, type ProblemFinderLink, type ProblemFinderOption } from "@/components/FlooringProblemFinder";
import { diagnosisOptions } from "@/data/diagnose";
import { getGuideBySlug, getRelatedTools } from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Problem Finder",
  description:
    "Use this simple flooring problem finder to choose a symptom and find practical troubleshooting guides, calculators, and authority hubs.",
  path: "/diagnose"
});

function resolveGuideLinks(slugs: (typeof diagnosisOptions)[number]["recommendedGuides"]): ProblemFinderLink[] {
  return slugs.flatMap((slug) => {
    const guide = getGuideBySlug(slug);

    return guide
      ? [
          {
            href: `/guides/${guide.slug}`,
            label: guide.title,
            description: guide.description
          }
        ]
      : [];
  });
}

function resolveToolLinks(slugs: (typeof diagnosisOptions)[number]["relatedCalculators"]): ProblemFinderLink[] {
  return getRelatedTools(slugs).map((tool) => ({
    href: `/tools/${tool.slug}`,
    label: tool.title,
    description: tool.description
  }));
}

function resolveFinderOptions(): ProblemFinderOption[] {
  return diagnosisOptions.map((option) => ({
    id: option.id,
    label: option.label,
    summary: option.summary,
    whatItUsuallyMeans: option.whatItUsuallyMeans,
    seriousness: option.seriousness,
    likelyCauses: option.likelyCauses,
    checkFirst: option.checkFirst,
    whenSerious: option.whenSerious,
    recommendedGuides: resolveGuideLinks(option.recommendedGuides),
    relatedCalculators: resolveToolLinks(option.relatedCalculators),
    relatedChecklists: resolveGuideLinks(option.relatedChecklists),
    relatedHubs: resolveGuideLinks(option.relatedHubs)
  }));
}

export default function DiagnosePage() {
  const finderOptions = resolveFinderOptions();

  return (
    <>
      <section className="bg-white py-8 sm:py-10">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Problem Finder" }
            ]}
          />
          <div className="grid gap-6 border-b border-line pb-7 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                  <FlooringIcon name="shield" className="h-4 w-4" />
                </span>
                Flooring problem finder
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">Find the right flooring troubleshooting path</h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Choose the symptom that best matches the floor problem. This guided selector points you to likely causes,
                useful calculators, and the best FloorCalc Pro guides to read next.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-field p-3.5 shadow-sm">
              <h2 className="text-lg font-black text-ink">How to use it</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Start with what you can see or hear: clicking, separation, buckling, moisture, concrete slab issues,
                carpet seams, or tile cracking. Then follow the recommended guide path.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/decision-trees" className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:text-accent-700">
                  Guided decision trees
                </Link>
                <Link href="/guides/troubleshooting" className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:text-accent-700">
                  Troubleshooting hub
                </Link>
                <Link href="/guides/browse-problems" className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:text-accent-700">
                  Browse problems
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-field py-8 sm:py-10">
        <Container>
          <FlooringProblemFinder options={finderOptions} />
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <div className="rounded-lg border border-line bg-field p-4 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Safety and inspection path</p>
            <h2 className="mt-2 text-2xl font-black tracking-normal text-ink">Is this something to worry about?</h2>
            <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600">
              Flooring symptoms range from cosmetic to serious. Use the symptom finder to pick the closest starting point, then
              decide whether the issue looks visual, installation-related, moisture-related, or possibly structural.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Cosmetic or minor",
                  body: "Small seam visibility, light seasonal gaps, or a normal floating-floor sound may only need monitoring or better planning."
                },
                {
                  title: "Installation issue",
                  body: "Clicking, lifting, peaking, or buckling can point to expansion space, underlayment, subfloor support, or product-specific installation requirements."
                },
                {
                  title: "Moisture warning signs",
                  body: "Swelling, odor, soft spots, cupping, adhesive release, or recurring slab issues should be treated as moisture clues until ruled out."
                },
                {
                  title: "Possible structural concern",
                  body: "Strong bounce, sagging, cracked tile, spreading movement, stair concerns, or joist/subfloor movement may need a contractor or structural professional."
                }
              ].map((item) => (
                <div key={item.title} className="rounded-md border border-line bg-white p-3">
                  <h3 className="text-sm font-black text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{item.body}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">
              Call a flooring professional when the repair requires lifting flooring, checking moisture, replacing damaged material,
              or evaluating installation conditions. Call a qualified contractor or structural professional when the floor feels unsafe,
              sagging, strongly bouncy, or connected to framing, beams, stairs, or a large soft area.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <p className="font-black">Planning note</p>
            <p className="mt-1">
              This problem finder is a navigation tool, not a professional diagnosis. Moisture limits, subfloor tolerances,
              repair methods, and installation requirements vary by product and project conditions.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

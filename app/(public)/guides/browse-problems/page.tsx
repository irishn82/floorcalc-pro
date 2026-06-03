import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { ProblemSymptomSelector } from "@/components/ProblemSymptomSelector";
import { SectionHeading } from "@/components/SectionHeading";
import { getResolvedProblemBrowseSections } from "@/lib/content/problem-navigation";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Browse Flooring Problems by Symptom",
  description:
    "Browse flooring problems by symptom, including clicking, lifting, buckling, moisture, concrete slab issues, carpet seams, tile cracks, and transition problems.",
  path: "/guides/browse-problems"
});

export default function BrowseProblemsPage() {
  const problemSections = getResolvedProblemBrowseSections();

  return (
    <>
      <section className="bg-white py-8 sm:py-10">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/guides", label: "Guides" },
              { label: "Browse Problems" }
            ]}
          />
          <div className="border-b border-line pb-7">
            <SectionHeading
              eyebrow="Problem Finder"
              title="Browse flooring problems by symptom"
              description="Not sure which flooring type or guide category fits? Start with what you are seeing, then move into the closest troubleshooting guide."
              headingLevel="h1"
            />
            <div className="mt-4 inline-flex flex-wrap items-center gap-3 rounded-lg border border-accent-100 bg-accent-50 px-3 py-2 text-sm text-slate-700">
              <span className="font-bold text-ink">Want a guided path?</span>
              <Link href="/diagnose" className="font-bold text-accent-700 hover:text-accent-600">
                Open the Flooring Problem Finder
              </Link>
            </div>
            <div className="mt-5 max-w-5xl">
              <ProblemSymptomSelector showHubLink={false} />
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-field py-8">
        <Container>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Problem families</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                Each section keeps related symptoms together so you can move from a problem to a cause, a calculator, and the next useful guide.
              </p>
            </div>
            <Link href="/guides/troubleshooting" className="text-sm font-bold text-accent-700 hover:text-accent-600">
              Open troubleshooting hub
            </Link>
          </div>

          <div className="mt-5 space-y-5">
            {problemSections.map((section) => (
              <section key={section.slug} id={section.slug} className="rounded-lg border border-line bg-white p-3.5 shadow-sm">
                <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Problem category</p>
                    <h3 className="mt-1 text-xl font-black text-ink">{section.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{section.description}</p>
                  </div>
                  <div className="flex shrink-0 flex-wrap gap-2">
                    {section.tools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="rounded-md border border-line bg-field px-3 py-2 text-xs font-bold uppercase tracking-wide text-slate-700 transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
                      >
                        {tool.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                  {section.guides.map((guide) => (
                    <Link
                      key={guide.slug}
                      href={`/guides/${guide.slug}`}
                      className="group rounded-md border border-line bg-field p-3 transition hover:border-accent-100 hover:bg-white"
                    >
                      <span className="inline-flex items-center gap-2 text-sm font-black text-ink group-hover:text-accent-700">
                        <FlooringIcon name={guide.slug.includes("carpet") ? "carpet" : "guide"} className="h-4 w-4 text-accent-700" />
                        {guide.title}
                      </span>
                      <span className="mt-1 block text-sm leading-6 text-slate-600">{guide.description}</span>
                    </Link>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <div className="rounded-lg border border-line bg-field p-4 shadow-sm">
            <h2 className="text-xl font-black text-ink">Use this as a diagnosis starting point</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
              Flooring symptoms often overlap. Clicking, lifting, gaps, moisture, and hollow sounds can all point back to jobsite
              conditions, subfloor prep, expansion space, product compatibility, or installer judgment. Use the guides to narrow
              the issue, then verify product instructions and field conditions before repair or ordering material.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}

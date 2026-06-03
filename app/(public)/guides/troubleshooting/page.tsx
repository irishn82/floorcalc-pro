import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { NextStepPanel } from "@/components/NextStepPanel";
import { ProblemSymptomSelector } from "@/components/ProblemSymptomSelector";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { TroubleshootingLinkGrid } from "@/components/troubleshooting/TroubleshootingLinkGrid";
import { getRelatedGuides, getRelatedTools } from "@/lib/content/paths";
import { troubleshootingProblemGroups } from "@/lib/content/troubleshooting-flow";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Troubleshooting Guides",
  description:
    "Find practical flooring troubleshooting guides for clicking floors, visible carpet seams, LVP lifting, loose transitions, hollow floors, laminate gaps, and hardwood cupping.",
  path: "/guides/troubleshooting"
});

const troubleshootingTools = getRelatedTools([
  "flooring-square-footage-calculator",
  "waste-calculator",
  "carpet-seam-planner",
  "transition-estimator"
]);

export default function TroubleshootingGuidesPage() {
  return (
    <>
      <section className="bg-white py-8 sm:py-10">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/guides", label: "Guides" },
              { label: "Troubleshooting" }
            ]}
          />
          <div className="grid gap-6 border-b border-line pb-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <SectionHeading
              eyebrow="Troubleshooting"
              title="Flooring problem guides"
              description="Start here when a floor is clicking, lifting, separating, sounding hollow, showing carpet seams, or causing transition problems."
              headingLevel="h1"
            />
            <div className="rounded-lg border border-line bg-field p-3.5">
              <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
                <FlooringIcon name="shield" className="h-5 w-5 text-accent-700" />
                What to do first
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Start with the jobsite conditions: identify the flooring type, mark where the problem repeats, check for moisture
                or movement, and avoid forcing repairs before the cause is clear.
              </p>
              <Link href="/guides/browse-problems" className="mt-3 inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
                Browse problems by symptom
              </Link>
              <Link href="/diagnose" className="ml-4 mt-3 inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
                Use problem finder
              </Link>
            </div>
          </div>

          <div className="mt-6">
            <ProblemSymptomSelector compact />
          </div>

          <div className="mt-7">
            <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Troubleshooting by flooring type</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Start with the material and symptom, then use the related calculator or prep guide to narrow the likely cause.
            </p>
            <div className="mt-5 space-y-5">
              {troubleshootingProblemGroups.map((group) => {
                const groupGuides = getRelatedGuides(group.guideSlugs);
                const groupTools = getRelatedTools(group.toolSlugs);

                return (
                  <section key={group.slug} className="rounded-lg border border-line bg-field p-3.5 shadow-sm">
                    <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Problem ecosystem</p>
                        <h3 className="mt-1 text-xl font-black text-ink">{group.title}</h3>
                        <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{group.description}</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                      {groupGuides.map((guide) => (
                        <GuideCard key={guide.slug} guide={guide} />
                      ))}
                    </div>
                    <div className="mt-4">
                      <TroubleshootingLinkGrid
                        title="Related calculators"
                        links={groupTools.map((tool) => ({
                          href: `/tools/${tool.slug}`,
                          label: tool.title,
                          description: tool.description
                        }))}
                      />
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-field py-8">
        <Container>
          <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Useful calculators while troubleshooting</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            Rechecking measurements, waste, seams, and transition lengths can help you explain the issue clearly before a repair or installer visit.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {troubleshootingTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      <NextStepPanel
        description="If you are still planning the project, start with measurement and waste calculators before choosing materials or transitions."
        primaryLink={{ href: "/tools", label: "Open flooring calculators" }}
        secondaryLinks={[
          { href: "/guides", label: "Browse all guides" },
          { href: "/guides/ecosystems/lvp", label: "LVP guides" },
          { href: "/guides/ecosystems/carpet-padding", label: "Carpet guides" }
        ]}
      />

      <section className="bg-white pb-8">
        <Container>
          <DisclaimerBox>
            Troubleshooting guides are for planning and conversation only. Product compatibility, repair methods, moisture limits,
            adhesive requirements, subfloor tolerances, and product-specific requirements vary by manufacturer and project conditions.
          </DisclaimerBox>
        </Container>
      </section>
    </>
  );
}

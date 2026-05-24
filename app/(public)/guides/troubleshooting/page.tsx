import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { NextStepPanel } from "@/components/NextStepPanel";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { guideEcosystems } from "@/data/ecosystems";
import { getRelatedTools, getTroubleshootingGuides } from "@/lib/content/paths";
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
  const troubleshootingGuides = getTroubleshootingGuides();
  const nearbyEcosystems = guideEcosystems.filter((ecosystem) =>
    ["lvp", "laminate", "hardwood-engineered-hardwood", "tile", "carpet-padding", "planning-measuring-transitions"].includes(
      ecosystem.slug
    )
  );

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
            <div className="rounded-lg border border-line bg-field p-4">
              <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
                <FlooringIcon name="shield" className="h-5 w-5 text-accent-700" />
                What to do first
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Identify the flooring type, mark where the problem repeats, check for moisture or movement, and avoid forcing repairs
                before the cause is clear.
              </p>
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Problem-based guides</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              These articles focus on high-intent homeowner problems and connect back to the calculators and flooring type guides that help with next steps.
            </p>
            <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {troubleshootingGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>

          <div className="mt-8 border-t border-line pt-7">
            <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Troubleshooting by flooring type</h2>
            <div className="mt-5 grid gap-3 md:grid-cols-3">
              {nearbyEcosystems.map((ecosystem) => (
                <Link
                  key={ecosystem.slug}
                  href={`/guides/ecosystems/${ecosystem.slug}`}
                  className="rounded-lg border border-line bg-field p-4 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
                >
                  {ecosystem.title}
                  <span className="mt-2 block font-normal leading-6 text-slate-600">{ecosystem.description}</span>
                </Link>
              ))}
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
            adhesive requirements, subfloor tolerances, and warranty-related requirements vary by manufacturer and project conditions.
          </DisclaimerBox>
        </Container>
      </section>
    </>
  );
}

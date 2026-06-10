import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AuthorityHubPathways } from "@/components/AuthorityHubPathways";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BrowseRelatedProblems } from "@/components/BrowseRelatedProblems";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQSection } from "@/components/FAQSection";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideUtilityVisual } from "@/components/GuideUtilityVisual";
import { IndustryReferences } from "@/components/IndustryReferences";
import { JsonLd } from "@/components/JsonLd";
import { NextStepPanel } from "@/components/NextStepPanel";
import { ProblemSymptomSelector } from "@/components/ProblemSymptomSelector";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TableOfContents } from "@/components/TableOfContents";
import { NextRecommendedSteps } from "@/components/troubleshooting/NextRecommendedSteps";
import { TroubleshootingGuideFlow } from "@/components/troubleshooting/TroubleshootingGuideFlow";
import { getAuthorityHubPathway } from "@/data/authority-hubs";
import { guides } from "@/data/guides";
import type { GuideSection, GuideSlug, ToolSlug } from "@/data/types";
import {
  getEcosystemRelatedGuides,
  getGuideBySlug,
  getGuideEcosystemLinks,
  getRelatedGuides,
  getRelatedTools,
  getTroubleshootingGuidesForGuide
} from "@/lib/content/paths";
import { getGuideIndustryReferences } from "@/lib/content/industry-references";
import { getRelatedProblemLinksForGuide } from "@/lib/content/problem-navigation";
import { getTroubleshootingFlow } from "@/lib/content/troubleshooting-flow";
import { createSeoMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, breadcrumbListJsonLd, faqJsonLd, howToJsonLd } from "@/lib/seo/schema";
import { guideHowToSteps } from "@/lib/seo/howto-steps";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

type NextStepTarget = { type: "guide"; slug: GuideSlug } | { type: "tool"; slug: ToolSlug };
type ResourceLink = {
  href: string;
  label: string;
  description?: string;
};

const troubleshootingFlowDuplicateSectionIds = new Set(["common-causes", "what-to-check-first", "when-to-call-a-professional"]);
const problemFinderCalloutSlugs = new Set<GuideSlug>([
  "which-direction-should-flooring-run",
  "what-is-pattern-match-in-carpet",
  "can-you-install-lvp-over-concrete",
  "how-to-test-concrete-moisture",
  "clicking-vs-lifting-flooring",
  "buckling-vs-peaking-flooring",
  "cupping-vs-crowning-hardwood",
  "moisture-vs-acclimation-problems",
  "flooring-symptom-comparison-guide",
  "flooring-problem-comparison-guide"
]);

function uniqueLinks(links: ResourceLink[]) {
  const seen = new Set<string>();

  return links.filter((link) => {
    if (seen.has(link.href)) {
      return false;
    }

    seen.add(link.href);
    return true;
  });
}

function GuideSectionContent({ section }: { section: GuideSection }) {
  return (
    <section id={section.id} className="scroll-mt-24">
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul>
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.comparisonTable ? (
        <div className="not-prose my-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
              <thead className="bg-slate-50 text-xs font-extrabold uppercase tracking-[0.08em] text-slate-600">
                <tr>
                  {section.comparisonTable.columns.map((column) => (
                    <th key={column} scope="col" className="whitespace-nowrap px-4 py-3">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                {section.comparisonTable.rows.map((row) => (
                  <tr key={row.join("|")}>
                    {row.map((cell, index) => (
                      <td key={`${row.join("|")}-${index}`} className="min-w-40 px-4 py-3 align-top leading-6">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}
      {section.subsections?.map((subsection) => (
        <div key={subsection.title}>
          <h3>{subsection.title}</h3>
          {subsection.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {subsection.bullets ? (
            <ul>
              {subsection.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </div>
      ))}
    </section>
  );
}

const targetedNextStepTargets: Partial<
  Record<
    GuideSlug,
    {
      primary: NextStepTarget;
      secondary: NextStepTarget[];
    }
  >
> = {
  "can-engineered-hardwood-go-over-concrete": {
    primary: { type: "tool", slug: "flooring-square-footage-calculator" },
    secondary: [
      { type: "guide", slug: "engineered-hardwood-installation-checklist" },
      { type: "guide", slug: "concrete-slab-flooring-guide" },
      { type: "guide", slug: "concrete-floor-problems" },
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "why-is-moisture-coming-through-my-slab" },
      { type: "guide", slug: "moisture-barrier-engineered-hardwood-over-concrete" },
      { type: "guide", slug: "floating-vs-glue-down-engineered-hardwood-over-concrete" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "what-happens-if-flooring-is-installed-too-soon" },
      { type: "guide", slug: "best-underlayment-for-concrete-floors" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "why-is-my-laminate-floor-separating": {
    primary: { type: "guide", slug: "laminate-floor-separating-what-to-check-first" },
    secondary: [
      { type: "guide", slug: "flooring-separation-problems" },
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "laminate-installation-checklist" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-laminate-floor-buckling" },
      { type: "guide", slug: "why-are-my-flooring-joints-opening" },
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "why-is-my-floor-expanding" },
      { type: "guide", slug: "why-is-my-floor-bouncing" },
      { type: "guide", slug: "why-is-my-floor-squeaking" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "how-flat-should-a-subfloor-be-for-laminate" },
      { type: "guide", slug: "best-underlayment-for-laminate-flooring" },
      { type: "guide", slug: "flooring-direction-mistakes" },
      { type: "guide", slug: "why-is-my-floor-clicking" }
    ]
  },
  "which-direction-should-flooring-run": {
    primary: { type: "tool", slug: "waste-calculator" },
    secondary: [
      { type: "tool", slug: "transition-estimator" },
      { type: "guide", slug: "flooring-direction-mistakes" },
      { type: "guide", slug: "why-are-my-flooring-joints-opening" },
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" },
      { type: "guide", slug: "flooring-transition-guide" },
      { type: "tool", slug: "flooring-square-footage-calculator" }
    ]
  },
  "how-long-should-hardwood-acclimate": {
    primary: { type: "guide", slug: "hardwood-installation-humidity" },
    secondary: [
      { type: "guide", slug: "engineered-hardwood-installation-checklist" },
      { type: "guide", slug: "hardwood-acclimation-mistakes" },
      { type: "guide", slug: "what-happens-if-flooring-is-installed-too-soon" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "why-is-my-engineered-hardwood-separating" },
      { type: "guide", slug: "why-is-my-hardwood-floor-crowning" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" },
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" },
      { type: "guide", slug: "moisture-barrier-engineered-hardwood-over-concrete" }
    ]
  },
  "can-you-install-lvp-over-concrete": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "lvp-installation-checklist" },
      { type: "guide", slug: "concrete-slab-flooring-guide" },
      { type: "guide", slug: "concrete-floor-problems" },
      { type: "guide", slug: "best-underlayment-for-concrete-floors" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "why-is-moisture-coming-through-my-slab" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "why-is-my-lvp-floor-buckling" },
      { type: "guide", slug: "why-are-my-lvp-seams-showing" },
      { type: "guide", slug: "why-is-my-floor-expanding" },
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "clicking-vs-lifting-flooring": {
    primary: { type: "guide", slug: "flooring-movement-problems" },
    secondary: [
      { type: "guide", slug: "why-is-my-lvp-floor-clicking" },
      { type: "guide", slug: "why-is-my-lvp-lifting" },
      { type: "guide", slug: "flooring-separation-problems" },
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "buckling-vs-peaking-flooring": {
    primary: { type: "guide", slug: "flooring-movement-problems" },
    secondary: [
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" },
      { type: "guide", slug: "why-is-my-lvp-floor-buckling" },
      { type: "guide", slug: "why-is-my-laminate-floor-buckling" },
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "flooring-separation-problems" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "cupping-vs-crowning-hardwood": {
    primary: { type: "guide", slug: "flooring-moisture-problems" },
    secondary: [
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" },
      { type: "guide", slug: "why-is-my-hardwood-floor-crowning" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "hardwood-installation-humidity" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "moisture-vs-acclimation-problems" }
    ]
  },
  "moisture-vs-acclimation-problems": {
    primary: { type: "guide", slug: "flooring-moisture-problems" },
    secondary: [
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "hardwood-acclimation-mistakes" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" }
    ]
  },
  "flooring-problem-comparison-guide": {
    primary: { type: "guide", slug: "flooring-movement-problems" },
    secondary: [
      { type: "guide", slug: "flooring-symptom-comparison-guide" },
      { type: "guide", slug: "clicking-vs-lifting-flooring" },
      { type: "guide", slug: "buckling-vs-peaking-flooring" },
      { type: "guide", slug: "cupping-vs-crowning-hardwood" },
      { type: "guide", slug: "moisture-vs-acclimation-problems" },
      { type: "guide", slug: "flooring-separation-problems" },
      { type: "guide", slug: "concrete-floor-problems" }
    ]
  },
  "flooring-symptom-comparison-guide": {
    primary: { type: "guide", slug: "flooring-problem-comparison-guide" },
    secondary: [
      { type: "guide", slug: "clicking-vs-lifting-flooring" },
      { type: "guide", slug: "buckling-vs-peaking-flooring" },
      { type: "guide", slug: "cupping-vs-crowning-hardwood" },
      { type: "guide", slug: "moisture-vs-acclimation-problems" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "flooring-separation-problems" },
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "concrete-floor-problems" }
    ]
  },
  "why-is-my-lvp-floor-clicking": {
    primary: { type: "guide", slug: "why-is-my-lvp-floor-separating" },
    secondary: [
      { type: "guide", slug: "why-is-my-lvp-lifting" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "best-underlayment-for-lvp" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "tool", slug: "flooring-square-footage-calculator" }
    ]
  },
  "why-is-my-floor-squeaking": {
    primary: { type: "guide", slug: "why-does-my-floor-feel-hollow" },
    secondary: [
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-floor-clicking" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" }
    ]
  },
  "moisture-level-too-high-for-flooring": {
    primary: { type: "guide", slug: "moisture-barrier-engineered-hardwood-over-concrete" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "can-high-humidity-damage-flooring" },
      { type: "guide", slug: "ideal-humidity-for-flooring" },
      { type: "guide", slug: "signs-of-moisture-damage-under-flooring" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" }
    ]
  },
  "why-is-my-lvp-floor-peaking": {
    primary: { type: "guide", slug: "why-is-my-lvp-floor-separating" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-lvp-lifting" },
      { type: "guide", slug: "can-you-install-cabinets-over-floating-lvp" },
      { type: "guide", slug: "why-is-my-floor-expanding" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "why-is-my-hardwood-floor-crowning": {
    primary: { type: "guide", slug: "why-is-my-hardwood-floor-cupping" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "hardwood-acclimation-mistakes" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" }
    ]
  },
  "best-underlayment-for-concrete-floors": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "best-underlayment-for-laminate-flooring" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "why-is-my-lvp-floor-separating": {
    primary: { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-lvp-floor-buckling" },
      { type: "guide", slug: "why-are-my-lvp-seams-showing" },
      { type: "guide", slug: "why-is-my-lvp-floor-clicking" },
      { type: "guide", slug: "why-is-my-lvp-lifting" },
      { type: "guide", slug: "can-you-install-cabinets-over-floating-lvp" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "why-is-my-laminate-floor-buckling": {
    primary: { type: "guide", slug: "why-is-my-laminate-floor-separating" },
    secondary: [
      { type: "guide", slug: "why-are-my-flooring-joints-opening" },
      { type: "guide", slug: "why-is-my-floor-bouncing" },
      { type: "guide", slug: "how-flat-should-a-subfloor-be-for-laminate" },
      { type: "guide", slug: "best-underlayment-for-laminate-flooring" },
      { type: "guide", slug: "can-laminate-flooring-be-waterproof" }
    ]
  },
  "why-is-my-hardwood-floor-gapping": {
    primary: { type: "guide", slug: "how-long-should-hardwood-acclimate" },
    secondary: [
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "hardwood-installation-humidity" },
      { type: "guide", slug: "why-is-my-engineered-hardwood-separating" },
      { type: "guide", slug: "hardwood-acclimation-mistakes" },
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" }
    ]
  },
  "why-is-my-carpet-wrinkling-or-buckling": {
    primary: { type: "guide", slug: "carpet-padding-thickness-guide" },
    secondary: [
      { type: "tool", slug: "carpet-seam-planner" },
      { type: "guide", slug: "why-are-my-carpet-seams-visible" },
      { type: "guide", slug: "carpet-seam-direction-guide" }
    ]
  },
  "why-is-my-tile-cracking": {
    primary: { type: "guide", slug: "how-flat-should-a-floor-be-for-tile" },
    secondary: [
      { type: "guide", slug: "tile-installation-checklist" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "common-basement-flooring-problems" },
      { type: "guide", slug: "tile-layout-planning-guide" },
      { type: "guide", slug: "can-you-install-tile-over-tile" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "how-to-test-concrete-moisture": {
    primary: { type: "guide", slug: "moisture-level-too-high-for-flooring" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "concrete-slab-flooring-guide" },
      { type: "guide", slug: "concrete-floor-problems" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "why-is-moisture-coming-through-my-slab" },
      { type: "guide", slug: "concrete-slab-cracks-under-flooring" },
      { type: "guide", slug: "why-is-my-subfloor-wet" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "best-underlayment-for-concrete-floors" }
    ]
  },
  "why-flooring-fails-over-concrete": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "concrete-slab-flooring-guide" },
      { type: "guide", slug: "concrete-floor-problems" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "why-is-moisture-coming-through-my-slab" },
      { type: "guide", slug: "concrete-slab-cracks-under-flooring" },
      { type: "guide", slug: "what-happens-if-flooring-is-installed-too-soon" },
      { type: "guide", slug: "common-basement-flooring-problems" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "why-does-my-floor-feel-hollow" }
    ]
  },
  "why-is-my-floor-swelling": {
    primary: { type: "guide", slug: "why-is-my-subfloor-wet" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "can-high-humidity-damage-flooring" },
      { type: "guide", slug: "signs-of-moisture-damage-under-flooring" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "why-is-my-floor-expanding" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" }
    ]
  },
  "why-is-my-subfloor-wet": {
    primary: { type: "guide", slug: "moisture-level-too-high-for-flooring" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "signs-of-moisture-damage-under-flooring" },
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" }
    ]
  },
  "can-moisture-come-through-concrete": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "concrete-slab-flooring-guide" },
      { type: "guide", slug: "why-is-moisture-coming-through-my-slab" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" }
    ]
  },
  "why-is-my-floor-expanding": {
    primary: { type: "guide", slug: "why-are-my-flooring-joints-opening" },
    secondary: [
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" },
      { type: "guide", slug: "why-is-my-laminate-floor-buckling" },
      { type: "guide", slug: "hardwood-installation-humidity" }
    ]
  },
  "what-happens-if-flooring-is-installed-too-soon": {
    primary: { type: "guide", slug: "hardwood-acclimation-mistakes" },
    secondary: [
      { type: "guide", slug: "concrete-slab-flooring-guide" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" }
    ]
  },
  "concrete-slab-flooring-guide": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "best-flooring-for-concrete-slabs" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "concrete-slab-cracks-under-flooring" },
      { type: "tool", slug: "flooring-square-footage-calculator" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "can-concrete-be-too-dry-for-flooring": {
    primary: { type: "guide", slug: "concrete-slab-flooring-guide" },
    secondary: [
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "best-underlayment-for-concrete-floors" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "concrete-slab-cracks-under-flooring": {
    primary: { type: "guide", slug: "concrete-slab-flooring-guide" },
    secondary: [
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "why-is-my-tile-cracking" },
      { type: "guide", slug: "how-flat-should-a-floor-be-for-tile" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "why-is-moisture-coming-through-my-slab": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "concrete-slab-flooring-guide" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "common-basement-flooring-problems" },
      { type: "guide", slug: "best-underlayment-for-concrete-floors" }
    ]
  },
  "best-flooring-for-concrete-slabs": {
    primary: { type: "guide", slug: "concrete-slab-flooring-guide" },
    secondary: [
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "can-carpet-be-installed-over-concrete" },
      { type: "tool", slug: "flooring-square-footage-calculator" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "flooring-movement-problems": {
    primary: { type: "guide", slug: "why-is-my-floor-moving" },
    secondary: [
      { type: "guide", slug: "what-flooring-movement-is-normal" },
      { type: "guide", slug: "why-do-floors-expand-and-contract" },
      { type: "guide", slug: "seasonal-flooring-movement" },
      { type: "guide", slug: "why-is-my-lvp-floor-clicking" },
      { type: "guide", slug: "why-is-my-lvp-lifting" },
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" },
      { type: "guide", slug: "why-is-my-lvp-floor-buckling" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "why-is-my-engineered-hardwood-separating" },
      { type: "guide", slug: "why-is-my-floor-bouncing" },
      { type: "guide", slug: "why-is-my-floor-squeaking" },
      { type: "guide", slug: "why-does-my-floor-feel-hollow" },
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "tool", slug: "transition-estimator" }
    ]
  },
  "why-is-my-floor-moving": {
    primary: { type: "guide", slug: "flooring-movement-problems" },
    secondary: [
      { type: "guide", slug: "why-does-my-floor-feel-hollow" },
      { type: "guide", slug: "why-is-my-floor-squeaking" },
      { type: "guide", slug: "why-is-my-lvp-floor-clicking" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "why-are-my-flooring-joints-opening" },
      { type: "tool", slug: "flooring-square-footage-calculator" }
    ]
  },
  "why-do-floors-expand-and-contract": {
    primary: { type: "guide", slug: "flooring-movement-problems" },
    secondary: [
      { type: "guide", slug: "seasonal-flooring-movement" },
      { type: "guide", slug: "what-flooring-movement-is-normal" },
      { type: "guide", slug: "why-is-my-floor-expanding" },
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "seasonal-flooring-movement": {
    primary: { type: "guide", slug: "what-flooring-movement-is-normal" },
    secondary: [
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-do-floors-expand-and-contract" },
      { type: "guide", slug: "hardwood-installation-humidity" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "what-flooring-movement-is-normal": {
    primary: { type: "guide", slug: "flooring-movement-problems" },
    secondary: [
      { type: "guide", slug: "why-is-my-floor-moving" },
      { type: "guide", slug: "seasonal-flooring-movement" },
      { type: "guide", slug: "why-do-floors-expand-and-contract" },
      { type: "guide", slug: "why-is-my-lvp-floor-clicking" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" },
      { type: "tool", slug: "flooring-square-footage-calculator" }
    ]
  },
  "flooring-moisture-problems": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "concrete-floor-problems" },
      { type: "guide", slug: "flooring-separation-problems" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "can-high-humidity-damage-flooring" },
      { type: "guide", slug: "ideal-humidity-for-flooring" },
      { type: "guide", slug: "signs-of-moisture-damage-under-flooring" },
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "can-high-humidity-damage-flooring": {
    primary: { type: "guide", slug: "ideal-humidity-for-flooring" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "seasonal-flooring-movement" },
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" },
      { type: "guide", slug: "why-is-my-laminate-floor-buckling" },
      { type: "tool", slug: "flooring-square-footage-calculator" }
    ]
  },
  "ideal-humidity-for-flooring": {
    primary: { type: "guide", slug: "hardwood-installation-humidity" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "can-high-humidity-damage-flooring" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "seasonal-flooring-movement" },
      { type: "guide", slug: "what-flooring-movement-is-normal" },
      { type: "tool", slug: "waste-calculator" }
    ]
  },
  "signs-of-moisture-damage-under-flooring": {
    primary: { type: "guide", slug: "why-is-my-subfloor-wet" },
    secondary: [
      { type: "guide", slug: "flooring-moisture-problems" },
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "why-is-moisture-coming-through-my-slab" },
      { type: "guide", slug: "why-does-my-floor-feel-hollow" },
      { type: "tool", slug: "flooring-square-footage-calculator" }
    ]
  },
  "lvp-installation-checklist": {
    primary: { type: "tool", slug: "flooring-square-footage-calculator" },
    secondary: [
      { type: "tool", slug: "waste-calculator" },
      { type: "tool", slug: "transition-estimator" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "why-is-my-lvp-floor-clicking" },
      { type: "guide", slug: "flooring-movement-problems" }
    ]
  },
  "laminate-installation-checklist": {
    primary: { type: "tool", slug: "flooring-square-footage-calculator" },
    secondary: [
      { type: "tool", slug: "waste-calculator" },
      { type: "tool", slug: "transition-estimator" },
      { type: "guide", slug: "best-underlayment-for-laminate-flooring" },
      { type: "guide", slug: "how-flat-should-a-subfloor-be-for-laminate" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "flooring-movement-problems" }
    ]
  },
  "engineered-hardwood-installation-checklist": {
    primary: { type: "guide", slug: "how-long-should-hardwood-acclimate" },
    secondary: [
      { type: "tool", slug: "flooring-square-footage-calculator" },
      { type: "tool", slug: "waste-calculator" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "moisture-barrier-engineered-hardwood-over-concrete" },
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" },
      { type: "guide", slug: "flooring-movement-problems" }
    ]
  },
  "tile-installation-checklist": {
    primary: { type: "tool", slug: "flooring-square-footage-calculator" },
    secondary: [
      { type: "tool", slug: "waste-calculator" },
      { type: "tool", slug: "transition-estimator" },
      { type: "guide", slug: "how-flat-should-a-floor-be-for-tile" },
      { type: "guide", slug: "tile-layout-planning-guide" },
      { type: "guide", slug: "why-is-my-tile-cracking" },
      { type: "guide", slug: "concrete-slab-cracks-under-flooring" }
    ]
  },
  "carpet-installation-checklist": {
    primary: { type: "tool", slug: "carpet-seam-planner" },
    secondary: [
      { type: "tool", slug: "flooring-square-footage-calculator" },
      { type: "tool", slug: "pattern-repeat-calculator" },
      { type: "tool", slug: "stair-flooring-calculator" },
      { type: "guide", slug: "carpet-seam-direction-guide" },
      { type: "guide", slug: "why-are-my-carpet-seams-visible" },
      { type: "guide", slug: "carpet-padding-thickness-guide" }
    ]
  },
  "common-basement-flooring-problems": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "can-carpet-be-installed-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "why-does-my-floor-feel-hollow" }
    ]
  },
  "why-is-my-floor-bouncing": {
    primary: { type: "guide", slug: "are-bouncy-floors-dangerous" },
    secondary: [
      { type: "guide", slug: "why-is-my-floor-squeaking" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-does-my-floor-feel-hollow" },
      { type: "guide", slug: "why-are-my-flooring-joints-opening" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "how-flat-should-a-subfloor-be-for-laminate" }
    ]
  },
  "are-bouncy-floors-dangerous": {
    primary: { type: "guide", slug: "why-is-my-floor-bouncing" },
    secondary: [
      { type: "guide", slug: "why-is-my-floor-squeaking" },
      { type: "guide", slug: "why-does-my-floor-feel-hollow" },
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" }
    ]
  },
  "why-are-my-flooring-joints-opening": {
    primary: { type: "guide", slug: "why-is-my-laminate-floor-separating" },
    secondary: [
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-lvp-floor-separating" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" },
      { type: "guide", slug: "why-is-my-floor-bouncing" },
      { type: "guide", slug: "flooring-direction-mistakes" }
    ]
  },
  "hardwood-installation-humidity": {
    primary: { type: "guide", slug: "how-long-should-hardwood-acclimate" },
    secondary: [
      { type: "guide", slug: "hardwood-acclimation-mistakes" },
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" }
    ]
  },
  "why-is-my-engineered-hardwood-separating": {
    primary: { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
    secondary: [
      { type: "guide", slug: "hardwood-installation-humidity" },
      { type: "guide", slug: "moisture-barrier-engineered-hardwood-over-concrete" },
      { type: "guide", slug: "floating-vs-glue-down-engineered-hardwood-over-concrete" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" }
    ]
  },
  "why-is-my-lvp-floor-buckling": {
    primary: { type: "guide", slug: "why-is-my-lvp-floor-peaking" },
    secondary: [
      { type: "guide", slug: "flooring-movement-problems" },
      { type: "guide", slug: "why-is-my-lvp-floor-separating" },
      { type: "guide", slug: "why-is-my-lvp-lifting" },
      { type: "guide", slug: "can-you-install-cabinets-over-floating-lvp" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" }
    ]
  },
  "why-are-my-lvp-seams-showing": {
    primary: { type: "guide", slug: "why-is-my-lvp-floor-separating" },
    secondary: [
      { type: "guide", slug: "why-is-my-lvp-floor-clicking" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "why-does-my-floor-feel-hollow" },
      { type: "guide", slug: "why-is-my-lvp-floor-buckling" }
    ]
  }
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createSeoMetadata({
    title: guide.metadataTitle,
    description: guide.metadataDescription,
    path: `/guides/${guide.slug}`,
    type: "article"
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const howToSteps = guideHowToSteps[guide.slug as keyof typeof guideHowToSteps];
  const relatedTools = getRelatedTools(guide.relatedTools);
  const explicitRelatedGuides = getRelatedGuides(guide.relatedGuides ?? []);
  const ecosystemRelatedGuides = getEcosystemRelatedGuides(guide);
  const troubleshootingGuides = getTroubleshootingGuidesForGuide(guide);
  const ecosystemLinks = getGuideEcosystemLinks(guide);
  const primaryEcosystem = ecosystemLinks[0];
  const ecosystemBadgeLinks = ecosystemLinks.filter((ecosystem) => ecosystem.slug !== primaryEcosystem?.slug).slice(0, 3);
  const topUtilityHrefSet = new Set([
    ...ecosystemBadgeLinks.map((ecosystem) => `/guides/ecosystems/${ecosystem.slug}`),
    ...relatedTools.map((tool) => `/tools/${tool.slug}`)
  ]);
  const industryReferences = getGuideIndustryReferences(guide);
  const authorityHubPathway = getAuthorityHubPathway(guide.slug);
  const nextStepTool = relatedTools[0];
  const nextStepGuide = explicitRelatedGuides.find((relatedGuide) => relatedGuide.slug !== guide.slug) ?? ecosystemRelatedGuides[0];
  const targetedNextSteps = targetedNextStepTargets[guide.slug];
  const resolveNextStepTarget = (target: NextStepTarget) => {
    if (target.type === "guide") {
      const targetGuide = getGuideBySlug(target.slug);

      return targetGuide
        ? {
            href: `/guides/${targetGuide.slug}`,
            label: targetGuide.title,
            description: "Read the next guide connected to this topic."
          }
        : null;
    }

    const targetTool = getRelatedTools([target.slug])[0];

    return targetTool
      ? {
          href: `/tools/${targetTool.slug}`,
          label: `Use ${targetTool.shortTitle}`,
          description: targetTool.description
        }
      : null;
  };
  const targetedPrimaryLink = targetedNextSteps ? resolveNextStepTarget(targetedNextSteps.primary) : null;
  const targetedSecondaryLinkCandidates = targetedNextSteps
    ? targetedNextSteps.secondary.flatMap((target) => {
        const resolvedLink = resolveNextStepTarget(target);

        return resolvedLink ? [resolvedLink] : [];
      })
    : null;
  const troubleshootingFlow = getTroubleshootingFlow(guide.slug);
  const relatedProblemLinks = getRelatedProblemLinksForGuide(guide.slug);
  const relatedProblemHrefSet = new Set(relatedProblemLinks.map((link) => link.href));
  const nextRecommendedDescription = troubleshootingFlow
    ? "Use the next guide or calculator to narrow the likely cause before opening the floor, replacing material, or scheduling a repair."
    : "Use these calculators and related guides to turn the article into a practical plan before ordering material or calling an installer.";
  const nextRecommendedPrimaryCandidate =
    targetedPrimaryLink ?? {
      href: nextStepTool ? `/tools/${nextStepTool.slug}` : "/tools",
      label: nextStepTool ? `Use ${nextStepTool.shortTitle}` : "Open flooring calculators"
    };
  const fallbackNextRecommendedSecondaryLinks: ResourceLink[] = [
    ...(nextStepGuide
      ? [
          {
            href: `/guides/${nextStepGuide.slug}`,
            label: nextStepGuide.title,
            description: "Read the next guide connected to this topic."
          }
        ]
      : []),
    ...relatedTools.slice(1, 3).map((tool) => ({
      href: `/tools/${tool.slug}`,
      label: `Use ${tool.shortTitle}`,
      description: tool.description
    })),
    ...(primaryEcosystem
      ? [
          {
            href: `/guides/ecosystems/${primaryEcosystem.slug}`,
            label: `Browse ${primaryEcosystem.shortTitle} guides`,
            description: "See the full flooring type section."
          }
        ]
      : []),
    {
      href: "/guides/troubleshooting",
      label: "Troubleshooting hub",
      description: "Compare common flooring problems and causes."
    }
  ];
  const nextRecommendedLinkCandidates = uniqueLinks([
    nextRecommendedPrimaryCandidate,
    ...(targetedSecondaryLinkCandidates ?? fallbackNextRecommendedSecondaryLinks)
  ])
    .filter((link) => !topUtilityHrefSet.has(link.href))
    .filter((link) => !relatedProblemHrefSet.has(link.href));
  const problemHubNextStepLink = {
    href: "/guides/browse-problems",
    label: "Browse all flooring problems",
    description: "Compare nearby symptoms across flooring materials."
  };
  const nextRecommendedPrimaryLink =
    nextRecommendedLinkCandidates[0] ??
    (relatedProblemHrefSet.has(nextRecommendedPrimaryCandidate.href) ? problemHubNextStepLink : nextRecommendedPrimaryCandidate);
  const nextRecommendedSecondaryLinks = nextRecommendedLinkCandidates
    .filter((link) => link.href !== nextRecommendedPrimaryLink.href)
    .slice(0, 3);
  const nextStepHrefSet = new Set([
    nextRecommendedPrimaryLink.href,
    ...nextRecommendedSecondaryLinks.map((link) => link.href)
  ]);
  const guideToLink = (relatedGuide: (typeof guides)[number]): ResourceLink => ({
    href: `/guides/${relatedGuide.slug}`,
    label: relatedGuide.title,
    description: relatedGuide.description
  });
  const troubleshootingLinkCandidates = uniqueLinks(
    troubleshootingGuides.filter((relatedGuide) => relatedGuide.slug !== guide.slug).map(guideToLink)
  )
    .filter((link) => !nextStepHrefSet.has(link.href))
    .filter((link) => !relatedProblemHrefSet.has(link.href));
  const troubleshootingHrefSet = new Set(troubleshootingLinkCandidates.map((link) => link.href));
  const relatedGuideLinks = uniqueLinks(
    [...explicitRelatedGuides, ...ecosystemRelatedGuides].filter((relatedGuide) => relatedGuide.slug !== guide.slug).map(guideToLink)
  )
    .filter((link) => !nextStepHrefSet.has(link.href))
    .filter((link) => !relatedProblemHrefSet.has(link.href))
    .filter((link) => !troubleshootingHrefSet.has(link.href))
    .slice(0, 4);
  const relatedGuideHrefSet = new Set(relatedGuideLinks.map((link) => link.href));
  const troubleshootingRelatedLinks = troubleshootingLinkCandidates
    .filter((link) => !relatedGuideHrefSet.has(link.href))
    .slice(0, 4);
  const visibleGuideSections = troubleshootingFlow
    ? guide.sections.filter((section) => !troubleshootingFlowDuplicateSectionIds.has(section.id))
    : guide.sections;
  const showProblemFinderCallout = problemFinderCalloutSlugs.has(guide.slug) && !troubleshootingFlow && !authorityHubPathway;
  const quickAnswerSection = troubleshootingFlow
    ? visibleGuideSections.find((section) => section.id === "quick-answer")
    : null;
  const bodySections = quickAnswerSection
    ? visibleGuideSections.filter((section) => section.id !== quickAnswerSection.id)
    : visibleGuideSections;

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: guide.title,
          description: guide.description,
          path: `/guides/${guide.slug}`,
          dateModified: guide.dateModified
        })}
      />
      <JsonLd data={faqJsonLd(guide.faq)} />
      {howToSteps ? (
        <JsonLd
          data={howToJsonLd({
            name: guide.title,
            description: guide.description,
            path: `/guides/${guide.slug}`,
            steps: howToSteps
          })}
        />
      ) : null}
      <JsonLd
        data={breadcrumbListJsonLd([
          { label: "Home", href: "/" },
          { label: "Guides", href: "/guides" },
          ...(primaryEcosystem
            ? [{ label: primaryEcosystem.shortTitle, href: `/guides/ecosystems/${primaryEcosystem.slug}` }]
            : []),
          { label: guide.title }
        ])}
      />
      <article className="bg-white py-8 sm:py-10">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/guides", label: "Guides" },
              ...(primaryEcosystem
                ? [{ href: `/guides/ecosystems/${primaryEcosystem.slug}`, label: primaryEcosystem.shortTitle }]
                : []),
              { label: guide.title }
            ]}
          />
          <div className="grid min-w-0 gap-7 lg:grid-cols-[240px_minmax(0,760px)] lg:items-start">
            <aside className="min-w-0 lg:sticky lg:top-24">
              <TableOfContents items={visibleGuideSections.map((section) => ({ id: section.id, title: section.title }))} />
            </aside>
            <div className="min-w-0">
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                  <FlooringIcon name="guide" className="h-4 w-4" />
                </span>
                Flooring guide
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">{guide.title}</h1>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{guide.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>Updated {guide.dateModified}</span>
                <span>{guide.readTime}</span>
              </div>
              {ecosystemBadgeLinks.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {ecosystemBadgeLinks.map((ecosystem) => (
                    <Link
                      key={ecosystem.slug}
                      href={`/guides/ecosystems/${ecosystem.slug}`}
                      className="rounded-md border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-bold uppercase leading-5 tracking-wide text-accent-700 transition hover:border-accent-200 hover:bg-white"
                    >
                      {ecosystem.shortTitle}
                    </Link>
                  ))}
                </div>
              ) : null}
              {!authorityHubPathway ? (
                <div className="mt-6 rounded-lg border border-line bg-field p-4 shadow-sm">
                  <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
                    <FlooringIcon name="calculator" className="h-5 w-5 text-accent-700" />
                    Useful calculators for this guide
                  </h2>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {relatedTools.map((tool) => (
                      <Link
                        key={tool.slug}
                        href={`/tools/${tool.slug}`}
                        className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:text-accent-700"
                      >
                        {tool.shortTitle}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : null}
              {showProblemFinderCallout ? (
                <div className="mt-5 rounded-lg border border-accent-100 bg-accent-50 p-4 shadow-sm">
                  <h2 className="text-lg font-black text-ink">Not sure what you are seeing?</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    Start with the visible symptom and compare nearby problems before choosing the next guide.
                  </p>
                  <Link href="/diagnose" className="mt-3 inline-flex rounded-md bg-accent-700 px-3 py-2 text-sm font-bold text-white hover:bg-accent-800">
                    Open Problem Finder
                  </Link>
                </div>
              ) : null}
              {troubleshootingFlow ? (
                <div className="mt-5">
                  <ProblemSymptomSelector compact hubLinkLabel="Back to symptom menu" />
                </div>
              ) : null}
              {quickAnswerSection ? (
                <div className="prose-flooring mt-5">
                  <GuideSectionContent section={quickAnswerSection} />
                </div>
              ) : null}
              {authorityHubPathway ? <AuthorityHubPathways guide={guide} /> : null}
              {troubleshootingFlow ? (
                <>
                  <TroubleshootingGuideFlow
                    causeRows={troubleshootingFlow.causeRows}
                    whatToCheckFirst={troubleshootingFlow.whatToCheckFirst}
                    whenToCallAPro={troubleshootingFlow.whenToCallAPro}
                  />
                  <GuideUtilityVisual guide={guide} hideDiagnosticTables />
                </>
              ) : (
                <GuideUtilityVisual guide={guide} />
              )}
              <div className="prose-flooring mt-5">
                {bodySections.map((section) => (
                  <GuideSectionContent key={section.id} section={section} />
                ))}
              </div>
              {guide.disclaimer ? (
                <div className="mt-8">
                  <DisclaimerBox>{guide.disclaimer}</DisclaimerBox>
                </div>
              ) : null}
              <IndustryReferences references={industryReferences} />
              <BrowseRelatedProblems links={relatedProblemLinks} />
            </div>
          </div>
        </Container>
      </article>
      <RelatedLinks
        title="Related Flooring Guides"
        links={relatedGuideLinks}
      />
      <RelatedLinks
        title="Troubleshooting Guides"
        links={troubleshootingFlow ? [] : troubleshootingRelatedLinks}
      />
      {troubleshootingFlow ? (
        <NextRecommendedSteps
          description={nextRecommendedDescription}
          primaryLink={nextRecommendedPrimaryLink}
          secondaryLinks={nextRecommendedSecondaryLinks.slice(0, 4)}
        />
      ) : (
        <NextStepPanel
          title="Next recommended steps"
          description={nextRecommendedDescription}
          primaryLink={nextRecommendedPrimaryLink}
          secondaryLinks={nextRecommendedSecondaryLinks}
        />
      )}
      <FAQSection items={guide.faq} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQSection } from "@/components/FAQSection";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideUtilityVisual } from "@/components/GuideUtilityVisual";
import { IndustryReferences } from "@/components/IndustryReferences";
import { JsonLd } from "@/components/JsonLd";
import { NextStepPanel } from "@/components/NextStepPanel";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TableOfContents } from "@/components/TableOfContents";
import { NextRecommendedSteps } from "@/components/troubleshooting/NextRecommendedSteps";
import { TroubleshootingGuideFlow } from "@/components/troubleshooting/TroubleshootingGuideFlow";
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
import { getTroubleshootingFlow } from "@/lib/content/troubleshooting-flow";
import { createSeoMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, faqJsonLd } from "@/lib/seo/schema";

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
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
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
      { type: "guide", slug: "best-underlayment-for-concrete-floors" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
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
  "why-is-my-floor-squeaking": {
    primary: { type: "guide", slug: "why-does-my-floor-feel-hollow" },
    secondary: [
      { type: "guide", slug: "why-is-my-floor-clicking" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "why-is-my-hardwood-floor-gapping" }
    ]
  },
  "moisture-level-too-high-for-flooring": {
    primary: { type: "guide", slug: "moisture-barrier-engineered-hardwood-over-concrete" },
    secondary: [
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "why-is-my-hardwood-floor-cupping" }
    ]
  },
  "why-is-my-lvp-floor-peaking": {
    primary: { type: "guide", slug: "why-is-my-lvp-floor-separating" },
    secondary: [
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
      { type: "guide", slug: "why-flooring-fails-over-concrete" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "why-is-my-subfloor-wet" },
      { type: "guide", slug: "can-engineered-hardwood-go-over-concrete" },
      { type: "guide", slug: "can-you-install-lvp-over-concrete" },
      { type: "guide", slug: "best-underlayment-for-concrete-floors" }
    ]
  },
  "why-flooring-fails-over-concrete": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
      { type: "guide", slug: "can-moisture-come-through-concrete" },
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
      { type: "guide", slug: "moisture-level-too-high-for-flooring" },
      { type: "guide", slug: "why-is-my-floor-expanding" },
      { type: "guide", slug: "why-is-my-laminate-floor-separating" },
      { type: "guide", slug: "why-is-my-lvp-floor-peaking" }
    ]
  },
  "why-is-my-subfloor-wet": {
    primary: { type: "guide", slug: "moisture-level-too-high-for-flooring" },
    secondary: [
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "can-moisture-come-through-concrete" },
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" }
    ]
  },
  "can-moisture-come-through-concrete": {
    primary: { type: "guide", slug: "how-to-test-concrete-moisture" },
    secondary: [
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
      { type: "guide", slug: "how-long-should-hardwood-acclimate" },
      { type: "guide", slug: "how-to-test-concrete-moisture" },
      { type: "guide", slug: "why-is-my-floor-swelling" },
      { type: "guide", slug: "why-flooring-fails-over-concrete" }
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
    primary: { type: "guide", slug: "why-is-my-floor-squeaking" },
    secondary: [
      { type: "guide", slug: "why-does-my-floor-feel-hollow" },
      { type: "guide", slug: "why-are-my-flooring-joints-opening" },
      { type: "guide", slug: "subfloor-flatness-requirements-lvp" },
      { type: "guide", slug: "how-flat-should-a-subfloor-be-for-laminate" }
    ]
  },
  "why-are-my-flooring-joints-opening": {
    primary: { type: "guide", slug: "why-is-my-laminate-floor-separating" },
    secondary: [
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
  ]).filter((link) => !topUtilityHrefSet.has(link.href));
  const nextRecommendedPrimaryLink = nextRecommendedLinkCandidates[0] ?? nextRecommendedPrimaryCandidate;
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
  ).filter((link) => !nextStepHrefSet.has(link.href));
  const troubleshootingHrefSet = new Set(troubleshootingLinkCandidates.map((link) => link.href));
  const relatedGuideLinks = uniqueLinks(
    [...explicitRelatedGuides, ...ecosystemRelatedGuides].filter((relatedGuide) => relatedGuide.slug !== guide.slug).map(guideToLink)
  )
    .filter((link) => !nextStepHrefSet.has(link.href))
    .filter((link) => !troubleshootingHrefSet.has(link.href))
    .slice(0, 4);
  const relatedGuideHrefSet = new Set(relatedGuideLinks.map((link) => link.href));
  const troubleshootingRelatedLinks = troubleshootingLinkCandidates
    .filter((link) => !relatedGuideHrefSet.has(link.href))
    .slice(0, 4);
  const visibleGuideSections = troubleshootingFlow
    ? guide.sections.filter((section) => !troubleshootingFlowDuplicateSectionIds.has(section.id))
    : guide.sections;
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
              {quickAnswerSection ? (
                <div className="prose-flooring mt-5">
                  <GuideSectionContent section={quickAnswerSection} />
                </div>
              ) : null}
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

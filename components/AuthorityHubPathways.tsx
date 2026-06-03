import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";
import { getAuthorityHubPathway } from "@/data/authority-hubs";
import type { Guide } from "@/data/types";
import { getGuideBySlug, getRelatedGuides, getRelatedTools } from "@/lib/content/paths";

type AuthorityHubPathwaysProps = {
  guide: Guide;
};

function ResourceColumn({
  title,
  links
}: {
  title: string;
  links: {
    href: string;
    label: string;
    description?: string;
  }[];
}) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <h3 className="text-sm font-black text-ink">{title}</h3>
      <div className="mt-3 grid gap-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-line bg-field px-3 py-2 text-sm transition hover:border-accent-100 hover:bg-white"
          >
            <span className="font-bold text-slate-800">{link.label}</span>
            {link.description ? <span className="mt-1 block text-xs leading-5 text-slate-600">{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function AuthorityHubPathways({ guide }: AuthorityHubPathwaysProps) {
  const pathway = getAuthorityHubPathway(guide.slug);

  if (!pathway) {
    return null;
  }

  const calculatorLinks = getRelatedTools(pathway.calculators).map((tool) => ({
    href: `/tools/${tool.slug}`,
    label: tool.shortTitle,
    description: tool.description
  }));
  const checklistLinks = getRelatedGuides(pathway.checklists).map((checklist) => ({
    href: `/guides/${checklist.slug}`,
    label: checklist.title,
    description: checklist.description
  }));
  const troubleshootingLinks = getRelatedGuides(pathway.troubleshooting).map((troubleshootingGuide) => ({
    href: `/guides/${troubleshootingGuide.slug}`,
    label: troubleshootingGuide.title,
    description: troubleshootingGuide.description
  }));
  const relatedHubLinks = getRelatedGuides(pathway.relatedHubs).map((hub) => ({
    href: `/guides/${hub.slug}`,
    label: hub.title,
    description: hub.description
  }));

  return (
    <section className="mt-5 rounded-lg border border-line bg-field p-3.5 shadow-sm">
      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="inline-flex items-center gap-2 text-lg font-black text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-white text-accent-700">
              <FlooringIcon name="shield" className="h-4 w-4" />
            </span>
            Start here
          </h2>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">
            If you arrived from search, use this hub as the sorting page before jumping into a specific repair or material guide.
          </p>
        </div>
        <Link
          href="/diagnose"
          className="inline-flex shrink-0 rounded-md bg-accent-700 px-3 py-2 text-sm font-bold text-white transition hover:bg-accent-800"
        >
          Open Problem Finder
        </Link>
      </div>

      <ul className="mt-4 grid gap-2 md:grid-cols-3">
        {pathway.startHere.map((item) => (
          <li key={item} className="rounded-md border border-line bg-white px-3 py-2 text-sm leading-6 text-slate-700">
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4">
        <h3 className="text-sm font-black text-ink">Quick symptom lookup</h3>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {pathway.symptomLookup.map((item) => {
            const targetGuide = getGuideBySlug(item.guideSlug);

            if (!targetGuide) {
              return null;
            }

            return (
              <Link
                key={item.label}
                href={`/guides/${targetGuide.slug}`}
                className="rounded-md border border-line bg-white p-3 text-sm transition hover:border-accent-100 hover:bg-accent-50"
              >
                <span className="font-black text-ink">{item.label}</span>
                <span className="mt-1 block leading-6 text-slate-600">{item.note}</span>
              </Link>
            );
          })}
        </div>
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-4">
        <ResourceColumn title="Recommended calculators" links={calculatorLinks} />
        <ResourceColumn title="Installation checklists" links={checklistLinks} />
        <ResourceColumn title="Related troubleshooting" links={troubleshootingLinks} />
        <ResourceColumn title="Related hubs" links={relatedHubLinks} />
      </div>
    </section>
  );
}

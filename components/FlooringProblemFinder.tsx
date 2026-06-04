"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";

export type ProblemFinderLink = {
  href: string;
  label: string;
  description?: string;
};

export type ProblemFinderOption = {
  id: string;
  label: string;
  summary: string;
  whatItUsuallyMeans: string;
  seriousness: {
    level: string;
    note: string;
  };
  likelyCauses: string[];
  checkFirst: string[];
  whenSerious: string[];
  recommendedGuides: ProblemFinderLink[];
  relatedCalculators: ProblemFinderLink[];
  relatedChecklists: ProblemFinderLink[];
  relatedHubs: ProblemFinderLink[];
};

type FlooringProblemFinderProps = {
  options: ProblemFinderOption[];
};

function LinkList({ title, links }: { title: string; links: ProblemFinderLink[] }) {
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

function BulletPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border border-line bg-white p-3">
      <h3 className="text-sm font-black text-ink">{title}</h3>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li key={item} className="rounded-md border border-line bg-field px-3 py-2 text-sm leading-6 text-slate-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FlooringProblemFinder({ options }: FlooringProblemFinderProps) {
  const [selectedId, setSelectedId] = useState(options[0]?.id ?? "");
  const selectedOption = useMemo(
    () => options.find((option) => option.id === selectedId) ?? options[0],
    [options, selectedId]
  );

  if (!selectedOption) {
    return null;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">
      <section className="rounded-lg border border-line bg-white p-4 shadow-sm">
        <h2 className="inline-flex items-center gap-2 text-lg font-black text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
            <FlooringIcon name="shield" className="h-4 w-4" />
          </span>
          What issue are you seeing?
        </h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">
          Pick the symptom that most closely matches what you see. This is a guide path, not a final diagnosis.
        </p>
        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
          {options.map((option) => {
            const isSelected = option.id === selectedOption.id;

            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setSelectedId(option.id)}
                className={[
                  "rounded-md border px-3 py-2.5 text-left text-sm font-bold transition",
                  isSelected
                    ? "border-accent-300 bg-accent-50 text-accent-800 shadow-sm"
                    : "border-line bg-field text-slate-700 hover:border-accent-100 hover:bg-white hover:text-accent-700"
                ].join(" ")}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="rounded-lg border border-line bg-field p-4 shadow-sm">
        <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Selected symptom</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal text-ink">{selectedOption.label}</h2>
            <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-600">{selectedOption.summary}</p>
          </div>
          <Link
            href="/guides/browse-problems"
            className="inline-flex shrink-0 rounded-md border border-accent-100 bg-white px-3 py-2 text-sm font-bold text-accent-700 transition hover:border-accent-200 hover:text-accent-600"
          >
            Browse all problems
          </Link>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-lg border border-line bg-white p-3">
            <h3 className="text-sm font-black text-ink">What this usually means</h3>
            <p className="mt-2 text-sm leading-6 text-slate-700">{selectedOption.whatItUsuallyMeans}</p>
          </div>
          <div className="rounded-lg border border-amber-200 bg-amber-50 p-3">
            <p className="text-xs font-bold uppercase tracking-wide text-amber-800">Seriousness</p>
            <h3 className="mt-1 text-sm font-black text-amber-950">{selectedOption.seriousness.level}</h3>
            <p className="mt-2 text-sm leading-6 text-amber-950">{selectedOption.seriousness.note}</p>
          </div>
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-3">
          <BulletPanel title="Most likely causes" items={selectedOption.likelyCauses} />
          <BulletPanel title="What to check first" items={selectedOption.checkFirst} />
          <BulletPanel title="When to get help" items={selectedOption.whenSerious} />
        </div>

        <div className="mt-4 grid gap-3 lg:grid-cols-4">
          <LinkList title="Recommended guides" links={selectedOption.recommendedGuides} />
          <LinkList title="Related calculators" links={selectedOption.relatedCalculators} />
          <LinkList title="Related checklists" links={selectedOption.relatedChecklists} />
          <LinkList title="Related hubs" links={selectedOption.relatedHubs} />
        </div>
      </section>
    </div>
  );
}

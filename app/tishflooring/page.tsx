import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FlooringIcon, type FlooringIconName } from "@/components/FlooringIcon";
import { tools } from "@/data/tools";
import type { Tool } from "@/data/types";

export const metadata: Metadata = {
  title: {
    absolute: "Tish Flooring Project Calculators"
  },
  description:
    "Private Tish Flooring calculator resource for planning flooring square footage, waste, stairs, carpet seams, pattern repeats, and transitions.",
  alternates: {
    canonical: "/tishflooring"
  },
  robots: {
    index: false,
    follow: false
  }
};

const calculatorSlugs: Tool["slug"][] = [
  "flooring-square-footage-calculator",
  "waste-calculator",
  "stair-flooring-calculator",
  "carpet-seam-planner",
  "pattern-repeat-calculator",
  "transition-estimator"
];

const toolIcons: Record<Tool["calculatorType"], FlooringIconName> = {
  "square-footage": "ruler",
  waste: "waste",
  stairs: "stairs",
  "carpet-seam": "carpet",
  "pattern-repeat": "pattern",
  transition: "transition"
};

const partnerTools = calculatorSlugs
  .map((slug) => tools.find((tool) => tool.slug === slug))
  .filter((tool): tool is Tool => Boolean(tool));

export default function TishFlooringPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-ink">
      <section className="border-b border-line bg-white">
        <Container className="py-5 sm:py-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-accent-100 bg-brand-900 text-sm font-black tracking-wide text-white shadow-sm">
                TF
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Private calculator resource</p>
                <h1 className="text-2xl font-black tracking-normal text-ink sm:text-3xl">Tish Flooring Project Calculators</h1>
              </div>
            </div>
            <div className="rounded-full border border-line bg-field px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-slate-600">
              Powered by FloorCalc Pro
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gradient-to-b from-white to-slate-50">
        <Container className="py-8 sm:py-10">
          <div className="max-w-3xl">
            <p className="text-base leading-7 text-slate-700 sm:text-lg">
              Use these calculators to estimate square footage, waste, stairs, carpet seams, pattern repeats, and transitions
              before final measurements are reviewed.
            </p>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {partnerTools.map((tool) => (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group rounded-lg border border-line bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft"
              >
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                    <FlooringIcon name={toolIcons[tool.calculatorType]} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h2 className="text-base font-black text-ink group-hover:text-accent-700">{tool.title}</h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{tool.description}</p>
                  </div>
                </div>
                <div className="mt-3 rounded-md border border-line bg-field px-3 py-2 text-xs font-bold uppercase leading-5 tracking-wide text-slate-600">
                  Best for: {tool.flooringSystem}
                </div>
                <span className="mt-3 inline-flex text-sm font-bold text-accent-700 group-hover:text-accent-600">
                  Open calculator
                  <span aria-hidden="true" className="ml-1">
                    -&gt;
                  </span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
            <p className="font-black">Planning disclaimer</p>
            <p className="mt-1">
              These calculators are planning tools only. Final material quantities, installation requirements, transitions,
              waste factors, and product compatibility should be verified by Tish Flooring or your installer before ordering.
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}

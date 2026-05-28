import Link from "next/link";
import { FlooringIcon, type FlooringIconName } from "@/components/FlooringIcon";
import type { Guide, Tool } from "@/data/types";

type ToolCardProps = {
  tool: Tool;
  relatedGuides?: Guide[];
};

const toolIcons: Record<Tool["calculatorType"], FlooringIconName> = {
  "square-footage": "ruler",
  waste: "waste",
  stairs: "stairs",
  "carpet-seam": "carpet",
  "pattern-repeat": "pattern",
  transition: "transition"
};

export function ToolCard({ tool, relatedGuides = [] }: ToolCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:border-accent-200 hover:shadow-md">
      <div className="flex flex-1 flex-col gap-3 p-6">
        {/* icon */}
        <span className="grid h-11 w-11 place-items-center rounded-xl border border-accent-100 bg-accent-50 text-accent-600">
          <FlooringIcon name={toolIcons[tool.calculatorType]} />
        </span>

        {/* title */}
        <h3 className="text-[1rem] font-black leading-snug text-ink transition-colors group-hover:text-accent-700">
          <Link href={`/tools/${tool.slug}`}>{tool.title}</Link>
        </h3>

        {/* description */}
        <p className="text-sm leading-6 text-slate-500">{tool.description}</p>

        {/* "best for" pill */}
        <p className="self-start rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-slate-500">
          {tool.flooringSystem}
        </p>

        {/* related guides */}
        {relatedGuides.length > 0 ? (
          <div className="border-t border-slate-100 pt-3">
            <p className="mb-2 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-slate-400">Related guides</p>
            <div className="flex flex-wrap gap-1.5">
              {relatedGuides.slice(0, 2).map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600 transition-all hover:border-accent-200 hover:bg-white hover:text-accent-700"
                >
                  {guide.title}
                </Link>
              ))}
            </div>
          </div>
        ) : null}

        {/* CTA */}
        <div className="mt-auto pt-1">
          <Link
            href={`/tools/${tool.slug}`}
            className="group/cta inline-flex items-center gap-1.5 rounded-xl bg-accent-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-accent-700"
          >
            <FlooringIcon name={toolIcons[tool.calculatorType]} className="h-4 w-4" />
            Open calculator
          </Link>
        </div>
      </div>
    </article>
  );
}

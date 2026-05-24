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
    <article className="flooring-card overflow-hidden rounded-lg border border-line bg-white p-5 pt-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft">
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
          <FlooringIcon name={toolIcons[tool.calculatorType]} />
        </span>
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-black text-ink">
              <Link href={`/tools/${tool.slug}`} className="hover:text-accent-700">
                {tool.title}
              </Link>
            </h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
        </div>
      </div>
      <p className="mt-4 break-words rounded-md border border-line bg-field px-3 py-2 text-xs font-bold uppercase leading-5 tracking-wide text-slate-600">
        Best for: {tool.flooringSystem}
      </p>
      {relatedGuides.length > 0 ? (
        <div className="mt-4 border-t border-line pt-4">
          <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Helpful guides</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {relatedGuides.slice(0, 3).map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-md border border-line bg-field px-2.5 py-1.5 text-xs font-bold leading-5 text-slate-700 transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
              >
                {guide.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
      <Link href={`/tools/${tool.slug}`} className="mt-4 inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
        Open calculator
        <span aria-hidden="true" className="ml-1">
          -&gt;
        </span>
      </Link>
    </article>
  );
}

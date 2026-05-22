import Link from "next/link";
import { FlooringIcon, type FlooringIconName } from "@/components/FlooringIcon";
import type { Tool } from "@/data/types";

type ToolCardProps = {
  tool: Tool;
};

const toolIcons: Record<Tool["calculatorType"], FlooringIconName> = {
  "square-footage": "ruler",
  waste: "waste",
  stairs: "stairs",
  "carpet-seam": "carpet",
  "pattern-repeat": "pattern",
  transition: "transition"
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="flooring-card group block overflow-hidden rounded-lg border border-line bg-white p-5 pt-6 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft"
    >
      <div className="flex items-start gap-4">
        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700 transition group-hover:border-accent-100 group-hover:bg-white group-hover:text-accent-600">
          <FlooringIcon name={toolIcons[tool.calculatorType]} />
        </span>
        <div className="min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="text-lg font-black text-ink">{tool.title}</h3>
            <span aria-hidden="true" className="text-accent-600 transition group-hover:translate-x-1">
              -&gt;
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
        </div>
      </div>
      <p className="mt-4 break-words rounded-md border border-line bg-field px-3 py-2 text-xs font-bold uppercase leading-5 tracking-wide text-slate-600">
        Best for: {tool.flooringSystem}
      </p>
    </Link>
  );
}

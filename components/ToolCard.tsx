import Link from "next/link";
import type { Tool } from "@/data/types";

type ToolCardProps = {
  tool: Tool;
};

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      href={`/tools/${tool.slug}`}
      className="group block rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold text-ink">{tool.title}</h3>
        <span aria-hidden="true" className="text-accent-600 transition group-hover:translate-x-1">
          -&gt;
        </span>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{tool.description}</p>
    </Link>
  );
}

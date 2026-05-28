import Link from "next/link";
import { FlooringIcon, type FlooringIconName } from "@/components/FlooringIcon";
import { getGuideEcosystemBySlug } from "@/data/ecosystems";
import type { Guide } from "@/data/types";

type GuideCardProps = {
  guide: Guide;
  variant?: "light" | "dark";
};

function getGuideIcon(slug: Guide["slug"]): FlooringIconName {
  if (slug.includes("waste") || slug.includes("much-flooring")) return "ruler";
  if (slug.includes("carpet")) return "carpet";
  if (slug.includes("transition")) return "transition";
  if (slug.includes("tile") || slug.includes("radiant")) return "layers";
  return "guide";
}

export function GuideCard({ guide, variant = "light" }: GuideCardProps) {
  const ecosystem = getGuideEcosystemBySlug(guide.primaryEcosystem);
  const isDark = variant === "dark";

  return (
    <article
      className={[
        "group flex flex-col overflow-hidden rounded-2xl border transition-all duration-200",
        isDark
          ? "border-white/10 bg-white/[0.06] hover:border-white/20 hover:bg-white/[0.1]"
          : "border-slate-200 bg-white shadow-sm hover:border-accent-200 hover:shadow-md"
      ].join(" ")}
    >
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* icon */}
        <span
          className={[
            "grid h-10 w-10 shrink-0 place-items-center rounded-xl border",
            isDark
              ? "border-white/10 bg-white/10 text-accent-300"
              : "border-accent-100 bg-accent-50 text-accent-600"
          ].join(" ")}
        >
          <FlooringIcon name={getGuideIcon(guide.slug)} />
        </span>

        {/* meta */}
        <p className={`text-[0.68rem] font-semibold uppercase tracking-[0.1em] ${isDark ? "text-slate-500" : "text-slate-400"}`}>
          {guide.readTime}
        </p>

        {/* title */}
        <h3 className={`text-[0.95rem] font-black leading-snug transition-colors ${isDark ? "text-white group-hover:text-accent-300" : "text-ink group-hover:text-accent-700"}`}>
          <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
        </h3>

        {/* description */}
        <p className={`text-sm leading-6 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
          {guide.description}
        </p>

        {/* footer */}
        <div className="mt-auto flex items-center justify-between pt-2">
          {ecosystem ? (
            <span
              className={[
                "rounded-full border px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-[0.08em]",
                isDark ? "border-white/10 text-slate-500" : "border-slate-200 bg-slate-50 text-slate-500"
              ].join(" ")}
            >
              {ecosystem.shortTitle}
            </span>
          ) : <span />}
          <Link
            href={`/guides/${guide.slug}`}
            className={`inline-flex items-center gap-1 text-sm font-bold transition-colors ${isDark ? "text-accent-400 hover:text-accent-300" : "text-accent-600 hover:text-accent-700"}`}
          >
            Read
            <svg className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}

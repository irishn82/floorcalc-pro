import Link from "next/link";
import { FlooringIcon, type FlooringIconName } from "@/components/FlooringIcon";
import type { Guide } from "@/data/types";

type GuideCardProps = {
  guide: Guide;
};

function getGuideIcon(slug: Guide["slug"]): FlooringIconName {
  if (slug.includes("waste") || slug.includes("much-flooring")) {
    return "ruler";
  }

  if (slug.includes("carpet")) {
    return "carpet";
  }

  if (slug.includes("transition")) {
    return "transition";
  }

  if (slug.includes("tile") || slug.includes("radiant")) {
    return "layers";
  }

  return "guide";
}

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="flooring-card overflow-hidden rounded-lg border border-line bg-white p-5 pt-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="flex items-start gap-4">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-moss-100 bg-moss-50 text-moss-700">
          <FlooringIcon name={getGuideIcon(guide.slug)} />
        </span>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{guide.readTime}</div>
          <h3 className="mt-2 text-lg font-black text-ink">
            <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
          </h3>
        </div>
      </div>
      <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
      <Link href={`/guides/${guide.slug}`} className="mt-4 inline-flex text-sm font-bold text-accent-700">
        Read guide
      </Link>
    </article>
  );
}

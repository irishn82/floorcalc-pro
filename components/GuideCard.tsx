import Link from "next/link";
import type { Guide } from "@/data/types";

type GuideCardProps = {
  guide: Guide;
};

export function GuideCard({ guide }: GuideCardProps) {
  return (
    <article className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-soft">
      <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">{guide.readTime}</div>
      <h3 className="mt-3 text-lg font-bold text-ink">
        <Link href={`/guides/${guide.slug}`}>{guide.title}</Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{guide.description}</p>
      <Link href={`/guides/${guide.slug}`} className="mt-4 inline-flex text-sm font-bold text-accent-700">
        Read guide
      </Link>
    </article>
  );
}

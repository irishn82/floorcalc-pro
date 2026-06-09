import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";

export type BrowseRelatedProblemLink = {
  href: string;
  label: string;
  description?: string;
};

type BrowseRelatedProblemsProps = {
  links: BrowseRelatedProblemLink[];
  title?: string;
  description?: string;
};

export function BrowseRelatedProblems({
  links,
  title = "People with this problem also investigate",
  description = "Compare nearby symptoms and jobsite conditions before deciding whether the issue is material, moisture, movement, subfloor, or layout related."
}: BrowseRelatedProblemsProps) {
  const uniqueLinks = links.filter((link, index, allLinks) => allLinks.findIndex((item) => item.href === link.href) === index);

  if (uniqueLinks.length === 0) {
    return null;
  }

  return (
    <div className="mt-7 rounded-lg border border-line bg-field p-3.5 shadow-sm">
      <h2 className="inline-flex items-center gap-2 text-lg font-black text-ink">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-white text-accent-700">
          <FlooringIcon name="shield" className="h-4 w-4" />
        </span>
        {title}
      </h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {uniqueLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-line bg-white p-3 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:text-accent-700"
          >
            {link.label}
            {link.description ? <span className="mt-1 block font-normal leading-5 text-slate-600">{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

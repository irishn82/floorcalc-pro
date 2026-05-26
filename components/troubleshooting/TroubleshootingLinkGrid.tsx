import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";

export type TroubleshootingLink = {
  href: string;
  label: string;
  description?: string;
};

type TroubleshootingLinkGridProps = {
  title: string;
  description?: string;
  links: TroubleshootingLink[];
};

export function TroubleshootingLinkGrid({ title, description, links }: TroubleshootingLinkGridProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <div className="rounded-lg border border-line bg-white p-4 shadow-sm">
      <h3 className="inline-flex items-center gap-2 text-base font-black text-ink">
        <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
          <FlooringIcon name="layers" className="h-4 w-4" />
        </span>
        {title}
      </h3>
      {description ? <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p> : null}
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-line bg-field p-3 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
          >
            {link.label}
            {link.description ? <span className="mt-1 block font-normal leading-5 text-slate-600">{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </div>
  );
}

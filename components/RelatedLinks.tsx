import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";

type RelatedLink = {
  href: string;
  label: string;
  description?: string;
};

type RelatedLinksProps = {
  title?: string;
  links: RelatedLink[];
};

export function RelatedLinks({ title = "Related Resources", links }: RelatedLinksProps) {
  if (links.length === 0) {
    return null;
  }

  return (
    <section className="bg-field py-7">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="inline-flex items-center gap-3 text-xl font-black text-ink">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-white text-accent-700">
            <FlooringIcon name="layers" className="h-4 w-4" />
          </span>
          {title}
        </h2>
        <div className="mt-3 grid gap-3 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group rounded-lg border border-line bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:border-accent-100 hover:shadow-soft"
            >
              <h3 className="font-bold text-ink group-hover:text-accent-700">{link.label}</h3>
              {link.description ? <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p> : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

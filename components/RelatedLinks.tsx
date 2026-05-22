import Link from "next/link";

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
    <section className="bg-field py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-black text-ink">{title}</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg border border-line bg-white p-5 shadow-sm transition hover:border-accent-100 hover:shadow-soft"
            >
              <h3 className="font-bold text-ink">{link.label}</h3>
              {link.description ? <p className="mt-2 text-sm leading-6 text-slate-600">{link.description}</p> : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

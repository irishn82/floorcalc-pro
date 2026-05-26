export type IndustryReference = {
  title: string;
  organization: string;
  href: string;
  description: string;
};

type IndustryReferencesProps = {
  references: IndustryReference[];
};

export function IndustryReferences({ references }: IndustryReferencesProps) {
  if (references.length === 0) {
    return null;
  }

  return (
    <section className="mt-8 rounded-lg border border-line bg-field p-4 shadow-sm">
      <h2 className="text-lg font-black tracking-normal text-ink">Industry References & Further Reading</h2>
      <p className="mt-2 text-sm leading-6 text-slate-600">
        These resources are useful starting points for checking industry-aligned installation principles. Product instructions
        and installer field judgment still control the final project details.
      </p>
      <div className="mt-4 grid gap-3">
        {references.map((reference) => (
          <a
            key={reference.href}
            href={reference.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-line bg-white p-3 transition hover:border-accent-100 hover:shadow-sm"
          >
            <span className="block text-sm font-black text-ink">{reference.title}</span>
            <span className="mt-1 block text-xs font-bold uppercase tracking-wide text-accent-700">
              {reference.organization}
            </span>
            <span className="mt-2 block text-sm leading-6 text-slate-600">{reference.description}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

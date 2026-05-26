import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";

type NextStepLink = {
  href: string;
  label: string;
  description?: string;
};

type NextStepPanelProps = {
  title?: string;
  description: string;
  primaryLink: NextStepLink;
  secondaryLinks?: NextStepLink[];
};

export function NextStepPanel({
  title = "Recommended next step",
  description,
  primaryLink,
  secondaryLinks = []
}: NextStepPanelProps) {
  return (
    <section className="bg-white py-7">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-line bg-field p-3.5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div className="max-w-2xl">
              <h2 className="inline-flex items-center gap-3 text-xl font-black text-ink">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-white text-accent-700">
                  <FlooringIcon name="guide" className="h-4 w-4" />
                </span>
                {title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
            </div>
            <Link
              href={primaryLink.href}
              className="inline-flex shrink-0 items-center justify-center rounded-md bg-accent-700 px-4 py-3 text-sm font-bold text-white transition hover:bg-accent-800"
            >
              {primaryLink.label}
            </Link>
          </div>
          {secondaryLinks.length > 0 ? (
            <div className="mt-3 grid gap-3 md:grid-cols-3">
              {secondaryLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md border border-line bg-white p-3 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:text-accent-700"
                >
                  {link.label}
                  {link.description ? <span className="mt-2 block font-normal leading-6 text-slate-600">{link.description}</span> : null}
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

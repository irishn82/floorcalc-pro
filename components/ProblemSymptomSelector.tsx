import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";
import { problemSymptomLinks } from "@/data/problem-navigation";

type ProblemSymptomSelectorProps = {
  compact?: boolean;
  showHubLink?: boolean;
  hubLinkLabel?: string;
};

export function ProblemSymptomSelector({
  compact = false,
  showHubLink = true,
  hubLinkLabel = "Browse Problems"
}: ProblemSymptomSelectorProps) {
  const sectionClassName = compact
    ? "rounded-lg border border-line bg-white p-3.5 shadow-sm"
    : "rounded-xl border border-line bg-field p-4 shadow-sm";
  const gridClassName = compact ? "mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3" : "mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={sectionClassName}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="inline-flex items-center gap-2 text-base font-black text-ink sm:text-lg">
            <span className="grid h-7 w-7 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
              <FlooringIcon name="shield" className="h-4 w-4" />
            </span>
            What issue are you seeing?
          </h2>
          <p className="mt-1.5 max-w-2xl text-sm leading-6 text-slate-600">
            Jump straight to the symptom that most closely matches the floor problem.
          </p>
        </div>
        {showHubLink ? (
          <Link
            href="/guides/browse-problems"
            className="inline-flex shrink-0 rounded-md border border-accent-100 bg-white px-3 py-2 text-sm font-bold text-accent-700 transition hover:border-accent-200 hover:text-accent-600"
          >
            {hubLinkLabel}
          </Link>
        ) : null}
      </div>
      <div className={gridClassName}>
        {problemSymptomLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-line bg-white px-3 py-2.5 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:bg-accent-50 hover:text-accent-700"
          >
            {link.label}
            {!compact ? <span className="mt-1 block font-normal leading-5 text-slate-600">{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

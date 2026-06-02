import Link from "next/link";
import { FlooringIcon } from "@/components/FlooringIcon";
import { problemSymptomLinks } from "@/data/problem-navigation";

type ProblemSymptomSelectorProps = {
  compact?: boolean;
};

export function ProblemSymptomSelector({ compact = false }: ProblemSymptomSelectorProps) {
  return (
    <section className={compact ? "rounded-lg border border-line bg-white p-3.5 shadow-sm" : "rounded-lg border border-line bg-field p-4 shadow-sm"}>
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="inline-flex items-center gap-2 text-lg font-black text-ink">
            <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
              <FlooringIcon name="shield" className="h-4 w-4" />
            </span>
            What issue are you seeing?
          </h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Jump straight to the symptom that most closely matches the floor problem.
          </p>
        </div>
        <Link href="/guides/browse-problems" className="text-sm font-bold text-accent-700 hover:text-accent-600">
          Browse all problems
        </Link>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {problemSymptomLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="rounded-md border border-line bg-white p-2.5 text-sm font-bold text-slate-800 transition hover:border-accent-100 hover:text-accent-700"
          >
            {link.label}
            {!compact ? <span className="mt-1 block font-normal leading-5 text-slate-600">{link.description}</span> : null}
          </Link>
        ))}
      </div>
    </section>
  );
}

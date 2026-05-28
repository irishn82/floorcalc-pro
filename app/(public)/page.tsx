import Link from "next/link";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";

const featuredTools = tools.slice(0, 3);
const featuredGuides = guides.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* ── Hero: solid blue, big editorial typography ── */}
      <section className="bg-accent-600 px-4 py-20 sm:py-28 lg:py-36">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/90">
              <FlooringIcon name="ruler" className="h-3.5 w-3.5" />
              Free · No sign-up · Built for real projects
            </p>
            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Measure smarter,<br className="hidden sm:block" /> order right.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-accent-100 sm:text-xl">
              Free calculators for square footage, waste, stairs, carpet seams, pattern repeats, and transitions —
              before you buy a single plank.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 text-base font-bold text-accent-700 shadow-lg transition-all hover:bg-accent-50 sm:w-auto"
              >
                <FlooringIcon name="calculator" className="h-5 w-5" />
                Open a Calculator
              </Link>
              <Link
                href="/guides"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-white/30 px-7 py-4 text-base font-bold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
              >
                <FlooringIcon name="guide" className="h-5 w-5" />
                Browse Guides
              </Link>
            </div>
          </div>

          {/* ── stat pills ── */}
          <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {[
              { icon: "ruler" as const, label: "Square footage" },
              { icon: "waste" as const, label: "Waste & offcuts" },
              { icon: "stairs" as const, label: "Stair treads" },
              { icon: "carpet" as const, label: "Carpet seams" },
              { icon: "pattern" as const, label: "Pattern repeats" },
              { icon: "transition" as const, label: "Transitions" },
            ].map(({ icon, label }) => (
              <div key={label} className="flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2.5 text-sm font-semibold text-white backdrop-blur-sm">
                <FlooringIcon name={icon} className="h-4 w-4 shrink-0 text-accent-200" />
                {label}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Calculators ── */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent-600">Calculators</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                Pick a tool, start planning.
              </h2>
              <p className="mt-3 max-w-xl text-base text-slate-500">
                Use these before converting measurements into cartons, rolls, or installer quotes.
              </p>
            </div>
            <Link href="/tools" className="group shrink-0 inline-flex items-center gap-1 text-sm font-bold text-accent-600 hover:text-accent-700">
              All calculators
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Guides: dark inverted section ── */}
      <section className="bg-ink py-20 sm:py-24">
        <Container>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent-400">Guides</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Know before you buy.
              </h2>
              <p className="mt-3 max-w-xl text-base text-slate-400">
                Practical articles on measuring, waste, seams, transitions, moisture, and more.
              </p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-4">
              <Link href="/guides" className="group inline-flex items-center gap-1 text-sm font-bold text-accent-400 hover:text-accent-300">
                All guides
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </Link>
              <Link href="/guides/troubleshooting" className="group inline-flex items-center gap-1 text-sm font-bold text-accent-400 hover:text-accent-300">
                Troubleshooting
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} variant="dark" />
            ))}
          </div>
        </Container>
      </section>

      {/* ── Trust / disclaimer ── */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent-600">Built honestly</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">
                Estimates you can trust — and verify.
              </h2>
              <p className="mt-5 text-base leading-7 text-slate-500">
                Real orders can change based on product coverage, layout direction, installer practices, waste requirements,
                stair parts, transitions, and jobsite conditions. Use these numbers as a planning foundation — then
                verify with your installer or retailer before purchasing.
              </p>
              <Link href="/tools" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700">
                <FlooringIcon name="ruler" className="h-4 w-4" />
                Start calculating
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "calculator" as const, title: "Measure first", body: "Square footage, rooms, hallways — in one pass." },
                { icon: "waste" as const, title: "Add waste right", body: "Diagonal cuts, patterns, and staggered rows all change your yield." },
                { icon: "stairs" as const, title: "Don't forget stairs", body: "Treads, risers, and nosing add up faster than most expect." },
                { icon: "shield" as const, title: "Verify, then order", body: "Always confirm final quantities with your installer or retailer." },
              ].map(({ icon, title, body }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-white p-5">
                  <span className="inline-grid h-10 w-10 place-items-center rounded-xl border border-accent-100 bg-accent-50 text-accent-600">
                    <FlooringIcon name={icon} />
                  </span>
                  <h3 className="mt-3 text-sm font-black text-ink">{title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-slate-500">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

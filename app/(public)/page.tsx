import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";

const featuredTools = tools.slice(0, 3);
const featuredGuides = guides.slice(0, 3);

export default function HomePage() {
  return (
    <>
      <section className="brand-panel relative isolate overflow-hidden border-b border-line">
        <Image
          src="/flooring-workspace.png"
          alt="Flooring samples, measuring tape, and planning notes on a light work surface"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/78 to-brand-900/20" />
        <Container className="relative min-h-[500px] pb-20 pt-16 sm:pt-24">
          <div className="max-w-2xl text-white">
            <p className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-1 text-sm font-bold uppercase tracking-wide text-accent-100">
              <FlooringIcon name="calculator" className="h-4 w-4 text-accent-100" />
              Free flooring calculators
            </p>
            <h1 className="mt-4 text-3xl font-black tracking-normal sm:text-4xl lg:text-5xl">
              Estimate flooring materials with cleaner numbers.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-100 sm:text-lg">
              FloorCalc Pro helps homeowners and remodelers plan square footage, waste, stairs, carpet seams,
              pattern repeats, and transitions before ordering materials.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-accent-50"
              >
                <FlooringIcon name="ruler" className="h-4 w-4 text-accent-700" />
                Use Calculators
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <FlooringIcon name="guide" className="h-4 w-4 text-accent-100" />
                Read Guides
              </Link>
            </div>
            <div className="mt-7 grid max-w-xl gap-3 text-sm font-bold text-slate-100 sm:grid-cols-3">
              {[
                ["ruler", "Measure rooms", "/tools/flooring-square-footage-calculator"],
                ["waste", "Add waste", "/tools/waste-calculator"],
                ["transition", "Plan trim", "/tools/transition-estimator"]
              ].map(([icon, label, href]) => (
                <Link
                  key={label}
                  href={href}
                  className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 transition hover:border-white/30 hover:bg-white/15"
                >
                  <FlooringIcon name={icon as "ruler" | "waste" | "transition"} className="h-4 w-4 text-accent-100" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <Container>
          <SectionHeading
            eyebrow="Plan before you buy"
            title="Free flooring calculators for common project decisions"
            description="Use the tools as a planning layer before you convert measurements into cartons, trim pieces, rolls, or installer quotes."
          />
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/tools" className="inline-flex items-center gap-2 text-sm font-bold text-accent-700 hover:text-accent-600">
              View all flooring calculators
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-field py-10 sm:py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Flooring planning guides"
              title="Practical guides that connect measurements to real flooring choices"
              description="Clear flooring advice for measuring, waste, transitions, carpet seams, pets, tile overlays, radiant heat, and other project decisions."
            />
            <div className="grid gap-4 md:grid-cols-2">
              {featuredGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/guides" className="inline-flex items-center gap-2 text-sm font-bold text-accent-700 hover:text-accent-600">
              Browse all flooring guides
              <span aria-hidden="true">-&gt;</span>
            </Link>
            <Link
              href="/guides/troubleshooting"
              className="inline-flex items-center gap-2 text-sm font-bold text-accent-700 hover:text-accent-600"
            >
              Troubleshoot flooring problems
              <span aria-hidden="true">-&gt;</span>
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <Container>
          <div className="grid gap-6 border-y border-line py-7 md:grid-cols-[0.85fr_1.15fr]">
            <div className="flex gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                <FlooringIcon name="shield" />
              </span>
              <h2 className="text-xl font-black text-ink sm:text-2xl">Trustworthy estimates, not overpromises</h2>
            </div>
            <div>
              <p className="text-base leading-7 text-slate-600">
                FloorCalc Pro calculators are designed for planning and comparison. Real orders can change based on
                product coverage, layout direction, installer practices, manufacturer instructions, waste requirements,
                stair parts, transitions, and jobsite conditions.
              </p>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Use the numbers as a better starting point, then verify final quantities with the installer, retailer,
                or product documentation before purchasing materials.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
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
      <section className="relative isolate overflow-hidden border-b border-line bg-slate-950">
        <Image
          src="/flooring-workspace.png"
          alt="Flooring samples, measuring tape, and planning notes on a light work surface"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-white/10" />
        <Container className="relative min-h-[560px] pb-24 pt-20 sm:pt-28">
          <div className="max-w-2xl text-white">
            <p className="text-sm font-bold uppercase tracking-wide text-blue-200">Free flooring calculators</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl lg:text-6xl">
              Estimate flooring materials with cleaner numbers.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-100">
              FloorCalc Pro helps homeowners and remodelers plan square footage, waste, stairs, carpet seams,
              pattern repeats, and transitions before ordering materials.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex items-center justify-center rounded-md bg-white px-5 py-3 text-sm font-bold text-ink transition hover:bg-blue-50"
              >
                Use Calculators
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-md border border-white/35 px-5 py-3 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Read Guides
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <SectionHeading
            eyebrow="Plan before you buy"
            title="Free flooring calculators for common project decisions"
            description="Use the tools as a planning layer before you convert measurements into cartons, trim pieces, rolls, or installer quotes."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
          <div className="mt-8">
            <Link href="/tools" className="text-sm font-bold text-accent-700 hover:text-accent-600">
              View all flooring calculators
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-field py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="SEO guide library"
              title="Practical guides that connect measurements to real flooring choices"
              description="Each starter article is written for useful search intent: measuring, waste, transitions, carpet seams, pets, tile overlays, and radiant heat."
            />
            <div className="grid gap-5 md:grid-cols-2">
              {featuredGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
          <div className="mt-8">
            <Link href="/guides" className="text-sm font-bold text-accent-700 hover:text-accent-600">
              Browse all flooring guides
            </Link>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="grid gap-8 rounded-lg border border-line bg-white p-6 shadow-sm md:grid-cols-3 md:p-8">
            <div>
              <h2 className="text-2xl font-black text-ink">Trustworthy estimates, not overpromises</h2>
            </div>
            <div className="md:col-span-2">
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

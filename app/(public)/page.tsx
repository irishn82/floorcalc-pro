import Link from "next/link";
import { Container } from "@/components/Container";
import { FlooringIcon, type FlooringIconName } from "@/components/FlooringIcon";
import { GuideCard } from "@/components/GuideCard";
import { ToolCard } from "@/components/ToolCard";
import { guides } from "@/data/guides";
import { tools } from "@/data/tools";

const featuredTools = tools.slice(0, 3);
const featuredGuideSlugs = [
  "why-is-my-lvp-floor-clicking",
  "why-is-my-laminate-floor-separating",
  "can-engineered-hardwood-go-over-concrete",
  "how-to-test-concrete-moisture"
];
const featuredGuides = featuredGuideSlugs
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((guide): guide is (typeof guides)[number] => Boolean(guide));

type StartHereCard = {
  title: string;
  description: string;
  icon: FlooringIconName;
  primaryLink?: {
    href: string;
    label: string;
  };
  links: {
    href: string;
    label: string;
  }[];
};

const startHereCards: StartHereCard[] = [
  {
    title: "Estimate Materials",
    description: "Measure rooms, add waste, estimate stairs, plan seams, and check transition lengths.",
    icon: "calculator",
    primaryLink: { href: "/tools", label: "Open calculators" },
    links: [
      { href: "/tools/flooring-square-footage-calculator", label: "Flooring Square Footage Calculator" },
      { href: "/tools/waste-calculator", label: "Waste Calculator" },
      { href: "/tools/stair-flooring-calculator", label: "Stair Flooring Calculator" },
      { href: "/tools/transition-estimator", label: "Transition Estimator" }
    ]
  },
  {
    title: "Diagnose a Flooring Problem",
    description: "Start with symptoms like clicking, separating, buckling, moisture, concrete issues, or carpet seams.",
    icon: "shield",
    primaryLink: { href: "/diagnose", label: "Open Problem Finder" },
    links: [
      { href: "/guides/browse-problems", label: "Browse Problems" },
      { href: "/guides/troubleshooting", label: "Troubleshooting" },
      { href: "/guides/flooring-movement-problems", label: "Flooring Movement Problems" },
      { href: "/guides/flooring-moisture-problems", label: "Flooring Moisture Problems" },
      { href: "/guides/concrete-floor-problems", label: "Concrete Floor Problems" }
    ]
  },
  {
    title: "Plan an Installation",
    description: "Review checklists, moisture concerns, acclimation, concrete slabs, and jobsite conditions.",
    icon: "layers",
    primaryLink: { href: "/guides/lvp-installation-checklist", label: "Start with a checklist" },
    links: [
      { href: "/guides/lvp-installation-checklist", label: "LVP Installation Checklist" },
      { href: "/guides/laminate-installation-checklist", label: "Laminate Installation Checklist" },
      { href: "/guides/engineered-hardwood-installation-checklist", label: "Engineered Hardwood Installation Checklist" },
      { href: "/guides/tile-installation-checklist", label: "Tile Installation Checklist" },
      { href: "/guides/carpet-installation-checklist", label: "Carpet Installation Checklist" }
    ]
  }
];

export default function HomePage() {
  return (
    <>
      <section className="bg-accent-600 px-4 py-14 sm:py-16 lg:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/90">
              <FlooringIcon name="ruler" className="h-3.5 w-3.5" />
              Free flooring planning and troubleshooting
            </p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
              Measure, troubleshoot, and plan flooring projects.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-accent-100 sm:text-lg">
              Use FloorCalc Pro to estimate materials, understand flooring problems, review installation conditions,
              and prepare questions before ordering or repairing a floor.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/tools"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-accent-700 shadow-lg transition-all hover:bg-accent-50 sm:w-auto"
              >
                <FlooringIcon name="calculator" className="h-5 w-5" />
                Calculate materials
              </Link>
              <Link
                href="/diagnose"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-3 text-sm font-bold text-white ring-1 ring-white/25 transition-all hover:bg-white/15 sm:w-auto"
              >
                <FlooringIcon name="shield" className="h-5 w-5" />
                Diagnose a problem
              </Link>
              <Link
                href="/guides"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 text-sm font-bold text-white transition-all hover:border-white/60 hover:bg-white/10 sm:w-auto"
              >
                <FlooringIcon name="guide" className="h-5 w-5" />
                Read guidance
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-10 sm:py-12">
        <Container>
          <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent-600">Start Here</p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-ink sm:text-3xl">Choose the path that matches what you need today.</h2>
            </div>
            <Link href="/diagnose" className="inline-flex text-sm font-bold text-accent-700 hover:text-accent-600">
              Open Problem Finder
            </Link>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {startHereCards.map((card) => (
              <article key={card.title} className="rounded-2xl border border-slate-200 bg-field p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-accent-100 bg-white text-accent-700">
                    <FlooringIcon name={card.icon} />
                  </span>
                  <div>
                    <h3 className="text-lg font-black text-ink">{card.title}</h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">{card.description}</p>
                  </div>
                </div>
                {card.primaryLink ? (
                  <Link
                    href={card.primaryLink.href}
                    className="mt-4 inline-flex rounded-lg bg-accent-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-accent-800"
                  >
                    {card.primaryLink.label}
                  </Link>
                ) : null}
                <div className="mt-4 grid gap-2">
                  {card.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:text-accent-700"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent-600">Calculators</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-ink sm:text-4xl">Calculate the parts of the project you can measure.</h2>
              <p className="mt-3 max-w-xl text-base text-slate-500">
                Use the calculators for square footage, waste, stairs, carpet seams, pattern repeats, and transitions,
                then verify final quantities with product details and installer review.
              </p>
            </div>
            <Link href="/tools" className="group shrink-0 inline-flex items-center gap-1 text-sm font-bold text-accent-600 hover:text-accent-700">
              View all calculators
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

      <section className="bg-ink py-14 sm:py-16">
        <Container>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent-400">Troubleshooting and guidance</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-white sm:text-4xl">Understand the issue before choosing a fix.</h2>
              <p className="mt-3 max-w-xl text-base text-slate-400">
                Read practical guides on clicking floors, separation, concrete slabs, moisture testing, LVP over concrete,
                carpet seams, movement, and installation conditions.
              </p>
            </div>
            <Link href="/guides" className="group shrink-0 inline-flex items-center gap-1 text-sm font-bold text-accent-400 hover:text-accent-300">
              Browse guidance
              <svg className="h-4 w-4 transition-transform group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredGuides.map((guide) => (
              <GuideCard key={guide.slug} guide={guide} variant="dark" />
            ))}
          </div>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/[0.05] p-4 text-sm leading-6 text-slate-300">
            <p>
              Not sure which symptom matches your floor? Start with the{" "}
              <Link href="/diagnose" className="font-bold text-accent-300 hover:text-accent-200">
                Problem Finder
              </Link>
              {" "}or browse the main problem hubs.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {[
                { href: "/guides/flooring-movement-problems", label: "Movement" },
                { href: "/guides/flooring-moisture-problems", label: "Moisture" },
                { href: "/guides/concrete-floor-problems", label: "Concrete" },
                { href: "/guides/troubleshooting", label: "All troubleshooting" }
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-bold text-slate-200 transition hover:border-accent-300/40 hover:text-accent-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-accent-600">Use it as a planning check</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-ink sm:text-4xl">Start with the numbers, then check the conditions.</h2>
              <p className="mt-5 text-base leading-7 text-slate-500">
                Flooring decisions depend on measurements, product coverage, layout direction, moisture, subfloor support,
                transitions, and the written installation instructions. Use FloorCalc Pro to prepare, then verify final
                requirements with the product manufacturer, retailer, or installer.
              </p>
              <Link href="/tools" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-accent-700">
                <FlooringIcon name="ruler" className="h-4 w-4" />
                Start with measurements
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "calculator" as const, title: "Measure first", body: "Square footage, rooms, hallways, stairs, and transitions." },
                { icon: "shield" as const, title: "Check symptoms", body: "Clicking, separating, swelling, bounce, seams, and concrete issues." },
                { icon: "layers" as const, title: "Review conditions", body: "Moisture, flatness, acclimation, underlayment, and jobsite prep." },
                { icon: "guide" as const, title: "Verify before work", body: "Confirm product instructions and field conditions before ordering or repair." }
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

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { FlooringIcon } from "@/components/FlooringIcon";
import { SectionHeading } from "@/components/SectionHeading";
import { ToolCard } from "@/components/ToolCard";
import { tools } from "@/data/tools";
import { getToolRelatedGuides } from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Calculators",
  description:
    "Browse free flooring calculators for square footage, waste, stairs, carpet seams, pattern repeats, and transitions.",
  path: "/tools"
});

const problemHubLinks = [
  {
    href: "/guides/browse-problems",
    label: "Browse problems by symptom",
    description: "Start here if you know what the floor is doing but not which material category fits."
  },
  {
    href: "/guides/flooring-movement-problems",
    label: "Movement problems",
    description: "Clicking, lifting, separating, buckling, peaking, gaps, hollow sounds, and squeaks."
  },
  {
    href: "/guides/flooring-moisture-problems",
    label: "Moisture problems",
    description: "Swelling, cupping, crowning, humidity, slab moisture, wet subfloors, and acclimation concerns."
  },
  {
    href: "/guides/concrete-floor-problems",
    label: "Concrete floor problems",
    description: "Slab moisture, cracks, flatness, adhesive release, hollow spots, and product compatibility."
  }
];

export default function ToolsIndexPage() {
  return (
    <section className="bg-white py-8 sm:py-10">
      <Container>
        <Breadcrumbs
          items={[
            { href: "/", label: "Home" },
            { label: "Tools" }
          ]}
        />
        <div className="grid gap-6 border-b border-line pb-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <SectionHeading
            eyebrow="Tools"
            title="Flooring calculators"
            description="Choose a calculator below to estimate the most common material planning questions before a flooring project."
            headingLevel="h1"
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              ["ruler", "Room measurements", "/tools/flooring-square-footage-calculator"],
              ["waste", "Material waste", "/tools/waste-calculator"],
              ["carpet", "Carpet planning", "/tools/carpet-seam-planner"]
            ].map(([icon, label, href]) => (
              <Link
                key={label}
                href={href}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-field px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:bg-white hover:text-accent-700"
              >
                <FlooringIcon name={icon as "ruler" | "waste" | "carpet"} className="h-4 w-4 text-accent-700" />
                {label}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} relatedGuides={getToolRelatedGuides(tool.slug)} />
          ))}
        </div>

        <div className="mt-7 border-t border-line pt-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-black tracking-normal text-ink sm:text-2xl">Not sure which calculator to use?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
                If the project starts with a flooring problem, open the closest troubleshooting hub first, then come back to measurements.
              </p>
            </div>
            <Link href="/guides/troubleshooting" className="text-sm font-bold text-accent-700 hover:text-accent-600">
              Troubleshooting hub
            </Link>
          </div>
          <div className="mt-4 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {problemHubLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-line bg-field p-3 text-sm transition hover:border-accent-100 hover:bg-white"
              >
                <span className="inline-flex items-center gap-2 font-black text-ink">
                  <FlooringIcon name="shield" className="h-4 w-4 text-accent-700" />
                  {link.label}
                </span>
                <span className="mt-2 block leading-6 text-slate-600">{link.description}</span>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

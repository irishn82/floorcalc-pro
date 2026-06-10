import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { DecisionTreeExplorer, type DecisionTreeResolved, type DecisionTreeLink } from "@/components/DecisionTreeExplorer";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FlooringIcon } from "@/components/FlooringIcon";
import { decisionTrees } from "@/data/decision-trees";
import { getGuideBySlug, getRelatedTools } from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = createSeoMetadata({
  title: "Flooring Decision Trees",
  description:
    "Use simple flooring decision trees for clicking, separating, buckling, lifting, moisture, and concrete problems to find the right troubleshooting guide.",
  path: "/decision-trees"
});

function resolveGuideLinks(slugs: (typeof decisionTrees)[number]["results"][number]["relatedGuides"]): DecisionTreeLink[] {
  return slugs.flatMap((slug) => {
    const guide = getGuideBySlug(slug);

    return guide
      ? [
          {
            href: `/guides/${guide.slug}`,
            label: guide.title,
            description: guide.description
          }
        ]
      : [];
  });
}

function resolveToolLinks(slugs: (typeof decisionTrees)[number]["results"][number]["relatedCalculators"]): DecisionTreeLink[] {
  return getRelatedTools(slugs).map((tool) => ({
    href: `/tools/${tool.slug}`,
    label: tool.title,
    description: tool.description
  }));
}

function resolveDecisionTrees(): DecisionTreeResolved[] {
  return decisionTrees.map((tree) => ({
    id: tree.id,
    title: tree.title,
    description: tree.description,
    startingQuestionId: tree.startingQuestionId,
    questions: tree.questions,
    results: tree.results.map((result) => ({
      id: result.id,
      title: result.title,
      likelyCause: result.likelyCause,
      summary: result.summary,
      urgency: result.urgency,
      whatToCheckFirst: result.whatToCheckFirst,
      whenToCallAPro: result.whenToCallAPro,
      relatedGuides: resolveGuideLinks(result.relatedGuides),
      relatedCalculators: resolveToolLinks(result.relatedCalculators)
    }))
  }));
}

export default function DecisionTreesPage() {
  const resolvedTrees = resolveDecisionTrees();

  return (
    <>
      <section className="bg-white py-8 sm:py-10">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { label: "Decision Trees" }
            ]}
          />
          <div className="grid gap-6 border-b border-line pb-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                  <FlooringIcon name="shield" className="h-4 w-4" />
                </span>
                Guided flooring help
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">
                Follow a simple decision tree for common flooring problems.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                Choose a symptom, answer a few practical questions, and move toward the most relevant troubleshooting guide,
                calculator, or next check. This is not AI and not a professional diagnosis.
              </p>
            </div>
            <div className="rounded-lg border border-line bg-field p-3.5 shadow-sm">
              <h2 className="text-lg font-black text-ink">Best used for</h2>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
                {["Clicking", "Separating", "Buckling", "Lifting", "Moisture", "Concrete"].map((item) => (
                  <span key={item} className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                If you are unsure which symptom fits, start with the Problem Finder or browse by symptom.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Link href="/diagnose" className="rounded-md bg-accent-700 px-3 py-2 text-sm font-bold text-white hover:bg-accent-800">
                  Problem Finder
                </Link>
                <Link href="/guides/browse-problems" className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 hover:text-accent-700">
                  Browse Problems
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-field py-8 sm:py-10">
        <Container>
          <DecisionTreeExplorer trees={resolvedTrees} />
        </Container>
      </section>

      <section className="bg-white py-8">
        <Container>
          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <div className="rounded-lg border border-line bg-field p-4 shadow-sm">
              <p className="text-xs font-bold uppercase tracking-wide text-accent-700">Industry-aligned safety</p>
              <h2 className="mt-2 text-xl font-black text-ink">Use this as a path, not a final diagnosis.</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Flooring symptoms often overlap. NWFA, CRI, TCNA/ANSI, RFCI, ASTM F710-style substrate principles, and
                manufacturer instructions all point back to field verification: material, substrate, moisture, movement,
                installation method, and product requirements must be checked before repair.
              </p>
            </div>
            <DisclaimerBox>
              Decision trees are general planning tools. They do not approve a product, diagnose structural conditions,
              set warranty terms, or replace manufacturer instructions or professional inspection. Verify moisture limits,
              flatness tolerances, acclimation rules, adhesive requirements, and repair methods for the exact flooring system.
            </DisclaimerBox>
          </div>
        </Container>
      </section>
    </>
  );
}

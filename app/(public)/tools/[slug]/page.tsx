import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { FlooringIcon } from "@/components/FlooringIcon";
import { JsonLd } from "@/components/JsonLd";
import { NextStepPanel } from "@/components/NextStepPanel";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCalculator } from "@/components/calculators/ToolCalculator";
import { tools } from "@/data/tools";
import { getRelatedTools, getToolBySlug, getToolRelatedGuides } from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";
import { faqJsonLd, toolJsonLd } from "@/lib/seo/schema";

type ToolPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return {};
  }

  return createSeoMetadata({
    title: tool.metadataTitle,
    description: tool.metadataDescription,
    path: `/tools/${tool.slug}`
  });
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const relatedTools = getRelatedTools(tool.relatedTools);
  const relatedGuides = getToolRelatedGuides(tool.slug);

  return (
    <>
      <JsonLd data={toolJsonLd({ name: tool.title, description: tool.description, path: `/tools/${tool.slug}` })} />
      <JsonLd data={faqJsonLd(tool.faq)} />
      <section className="bg-white py-10 sm:py-12">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/tools", label: "Tools" },
              { label: tool.shortTitle }
            ]}
          />
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                <FlooringIcon name="calculator" className="h-4 w-4" />
              </span>
              Flooring calculator
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">{tool.title}</h1>
            <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">{tool.description}</p>
            <p className="mt-4 inline-block max-w-full break-words whitespace-normal rounded-md border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-bold uppercase leading-5 tracking-wide text-accent-700">
              Flooring type: {tool.flooringSystem}
            </p>
          </div>
          <div className="mt-8">
            <CalculatorLayout
              title={tool.title}
              intro={tool.description}
              flooringSystem={tool.flooringSystem}
              formula={tool.formula}
              notes={tool.notes}
            >
              <ToolCalculator type={tool.calculatorType} />
            </CalculatorLayout>
          </div>
        </Container>
      </section>
      <RelatedLinks
        title="Related Flooring Calculators"
        links={relatedTools.map((related) => ({
          href: `/tools/${related.slug}`,
          label: related.title,
          description: related.description
        }))}
      />
      <RelatedLinks
        title="Guides for This Calculator"
        links={relatedGuides.map((guide) => ({
          href: `/guides/${guide.slug}`,
          label: guide.title,
          description: guide.description
        }))}
      />
      <NextStepPanel
        description="Use the calculator result as a planning estimate, then compare the related guide before ordering flooring or trim."
        primaryLink={{
          href: relatedGuides[0] ? `/guides/${relatedGuides[0].slug}` : "/guides",
          label: relatedGuides[0] ? `Read ${relatedGuides[0].title}` : "Browse flooring guides"
        }}
        secondaryLinks={[
          { href: "/guides/troubleshooting", label: "Troubleshooting guides" },
          { href: "/guides", label: "All guides" },
          { href: "/tools", label: "All calculators" }
        ]}
      />
      <FAQSection items={tool.faq} />
    </>
  );
}

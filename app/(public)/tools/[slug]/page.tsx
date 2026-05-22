import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CalculatorLayout } from "@/components/CalculatorLayout";
import { Container } from "@/components/Container";
import { FAQSection } from "@/components/FAQSection";
import { FlooringIcon } from "@/components/FlooringIcon";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { ToolCalculator } from "@/components/calculators/ToolCalculator";
import { tools } from "@/data/tools";
import { getRelatedTools, getToolBySlug } from "@/lib/content/paths";
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

  return (
    <>
      <JsonLd data={toolJsonLd({ name: tool.title, description: tool.description, path: `/tools/${tool.slug}` })} />
      <JsonLd data={faqJsonLd(tool.faq)} />
      <section className="bg-white py-12 sm:py-16">
        <Container>
          <div className="max-w-3xl">
            <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                <FlooringIcon name="calculator" className="h-4 w-4" />
              </span>
              Flooring calculator
            </p>
            <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-5xl">{tool.title}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-600">{tool.description}</p>
            <p className="mt-4 inline-block max-w-full break-words whitespace-normal rounded-md border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-bold uppercase leading-5 tracking-wide text-accent-700">
              Flooring type: {tool.flooringSystem}
            </p>
          </div>
          <div className="mt-10">
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
      <FAQSection items={tool.faq} />
    </>
  );
}

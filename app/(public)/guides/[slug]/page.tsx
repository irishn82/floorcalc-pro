import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQSection } from "@/components/FAQSection";
import { FlooringIcon } from "@/components/FlooringIcon";
import { JsonLd } from "@/components/JsonLd";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TableOfContents } from "@/components/TableOfContents";
import { guides } from "@/data/guides";
import {
  getEcosystemRelatedGuides,
  getGuideBySlug,
  getGuideEcosystemLinks,
  getRelatedGuides,
  getRelatedTools
} from "@/lib/content/paths";
import { createSeoMetadata } from "@/lib/seo/metadata";
import { articleJsonLd, faqJsonLd } from "@/lib/seo/schema";

type GuidePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: GuidePageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    return {};
  }

  return createSeoMetadata({
    title: guide.metadataTitle,
    description: guide.metadataDescription,
    path: `/guides/${guide.slug}`,
    type: "article"
  });
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);

  if (!guide) {
    notFound();
  }

  const relatedTools = getRelatedTools(guide.relatedTools);
  const explicitRelatedGuides = getRelatedGuides(guide.relatedGuides ?? []);
  const ecosystemRelatedGuides = getEcosystemRelatedGuides(guide);
  const relatedGuides = [...explicitRelatedGuides, ...ecosystemRelatedGuides]
    .filter((relatedGuide, index, allGuides) => allGuides.findIndex((item) => item.slug === relatedGuide.slug) === index)
    .slice(0, 4);
  const ecosystemLinks = getGuideEcosystemLinks(guide);

  return (
    <>
      <JsonLd
        data={articleJsonLd({
          title: guide.title,
          description: guide.description,
          path: `/guides/${guide.slug}`,
          dateModified: guide.dateModified
        })}
      />
      <JsonLd data={faqJsonLd(guide.faq)} />
      <article className="bg-white py-12 sm:py-16">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[260px_minmax(0,760px)] lg:items-start">
            <aside className="lg:sticky lg:top-24">
              <TableOfContents items={guide.sections.map((section) => ({ id: section.id, title: section.title }))} />
            </aside>
            <div>
              <p className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-600">
                <span className="grid h-8 w-8 place-items-center rounded-lg border border-accent-100 bg-accent-50 text-accent-700">
                  <FlooringIcon name="guide" className="h-4 w-4" />
                </span>
                Flooring guide
              </p>
              <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-5xl">{guide.title}</h1>
              <p className="mt-5 text-lg leading-8 text-slate-600">{guide.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>Updated {guide.dateModified}</span>
                <span>{guide.readTime}</span>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {ecosystemLinks.slice(0, 4).map((ecosystem) => (
                  <Link
                    key={ecosystem.slug}
                    href={`/guides/ecosystems/${ecosystem.slug}`}
                    className="rounded-md border border-accent-100 bg-accent-50 px-3 py-1 text-xs font-bold uppercase leading-5 tracking-wide text-accent-700 transition hover:border-accent-200 hover:bg-white"
                  >
                    {ecosystem.shortTitle}
                  </Link>
                ))}
              </div>
              <div className="mt-8 rounded-lg border border-line bg-field p-5 shadow-sm">
                <h2 className="inline-flex items-center gap-2 text-lg font-bold text-ink">
                  <FlooringIcon name="calculator" className="h-5 w-5 text-accent-700" />
                  Useful calculators for this guide
                </h2>
                <div className="mt-3 flex flex-wrap gap-2">
                  {relatedTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="rounded-md border border-line bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-accent-100 hover:text-accent-700"
                    >
                      {tool.shortTitle}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="prose-flooring mt-8">
                {guide.sections.map((section) => (
                  <section key={section.id} id={section.id} className="scroll-mt-24">
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                    {section.bullets ? (
                      <ul>
                        {section.bullets.map((bullet) => (
                          <li key={bullet}>{bullet}</li>
                        ))}
                      </ul>
                    ) : null}
                    {section.subsections?.map((subsection) => (
                      <div key={subsection.title}>
                        <h3>{subsection.title}</h3>
                        {subsection.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                        {subsection.bullets ? (
                          <ul>
                            {subsection.bullets.map((bullet) => (
                              <li key={bullet}>{bullet}</li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </section>
                ))}
              </div>
              {guide.disclaimer ? (
                <div className="mt-10">
                  <DisclaimerBox>{guide.disclaimer}</DisclaimerBox>
                </div>
              ) : null}
            </div>
          </div>
        </Container>
      </article>
      <RelatedLinks
        title="Related Flooring Calculators"
        links={relatedTools.map((tool) => ({
          href: `/tools/${tool.slug}`,
          label: tool.title,
          description: tool.description
        }))}
      />
      <RelatedLinks
        title="Related Flooring Guides"
        links={relatedGuides.map((relatedGuide) => ({
          href: `/guides/${relatedGuide.slug}`,
          label: relatedGuide.title,
          description: relatedGuide.description
        }))}
      />
      <RelatedLinks
        title="Related Flooring Ecosystems"
        links={ecosystemLinks.slice(0, 4).map((ecosystem) => ({
          href: `/guides/ecosystems/${ecosystem.slug}`,
          label: ecosystem.title,
          description: ecosystem.description
        }))}
      />
      <FAQSection items={guide.faq} />
    </>
  );
}

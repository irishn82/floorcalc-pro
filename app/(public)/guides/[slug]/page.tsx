import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Container } from "@/components/Container";
import { DisclaimerBox } from "@/components/DisclaimerBox";
import { FAQSection } from "@/components/FAQSection";
import { FlooringIcon } from "@/components/FlooringIcon";
import { GuideUtilityVisual } from "@/components/GuideUtilityVisual";
import { JsonLd } from "@/components/JsonLd";
import { NextStepPanel } from "@/components/NextStepPanel";
import { RelatedLinks } from "@/components/RelatedLinks";
import { TableOfContents } from "@/components/TableOfContents";
import { guides } from "@/data/guides";
import {
  getEcosystemRelatedGuides,
  getGuideBySlug,
  getGuideEcosystemLinks,
  getRelatedGuides,
  getRelatedTools,
  getTroubleshootingGuidesForGuide
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
  const troubleshootingGuides = getTroubleshootingGuidesForGuide(guide);
  const ecosystemLinks = getGuideEcosystemLinks(guide);
  const primaryEcosystem = ecosystemLinks[0];
  const nextStepTool = relatedTools[0];
  const nextStepGuide = explicitRelatedGuides.find((relatedGuide) => relatedGuide.slug !== guide.slug) ?? ecosystemRelatedGuides[0];

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
      <article className="bg-white py-8 sm:py-10">
        <Container>
          <Breadcrumbs
            items={[
              { href: "/", label: "Home" },
              { href: "/guides", label: "Guides" },
              ...(primaryEcosystem
                ? [{ href: `/guides/ecosystems/${primaryEcosystem.slug}`, label: primaryEcosystem.shortTitle }]
                : []),
              { label: guide.title }
            ]}
          />
          <div className="grid gap-7 lg:grid-cols-[240px_minmax(0,760px)] lg:items-start">
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
              <h1 className="mt-3 text-3xl font-black tracking-normal text-ink sm:text-4xl">{guide.title}</h1>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{guide.description}</p>
              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                <span>Updated {guide.dateModified}</span>
                <span>{guide.readTime}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
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
              <div className="mt-6 rounded-lg border border-line bg-field p-4 shadow-sm">
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
              <GuideUtilityVisual guide={guide} />
              <div className="prose-flooring mt-6">
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
                <div className="mt-8">
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
        links={explicitRelatedGuides.slice(0, 4).map((relatedGuide) => ({
          href: `/guides/${relatedGuide.slug}`,
          label: relatedGuide.title,
          description: relatedGuide.description
        }))}
      />
      <RelatedLinks
        title={primaryEcosystem ? `More ${primaryEcosystem.shortTitle} Guides` : "More Flooring Guides"}
        links={ecosystemRelatedGuides.slice(0, 4).map((relatedGuide) => ({
          href: `/guides/${relatedGuide.slug}`,
          label: relatedGuide.title,
          description: relatedGuide.description
        }))}
      />
      <RelatedLinks
        title="Troubleshooting Guides"
        links={troubleshootingGuides.map((troubleshootingGuide) => ({
          href: `/guides/${troubleshootingGuide.slug}`,
          label: troubleshootingGuide.title,
          description: troubleshootingGuide.description
        }))}
      />
      <RelatedLinks
        title="Related Flooring Types"
        links={ecosystemLinks.slice(0, 4).map((ecosystem) => ({
          href: `/guides/ecosystems/${ecosystem.slug}`,
          label: ecosystem.title,
          description: ecosystem.description
        }))}
      />
      <NextStepPanel
        description="Use the related calculator to turn the article into a material estimate, then compare the next guide before ordering or calling an installer."
        primaryLink={{
          href: nextStepTool ? `/tools/${nextStepTool.slug}` : "/tools",
          label: nextStepTool ? `Use ${nextStepTool.shortTitle}` : "Open flooring calculators"
        }}
        secondaryLinks={[
          ...(nextStepGuide
            ? [
                {
                  href: `/guides/${nextStepGuide.slug}`,
                  label: nextStepGuide.title,
                  description: "Read the next guide connected to this topic."
                }
              ]
            : []),
          ...(primaryEcosystem
            ? [
                {
                  href: `/guides/ecosystems/${primaryEcosystem.slug}`,
                  label: `Browse ${primaryEcosystem.shortTitle} guides`,
                  description: "See the full flooring type section."
                }
              ]
            : []),
          {
            href: "/guides/troubleshooting",
            label: "Troubleshooting hub",
            description: "Compare common flooring problems and causes."
          }
        ].slice(0, 3)}
      />
      <FAQSection items={guide.faq} />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/faq-section";
import { Arrow } from "@/components/icons";
import { QuoteSection } from "@/components/quote-section";
import { createPageMetadata } from "@/lib/metadata";
import { getSeoLandingPage, seoLandingPages } from "@/lib/seo-landing-pages";
import { services, site } from "@/lib/site";

export function generateStaticParams() {
  return seoLandingPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);
  if (!page) return {};

  return createPageMetadata({
    title: page.title,
    description: page.description,
    path: `/elektriker/${page.slug}`,
  });
}

export default async function SeoLandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getSeoLandingPage(slug);
  if (!page) notFound();

  const relatedPages = page.related
    .map((relatedSlug) => getSeoLandingPage(relatedSlug))
    .filter((relatedPage): relatedPage is NonNullable<typeof relatedPage> =>
      Boolean(relatedPage),
    );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${site.url}/elektriker/${page.slug}#service`,
        name: page.title,
        description: page.description,
        areaServed: {
          "@type": "City",
          name: page.location,
          containedInPlace: { "@type": "Country", name: "Sverige" },
        },
        provider: { "@id": `${site.url}/#business` },
        serviceType: page.primaryKeyword,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eltjänster från Perssons El",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${site.url}/tjanster/${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startsida",
            item: site.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: page.title,
            item: `${site.url}/elektriker/${page.slug}`,
          },
        ],
      },
    ],
  };

  return (
    <>
      <section className="seo-hero">
        <div className="shell seo-hero-grid">
          <div>
            <p className="eyebrow">{page.eyebrow}</p>
            <h1>{page.title}</h1>
            <p className="lead">{page.heroLead}</p>
            <div className="hero-actions">
              <a className="button" href="#offert">
                Be om offert <Arrow />
              </a>
              <a className="text-link" href={`tel:${site.phoneHref}`}>
                Ring {site.phone}
              </a>
            </div>
          </div>
          <div className="seo-hero-proof" aria-label="Snabbfakta">
            {page.proof.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section seo-copy-section">
        <div className="shell seo-copy-grid">
          <div>
            <p className="eyebrow">{page.primaryKeyword}</p>
            <h2>{page.introTitle}</h2>
          </div>
          <div>
            {page.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <ul className="seo-check-list">
              {page.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section seo-process-section">
        <div className="shell">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">Arbetssätt</p>
              <h2>{page.processTitle}</h2>
            </div>
          </div>
          <div className="seo-process-grid">
            {page.process.map((step, index) => (
              <article key={step.title}>
                <span>0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section seo-related-section">
        <div className="shell seo-related-grid">
          <div>
            <p className="eyebrow">Mer hjälp</p>
            <h2>{page.proofTitle}</h2>
          </div>
          <div className="seo-link-panel">
            <p>
              Läs mer om närliggande eltjänster och områden, eller skicka en
              förfrågan så hjälper vi dig att välja rätt väg framåt.
            </p>
            <div className="seo-related-links">
              {relatedPages.map((relatedPage) => (
                <Link
                  className="text-link"
                  href={`/elektriker/${relatedPage.slug}`}
                  key={relatedPage.slug}
                >
                  {relatedPage.title} <Arrow />
                </Link>
              ))}
              {services.slice(0, 3).map((service) => (
                <Link
                  className="text-link"
                  href={`/tjanster/${service.slug}`}
                  key={service.slug}
                >
                  {service.title} <Arrow />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <QuoteSection />
      <FaqSection content={page.faq} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}

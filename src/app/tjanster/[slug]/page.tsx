import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqSection } from "@/components/faq-section";
import { Arrow } from "@/components/icons";
import { QuoteSection } from "@/components/quote-section";
import { getServiceFaq } from "@/lib/faq";
import { createPageMetadata } from "@/lib/metadata";
import { seoCopy } from "@/lib/seo-content";
import { serviceDetails } from "@/lib/service-details";
import { services } from "@/lib/site";

export function generateStaticParams() {
  return services.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return createPageMetadata({
    title: `${s.title} i Helsingborg`,
    description: s.intro,
    path: `/tjanster/${slug}`,
  });
}
export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) notFound();
  return (
    <>
      <section className="service-hero">
        <div className="shell service-hero-grid">
          <div>
            <p className="eyebrow">Tjänster · Helsingborg</p>
            <h1>{s.title} i Helsingborg</h1>
            <p className="lead">{s.intro}</p>
            <a className="button" href="#offert">
              Beskriv ditt jobb <Arrow />
            </a>
          </div>
          <div className="service-hero-image">
            <Image
              src={s.image}
              alt={s.alt}
              fill
              preload
              fetchPriority="high"
              sizes="(max-width:800px) 100vw, 48vw"
            />
          </div>
        </div>
      </section>
      <section className="section detail-section">
        <div className="shell detail-grid">
          <div>
            <p className="eyebrow">Så hjälper vi dig</p>
            <h2>Rätt lösning för platsen och behovet.</h2>
          </div>
          <div>
            <ul>
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            <p>
              Varje uppdrag börjar med att vi går igenom förutsättningarna.
              Därefter får du ett tydligt förslag på hur arbetet kan genomföras.
            </p>
            <p>{serviceDetails[s.slug]}</p>
            <Link className="text-link" href="/tjanster">
              {seoCopy.allServicesLink} <Arrow />
            </Link>
            <Link className="text-link" href="/sociala-medier">
              Följ våra arbeten <Arrow />
            </Link>
          </div>
        </div>
      </section>
      <QuoteSection />
      <FaqSection content={getServiceFaq(s.title, s.slug)} />
    </>
  );
}

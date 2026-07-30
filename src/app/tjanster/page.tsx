import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { FaqSection } from "@/components/faq-section";
import { QuoteSection } from "@/components/quote-section";
import { services } from "@/lib/site";
import { faqContent } from "@/lib/faq";
import { seoPageMetadata } from "@/lib/seo-content";

export const metadata: Metadata = seoPageMetadata.services;
export default function ServicesPage() {
  return (
    <>
      <section className="image-overlay-hero services-image-hero">
        <Image
          className="image-overlay-hero-image"
          src="/images/hero-services-overview.png"
          alt="Elektriker som genomför en säkerhetskontroll av en modern elcentral"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="shell image-overlay-hero-content">
          <h1>Elhjälp för hela anläggningen.</h1>
          <p>
            Planering, installation och felsökning – utfört med fokus på
            säkerhet, funktion och ett snyggt slutresultat.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell services-cards">
          {services.map((s, i) => (
            <article className="service-card" key={s.slug}>
              <div className="service-card-image">
                <Image
                  src={s.image}
                  alt={s.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, 50vw"
                />
              </div>
              <div>
                <span className="service-index">0{i + 1}</span>
                <h2>{s.title}</h2>
                <p>{s.intro}</p>
                <Link className="text-link" href={`/tjanster/${s.slug}`}>
                  Läs om tjänsten <Arrow />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <QuoteSection />
      <FaqSection content={faqContent.services} />
    </>
  );
}

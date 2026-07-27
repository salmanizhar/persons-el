import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { QuoteSection } from "@/components/quote-section";
import { services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Eltjänster i Helsingborg",
  description:
    "Elinstallation, belysning, elcentraler och felsökning för hem och företag i Helsingborg.",
  alternates: { canonical: "/tjanster" },
};
export default function ServicesPage() {
  return (
    <>
      <section className="page-hero services-overview-hero">
        <div className="shell services-hero-grid">
          <div className="services-hero-copy">
            <p className="eyebrow">Tjänster</p>
            <h1>
              Elhjälp för hela
              <br />
              anläggningen.
            </h1>
            <p>
              Planering, installation och felsökning – utfört med fokus på
              säkerhet, funktion och ett snyggt slutresultat.
            </p>
          </div>
          <div className="services-hero-image">
            <Image
              src="/images/hero-services-overview.png"
              alt="Elektriker som genomför en säkerhetskontroll av en modern elcentral"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
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
    </>
  );
}

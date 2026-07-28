import type { Metadata } from "next";
import Image from "next/image";
import { FaqSection } from "@/components/faq-section";
import { QuoteSection } from "@/components/quote-section";
import { projects } from "@/lib/site";
import { faqContent } from "@/lib/faq";
export const metadata: Metadata = {
  title: "Elprojekt i Helsingborg",
  description:
    "Se exempel på belysning, elcentraler, kabeldragning och andra elarbeten utförda av Perssons El.",
  alternates: { canonical: "/projekt" },
};
export default function ProjectsPage() {
  return (
    <>
      <section className="image-overlay-hero projects-image-hero">
        <Image
          className="image-overlay-hero-image"
          src="/images/hero-projects-workmanship.png"
          alt="Färdig ljusinstallation i ett modernt skandinaviskt hem"
          fill
          priority
          sizes="100vw"
        />
        <div className="shell image-overlay-hero-content">
          <h1>Arbetet får tala för sig.</h1>
          <p>
            Ett urval av installationer, belysningsjobb och tekniska lösningar
            från våra uppdrag.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="shell project-grid project-grid-full">
          {projects.map((p, i) => (
            <article
              className={`project-card project-${(i % 3) + 1}`}
              key={p.src}
            >
              <div className="project-image">
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(max-width:700px) 100vw, 33vw"
                />
              </div>
              <p className="project-label">{p.label}</p>
              <h2>{p.title}</h2>
            </article>
          ))}
        </div>
      </section>
      <QuoteSection />
      <FaqSection content={faqContent.projects} />
    </>
  );
}

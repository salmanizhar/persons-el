import type { Metadata } from "next";
import Image from "next/image";
import { FaqSection } from "@/components/faq-section";
import { faqContent } from "@/lib/faq";
import { site } from "@/lib/site";
import { seoPageMetadata } from "@/lib/seo-content";

export const metadata: Metadata = seoPageMetadata.privacy;

export default function Privacy() {
  return (
    <>
      <section className="image-overlay-hero privacy-image-hero">
        <Image
          className="image-overlay-hero-image"
          src="/images/cta-wiring-background-v2.webp"
          alt="Elektriker som arbetar med en elinstallation"
          fill
          sizes="100vw"
          preload
          fetchPriority="high"
        />
        <div className="shell image-overlay-hero-content">
          <p className="eyebrow light">Integritet &amp; information</p>
          <h1>Din information. Hanterad med omsorg.</h1>
          <p>
            När du kontaktar Perssons El behandlar vi de uppgifter du lämnar för
            att kunna besvara din förfrågan och hantera ett eventuellt uppdrag.
          </p>
        </div>
      </section>

      <section className="section privacy-content-section">
        <div className="shell privacy-layout">
          <aside className="privacy-intro">
            <p className="eyebrow">Tydlig hantering</p>
            <h2>Det här händer med dina uppgifter.</h2>
            <p>
              Vi använder bara informationen för att kunna svara på din
              förfrågan och genomföra det arbete du ber oss om.
            </p>
            <a className="privacy-contact" href={`mailto:${site.email}`}>
              <span>Frågor om integritet</span>
              <strong>{site.email}</strong>
            </a>
          </aside>

          <div className="privacy-articles">
            <article>
              <span aria-hidden="true">01</span>
              <div>
                <h2>Uppgifter vi behandlar</h2>
                <p>
                  Namn, kontaktuppgifter, ort och den information om arbetet som
                  du själv skickar till oss.
                </p>
              </div>
            </article>
            <article>
              <span aria-hidden="true">02</span>
              <div>
                <h2>Varför uppgifterna används</h2>
                <p>
                  Uppgifterna används för att kontakta dig, lämna offert och
                  administrera kundrelationen. De delas endast med
                  tjänsteleverantörer när det krävs för att hantera din
                  förfrågan eller uppfylla rättsliga skyldigheter.
                </p>
              </div>
            </article>
            <article>
              <span aria-hidden="true">03</span>
              <div>
                <h2>Dina rättigheter</h2>
                <p>
                  Du kan begära information om, rättelse eller radering av dina
                  uppgifter genom att kontakta{" "}
                  <a href={`mailto:${site.email}`}>{site.email}</a>.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <FaqSection content={faqContent.privacy} />
    </>
  );
}

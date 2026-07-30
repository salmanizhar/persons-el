import type { Metadata } from "next";
import Image from "next/image";
import { FaqSection } from "@/components/faq-section";
import { QuoteSection } from "@/components/quote-section";
import { faqContent } from "@/lib/faq";
import { seoPageMetadata } from "@/lib/seo-content";

export const metadata: Metadata = seoPageMetadata.about;

export default function AboutPage() {
  return (
    <>
      <section className="image-overlay-hero about-image-hero">
        <Image
          className="image-overlay-hero-image"
          src="/images/hero-about-perssons-el.png"
          alt="Elektriker i en välorganiserad professionell verkstad"
          fill
          preload
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="shell image-overlay-hero-content">
          <h1>Din lokala elektriker i Helsingborg.</h1>
          <p>
            Vi tror på tydlig kommunikation, ordning i arbetet och lösningar som
            fungerar långt efter att verktygslådan är stängd.
          </p>
        </div>
      </section>
      <section className="section about-section">
        <div className="shell about-grid">
          <div className="about-image">
            <Image
              src="/images/about-perssons-el-v2.png"
              alt="Professionell elektriker i en välorganiserad verkstad"
              fill
              sizes="(max-width:800px) 100vw, 48vw"
            />
          </div>
          <div>
            <p className="eyebrow">Lokalt arbete</p>
            <h2>Nära kunden. Noggranna med detaljerna.</h2>
            <p>
              Perssons El hjälper privatpersoner, fastighetsägare och företag i
              Helsingborg med omnejd. Vårt mål är enkelt: du ska förstå vad som
              behöver göras, hur det ska göras och känna dig trygg med
              resultatet.
            </p>
            <p>
              Oavsett om det gäller en mindre komplettering eller ett större
              installationsarbete tar vi oss an uppgiften metodiskt och lämnar
              efter oss en lösning som är lätt att leva med.
            </p>
            <div className="values">
              <div>
                <strong>01</strong>
                <span>Tydliga besked</span>
              </div>
              <div>
                <strong>02</strong>
                <span>Ordning i arbetet</span>
              </div>
              <div>
                <strong>03</strong>
                <span>Hållbara lösningar</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <QuoteSection />
      <FaqSection content={faqContent.about} />
    </>
  );
}

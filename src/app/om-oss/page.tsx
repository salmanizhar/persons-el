import Image from "next/image";
import { QuoteSection } from "@/components/quote-section";

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="shell page-hero-grid">
          <div className="page-hero-copy">
            <p className="eyebrow">Om Perssons El</p>
            <h1>
              Yrkesstolthet i<br />
              varje anslutning.
            </h1>
            <p>
              Vi tror på tydlig kommunikation, ordning i arbetet och lösningar
              som fungerar långt efter att verktygslådan är stängd.
            </p>
          </div>
          <div className="page-hero-image">
            <Image
              src="/images/hero-about-perssons-el.png"
              alt="Elektriker i en välorganiserad professionell verkstad"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 44vw"
            />
          </div>
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
    </>
  );
}

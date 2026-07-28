import type { Metadata } from "next";
import Image from "next/image";
import { FaqSection } from "@/components/faq-section";
import { QuoteSection } from "@/components/quote-section";
import { faqContent } from "@/lib/faq";
export const metadata: Metadata = {
  title: "Kontakt och offert",
  description:
    "Kontakta Perssons El för elarbete i Helsingborg. Ring, mejla eller skicka en offertförfrågan.",
  alternates: { canonical: "/kontakt" },
};
export default function ContactPage() {
  return (
    <>
      <section className="image-overlay-hero contact-image-hero">
        <Image
          className="image-overlay-hero-image"
          src="/images/hero-contact-electrician.png"
          alt="Elektriker som går igenom ett kommande arbete med en kund"
          fill
          priority
          sizes="100vw"
        />
        <div className="shell image-overlay-hero-content">
          <h1>Vad behöver kopplas?</h1>
          <p>
            Berätta vad du behöver hjälp med, så återkommer vi med ett tydligt
            nästa steg.
          </p>
        </div>
      </section>
      <QuoteSection />
      <FaqSection content={faqContent.contact} />
    </>
  );
}

import type { Metadata } from "next";
import { FaqSection } from "@/components/faq-section";
import { faqContent } from "@/lib/faq";
import { site } from "@/lib/site";
export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Så hanterar Perssons El personuppgifter som skickas via webbplatsen.",
  robots: { index: true, follow: true },
  alternates: { canonical: "/integritetspolicy" },
};
export default function Privacy() {
  return (
    <>
      <section className="page-hero legal-page">
        <div className="shell narrow">
          <p className="eyebrow">Information</p>
          <h1>Integritetspolicy</h1>
          <p>
            När du kontaktar Perssons El behandlar vi de uppgifter du lämnar för
            att kunna besvara din förfrågan och hantera ett eventuellt uppdrag.
          </p>
          <h2>Uppgifter vi behandlar</h2>
          <p>
            Namn, kontaktuppgifter, ort och den information om arbetet som du
            själv skickar till oss.
          </p>
          <h2>Varför uppgifterna används</h2>
          <p>
            Uppgifterna används för att kontakta dig, lämna offert och
            administrera kundrelationen. De delas endast med tjänsteleverantörer
            när det krävs för att hantera din förfrågan eller uppfylla rättsliga
            skyldigheter.
          </p>
          <h2>Dina rättigheter</h2>
          <p>
            Du kan begära information om, rättelse eller radering av dina
            uppgifter genom att kontakta{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
          <p className="legal-note">
            Texten ska granskas och kompletteras med företagets
            organisationsuppgifter och faktiska lagringsrutiner före
            publicering.
          </p>
        </div>
      </section>
      <FaqSection content={faqContent.privacy} />
    </>
  );
}

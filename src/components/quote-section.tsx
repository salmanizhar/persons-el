import { site } from "@/lib/site";
import { QuoteForm } from "./quote-form";

export function QuoteSection() {
  return (
    <section className="quote-section" id="offert">
      <div className="shell quote-grid">
        <div>
          <p className="eyebrow light">Din förfrågan</p>
          <h2>Vad ska kopplas?</h2>
          <p>
            Beskriv jobbet kort så återkommer vi med nästa steg. För akuta
            ärenden – ring oss direkt.
          </p>
          <div className="contact-lines quote-contact-lines">
            <a href={`tel:${site.phoneHref}`}>
              <span>Telefon</span>
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <span>E-post</span>
              {site.email}
            </a>
            <p>
              <span>Område</span>Helsingborg med omnejd
            </p>
          </div>
          <div className="quote-review">
            <p>Har vi redan hjälpt dig?</p>
            <a
              className="trustpilot-compact-link"
              href="https://se.trustpilot.com/review/personsel.se"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lämna omdöme på <span>Trustpilot</span>
            </a>
          </div>
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

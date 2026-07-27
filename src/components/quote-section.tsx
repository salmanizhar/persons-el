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
        </div>
        <QuoteForm />
      </div>
    </section>
  );
}

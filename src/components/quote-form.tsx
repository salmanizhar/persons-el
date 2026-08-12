export function QuoteForm() {
  return (
    <form className="quote-form" action="/api/offert" method="post">
      <div className="field">
        <label htmlFor="name">Namn</label>
        <input id="name" name="name" autoComplete="name" required />
      </div>
      <div className="field">
        <label htmlFor="phone">Telefon</label>
        <input id="phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <div className="field">
        <label htmlFor="email">E-post</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
      </div>
      <div className="field">
        <label htmlFor="postal">Ort eller postnummer</label>
        <input id="postal" name="postal" autoComplete="postal-code" />
      </div>
      <div className="field field-wide">
        <label htmlFor="service">Vad behöver du hjälp med?</label>
        <select id="service" name="service">
          <option>Elinstallation</option>
          <option>Belysning</option>
          <option>Elcentral eller laddbox</option>
          <option>Felsökning och renovering</option>
          <option>Annat elarbete</option>
        </select>
      </div>
      <div className="field field-wide">
        <label htmlFor="message">Beskriv arbetet</label>
        <textarea id="message" name="message" rows={4} required />
      </div>
      <div className="field-wide consent">
        <input id="consent" name="consent" type="checkbox" required />
        <label htmlFor="consent">
          Jag godkänner att Perssons El använder uppgifterna för att besvara min
          förfrågan.
        </label>
      </div>
      <div className="field-wide form-end">
        <button className="button">Skicka förfrågan →</button>
        <p className="form-status" aria-live="polite">
          Vi återkommer så snart vi kan.
        </p>
      </div>
    </form>
  );
}

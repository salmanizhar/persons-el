import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page-hero not-found">
      <div className="shell">
        <p className="eyebrow">404 · Ingen anslutning</p>
        <h1>Sidan hittades inte.</h1>
        <p>Länken kan vara gammal eller felkopplad.</p>
        <Link className="button" href="/">
          Till startsidan →
        </Link>
      </div>
    </section>
  );
}

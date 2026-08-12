import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link className="brand" href="/" aria-label="Perssons El – startsida">
          {/* eslint-disable-next-line @next/next/no-img-element -- Fixed local logo avoids loading next/image client code in the shared header. */}
          <img
            src="/logo.svg"
            alt="Perssons El"
            width={188}
            height={22}
            decoding="async"
          />
        </Link>
        <nav aria-label="Huvudnavigation">
          <Link href="/tjanster">Tjänster</Link>
          <Link href="/sociala-medier">Sociala medier</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/kontakt">Kontakt</Link>
        </nav>
        <details className="mobile-menu">
          <summary aria-label="Öppna meny">
            <span aria-hidden="true" />
          </summary>
          <div>
            <Link href="/tjanster">Tjänster</Link>
            <Link href="/sociala-medier">Sociala medier</Link>
            <Link href="/om-oss">Om oss</Link>
            <Link href="/kontakt">Kontakt</Link>
          </div>
        </details>
        <a
          className="header-call"
          href="tel:+46768107050"
          aria-label="Ring Perssons El på 0768-107 050"
        >
          <span className="header-call-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span>
            <small>Ring oss direkt</small>
            <strong>0768-107 050</strong>
          </span>
        </a>
      </div>
    </header>
  );
}

import Image from "next/image";
import Link from "next/link";

export function Header() {
  return <header className="site-header">
    <div className="shell header-inner">
      <Link className="brand" href="/" aria-label="Perssons El – startsida">
        <Image src="/logo.png" alt="Perssons El" width={300} height={82} priority />
      </Link>
      <nav aria-label="Huvudnavigation">
        <Link href="/tjanster">Tjänster</Link><Link href="/projekt">Projekt</Link><Link href="/om-oss">Om oss</Link><Link href="/kontakt">Kontakt</Link>
      </nav>
      <a className="header-call" href="tel:+46768107050"><span className="header-call-icon" aria-hidden="true">☎</span><span><small>Ring oss direkt</small><strong>0768-107 050</strong></span></a>
    </div>
  </header>;
}


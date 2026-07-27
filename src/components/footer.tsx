import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return <footer className="site-footer">
    <div className="shell footer-grid">
      <div><p className="footer-mark">PERSSONS EL<span>.</span></p><p>Lokalt elarbete med omsorg om detaljerna.</p></div>
      <div><p className="footer-label">Navigera</p><Link href="/tjanster">Tjänster</Link><Link href="/projekt">Projekt</Link><Link href="/om-oss">Om oss</Link></div>
      <div><p className="footer-label">Kontakt</p><a href={`tel:${site.phoneHref}`}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a><p>Helsingborg med omnejd</p></div>
      <div><p className="footer-label">Information</p><Link href="/integritetspolicy">Integritetspolicy</Link><p>© {new Date().getFullYear()} Perssons El</p></div>
    </div>
  </footer>;
}

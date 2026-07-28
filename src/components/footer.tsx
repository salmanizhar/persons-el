import Link from "next/link";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-intro">
          <p className="footer-mark" lang="sv" translate="no">
            PERSSONS EL<span>.</span>
          </p>
          <p>
            Trygga elinstallationer för hem, fastigheter och företag i
            Helsingborg med omnejd.
          </p>
          <div className="footer-socials" aria-label="Sociala medier">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Perssons El på Instagram"
            >
              <InstagramIcon />
            </a>
            {site.facebookUrl ? (
              <a
                href={site.facebookUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Perssons El på Facebook"
              >
                <FacebookIcon />
              </a>
            ) : (
              <span aria-label="Facebook" role="img">
                <FacebookIcon />
              </span>
            )}
          </div>
        </div>
        <div>
          <p className="footer-label">Navigera</p>
          <Link href="/">Startsida</Link>
          <Link href="/tjanster">Tjänster</Link>
          <Link href="/projekt">Projekt</Link>
          <Link href="/om-oss">Om oss</Link>
          <Link href="/sociala-medier">Sociala medier</Link>
          <Link href="/kontakt">Kontakt</Link>
        </div>
        <div>
          <p className="footer-label">Kontakt</p>
          <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <p>Helsingborg med omnejd</p>
        </div>
        <div>
          <p className="footer-label">Tillgänglighet</p>
          <p>Mån–fre: enligt bokning</p>
          <p>Akuta ärenden: ring oss</p>
          <Link href="/integritetspolicy">Integritetspolicy</Link>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} Perssons El</p>
        <p>Rätt kopplat. Från början.</p>
      </div>
      <p className="footer-word" aria-hidden="true" lang="sv" translate="no">
        PERSSONS EL<span>.</span>
      </p>
    </footer>
  );
}

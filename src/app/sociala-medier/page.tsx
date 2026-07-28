import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { InstagramCarousel } from "@/components/instagram-carousel";
import { FacebookIcon, InstagramIcon } from "@/components/icons";
import { faqContent } from "@/lib/faq";
import { getInstagramPosts } from "@/lib/instagram";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Instagram och Facebook",
  description:
    "Följ Perssons El på Instagram och Facebook och se aktuella elinstallationer och arbete från Helsingborg med omnejd.",
  alternates: { canonical: "/sociala-medier" },
  openGraph: {
    title: "Följ Perssons El på Instagram och Facebook",
    description:
      "Se aktuella projekt, elinstallationer och arbete bakom kulisserna hos Perssons El.",
    url: "/sociala-medier",
  },
};

const instagramUrl = "https://www.instagram.com/perssons_el/";

export default async function SocialMediaPage() {
  const posts = await getInstagramPosts();

  return (
    <>
      <section className="image-overlay-hero social-image-hero">
        <Image
          className="image-overlay-hero-image"
          src="/images/hero-projects-workmanship.png"
          alt="Elektriker från Perssons El i arbete"
          fill
          sizes="100vw"
          preload
          fetchPriority="high"
        />
        <div className="shell image-overlay-hero-content">
          <p className="eyebrow light">Sociala medier</p>
          <h1>Följ jobbet bakom resultatet.</h1>
          <p>
            På Instagram och Facebook delar vi installationer, pågående arbeten
            och detaljer från vardagen som elektriker i Helsingborg.
          </p>
        </div>
      </section>

      <section
        className="section social-feed-section"
        aria-labelledby="instagram-title"
      >
        <div className="shell social-feed-heading">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2 id="instagram-title">Senaste från @perssons_el</h2>
          </div>
          <a
            className="button social-instagram-button"
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Följ Perssons El på Instagram"
          >
            <InstagramIcon />
            <span>Följ oss</span>
          </a>
        </div>

        <InstagramCarousel posts={posts} />
      </section>

      <section
        className="section facebook-section"
        aria-labelledby="facebook-title"
      >
        <div className="shell facebook-panel">
          <div className="facebook-panel-icon">
            <FacebookIcon />
          </div>
          <div>
            <p className="eyebrow light">Facebook</p>
            <h2 id="facebook-title">Följ Perssons El på Facebook.</h2>
            <p>
              Se uppdateringar från våra arbeten och håll kontakten med oss även
              på Facebook.
            </p>
          </div>
          {site.facebookUrl ? (
            <a
              className="button button-light"
              href={site.facebookUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon /> Följ oss
            </a>
          ) : null}
        </div>
      </section>
      <section className="conversion-banner">
        <div className="shell">
          <div>
            <p className="eyebrow light">Från inspiration till installation</p>
            <h2>Har du sett en lösning som passar ditt hem?</h2>
          </div>
          <div className="conversion-actions">
            <Link className="button" href="/kontakt#offert">
              Begär offert <span aria-hidden="true">→</span>
            </Link>
            <a className="button button-light" href={`tel:${site.phoneHref}`}>
              Ring {site.phone}
            </a>
          </div>
        </div>
      </section>
      <FaqSection content={faqContent.social} />
    </>
  );
}

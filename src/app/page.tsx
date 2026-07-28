import Image from "next/image";
import Link from "next/link";
import { FaqSection } from "@/components/faq-section";
import { InstagramCarousel } from "@/components/instagram-carousel";
import { Arrow } from "@/components/icons";
import { QuoteSection } from "@/components/quote-section";
import { faqContent } from "@/lib/faq";
import { getFacebookPosts } from "@/lib/facebook";
import { getInstagramPosts } from "@/lib/instagram";
import { services, site } from "@/lib/site";

export default async function Home() {
  const [instagramPosts, facebookPosts] = await Promise.all([
    getInstagramPosts(),
    getFacebookPosts(),
  ]);
  return (
    <>
      <section className="hero hero-reference">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <h1>
              <span className="hero-title-line">Smartare el.</span>
              <span className="hero-title-line hero-title-accent">
                Tryggare vardag.
              </span>
            </h1>
            <p className="lead">
              Säkra och genomtänkta elinstallationer för hem, fastigheter och
              företag. Tydliga besked, noggrant utfört och rätt kopplat från
              början.
            </p>
            <div className="hero-actions">
              <a className="button" href="#offert">
                Boka elektriker <Arrow />
              </a>
              <Link className="button button-secondary" href="/tjanster">
                Se våra tjänster
              </Link>
            </div>
          </div>
          <div
            className="hero-visual"
            aria-label="Exempel på våra elinstallationer"
          >
            <div className="hero-photo hero-photo-main">
              <Image
                src="/images/hero-home-electrician-v3.png"
                alt="Elektriker som kontrollerar en modern elcentral i ett svenskt hem"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                preload
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
        <div className="trust-rail">
          <div className="trust-track">
            <span>Snabb & pålitlig service</span>
            <span>Transparent prissättning</span>
            <span>Privat & företag</span>
            <span>Helsingborg med omnejd</span>
          </div>
        </div>
      </section>
      <section className="section why-section">
        <div className="shell why-grid">
          <div className="why-copy">
            <h2>
              <span>El gjort rätt.</span>{" "}
              <span className="why-title-accent">Från början.</span>
            </h2>
            <p>
              Vi kombinerar yrkesskicklighet med raka besked och respekt för din
              tid. Varje uppdrag planeras efter platsens förutsättningar och
              lämnas väl dokumenterat, rent och redo att användas.
            </p>
          </div>
          <div className="metric">
            <strong>100%</strong>
            <span>Fokus på säkerhet</span>
          </div>
          <div className="metric">
            <strong>10+</strong>
            <span>Typer av elarbeten</span>
          </div>
          <div className="metric">
            <strong>Lokalt</strong>
            <span>Helsingborg med omnejd</span>
          </div>
          <div className="metric">
            <strong>Snabbt</strong>
            <span>Svar på din förfrågan</span>
          </div>
        </div>
      </section>
      <section className="section services-section">
        <div className="shell">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Det vi gör</p>
              <h2>
                El som fungerar
                <br />i verkligheten.
              </h2>
            </div>
            <p>
              Från den första kabeln till den sista kontrollen. Vi hjälper dig
              hitta en säker och hållbar lösning för arbetet som ska utföras.
            </p>
          </div>
          <div className="service-list">
            {services.map((service, i) => (
              <Link
                className="service-row"
                href={`/tjanster/${service.slug}`}
                key={service.slug}
              >
                <span className="service-index">0{i + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
                <Arrow diagonal />
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="section projects-preview home-social-preview">
        <div className="shell social-feed-heading">
          <div>
            <p className="eyebrow">Instagram</p>
            <h2>Senaste från @perssons_el</h2>
          </div>
          <Link className="text-link" href="/sociala-medier">
            Alla sociala inlägg <Arrow />
          </Link>
        </div>
        <InstagramCarousel posts={instagramPosts} />

        <div className="shell social-feed-heading home-facebook-heading">
          <div>
            <p className="eyebrow">Facebook</p>
            <h2>Senaste från Perssons El</h2>
          </div>
          <a
            className="text-link"
            href={site.facebookUrl || "https://www.facebook.com/"}
            target="_blank"
            rel="noreferrer"
          >
            Följ på Facebook <Arrow />
          </a>
        </div>
        <InstagramCarousel posts={facebookPosts} platform="Facebook" />
      </section>{" "}
      <QuoteSection />
      <FaqSection content={faqContent.home} />
    </>
  );
}

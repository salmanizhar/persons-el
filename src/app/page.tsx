import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { QuoteSection } from "@/components/quote-section";
import { projects, services, site } from "@/lib/site";

export default function Home() {
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
      <section className="section projects-preview">
        <div className="shell">
          <div className="section-heading compact">
            <div>
              <p className="eyebrow">Utförda arbeten</p>
              <h2>
                Jobb vi är
                <br />
                stolta över.
              </h2>
            </div>
            <Link className="text-link" href="/projekt">
              Alla projekt <Arrow />
            </Link>
          </div>
          <div className="project-grid">
            {projects.slice(0, 3).map((project, i) => (
              <article
                className={`project-card project-${i + 1}`}
                key={project.src}
              >
                <div className="project-image">
                  <Image
                    src={project.src}
                    alt={project.alt}
                    fill
                    sizes="(max-width: 700px) 100vw, 33vw"
                    quality={60}
                  />
                </div>
                <p className="project-label">{project.label}</p>
                <h3>{project.title}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section faq-section">
        <div className="shell faq-grid">
          <div>
            <p className="eyebrow">Vanliga frågor</p>
            <h2>Bra att veta innan vi börjar.</h2>
            <p>
              Här är svar på några av de vanligaste frågorna vi får inför ett
              elarbete.
            </p>
          </div>
          <div className="faq-list">
            <details open>
              <summary>Vilka typer av elarbeten hjälper ni till med?</summary>
              <p>
                Vi utför installationer, belysning, arbete med elcentraler,
                felsökning och el vid renovering för både privatpersoner och
                företag.
              </p>
            </details>
            <details>
              <summary>Arbetar ni utanför Helsingborg?</summary>
              <p>
                Ja, vi tar uppdrag i Helsingborg med omnejd. Kontakta oss med
                adress och en kort beskrivning så återkommer vi med besked.
              </p>
            </details>
            <details>
              <summary>Hur får jag en offert?</summary>
              <p>
                Skicka din förfrågan via formuläret eller ring oss. Bilder och
                en tydlig beskrivning hjälper oss att bedöma arbetet snabbare.
              </p>
            </details>
          </div>
        </div>
      </section>
      <QuoteSection />
      <section className="conversion-banner">
        <div className="shell">
          <div>
            <p className="eyebrow light">Redo att komma vidare?</p>
            <h2>Trygg el börjar med ett tydligt samtal.</h2>
          </div>
          <div className="conversion-actions">
            <a className="button" href="#offert">
              Begär offert <Arrow />
            </a>
            <a className="button button-light" href={`tel:${site.phoneHref}`}>
              Ring {site.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

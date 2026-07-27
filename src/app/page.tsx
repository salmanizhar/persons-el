import Image from "next/image";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { QuoteSection } from "@/components/quote-section";
import { projects, services, site } from "@/lib/site";

export default function Home() {
  return <>
    <section className="hero hero-reference">
      <div className="shell hero-grid">
        <div className="hero-copy">
          <p className="hero-kicker">Auktoriserad elektriker i Helsingborg</p>
          <h1>Smartare el.<br /><span>Tryggare vardag.</span></h1>
          <p className="lead">Säkra och genomtänkta elinstallationer för hem, fastigheter och företag. Tydliga besked, noggrant utfört och rätt kopplat från början.</p>
          <div className="hero-actions"><a className="button" href="#offert">Boka elektriker <Arrow /></a><Link className="button button-secondary" href="/tjanster">Se våra tjänster</Link></div>
          <div className="hero-contact"><span>Ring oss</span><a href={`tel:${site.phoneHref}`}>{site.phone}</a><i aria-hidden="true" /><Link href="/projekt">Projekt</Link><Link href="/kontakt">Kontakt</Link></div>
        </div>
        <div className="hero-visual" aria-label="Exempel på våra elinstallationer">
          <div className="hero-photo hero-photo-main"><Image src="/images/hero.jpg" alt="Färdig belysningsinstallation av Perssons El" fill sizes="(max-width: 900px) 100vw, 48vw" priority /></div>
          <div className="hero-photo hero-photo-detail"><Image src="/images/electrical-panel.jpg" alt="Noggrant installerad elcentral" fill sizes="(max-width: 700px) 44vw, 18vw" /></div>
          <div className="service-tag tag-one"><span aria-hidden="true">⚡</span> Elektriker</div><div className="service-tag tag-two"><span aria-hidden="true">▦</span> Elcentraler</div><div className="service-tag tag-three"><span aria-hidden="true">⌁</span> Elreparationer</div>
          <div className="hero-badge"><strong>24/7</strong><small>Trygg kontakt</small></div>
        </div>
      </div>
      <div className="trust-rail"><div className="trust-track"><span>Snabb & pålitlig service</span><span>Transparent prissättning</span><span>Privat & företag</span><span>Helsingborg med omnejd</span></div></div>
    </section>
    <section className="section why-section"><div className="shell why-grid">
      <div><p className="eyebrow">Varför Perssons El</p><p className="why-note">Lokalt hantverk.<br />Professionellt ansvar.</p></div>
      <div className="why-copy"><h2>Rätt elektriker betyder säkerhet, kvalitet och en lösning som håller.</h2><p>Vi kombinerar yrkesskicklighet med raka besked och respekt för din tid. Varje uppdrag planeras efter platsens förutsättningar och lämnas väl dokumenterat, rent och redo att användas.</p></div>
      <div className="metric"><strong>100%</strong><span>Fokus på säkerhet</span></div><div className="metric"><strong>10+</strong><span>Typer av elarbeten</span></div><div className="metric"><strong>Lokalt</strong><span>Helsingborg med omnejd</span></div><div className="metric"><strong>Snabbt</strong><span>Svar på din förfrågan</span></div>
    </div></section>
    <section className="section services-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Det vi gör</p><h2>El som fungerar<br />i verkligheten.</h2></div><p>Från den första kabeln till den sista kontrollen. Vi hjälper dig hitta en säker och hållbar lösning för arbetet som ska utföras.</p></div><div className="service-list">{services.map((service, i) => <Link className="service-row" href={`/tjanster/${service.slug}`} key={service.slug}><span className="service-index">0{i + 1}</span><h3>{service.title}</h3><p>{service.short}</p><Arrow diagonal /></Link>)}</div></div></section>
    <section className="section project-feature"><div className="shell feature-grid"><div className="feature-image"><Image src="/images/electrical-panel.jpg" alt="Noggrant monterad elcentral" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="feature-copy"><p className="eyebrow light">Noggrannhet syns</p><h2>Bakom luckan ska det också vara ordning.</h2><p>En genomtänkt installation är lättare att förstå, underhålla och bygga vidare på. Därför lämnar vi arbetet lika strukturerat på insidan som på utsidan.</p><Link className="button button-light" href="/projekt">Se våra arbeten <Arrow /></Link></div></div></section>
    <section className="section projects-preview"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow">Utförda arbeten</p><h2>Jobb vi är<br />stolta över.</h2></div><Link className="text-link" href="/projekt">Alla projekt <Arrow /></Link></div><div className="project-grid">{projects.slice(0, 3).map((project, i) => <article className={`project-card project-${i + 1}`} key={project.src}><div className="project-image"><Image src={project.src} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><p className="project-label">{project.label}</p><h3>{project.title}</h3></article>)}</div></div></section>
    <section className="section faq-section"><div className="shell faq-grid"><div><p className="eyebrow">Vanliga frågor</p><h2>Bra att veta innan vi börjar.</h2><p>Här är svar på några av de vanligaste frågorna vi får inför ett elarbete.</p></div><div className="faq-list"><details open><summary>Vilka typer av elarbeten hjälper ni till med?</summary><p>Vi utför installationer, belysning, arbete med elcentraler, felsökning och el vid renovering för både privatpersoner och företag.</p></details><details><summary>Arbetar ni utanför Helsingborg?</summary><p>Ja, vi tar uppdrag i Helsingborg med omnejd. Kontakta oss med adress och en kort beskrivning så återkommer vi med besked.</p></details><details><summary>Hur får jag en offert?</summary><p>Skicka din förfrågan via formuläret eller ring oss. Bilder och en tydlig beskrivning hjälper oss att bedöma arbetet snabbare.</p></details></div></div></section>
    <section className="conversion-banner"><div className="shell"><div><p className="eyebrow light">Redo att komma vidare?</p><h2>Trygg el börjar med ett tydligt samtal.</h2></div><div className="conversion-actions"><a className="button" href="#offert">Begär offert <Arrow /></a><a className="button button-light" href={`tel:${site.phoneHref}`}>Ring {site.phone}</a></div></div></section>
    <QuoteSection />
  </>;
}

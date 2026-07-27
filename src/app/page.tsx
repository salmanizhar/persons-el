import Image from "next/image";
import Link from "next/link";
import { Arrow, Bolt } from "@/components/icons";
import { QuoteSection } from "@/components/quote-section";
import { projects, services, site } from "@/lib/site";

export default function Home() {
  return <>
    <section className="hero">
      <div className="circuit-line" aria-hidden="true"><span /></div>
      <div className="shell hero-grid">
        <div className="hero-copy"><p className="eyebrow">Elektriker · Helsingborg</p><h1>Rätt kopplat.<br /><span>Från början.</span></h1><p className="lead">Elinstallationer med struktur, omtanke och ett resultat som håller – för hem, fastigheter och företag i Helsingborg.</p><div className="hero-actions"><a className="button" href="#offert">Begär offert <Arrow /></a><a className="text-link" href={`tel:${site.phoneHref}`}>Ring {site.phone} <Arrow diagonal /></a></div></div>
        <div className="hero-visual"><Image src="/images/hero.jpg" alt="Upplyst trädgårdsgång efter installation av Perssons El" fill sizes="(max-width: 800px) 100vw, 48vw" priority /><div className="hero-stamp"><Bolt /><span>El i<br />Helsingborg</span></div></div>
      </div>
      <div className="shell proof-strip"><span>Elinstallation</span><span>Belysning</span><span>Elcentraler</span><span>Felsökning</span></div>
    </section>

    <section className="section services-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Det vi gör</p><h2>El som fungerar<br />i verkligheten.</h2></div><p>Från den första kabeln till den sista kontrollen. Vi hjälper dig att hitta en säker och hållbar lösning för arbetet som ska utföras.</p></div><div className="service-list">{services.map((service, i) => <Link className="service-row" href={`/tjanster/${service.slug}`} key={service.slug}><span className="service-index">0{i + 1}</span><h3>{service.title}</h3><p>{service.short}</p><Arrow diagonal /></Link>)}</div></div></section>

    <section className="section project-feature"><div className="shell feature-grid"><div className="feature-image"><Image src="/images/electrical-panel.jpg" alt="Noggrant monterad elcentral" fill sizes="(max-width: 800px) 100vw, 55vw" /></div><div className="feature-copy"><p className="eyebrow light">Noggrannhet syns</p><h2>Bakom luckan ska det också vara ordning.</h2><p>En genomtänkt installation är lättare att förstå, underhålla och bygga vidare på. Därför lämnar vi arbetet lika strukturerat på insidan som på utsidan.</p><Link className="button button-light" href="/projekt">Se våra arbeten <Arrow /></Link></div></div></section>

    <section className="section projects-preview"><div className="shell"><div className="section-heading compact"><div><p className="eyebrow">Utförda arbeten</p><h2>Jobb vi är<br />stolta över.</h2></div><Link className="text-link" href="/projekt">Alla projekt <Arrow /></Link></div><div className="project-grid">{projects.slice(0, 3).map((project, i) => <article className={`project-card project-${i + 1}`} key={project.src}><div className="project-image"><Image src={project.src} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 33vw" /></div><p className="project-label">{project.label}</p><h3>{project.title}</h3></article>)}</div></div></section>

    <section className="section local-section"><div className="shell local-grid"><p className="eyebrow">Nära till hands</p><div><h2>Din elektriker i<br />Helsingborg.</h2><p>Vi arbetar lokalt och hjälper både privatpersoner och verksamheter. Du får en tydlig kontakt, raka besked och ett arbete planerat efter platsens förutsättningar.</p><div className="local-points"><span>Helsingborg</span><span>Med omnejd</span><span>Privat & företag</span></div></div></div></section>
    <QuoteSection />
  </>;
}

import type { Metadata } from "next";
import Image from "next/image";
import { QuoteSection } from "@/components/quote-section";
import { site } from "@/lib/site";
export const metadata:Metadata={title:"Kontakt och offert",description:"Kontakta Perssons El för elarbete i Helsingborg. Ring, mejla eller skicka en offertförfrågan.",alternates:{canonical:"/kontakt"}};
export default function ContactPage(){return <><section className="page-hero contact-hero"><div className="shell page-hero-grid"><div className="page-hero-copy"><p className="eyebrow">Kontakt</p><h1>Vad behöver<br />kopplas?</h1><div className="contact-lines"><a href={`tel:${site.phoneHref}`}><span>Telefon</span>{site.phone}</a><a href={`mailto:${site.email}`}><span>E-post</span>{site.email}</a><p><span>Område</span>Helsingborg med omnejd</p></div></div><div className="page-hero-image"><Image src="/images/hero-contact-electrician.png" alt="Elektriker som går igenom ett kommande arbete med en kund" fill priority sizes="(max-width: 900px) 100vw, 44vw" /></div></div></section><QuoteSection /></>}

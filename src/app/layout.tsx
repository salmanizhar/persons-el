import type { Metadata, Viewport } from "next";
import { Archivo, Space_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const archivo = Archivo({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const mono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Elektriker i Helsingborg | Perssons El", template: "%s | Perssons El" },
  description: "Perssons El hjälper privatpersoner och företag i Helsingborg med elinstallation, belysning, elcentraler och felsökning. Begär offert.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "sv_SE", siteName: site.name, title: "Elektriker i Helsingborg | Perssons El", description: "Tryggt och noggrant elarbete i Helsingborg med omnejd.", url: site.url },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#123b56" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const structuredData = { "@context": "https://schema.org", "@type": "Electrician", name: site.name, url: site.url, telephone: site.phone, email: site.email, areaServed: { "@type": "City", name: site.city }, address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: "SE" }, image: `${site.url}/opengraph-image` };
  return <html lang="sv" className={`${archivo.variable} ${mono.variable}`}><body><a className="skip-link" href="#main">Hoppa till innehåll</a><Header /><main id="main">{children}</main><Footer /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} /></body></html>;
}

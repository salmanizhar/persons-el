import type { Metadata, Viewport } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { services, site } from "@/lib/site";

const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Elektriker i Helsingborg | Perssons El",
    template: "%s | Perssons El",
  },
  description:
    "Perssons El hjälper privatpersoner och företag i Helsingborg med elinstallation, belysning, elcentraler och felsökning. Begär offert.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    title: "Elektriker i Helsingborg | Perssons El",
    description: "Tryggt och noggrant elarbete i Helsingborg med omnejd.",
    url: site.url,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#313d8d",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        inLanguage: "sv-SE",
        publisher: { "@id": `${site.url}/#business` },
      },
      {
        "@type": ["Electrician", "LocalBusiness"],
        "@id": `${site.url}/#business`,
        name: site.name,
        description:
          "Elektriker i Helsingborg för elinstallation, belysning, elcentraler och felsökning.",
        url: site.url,
        telephone: site.phoneHref,
        email: site.email,
        image: `${site.url}/opengraph-image`,
        logo: `${site.url}/logo.png`,
        areaServed: {
          "@type": "City",
          name: site.city,
          containedInPlace: { "@type": "Country", name: "Sverige" },
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: site.city,
          addressCountry: "SE",
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: site.phoneHref,
          email: site.email,
          contactType: "customer service",
          areaServed: "SE",
          availableLanguage: ["sv"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Eltjänster i Helsingborg",
          itemListElement: services.map((service) => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: service.title,
              url: `${site.url}/tjanster/${service.slug}`,
              areaServed: site.city,
            },
          })),
        },
        sameAs: [site.instagramUrl, site.facebookUrl].filter(Boolean),
      },
    ],
  };
  return (
    <html lang="sv" className={barlow.variable}>
      <body>
        <a className="skip-link" href="#main">
          Hoppa till innehåll
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}

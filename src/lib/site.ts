export const site = {
  name: "Perssons El",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://perssonsel.se",
  phone: process.env.NEXT_PUBLIC_PHONE || "0768-107 050",
  phoneHref: (process.env.NEXT_PUBLIC_PHONE || "+46768107050").replace(
    /\s/g,
    "",
  ),
  email: process.env.NEXT_PUBLIC_EMAIL || "info@perssonsel.se",
  city: "Helsingborg",
  instagramHandle: "@perssons_el",
  instagramUrl: "https://www.instagram.com/perssons_el/",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
};

export type Service = {
  slug: string;
  title: string;
  seoTitle?: string;
  seoDescription?: string;
  area: string;
  short: string;
  intro: string;
  image: string;
  alt: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "elinstallation",
    title: "Elinstallationer",
    area: "nordvästra Skåne",
    short: "Säkra elinstallationer för hem, företag och renoveringar.",
    intro:
      "Vi hjälper dig med genomtänkta elinstallationer i nordvästra Skåne – från nya uttag och kabeldragning till kompletta lösningar vid renovering och ombyggnad.",
    image: "/images/service-poolcentral.jpg",
    alt: "Elinstallation och nätverksdragning med tydlig kabeldragning",
    bullets: [
      "Nya uttag och strömbrytare",
      "Kabeldragning, komplettering och ombyggnad",
      "Installation för kök och andra rum",
    ],
  },
  {
    slug: "natverksinstallation",
    title: "Nätverksinstallation",
    seoTitle: "Nätverksinstallatör Helsingborg",
    seoDescription:
      "Nätverksinstallatör i Helsingborg för kabeldragning, datauttag, patchpaneler och accesspunkter i hem, kontor och fastigheter. Begär offert.",
    area: "Helsingborg och nordvästra Skåne",
    short:
      "Kabeldragning, datauttag och nätverk för hem, kontor och fastigheter.",
    intro:
      "Behöver du nätverksinstallatör i Helsingborg? Vi planerar och installerar stabila nätverk med kabeldragning, datauttag, patchpaneler och accesspunkter för hem, kontor och fastigheter.",
    image: "/images/service-elinstallation-v2.png",
    alt: "Nätverksinstallatör som planerar kabeldragning och datauttag",
    bullets: [
      "Nätverkskabel och datauttag",
      "Patchpaneler, rack och strukturerad kabeldragning",
      "Anslutning och placering av accesspunkter",
      "Felsökning och uppgradering av befintliga nätverk",
    ],
  },
  {
    slug: "belysning",
    title: "Belysning",
    area: "Helsingborg",
    short: "Ljus som fungerar ute, inne och i arbetsmiljöer.",
    intro:
      "Vi planerar och installerar belysning med rätt funktion, placering och uttryck – för trädgård, bostad, garage och verksamhet.",
    image: "/images/service-belysning-v2.png",
    alt: "Installerad trädgårdsbelysning längs en gång",
    bullets: [
      "Trädgårds- och fasadbelysning",
      "Arbets- och garagebelysning",
      "Styrning, dimring och energieffektiva val",
    ],
  },
  {
    slug: "elcentraler",
    title: "Elcentraler och laddboxar",
    area: "Helsingborg",
    short: "Trygg eldistribution och smidig laddning hemma.",
    intro:
      "Vi hjälper dig med moderna, tydligt märkta elcentraler och säkra laddboxar – från kontroll och uppgradering till komplett installation.",
    image: "/images/service-elcentral-marked-900.webp",
    alt: "Elcentral med tydligt märkta kablar och säkringar",
    bullets: [
      "Byte och uppgradering av elcentral",
      "Installation av laddbox för elbil",
      "Jordfelsbrytare, säkringar och dokumentation",
    ],
  },
  {
    slug: "felsokning-renovering",
    title: "Felsökning och renovering",
    area: "Helsingborg",
    short: "Vi hittar felet och bygger rätt från början.",
    intro:
      "Vid renovering eller återkommande elproblem behövs ett metodiskt arbete. Vi undersöker anläggningen och föreslår en tydlig väg framåt.",
    image: "/images/service-felsokning-v2.png",
    alt: "Förberedelse för ny eldragning i en renoverad vägg",
    bullets: [
      "Felsökning av elinstallationer",
      "El vid renovering och ombyggnad",
      "Kontroll av befintliga installationer",
    ],
  },
];

export const projects = [
  {
    src: "/images/garden-lighting.jpg",
    alt: "Varm trädgårdsbelysning vid stenlagd gång",
    label: "Utemiljö",
    title: "Trädgårdsbelysning",
  },
  {
    src: "/images/electrical-panel.jpg",
    alt: "Elcentral med tydligt monterade komponenter",
    label: "Elcentral",
    title: "Säker distribution",
  },
  {
    src: "/images/commercial-lighting.jpg",
    alt: "Belysning installerad i ett kommersiellt kök",
    label: "Företag",
    title: "Arbetsbelysning",
  },
  {
    src: "/images/renovation.jpg",
    alt: "Infälld eldragning under renovering",
    label: "Renovering",
    title: "Ny kabeldragning",
  },
  {
    src: "/images/cctv.jpg",
    alt: "Kameror monterade på yttervägg",
    label: "Specialsystem",
    title: "Kamerainstallation",
  },
  {
    src: "/images/cabinet-lighting.jpg",
    alt: "Integrerad belysning under skåp",
    label: "Interiör",
    title: "Integrerat ljus",
  },
];

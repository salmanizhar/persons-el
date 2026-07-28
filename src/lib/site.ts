export const site = {
  name: "Perssons El",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://personssel.se",
  phone: process.env.NEXT_PUBLIC_PHONE || "0768-107 050",
  phoneHref: (process.env.NEXT_PUBLIC_PHONE || "+46768107050").replace(
    /\s/g,
    "",
  ),
  email: process.env.NEXT_PUBLIC_EMAIL || "info@personssel.se",
  city: "Helsingborg",
  instagramHandle: "@perssons_el",
  instagramUrl: "https://www.instagram.com/perssons_el/",
  facebookUrl: process.env.NEXT_PUBLIC_FACEBOOK_URL || "",
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  image: string;
  alt: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: "elinstallation",
    title: "Elinstallation",
    short: "Säkra installationer för hem, företag och renoveringar.",
    intro:
      "Vi hjälper dig med genomtänkta elinstallationer i Helsingborg – från nya uttag och dragningar till kompletta lösningar vid ombyggnad.",
    image: "/images/service-elinstallation-v2.png",
    alt: "Kabeldragning vid elinstallation under renovering",
    bullets: [
      "Nya uttag och strömbrytare",
      "Kabeldragning och ombyggnad",
      "Installation för kök och andra rum",
    ],
  },
  {
    slug: "belysning",
    title: "Belysning",
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
    title: "Elcentraler",
    short: "Ordning, kapacitet och tryggare eldistribution.",
    intro:
      "En modern och tydligt märkt elcentral gör elanläggningen säkrare och enklare att underhålla. Vi hjälper till med kontroll, komplettering och byte.",
    image: "/images/panel-detail-v2.png",
    alt: "Professionellt installerad elcentral med säkringar",
    bullets: [
      "Byte och uppgradering av elcentral",
      "Jordfelsbrytare och säkringar",
      "Felsökning och dokumentation",
    ],
  },
  {
    slug: "felsokning-renovering",
    title: "Felsökning och renovering",
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

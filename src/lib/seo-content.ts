import type { Metadata } from "next";
import { createPageMetadata } from "@/lib/metadata";

export const seoPageMetadata: Record<
  "about" | "services" | "contact" | "social" | "privacy",
  Metadata
> = {
  about: createPageMetadata({
    title: "Om Perssons El – elektriker i Helsingborg",
    description:
      "Lär känna Perssons El, en lokal elektriker i Helsingborg med fokus på tydlig kommunikation, noggrant elarbete och hållbara lösningar.",
    path: "/om-oss",
  }),
  services: createPageMetadata({
    title: "Eltjänster i Helsingborg",
    description:
      "Behöver du elektriker i Helsingborg? Perssons El hjälper med elinstallation, belysning, elcentraler och felsökning för hem och företag. Begär offert.",
    path: "/tjanster",
  }),
  contact: createPageMetadata({
    title: "Kontakta elektriker i Helsingborg",
    description:
      "Kontakta Perssons El när du behöver elektriker i Helsingborg. Ring, mejla eller skicka en offertförfrågan för elinstallation, belysning eller felsökning.",
    path: "/kontakt",
  }),
  social: createPageMetadata({
    title: "Elprojekt i Helsingborg – Instagram och Facebook",
    description:
      "Se elinstallationer, belysning och pågående projekt från Perssons El i Helsingborg. Följ arbetet bakom resultatet på Instagram och Facebook.",
    path: "/sociala-medier",
  }),
  privacy: {
    ...createPageMetadata({
      title: "Integritetspolicy",
      description:
        "Läs hur Perssons El behandlar personuppgifter när du kontaktar oss, begär offert eller använder webbplatsen och vilka rättigheter du har.",
      path: "/integritetspolicy",
    }),
    robots: { index: true, follow: true },
  },
};

export const seoCopy = {
  allServicesLink: "Se alla eltjänster i Helsingborg",
};

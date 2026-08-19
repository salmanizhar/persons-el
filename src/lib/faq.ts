export type FaqItem = {
  question: string;
  answer: string;
};

export type FaqContent = {
  eyebrow?: string;
  title: string;
  intro: string;
  items: FaqItem[];
};

const commonItems: FaqItem[] = [
  {
    question: "Vilka typer av elarbeten hjälper Perssons El till med?",
    answer:
      "Vi hjälper privatpersoner, fastighetsägare och företag med elinstallationer, belysning, elcentraler, felsökning och elarbete vid renovering.",
  },
  {
    question: "Arbetar ni utanför Helsingborg?",
    answer:
      "Ja, vi tar uppdrag i Helsingborg med omnejd. Skicka adressen och en kort beskrivning av arbetet så återkommer vi med besked.",
  },
  {
    question: "Hur får jag en offert?",
    answer:
      "Skicka en förfrågan via formuläret eller ring oss. Bilder, adress och en tydlig beskrivning hjälper oss att bedöma arbetet och återkomma med nästa steg.",
  },
];

export const faqContent = {
  home: {
    title: "Bra att veta innan vi börjar.",
    intro: "Svar på vanliga frågor inför ett elarbete med Perssons El.",
    items: commonItems,
  },
  services: {
    title: "Frågor om våra eltjänster.",
    intro: "Det här är bra att känna till när du planerar ett elarbete.",
    items: [
      commonItems[0],
      {
        question: "Hjälper ni både privatpersoner och företag?",
        answer:
          "Ja, vi utför elarbeten i bostäder, fastigheter och verksamhetslokaler. Lösningen planeras efter platsens förutsättningar och hur anläggningen ska användas.",
      },
      {
        question: "Kan ni hjälpa till att planera arbetet?",
        answer:
          "Ja. Vi går igenom behov, placering och tekniska förutsättningar innan arbetet påbörjas och föreslår en tydlig lösning.",
      },
    ],
  },
  about: {
    title: "Frågor om Perssons El.",
    intro: "Kort om vilka vi hjälper och hur vi arbetar.",
    items: [
      {
        question: "Vilka kunder arbetar Perssons El med?",
        answer:
          "Vi hjälper privatpersoner, fastighetsägare och företag i Helsingborg med omnejd.",
      },
      {
        question: "Hur går ett uppdrag till?",
        answer:
          "Vi börjar med att gå igenom behovet och platsens förutsättningar. Därefter föreslår vi en tydlig väg framåt och genomför arbetet metodiskt.",
      },
      {
        question: "Vad behöver jag skicka med i min förfrågan?",
        answer:
          "Beskriv vad du vill ha hjälp med och ange adress eller område. Skicka gärna bilder om de gör arbetet lättare att bedöma.",
      },
    ],
  },
  contact: {
    title: "Vanliga frågor före kontakt.",
    intro: "Information som gör det enklare att ta nästa steg.",
    items: [
      commonItems[2],
      {
        question: "Vilka uppgifter ska jag lämna i formuläret?",
        answer:
          "Ange namn, telefon eller e-post, ort eller postnummer och en kort beskrivning av arbetet. Bilder kan skickas i den fortsatta kontakten vid behov.",
      },
      {
        question: "Vad gör jag om ärendet är brådskande?",
        answer:
          "Ring oss direkt på 0768-107 050 så kan vi snabbare bedöma situationen och berätta vad nästa steg är.",
      },
    ],
  },
  social: {
    title: "Frågor om våra sociala medier.",
    intro:
      "Om innehållet vi delar och hur du går vidare från inspiration till offert.",
    items: [
      {
        question: "Vad delar Perssons El på Instagram?",
        answer:
          "Vi delar bilder och uppdateringar från installationer, belysningsprojekt och vardagen som elektriker i Helsingborg med omnejd.",
      },
      {
        question: "Vilket är Perssons Els Instagramkonto?",
        answer: "Du hittar oss på Instagram under användarnamnet @perssons_el.",
      },
      {
        question: "Finns Perssons El på Facebook?",
        answer:
          "Ja, på Facebook delar vi uppdateringar från våra arbeten och information om verksamheten.",
      },
      {
        question: "Kan jag begära offert på en lösning jag sett?",
        answer:
          "Ja. Skicka länken eller beskriv lösningen i kontaktformuläret, så går vi igenom vad som är möjligt på din plats.",
      },
    ],
  },
  privacy: {
    title: "Frågor om personuppgifter.",
    intro: "Så fungerar hanteringen av uppgifter du skickar till oss.",
    items: [
      {
        question: "Vilka personuppgifter behandlar Perssons El?",
        answer:
          "Vi behandlar de uppgifter du själv lämnar, till exempel namn, kontaktuppgifter, ort och information om det arbete du frågar om.",
      },
      {
        question: "Varför används mina uppgifter?",
        answer:
          "Uppgifterna används för att besvara din förfrågan, lämna offert och administrera en eventuell kundrelation.",
      },
      {
        question: "Hur begär jag rättelse eller radering?",
        answer:
          "Kontakta Perssons El via e-post och beskriv vilken uppgift din begäran gäller.",
      },
    ],
  },
} satisfies Record<string, FaqContent>;

const serviceFaqs: Record<string, FaqItem[]> = {
  elinstallation: [
    {
      question: "Vad ingår i en elinstallation?",
      answer:
        "Det kan till exempel vara nya uttag och strömbrytare, kabeldragning, ombyggnad eller installation i kök och andra rum.",
    },
    {
      question: "Kan ni hjälpa till vid renovering?",
      answer:
        "Ja, vi planerar och utför elinstallationer vid renovering och ombyggnad utifrån rummets användning och befintliga förutsättningar.",
    },
  ],
  natverksinstallation: [
    {
      question: "Vad kan en nätverksinstallatör hjälpa till med?",
      answer:
        "En nätverksinstallatör kan planera och dra nätverkskabel, installera datauttag och patchpaneler samt förbereda anslutningar för accesspunkter i hem, kontor och fastigheter.",
    },
    {
      question: "Kan ni förbättra ett befintligt nätverk?",
      answer:
        "Ja, vi kan gå igenom befintlig kabeldragning och anslutningar, felsöka problem och föreslå hur nätverket kan kompletteras eller byggas om.",
    },
    {
      question: "Installerar ni nätverk i både bostäder och lokaler?",
      answer:
        "Ja, lösningen planeras efter byggnadens förutsättningar, antal anslutningar och hur nätverket ska användas i vardagen.",
    },
  ],
  belysning: [
    {
      question: "Installerar ni belysning både inom- och utomhus?",
      answer:
        "Ja, vi hjälper till med bland annat trädgårds-, fasad-, arbets-, garage- och inomhusbelysning.",
    },
    {
      question: "Kan ni hjälpa med placering och styrning av ljuset?",
      answer:
        "Ja, vi går igenom funktion, placering, dimring, styrning och energieffektiva alternativ innan installationen.",
    },
  ],
  elcentraler: [
    {
      question: "När kan en elcentral behöva uppgraderas?",
      answer:
        "En kontroll kan vara aktuell när anläggningen är äldre, när kapaciteten behöver ökas eller när jordfelsbrytare och tydligare märkning saknas.",
    },
    {
      question: "Hjälper ni med jordfelsbrytare och säkringar?",
      answer:
        "Ja, vi kan kontrollera elcentralen och hjälpa till med jordfelsbrytare, säkringar, komplettering och dokumentation.",
    },
    {
      question: "Installerar ni laddboxar för elbil?",
      answer:
        "Ja, vi hjälper till att bedöma elanläggningens kapacitet och installerar laddbox med rätt skydd, inkoppling och dokumentation.",
    },
  ],
  "felsokning-renovering": [
    {
      question: "Vilka elfel kan ni felsöka?",
      answer:
        "Vi undersöker återkommande störningar och problem i befintliga installationer för att hitta orsaken och föreslå rätt åtgärd.",
    },
    {
      question: "Kan ni kontrollera elen inför en renovering?",
      answer:
        "Ja, vi kan gå igenom den befintliga installationen och planera vad som behöver behållas, flyttas, kompletteras eller bytas.",
    },
  ],
};

export function getServiceFaq(title: string, slug: string): FaqContent {
  return {
    title: `Vanliga frågor om ${title.toLocaleLowerCase("sv-SE")}.`,
    intro: "Svar på sådant som är bra att veta innan arbetet planeras.",
    items: [...(serviceFaqs[slug] ?? []), commonItems[1], commonItems[2]],
  };
}

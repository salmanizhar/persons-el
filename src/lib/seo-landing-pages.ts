import type { FaqContent } from "@/lib/faq";

export type SeoLandingPage = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  heroLead: string;
  primaryKeyword: string;
  location: string;
  introTitle: string;
  intro: string[];
  bullets: string[];
  processTitle: string;
  process: { title: string; text: string }[];
  proofTitle: string;
  proof: string[];
  faq: FaqContent;
  related: string[];
};

export const seoLandingPages: SeoLandingPage[] = [
  {
    slug: "helsingborg",
    title: "Elektriker Helsingborg",
    eyebrow: "Lokal elektriker",
    description:
      "Behöver du elektriker i Helsingborg? Perssons El hjälper privatpersoner, fastigheter och företag med elinstallation, felsökning, belysning och elcentraler.",
    heroLead:
      "Perssons El är en lokal elfirma för trygga elarbeten i Helsingborg med omnejd. Vi hjälper dig med tydliga besked, noggrann planering och säkra installationer.",
    primaryKeyword: "elektriker Helsingborg",
    location: "Helsingborg",
    introTitle: "Behörig hjälp med el i Helsingborg.",
    intro: [
      "När du söker elektriker i Helsingborg vill du snabbt hitta någon som kan bedöma jobbet, förklara nästa steg och utföra arbetet säkert. Perssons El hjälper både privatpersoner, företag och fastighetsägare med elarbeten i hem, lokaler och fastigheter.",
      "Vi arbetar med elinstallationer, belysning, elcentraler, laddboxar, felsökning och el vid renovering. Varje uppdrag planeras efter platsens förutsättningar så att lösningen fungerar i vardagen, inte bara på ritningen.",
    ],
    bullets: [
      "Elinstallationer i bostäder, lokaler och fastigheter",
      "Felsökning av återkommande elproblem",
      "Byte och uppgradering av elcentral",
      "Belysning inne, ute, i garage och arbetsmiljöer",
      "Tydlig offert innan arbetet startar",
    ],
    processTitle: "Så går det till när du anlitar oss.",
    process: [
      {
        title: "Beskriv jobbet",
        text: "Skicka en kort beskrivning, adress eller område och gärna bilder om det hjälper oss att förstå uppdraget.",
      },
      {
        title: "Vi bedömer arbetet",
        text: "Vi går igenom omfattning, säkerhet, material och praktiska förutsättningar innan vi föreslår nästa steg.",
      },
      {
        title: "Arbetet utförs metodiskt",
        text: "Installation, kontroll och dokumentation görs med fokus på ett säkert och hållbart resultat.",
      },
    ],
    proofTitle: "Därför väljer kunder Perssons El.",
    proof: [
      "Lokal närvaro i Helsingborg med omnejd",
      "Rak kommunikation och tydliga besked",
      "El för privatpersoner, företag och fastigheter",
      "Noggrant arbete från första kontroll till färdig installation",
    ],
    faq: {
      title: "Vanliga frågor om elektriker i Helsingborg.",
      intro: "Svar på frågor som ofta kommer upp innan ett elarbete bokas.",
      items: [
        {
          question: "Vilka elarbeten hjälper ni med i Helsingborg?",
          answer:
            "Vi hjälper med elinstallation, belysning, elcentraler, laddboxar, felsökning och elarbete vid renovering.",
        },
        {
          question: "Kan ni hjälpa både privatpersoner och företag?",
          answer:
            "Ja, Perssons El utför elarbeten för privatpersoner, fastighetsägare och företag i Helsingborg med omnejd.",
        },
        {
          question: "Hur får jag en offert?",
          answer:
            "Skicka en förfrågan via formuläret eller ring oss. En tydlig beskrivning, adress och bilder gör det enklare att bedöma arbetet.",
        },
      ],
    },
    related: [
      "elinstallation-helsingborg",
      "felsokning-el-helsingborg",
      "laddbox-helsingborg",
      "elfirma-helsingborg",
    ],
  },
  {
    slug: "elfirma-helsingborg",
    title: "Elfirma Helsingborg",
    eyebrow: "Elfirma för hem och företag",
    description:
      "Perssons El är en elfirma i Helsingborg för säkra installationer, belysning, elcentraler, felsökning och elarbete vid renovering.",
    heroLead:
      "Som lokal elfirma i Helsingborg hjälper Perssons El dig från första bedömning till färdigt elarbete med tydliga besked och noggrant utförande.",
    primaryKeyword: "elfirma Helsingborg",
    location: "Helsingborg",
    introTitle: "En elfirma som planerar innan den kopplar.",
    intro: [
      "Ett bra elarbete börjar med att förstå hur bostaden, lokalen eller fastigheten används. Därför går vi igenom behov, placering, säkerhet och kapacitet innan arbetet startar.",
      "Perssons El hjälper med både mindre servicejobb och mer omfattande installationer i Helsingborg med omnejd.",
    ],
    bullets: [
      "Elservice för hem, företag och fastigheter",
      "Installation och komplettering av uttag, belysning och elcentraler",
      "Planering inför renovering och ombyggnad",
      "Felsökning och kontroll av befintlig el",
    ],
    processTitle: "Från första kontakt till färdigt jobb.",
    process: [
      {
        title: "Genomgång",
        text: "Vi börjar med vad du behöver hjälp med och vilka förutsättningar som finns på platsen.",
      },
      {
        title: "Förslag",
        text: "Du får ett tydligt förslag på omfattning, material och nästa steg innan arbetet genomförs.",
      },
      {
        title: "Utförande",
        text: "Arbetet utförs noggrant och kontrolleras innan det lämnas klart.",
      },
    ],
    proofTitle: "Trygg elfirma i Helsingborg med lokal förankring.",
    proof: [
      "Arbetar i Helsingborg och närliggande orter",
      "Tydlig kommunikation under hela uppdraget",
      "Lösningar för både små och större elarbeten",
      "Fokus på säkerhet, funktion och långsiktighet",
    ],
    faq: {
      title: "Vanliga frågor om elfirma i Helsingborg.",
      intro: "Bra att veta när du jämför elfirma och planerar elarbete.",
      items: [
        {
          question: "Vad gör en elfirma?",
          answer:
            "En elfirma hjälper med planering, installation, felsökning, kontroll och komplettering av elanläggningar.",
        },
        {
          question: "Tar ni mindre uppdrag?",
          answer:
            "Ja, vi hjälper både med mindre servicejobb och större arbeten beroende på behov och tillgänglighet.",
        },
        {
          question: "Arbetar ni i närliggande orter?",
          answer:
            "Ja, vi tar uppdrag i Helsingborg med omnejd, bland annat Höganäs, Bjuv, Åstorp, Ängelholm och Landskrona.",
        },
      ],
    },
    related: [
      "elinstallation-helsingborg",
      "angelholm",
      "hoganas",
      "landskrona",
    ],
  },
  {
    slug: "elinstallation-helsingborg",
    title: "Elinstallation Helsingborg",
    eyebrow: "Säker installation",
    description:
      "Behöver du hjälp med elinstallation i Helsingborg? Perssons El installerar uttag, belysning, elcentraler och el vid renovering.",
    heroLead:
      "Vi hjälper med genomtänkta elinstallationer i Helsingborg för hem, fastigheter och företag.",
    primaryKeyword: "elinstallation Helsingborg",
    location: "Helsingborg",
    introTitle: "Elinstallation som är byggd för vardagen.",
    intro: [
      "En elinstallation behöver vara säker, lätt att använda och anpassad efter hur platsen faktiskt används. Vi planerar dragning, placering och kapacitet innan installationen utförs.",
      "Perssons El hjälper med nya uttag, strömbrytare, belysning, kabeldragning och el vid renovering eller ombyggnad.",
    ],
    bullets: [
      "Nya uttag och strömbrytare",
      "El vid köksrenovering och ombyggnad",
      "Kabeldragning och kompletteringar",
      "Installation i bostäder och verksamhetslokaler",
    ],
    processTitle: "Så planeras en bra elinstallation.",
    process: [
      {
        title: "Behov",
        text: "Vi går igenom vad installationen ska användas till och hur platsen ser ut.",
      },
      {
        title: "Placering",
        text: "Uttag, strömbrytare, belysning och kabeldragning planeras så att lösningen blir praktisk.",
      },
      {
        title: "Kontroll",
        text: "Arbetet kontrolleras innan det lämnas klart.",
      },
    ],
    proofTitle: "När elinstallationen ska bli rätt från början.",
    proof: [
      "Tydlig planering innan arbetet startar",
      "Praktiska lösningar för hem och verksamhet",
      "Noggrann installation och kontroll",
      "Möjlighet till offert innan arbetet påbörjas",
    ],
    faq: {
      title: "Vanliga frågor om elinstallation i Helsingborg.",
      intro:
        "Svar på sådant som är bra att veta innan installationen planeras.",
      items: [
        {
          question: "Vad ingår i elinstallationer och nätverk?",
          answer:
            "Det kan vara nya uttag, strömbrytare, kabeldragning, belysning eller el vid renovering och ombyggnad.",
        },
        {
          question: "Kan ni hjälpa till att planera placering?",
          answer:
            "Ja, vi går igenom funktion, placering och praktiska behov innan installationen utförs.",
        },
        {
          question: "Kan jag använda ROT-avdrag?",
          answer:
            "Många elarbeten i bostad kan omfattas av ROT-avdrag. Vi hjälper dig att reda ut vad som gäller för uppdraget.",
        },
      ],
    },
    related: [
      "elfirma-helsingborg",
      "felsokning-el-helsingborg",
      "laddbox-helsingborg",
    ],
  },
  {
    slug: "felsokning-el-helsingborg",
    title: "Felsökning el Helsingborg",
    eyebrow: "När elen strular",
    description:
      "Perssons El hjälper med felsökning av el i Helsingborg när säkringar löser ut, uttag inte fungerar eller elproblem återkommer.",
    heroLead:
      "Återkommande elproblem behöver undersökas metodiskt. Vi felsöker elinstallationer i Helsingborg och föreslår rätt åtgärd.",
    primaryKeyword: "felsökning el Helsingborg",
    location: "Helsingborg",
    introTitle: "Hitta orsaken, inte bara symptomet.",
    intro: [
      "När säkringar löser ut, lampor blinkar eller uttag slutar fungera är det viktigt att förstå orsaken bakom problemet. Vi undersöker anläggningen steg för steg och förklarar vad som behöver göras.",
      "Perssons El hjälper privatpersoner, fastigheter och företag med felsökning och åtgärder i Helsingborg med omnejd.",
    ],
    bullets: [
      "Felsökning av uttag, belysning och elcentral",
      "Återkommande säkringsproblem",
      "Kontroll inför renovering",
      "Förslag på säker åtgärd",
    ],
    processTitle: "Så felsöker vi.",
    process: [
      {
        title: "Symptom",
        text: "Vi börjar med vad som händer, hur ofta problemet uppstår och vilka delar av anläggningen som påverkas.",
      },
      {
        title: "Kontroll",
        text: "Anläggningen kontrolleras metodiskt för att hitta den sannolika orsaken.",
      },
      {
        title: "Åtgärd",
        text: "Du får förslag på vad som bör göras för att lösa problemet tryggt.",
      },
    ],
    proofTitle: "Trygg hjälp när elen inte fungerar som den ska.",
    proof: [
      "Metodisk felsökning",
      "Tydlig förklaring av felet",
      "Fokus på säkerhet och långsiktig funktion",
      "Hjälp med nästa steg om något behöver bytas eller kompletteras",
    ],
    faq: {
      title: "Vanliga frågor om felsökning av el.",
      intro: "Bra att veta när du har återkommande elproblem.",
      items: [
        {
          question: "När bör jag anlita elektriker för felsökning?",
          answer:
            "Kontakta elektriker om säkringar löser ut, uttag eller belysning slutar fungera, eller om problemet återkommer.",
        },
        {
          question: "Kan ni felsöka inför renovering?",
          answer:
            "Ja, vi kan kontrollera befintlig el och föreslå vad som bör behållas, flyttas, kompletteras eller bytas.",
        },
        {
          question: "Behöver jag beskriva felet innan ni kommer?",
          answer:
            "Ja, en kort beskrivning och gärna bilder hjälper oss att bedöma vad som kan behöva kontrolleras.",
        },
      ],
    },
    related: ["elfirma-helsingborg", "elinstallation-helsingborg", "angelholm"],
  },
  {
    slug: "laddbox-helsingborg",
    title: "Laddbox Helsingborg",
    eyebrow: "Ladda bilen hemma",
    description:
      "Installera laddbox i Helsingborg med Perssons El. Vi kontrollerar elanläggningen och installerar laddbox med rätt skydd och dokumentation.",
    heroLead:
      "Perssons El hjälper dig att installera laddbox i Helsingborg med kontroll av kapacitet, skydd och placering.",
    primaryKeyword: "laddbox Helsingborg",
    location: "Helsingborg",
    introTitle: "Laddbox med rätt förutsättningar.",
    intro: [
      "En laddbox behöver installeras utifrån elanläggningens kapacitet, placering och hur bilen ska laddas i vardagen. Vi går igenom förutsättningarna innan installationen görs.",
      "Vi hjälper med bedömning, inkoppling, skydd och dokumentation för laddbox i Helsingborg med omnejd.",
    ],
    bullets: [
      "Kontroll av elanläggning och kapacitet",
      "Installation av laddbox hemma",
      "Placering, kabeldragning och skydd",
      "Dokumentation efter utfört arbete",
    ],
    processTitle: "Så installeras laddboxen.",
    process: [
      {
        title: "Kontroll",
        text: "Vi kontrollerar förutsättningarna och går igenom var laddboxen ska placeras.",
      },
      {
        title: "Installation",
        text: "Laddboxen installeras med rätt inkoppling, skydd och kabeldragning.",
      },
      {
        title: "Genomgång",
        text: "Du får veta hur installationen är utförd och vad som är bra att känna till.",
      },
    ],
    proofTitle: "Säker laddning hemma.",
    proof: [
      "Installation utifrån husets elförutsättningar",
      "Tydlig placering och kabeldragning",
      "Fokus på säker och stabil laddning",
      "Hjälp med elcentral vid behov",
    ],
    faq: {
      title: "Vanliga frågor om laddbox i Helsingborg.",
      intro: "Svar på frågor inför installation av laddbox hemma.",
      items: [
        {
          question: "Behöver elcentralen kontrolleras innan laddbox?",
          answer:
            "Ja, elanläggningens kapacitet och skydd behöver bedömas innan installation av laddbox.",
        },
        {
          question: "Var ska laddboxen placeras?",
          answer:
            "Placering beror på parkeringsplats, kabeldragning, väderläge och hur bilen används. Vi hjälper till att bedöma det.",
        },
        {
          question: "Kan ni även hjälpa med elcentralen?",
          answer:
            "Ja, om elcentralen behöver kompletteras eller uppgraderas går vi igenom det innan arbetet startar.",
        },
      ],
    },
    related: ["elinstallation-helsingborg", "elfirma-helsingborg", "angelholm"],
  },
  {
    slug: "angelholm",
    title: "Elektriker Ängelholm",
    eyebrow: "Elektriker med omnejd",
    description:
      "Perssons El hjälper kunder i Ängelholm med elinstallation, belysning, elcentraler, laddboxar och felsökning.",
    heroLead:
      "Behöver du elektriker eller elfirma i Ängelholm? Perssons El hjälper med säkra elarbeten för hem, fastigheter och företag.",
    primaryKeyword: "elektriker Ängelholm",
    location: "Ängelholm",
    introTitle: "Elektriker för Ängelholm och nordvästra Skåne.",
    intro: [
      "Som elfirma för Ängelholm hjälper vi kunder med elarbeten där planering, tydlighet och säkerhet är viktigt. Det kan handla om allt från nya uttag och belysning till felsökning eller laddbox.",
      "Beskriv uppdraget och platsen så återkommer vi med nästa steg.",
    ],
    bullets: [
      "Elinstallation och kompletteringar",
      "Belysning inne och ute",
      "Felsökning och kontroll",
      "Elcentraler och laddboxar",
    ],
    processTitle: "Så hjälper vi dig i Ängelholm.",
    process: [
      {
        title: "Förfrågan",
        text: "Du skickar vad du behöver hjälp med och var arbetet ska utföras.",
      },
      {
        title: "Bedömning",
        text: "Vi går igenom omfattning, tillgänglighet och vad som behövs för uppdraget.",
      },
      {
        title: "Utförande",
        text: "Arbetet planeras och utförs med fokus på säkerhet och funktion.",
      },
    ],
    proofTitle: "Lokal elhjälp i nordvästra Skåne.",
    proof: [
      "Uppdrag i Helsingborg med omnejd",
      "Tydlig offert och raka besked",
      "Hjälp för privatpersoner, företag och fastigheter",
      "Noggrann installation och kontroll",
    ],
    faq: {
      title: "Vanliga frågor om elektriker i Ängelholm.",
      intro: "Bra att veta när du söker elektriker i Ängelholm.",
      items: [
        {
          question: "Tar ni uppdrag i Ängelholm?",
          answer:
            "Ja, Perssons El tar uppdrag i Ängelholm och nordvästra Skåne beroende på omfattning och tillgänglighet.",
        },
        {
          question: "Vilka typer av jobb kan ni hjälpa med?",
          answer:
            "Vi hjälper med elinstallation, belysning, elcentraler, laddboxar, felsökning och el vid renovering.",
        },
        {
          question: "Hur bokar jag?",
          answer:
            "Skicka en förfrågan med adress eller område och en kort beskrivning av arbetet.",
        },
      ],
    },
    related: ["elfirma-helsingborg", "hoganas", "landskrona", "bjuv"],
  },
  {
    slug: "hoganas",
    title: "Elektriker Höganäs",
    eyebrow: "Elektriker med omnejd",
    description:
      "Behöver du elektriker i Höganäs? Perssons El hjälper med elinstallation, felsökning, belysning, elcentraler och laddbox.",
    heroLead:
      "Perssons El hjälper kunder i Höganäs med trygga elarbeten för hem, företag och fastigheter.",
    primaryKeyword: "elektriker Höganäs",
    location: "Höganäs",
    introTitle: "Elhjälp för hem och fastigheter i Höganäs.",
    intro: [
      "Oavsett om du behöver komplettera elen, planera belysning, kontrollera en elcentral eller felsöka ett problem är det viktigt att arbetet görs metodiskt.",
      "Perssons El tar uppdrag i Höganäs med omnejd beroende på omfattning och tillgänglighet.",
    ],
    bullets: [
      "Elinstallation i bostad och lokal",
      "Felsökning av elproblem",
      "Belysning och kompletteringar",
      "Elcentral och laddbox",
    ],
    processTitle: "Från beskrivning till åtgärd.",
    process: [
      {
        title: "Beskriv behovet",
        text: "Berätta vad du vill ha hjälp med och var arbetet ska göras.",
      },
      {
        title: "Planera",
        text: "Vi bedömer vad som behövs och föreslår en trygg väg framåt.",
      },
      {
        title: "Utföra",
        text: "Arbetet utförs noggrant och kontrolleras efteråt.",
      },
    ],
    proofTitle: "Trygga elarbeten i nordvästra Skåne.",
    proof: [
      "Tydlig kommunikation",
      "Praktiska lösningar för vardagen",
      "Noggrann kontroll",
      "Hjälp med både små och större elarbeten",
    ],
    faq: {
      title: "Vanliga frågor om elektriker i Höganäs.",
      intro: "Svar på frågor inför elarbete i Höganäs.",
      items: [
        {
          question: "Kan ni komma till Höganäs?",
          answer:
            "Ja, vi tar uppdrag i Höganäs och närliggande orter beroende på uppdragets omfattning och tillgänglighet.",
        },
        {
          question: "Kan ni hjälpa med laddbox?",
          answer:
            "Ja, vi hjälper med kontroll av elanläggning och installation av laddbox.",
        },
        {
          question: "Kan ni felsöka återkommande elproblem?",
          answer:
            "Ja, vi undersöker problemet metodiskt och föreslår rätt åtgärd.",
        },
      ],
    },
    related: ["elfirma-helsingborg", "angelholm", "landskrona", "bjuv"],
  },
  {
    slug: "landskrona",
    title: "Elektriker Landskrona",
    eyebrow: "Elektriker med omnejd",
    description:
      "Perssons El hjälper kunder i Landskrona med elinstallation, belysning, felsökning, elcentraler och laddboxar.",
    heroLead:
      "Behöver du elektriker i Landskrona? Perssons El hjälper med säkra och tydliga elarbeten för hem, fastigheter och företag.",
    primaryKeyword: "elektriker Landskrona",
    location: "Landskrona",
    introTitle: "Elinstallation och felsökning i Landskrona.",
    intro: [
      "Vi hjälper med elarbeten där tydlig planering och säker funktion är viktigt. Du får raka besked om vad som behöver göras innan arbetet startar.",
      "Uppdrag i Landskrona utförs beroende på omfattning, typ av arbete och tillgänglighet.",
    ],
    bullets: [
      "Elinstallation och kabeldragning",
      "Belysning för hem och lokaler",
      "Felsökning och kontroll",
      "Elcentraler och laddboxar",
    ],
    processTitle: "Så går uppdraget till.",
    process: [
      {
        title: "Kontakt",
        text: "Du beskriver arbetet och lämnar platsinformation.",
      },
      {
        title: "Bedömning",
        text: "Vi går igenom vad arbetet kräver och återkommer med nästa steg.",
      },
      {
        title: "Utförande",
        text: "Arbetet utförs säkert, tydligt och noggrant.",
      },
    ],
    proofTitle: "Elhjälp med tydliga besked.",
    proof: [
      "Planering efter platsens förutsättningar",
      "Tydliga förslag innan start",
      "El för privatpersoner, företag och fastigheter",
      "Fokus på säkerhet och långsiktig funktion",
    ],
    faq: {
      title: "Vanliga frågor om elektriker i Landskrona.",
      intro: "Bra att veta inför elarbete i Landskrona.",
      items: [
        {
          question: "Tar ni uppdrag i Landskrona?",
          answer:
            "Ja, vi kan ta uppdrag i Landskrona beroende på uppdragets omfattning och tillgänglighet.",
        },
        {
          question: "Kan ni hjälpa företag?",
          answer:
            "Ja, vi hjälper både privatpersoner, fastighetsägare och företag med elarbeten.",
        },
        {
          question: "Hur får jag pris?",
          answer:
            "Skicka en beskrivning av arbetet så återkommer vi med nästa steg och vad som behövs för en offert.",
        },
      ],
    },
    related: ["elfirma-helsingborg", "hoganas", "angelholm", "bjuv"],
  },
  {
    slug: "bjuv",
    title: "Elektriker Bjuv",
    eyebrow: "Elektriker med omnejd",
    description:
      "Perssons El hjälper kunder i Bjuv med elinstallation, felsökning, belysning, elcentraler och laddbox.",
    heroLead:
      "Perssons El hjälper kunder i Bjuv med trygga elarbeten, tydlig planering och noggrant utförande.",
    primaryKeyword: "elektriker Bjuv",
    location: "Bjuv",
    introTitle: "Elektriker för Bjuv och närliggande områden.",
    intro: [
      "När elen ska kompletteras, kontrolleras eller felsökas behöver arbetet göras med rätt metod från början.",
      "Perssons El hjälper med elinstallation, belysning, elcentraler, laddboxar och felsökning i Bjuv med omnejd.",
    ],
    bullets: [
      "Elinstallation och service",
      "Felsökning av elproblem",
      "Belysning och elcentraler",
      "Laddbox och kompletteringar",
    ],
    processTitle: "Så hjälper vi dig.",
    process: [
      {
        title: "Beskrivning",
        text: "Du skickar en kort beskrivning av vad som ska göras.",
      },
      {
        title: "Planering",
        text: "Vi går igenom arbetet och vad som krävs på plats.",
      },
      {
        title: "Kontroll",
        text: "När arbetet är utfört kontrolleras installationen.",
      },
    ],
    proofTitle: "Noggrant elarbete nära Bjuv.",
    proof: [
      "Tydlig kontakt från start",
      "Praktiska lösningar",
      "Hjälp för hem, fastigheter och företag",
      "Fokus på trygg installation",
    ],
    faq: {
      title: "Vanliga frågor om elektriker i Bjuv.",
      intro: "Svar på frågor inför elarbete i Bjuv.",
      items: [
        {
          question: "Kan ni hjälpa i Bjuv?",
          answer:
            "Ja, vi tar uppdrag i Bjuv med omnejd beroende på omfattning och tillgänglighet.",
        },
        {
          question: "Vilka tjänster erbjuder ni?",
          answer:
            "Vi hjälper med elinstallation, felsökning, belysning, elcentraler och laddboxar.",
        },
        {
          question: "Kan jag skicka bilder?",
          answer:
            "Ja, bilder kan göra det enklare att förstå arbetet och bedöma nästa steg.",
        },
      ],
    },
    related: ["elfirma-helsingborg", "astorp", "hoganas", "angelholm"],
  },
  {
    slug: "astorp",
    title: "Elektriker Åstorp",
    eyebrow: "Elektriker med omnejd",
    description:
      "Behöver du elektriker i Åstorp? Perssons El hjälper med elinstallation, belysning, felsökning, elcentraler och laddbox.",
    heroLead:
      "Perssons El hjälper kunder i Åstorp med säkra elarbeten för hem, företag och fastigheter.",
    primaryKeyword: "elektriker Åstorp",
    location: "Åstorp",
    introTitle: "Elhjälp i Åstorp med tydliga nästa steg.",
    intro: [
      "Vi hjälper privatpersoner, fastighetsägare och företag att planera och utföra elarbeten i Åstorp med fokus på säkerhet, funktion och tydlig kommunikation.",
      "Det kan handla om elinstallation, felsökning, belysning, laddbox eller elcentral. Beskriv platsen och arbetet i förfrågan så kan vi bedöma vad uppdraget kräver och återkomma med nästa steg.",
    ],
    bullets: [
      "Elinstallation och komplettering",
      "Felsökning och kontroll",
      "Belysning inne och ute",
      "Elcentral och laddbox",
    ],
    processTitle: "Från förfrågan till färdigt elarbete.",
    process: [
      {
        title: "Skicka förfrågan",
        text: "Beskriv uppdraget, platsen och vad du vill uppnå.",
      },
      {
        title: "Få nästa steg",
        text: "Vi bedömer arbetet och berättar vad som behövs.",
      },
      {
        title: "Utfört och kontrollerat",
        text: "Arbetet utförs noggrant och kontrolleras innan det lämnas klart.",
      },
    ],
    proofTitle: "Tryggt elarbete i Åstorp med omnejd.",
    proof: [
      "Planerat efter platsens förutsättningar",
      "Tydliga besked",
      "Hjälp med både mindre och större elarbeten",
      "Fokus på säker funktion",
    ],
    faq: {
      title: "Vanliga frågor om elektriker i Åstorp.",
      intro: "Bra att veta innan du bokar elarbete i Åstorp.",
      items: [
        {
          question: "Tar ni uppdrag i Åstorp?",
          answer:
            "Ja, Perssons El tar uppdrag i Åstorp med omnejd beroende på omfattning och tillgänglighet.",
        },
        {
          question: "Kan ni hjälpa med renovering?",
          answer:
            "Ja, vi kan planera och utföra elarbete vid renovering och ombyggnad.",
        },
        {
          question: "Hur snabbt får jag svar?",
          answer:
            "Skicka en tydlig förfrågan så återkommer vi så snart vi kan med nästa steg.",
        },
      ],
    },
    related: ["elfirma-helsingborg", "bjuv", "angelholm", "hoganas"],
  },
];

export function getSeoLandingPage(slug: string) {
  return seoLandingPages.find((page) => page.slug === slug);
}

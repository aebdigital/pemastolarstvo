'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import PageHero from '@/components/ui/PageHero';
import { Link } from '@/i18n/routing';
import ContactFormSection from '@/components/forms/ContactFormSection';
import type { Locale } from '@/i18n/routing';

type PageCopy = {
  catalog: string;
  ctaBody: string[];
  ctaButton: string;
  custom: {
    cons: string[];
    consTitle: string;
    introBlocks: { body: string; title: string }[];
    pros: string[];
    prosTitle: string;
    title: string;
    titleHighlight: string;
  };
  details: {
    imageAlt: string;
    items: Array<{
      body: string;
      list?: string[];
      listTitle?: string;
      title: string;
    }>;
    title: string;
  };
  hero: {
    subtitle: string;
    title: string;
  };
  intro: {
    body: string;
    imageAlt: string;
    title: string;
  };
  materials: {
    bodyPrimary: string;
    bodySecondary: string;
    imageAlt: string;
    subtitle: string;
    title: string;
  };
  systems: {
    rows: Array<
      Array<{
        body: string[];
        title: string;
      }>
    >;
    title: string;
  };
};

const pageCopy: Record<Locale, PageCopy> = {
  sk: {
    catalog: 'Katalóg',
    ctaBody: [
      'Navrhnite si dvere online.',
      'Vyskúšajte náš konfigurátor',
      'dverí na mieru.',
    ],
    ctaButton: 'Konfigurátor',
    custom: {
      cons: ['Vyššia cena oproti typizovaným dverám.'],
      consTitle: 'NEVÝHODY DVERÍ NA MIERU:',
      introBlocks: [
        {
          body: 'Ak potrebujete dvere v rozmeroch, ktoré na trhu nie sú dostupné, alebo váš otvor nezodpovedá STN, obráťte sa na nás. Dokážeme dodať dvere v šírke od 52 do 112 cm a výške od 182 do 210 cm vrátane zárubní.',
          title: 'Máte špecifické požiadavky?',
        },
        {
          body: 'Sme pripravení na atypické priestory i neštandardné požiadavky. Interiérové dvere a zárubne dodávame štandardne do 2 mesiacov. Ozvite sa nám a my urobíme všetko pre vaše pohodlie a spokojnosť.',
          title: 'Sme otvorený vašim predstavám',
        },
      ],
      pros: [
        'Nie je potrebné upravovať stavebné otvory (šírku ani výšku).',
        'Je možné prekryť starú železnú alebo inú zárubňu pomocou novej drevenej obložky.',
        'Odpadáva práca s murovaním, stierkovaním, maľovaním a pod.',
        'Aj napriek o niečo vyššej cene ide o menej invazívny zásah bez prachu, neporiadku a mokrého procesu.',
      ],
      prosTitle: 'VÝHODY DVERÍ NA MIERU:',
      title: 'INTERIÉROVÉ DVERE',
      titleHighlight: 'NA MIERU',
    },
    details: {
      imageAlt: 'Interiérové dvere detail',
      items: [
        {
          body: 'Dlhobočné skúsenosti nás naučili, že každá maličkosť je rozhodujúca. Preto je napríklad na našich dverách namiesto papierovej falcovej hrany použitá odolná, farebne zladená ABS hrana HRANIPEX. Falc dverí je totiž najviac namáhanou časťou.',
          title: 'Hrany',
        },
        {
          body: 'Najviac namáhanou časťou zárubne je zase jej stredová časť. Preto sme ostrú hranu ofrézovali na rádius 6 mm a následne sme ju obalili CPL laminátom. Vznikol tak krajší a bezpečnejší jednoliaty diel zárubne, ktorý nemá viditeľný ostrý spoj doska-lepidlo-hrana.',
          list: ['45 stupňový uhol (klasický spoj)', '90 stupňový uhol (tzv. tupý spoj)'],
          listTitle: 'Typ spoja na zárubni:',
          title: 'Spoje',
        },
        {
          body: 'V dverách je osadený kvalitný zámok talianskej firmy AGB s elegantným pochromovaným kľúčom. Vo falcových zárubniach sú osadené bezúdržbové závesy s teflonovou stopkou, aby sa predišlo vrzganiu dverí. Tie sú osadené v pevných kovových nemeckých kapsách Simonswerk, ktoré sú pevnejšie než plastové kapsy a majú vyššiu nosnosť.',
          title: 'Zámok',
        },
      ],
      title: 'CHCETE PRAKTICKÉ RIEŠENIA\nPREMYSLENÉ DO DETAILOV?',
    },
    hero: {
      subtitle: 'Atypické interiérové dvere presne podľa vašich rozmerov a predstáv',
      title: 'DVERE NA MIERU',
    },
    intro: {
      body: 'Interiérové dvere sú dominantou interiéru. Pomáhajú budovať celkový dojem a vytvárajú plynulý prechod medzi jednotlivými časťami vášho domova tak, aby sa spojili v jednom výnimočnom a útulnom celku. Každý detail je preto potrebné zvážiť a venovať mu potrebnú dávku pozornosti. Preto máte v rámci našich služieb kompletný servis od zamerania, výroby, dodávky až po montáž.',
      imageAlt: 'Interiérové dvere showcase',
      title: 'AŽ K VAŠIM DVERÁM',
    },
    materials: {
      bodyPrimary: 'Pracujeme s laminátovou povrchovou úpravou, ktorá sa vyznačuje vysokou odolnosťou voči oderu či poškriabaniu. Laminát sa ľahko udržiava a čistí, keďže nesaje žiadne kvapaliny. Farebne identický CPL laminát používame aj na zárubniach a zasklievacích lištách, aby celkový výsledok pôsobil esteticky a prirodzene.',
      bodySecondary: 'sú dokonalou imitáciou prírodných drevín ako je dyha, či drevený masív. Na rozdiel od dyhy a masívu je laminát stálofarebný. Koncern EGGER a KAINDL sú výrobcami veľkoplošného materiálu, pracovných dosák a podláh, takže farebné prevedenie dverí a interiéru môže byť identické.',
      imageAlt: 'Interiérové dvere - materiály',
      subtitle: 'Lamináty EGGER a KAINDL',
      title: 'MATERIÁLY A POVRCHOVÉ ÚPRAVY',
    },
    systems: {
      rows: [
        [
          {
            body: [
              'Tvoria najširšiu skupinu interiérových dverí. Dodávame ich ako jednokrídlové dvere v štandardizovaných veľkostiach 60, 70, 80, 90 (100 a 110 na objednávku) a dvojkrídlové dvere vo veľkostiach 125, 145, 165 a 185. Tento rad dverí sa delí na falcové a bezfalcové dvere.',
            ],
            title: 'Otočné dvere',
          },
          {
            body: [
              'Tento typ dverí má po obvode krídla vytvorenú polodrážku, ktorá pri zatvorení prekryje medzeru medzi dverami a zárubňou.',
            ],
            title: 'Falcové dvere',
          },
          {
            body: [
              'Predstavujú trend v interiérovom dizajne. Pri tomto modernom riešení sú dvere zapustené na úroveň obložiek, čo vytvára jednotnú plochu dverí so zárubňou. Navyše 3D skryté závesy umožňujú otvorenie dverí plných 180° a nastavenie dverí až v troch rôznych smeroch. Zamykanie zabezpečuje magnetický zámok.',
            ],
            title: 'Bezfalcové dvere',
          },
        ],
        [
          {
            body: [
              'Posuvné dvere majú dômyselnú mechaniku. Tá je zabudovaná v hornej vodiacej koľajnici, ktorá umožňuje ľahký pohyb krídiel dverí do strán pri ich odsúvaní. Pri dvojkrídlovom variante je možné krídla odsúvať jednotlivo alebo synchrónne.',
              'Obložková zárubňa sa montuje tak, aby posuvné dvere čo možno najtesnejšie priliehali k zárubni.',
            ],
            title: 'Dvere posuvné pred stenu',
          },
          {
            body: [
              'Dvere do stavebného puzdra dodávame ako jednokrídlové bezfalcové posuvné dvere vo veľkostiach 60, 70, 80, 90 (100 a 110 na objednávku) a dvojkrídlové vo veľkostiach 125, 145, 165 a 185, pričom typový rad je podriadený štandardizovanému stavebnému puzdru. Hrúbka dverí je 4 cm.',
            ],
            title: 'Dvere do púzdra steny',
          },
          {
            body: [
              'Ideálne do zúžených priestorov, ktoré neumožňujú plné otvorenie klasických dverí. Po otvorení tohto typu dverí pretŕča približne 1/3 šírky krídla do obidvoch strán miestností. Svetlosť prechodu je znížená približne o 10 cm.',
            ],
            title: 'Lamelové-harmonikové dvere',
          },
        ],
        [
          {
            body: [
              'Vhodné najmä do podnikov, kde frekvencia pohybu personálu cez dvere neumožňuje otváranie dverí manuálne, ale pohybom tela. Tieto dvere sa vyrábajú ako jednokrídlové vo veľkostiach 60, 70, 80, 90 (100 a 110 na objednávku).',
            ],
            title: 'Kyvné dvere',
          },
          {
            body: [
              'Máte tmavú chodbu? Zárubne s nadsvetlíkom ju presvetlia. Do takýchto zárubní sa osadzujú štandardizované otočné dvere buď jednokrídlové vo veľkostiach 60, 70, 80, 90, alebo dvojkrídlové dvere vo veľkostiach 125, 145, 165 a 185.',
            ],
            title: 'Dvere s nadsvetlíkom',
          },
          {
            body: [
              'Ak nechcete, aby vám zbytočne unikalo teplo pri vstupe do domu, siahnite po stene s dverami. Tie môžu byť otočné alebo posuvné. Farba steny s nadsvetlíkom ako aj prisvetlíkom je pritom totožná s interierovými dverami.',
            ],
            title: 'Stena s dverami',
          },
        ],
      ],
      title: 'SYSTÉMY OTVÁRANIA',
    },
  },
  en: {
    catalog: 'Catalogue',
    ctaBody: [
      'Design your doors online.',
      'Try our configurator for',
      'made-to-measure doors.',
    ],
    ctaButton: 'Configurator',
    custom: {
      cons: ['Higher price compared with standard doors.'],
      consTitle: 'DISADVANTAGES OF CUSTOM DOORS:',
      introBlocks: [
        {
          body: 'If you need doors in sizes that are not available on the market, or your opening does not match the standard, contact us. We can supply doors from 52 to 112 cm wide and 182 to 210 cm high, including frames.',
          title: 'Do you have specific requirements?',
        },
        {
          body: 'We are ready for unusual spaces and non-standard demands. We usually deliver interior doors and frames within 2 months. Get in touch and we will do everything for your comfort and satisfaction.',
          title: 'We are open to your ideas',
        },
      ],
      pros: [
        'There is no need to modify the rough opening width or height.',
        'It is possible to cover an old steel or other existing frame with a new wooden casing.',
        'There is no masonry, plastering, painting, and similar work.',
        'Even with a slightly higher price, it is a less invasive intervention without dust, mess, or wet processes.',
      ],
      prosTitle: 'ADVANTAGES OF CUSTOM DOORS:',
      title: 'INTERIOR DOORS',
      titleHighlight: 'MADE TO MEASURE',
    },
    details: {
      imageAlt: 'Interior door detail',
      items: [
        {
          body: 'Long-term experience has taught us that every detail matters. That is why our doors use a durable, colour-matched HRANIPEX ABS edge instead of a paper rebate edge. The door rebate is the most stressed part of the leaf.',
          title: 'Edges',
        },
        {
          body: 'The middle part of the frame is the most stressed section. That is why we milled the sharp edge to a 6 mm radius and then wrapped it in CPL laminate. The result is a more attractive and safer monolithic frame element without a visible sharp board-glue-edge joint.',
          list: ['45-degree angle (classic joint)', '90-degree angle (butt joint)'],
          listTitle: 'Frame joint type:',
          title: 'Joints',
        },
        {
          body: 'The door leaf is fitted with a quality lock from the Italian company AGB with an elegant chrome-plated key. Rebated frames use maintenance-free hinges with a Teflon pin to prevent squeaking. They are installed in strong metal German Simonswerk pockets, which are stronger than plastic pockets and offer higher load capacity.',
          title: 'Lock',
        },
      ],
      title: 'DO YOU WANT PRACTICAL SOLUTIONS\nTHOUGHT THROUGH IN DETAIL?',
    },
    hero: {
      subtitle: 'Custom interior doors made exactly to your dimensions and ideas',
      title: 'CUSTOM DOORS',
    },
    intro: {
      body: 'Interior doors are a defining feature of the interior. They help build the overall impression and create a smooth transition between the different parts of your home so they form one exceptional and cosy whole. Every detail therefore deserves careful attention. That is why our service includes complete support from measuring and production through to delivery and installation.',
      imageAlt: 'Interior door showcase',
      title: 'RIGHT TO YOUR DOOR',
    },
    materials: {
      bodyPrimary: 'We work with a laminate surface finish that offers high resistance to abrasion and scratching. Laminate is easy to maintain and clean because it does not absorb liquids. We also use the same CPL laminate on frames and glazing beads so that the final result looks natural and aesthetically consistent.',
      bodySecondary: 'are a perfect imitation of natural wood species such as veneer or solid wood. Unlike veneer and solid wood, laminate keeps its colour over time. EGGER and KAINDL manufacture large-format boards, worktops, and floors, so the colour of the doors and interior can be perfectly matched.',
      imageAlt: 'Interior doors - materials',
      subtitle: 'EGGER and KAINDL laminates',
      title: 'MATERIALS AND SURFACE FINISHES',
    },
    systems: {
      rows: [
        [
          {
            body: [
              'They form the largest group of interior doors. We supply them as single-leaf doors in standardised sizes 60, 70, 80, 90 (100 and 110 on request) and double-leaf doors in sizes 125, 145, 165, and 185. This range is divided into rebated and flush doors.',
            ],
            title: 'Hinged doors',
          },
          {
            body: [
              'This type of door has a rebate around the perimeter of the leaf, which covers the gap between the door and the frame when closed.',
            ],
            title: 'Rebated doors',
          },
          {
            body: [
              'They represent a trend in interior design. In this modern solution, the door is set flush with the trim, creating a uniform plane between the door and the frame. In addition, 3D concealed hinges allow the door to open a full 180° and be adjusted in three directions. Locking is provided by a magnetic lock.',
            ],
            title: 'Flush doors',
          },
        ],
        [
          {
            body: [
              'Sliding doors use a clever mechanism built into the upper guide rail, allowing the door leaves to move sideways smoothly. In the double-leaf version, the leaves can move individually or synchronously.',
              'The casing frame is installed so that the sliding door sits as close to the frame as possible.',
            ],
            title: 'Sliding doors in front of the wall',
          },
          {
            body: [
              'We supply doors for wall pockets as single-leaf flush sliding doors in sizes 60, 70, 80, 90 (100 and 110 on request) and double-leaf doors in sizes 125, 145, 165, and 185. The product range follows the standardised wall pocket system. Door thickness is 4 cm.',
            ],
            title: 'Pocket doors',
          },
          {
            body: [
              'Ideal for narrow spaces that do not allow a classic door to open fully. When opened, approximately one third of the leaf protrudes into both adjacent spaces. The clear passage width is reduced by approximately 10 cm.',
            ],
            title: 'Folding doors',
          },
        ],
        [
          {
            body: [
              'Especially suitable for businesses where the frequency of staff movement through the door does not allow manual opening, but rather opening by body movement. These doors are made as single-leaf doors in sizes 60, 70, 80, 90 (100 and 110 on request).',
            ],
            title: 'Swing doors',
          },
          {
            body: [
              'Do you have a dark hallway? Frames with a transom will brighten it up. Standard hinged doors are installed in these frames either as single-leaf doors in sizes 60, 70, 80, 90, or as double-leaf doors in sizes 125, 145, 165, and 185.',
            ],
            title: 'Doors with transom',
          },
          {
            body: [
              'If you do not want heat to escape unnecessarily at the entrance of your house, choose a wall with a door. It can be hinged or sliding. The colour of the wall with the transom and sidelights matches the interior doors.',
            ],
            title: 'Wall with door',
          },
        ],
      ],
      title: 'OPENING SYSTEMS',
    },
  },
  de: {
    catalog: 'Katalog',
    ctaBody: [
      'Entwerfen Sie Ihre Türen online.',
      'Probieren Sie unseren Konfigurator',
      'für Türen nach Maß aus.',
    ],
    ctaButton: 'Konfigurator',
    custom: {
      cons: ['Höherer Preis im Vergleich zu Standardtüren.'],
      consTitle: 'NACHTEILE VON TÜREN NACH MAß:',
      introBlocks: [
        {
          body: 'Wenn Sie Türen in Maßen benötigen, die auf dem Markt nicht verfügbar sind, oder Ihre Öffnung nicht der Norm entspricht, kontaktieren Sie uns. Wir können Türen mit einer Breite von 52 bis 112 cm und einer Höhe von 182 bis 210 cm inklusive Zargen liefern.',
          title: 'Haben Sie besondere Anforderungen?',
        },
        {
          body: 'Wir sind auf atypische Räume und nicht standardisierte Anforderungen vorbereitet. Innentüren und Zargen liefern wir in der Regel innerhalb von 2 Monaten. Melden Sie sich bei uns und wir tun alles für Ihren Komfort und Ihre Zufriedenheit.',
          title: 'Wir sind offen für Ihre Vorstellungen',
        },
      ],
      pros: [
        'Die Rohbauöffnung muss weder in der Breite noch in der Höhe angepasst werden.',
        'Ein alter Stahlrahmen oder eine andere bestehende Zarge kann mit einer neuen Holzverkleidung überdeckt werden.',
        'Mauer-, Spachtel- und Malerarbeiten entfallen.',
        'Trotz des etwas höheren Preises ist der Eingriff deutlich weniger invasiv und kommt ohne Staub, Schmutz und Nassprozesse aus.',
      ],
      prosTitle: 'VORTEILE VON TÜREN NACH MAß:',
      title: 'INNENTÜREN',
      titleHighlight: 'NACH MAß',
    },
    details: {
      imageAlt: 'Innendetail der Tür',
      items: [
        {
          body: 'Langjährige Erfahrung hat uns gelehrt, dass jedes Detail entscheidend ist. Deshalb verwenden wir bei unseren Türen statt einer Papierfalz eine robuste, farblich abgestimmte ABS-Kante von HRANIPEX. Der Falz ist nämlich der am stärksten belastete Teil des Türblatts.',
          title: 'Kanten',
        },
        {
          body: 'Der mittlere Bereich der Zarge ist am stärksten belastet. Deshalb haben wir die scharfe Kante auf einen Radius von 6 mm gefräst und anschließend mit CPL-Laminat ummantelt. So entsteht ein schöneres und sichereres, einteiliges Zargenelement ohne sichtbare scharfe Platte-Kleber-Kante-Verbindung.',
          list: ['45-Grad-Winkel (klassische Verbindung)', '90-Grad-Winkel (stumpfe Verbindung)'],
          listTitle: 'Art der Zargenverbindung:',
          title: 'Verbindungen',
        },
        {
          body: 'Im Türblatt ist ein hochwertiges Schloss des italienischen Herstellers AGB mit elegantem verchromtem Schlüssel verbaut. In gefälzten Zargen werden wartungsfreie Bänder mit Teflonstift eingesetzt, damit die Türen nicht quietschen. Diese sind in stabilen deutschen Metalltaschen von Simonswerk montiert, die belastbarer als Kunststofftaschen sind.',
          title: 'Schloss',
        },
      ],
      title: 'MÖCHTEN SIE PRAKTISCHE LÖSUNGEN,\nDIE BIS INS DETAIL DURCHDACHT SIND?',
    },
    hero: {
      subtitle: 'Atypische Innentüren genau nach Ihren Maßen und Vorstellungen',
      title: 'TÜREN NACH MAß',
    },
    intro: {
      body: 'Innentüren sind ein prägendes Element des Interieurs. Sie helfen dabei, den Gesamteindruck aufzubauen und schaffen einen fließenden Übergang zwischen den einzelnen Bereichen Ihres Zuhauses, damit alles zu einem besonderen und gemütlichen Ganzen wird. Deshalb verdient jedes Detail besondere Aufmerksamkeit. Aus diesem Grund bieten wir einen Komplettservice von der Vermessung über die Produktion bis hin zur Lieferung und Montage.',
      imageAlt: 'Präsentation von Innentüren',
      title: 'BIS ZU IHRER TÜR',
    },
    materials: {
      bodyPrimary: 'Wir arbeiten mit einer Laminatoberfläche, die sich durch hohe Widerstandsfähigkeit gegen Abrieb und Kratzer auszeichnet. Laminat ist pflegeleicht und leicht zu reinigen, da es keine Flüssigkeiten aufnimmt. Dasselbe CPL-Laminat verwenden wir auch bei Zargen und Glasleisten, damit das Gesamtergebnis natürlich und ästhetisch wirkt.',
      bodySecondary: 'sind eine perfekte Nachbildung natürlicher Holzarten wie Furnier oder Massivholz. Im Gegensatz zu Furnier und Massivholz ist Laminat farbbeständig. EGGER und KAINDL stellen großformatige Materialien, Arbeitsplatten und Böden her, sodass die Farbgestaltung von Türen und Interieur identisch sein kann.',
      imageAlt: 'Innentüren - Materialien',
      subtitle: 'EGGER- und KAINDL-Laminate',
      title: 'MATERIALIEN UND OBERFLÄCHEN',
    },
    systems: {
      rows: [
        [
          {
            body: [
              'Sie bilden die größte Gruppe der Innentüren. Wir liefern sie als einflügelige Türen in standardisierten Größen 60, 70, 80, 90 (100 und 110 auf Bestellung) sowie als zweiflügelige Türen in den Größen 125, 145, 165 und 185. Diese Reihe wird in gefälzte und stumpfe Türen unterteilt.',
            ],
            title: 'Drehtüren',
          },
          {
            body: [
              'Dieser Türtyp besitzt rund um das Türblatt einen Falz, der im geschlossenen Zustand den Spalt zwischen Tür und Zarge abdeckt.',
            ],
            title: 'Gefälzte Türen',
          },
          {
            body: [
              'Sie stehen für einen Trend im Interior Design. Bei dieser modernen Lösung liegt die Tür bündig mit den Verkleidungen und bildet eine einheitliche Fläche mit der Zarge. Zusätzlich ermöglichen 3D-verdeckte Bänder ein Öffnen um 180° und eine Verstellung in drei Richtungen. Verriegelt wird mit einem Magnetschloss.',
            ],
            title: 'Stumpfe Türen',
          },
        ],
        [
          {
            body: [
              'Schiebetüren verfügen über eine raffinierte Mechanik in der oberen Führungsschiene, die ein leichtes seitliches Verschieben der Türblätter ermöglicht. Bei zweiflügeligen Varianten können die Blätter einzeln oder synchron verschoben werden.',
              'Die Verkleidungszarge wird so montiert, dass die Schiebetür möglichst dicht an der Zarge anliegt.',
            ],
            title: 'Schiebetüren vor der Wand',
          },
          {
            body: [
              'Türen für die Wandtasche liefern wir als einflügelige stumpfe Schiebetüren in den Größen 60, 70, 80, 90 (100 und 110 auf Bestellung) sowie als zweiflügelige Türen in den Größen 125, 145, 165 und 185. Die Produktreihe ist dem standardisierten Wandtaschensystem untergeordnet. Die Türstärke beträgt 4 cm.',
            ],
            title: 'Schiebetüren in der Wandtasche',
          },
          {
            body: [
              'Ideal für schmale Räume, in denen klassische Türen nicht vollständig geöffnet werden können. Im geöffneten Zustand ragt etwa ein Drittel des Türblatts in beide angrenzenden Räume hinein. Die Durchgangsbreite wird um etwa 10 cm reduziert.',
            ],
            title: 'Falt-Harmonikatüren',
          },
        ],
        [
          {
            body: [
              'Sie eignen sich besonders für Betriebe, in denen die Häufigkeit der Personalbewegung durch die Tür ein manuelles Öffnen nicht zulässt, sondern die Tür durch Körperbewegung geöffnet wird. Diese Türen werden als einflügelige Türen in den Größen 60, 70, 80, 90 (100 und 110 auf Bestellung) gefertigt.',
            ],
            title: 'Pendeltüren',
          },
          {
            body: [
              'Haben Sie einen dunklen Flur? Zargen mit Oberlicht bringen Licht hinein. In solche Zargen werden standardisierte Drehtüren eingesetzt, entweder einflügelig in den Größen 60, 70, 80, 90 oder zweiflügelig in den Größen 125, 145, 165 und 185.',
            ],
            title: 'Türen mit Oberlicht',
          },
          {
            body: [
              'Wenn Sie nicht möchten, dass beim Hauseingang unnötig Wärme entweicht, wählen Sie eine Wand mit Tür. Diese kann als Dreh- oder Schiebetür ausgeführt werden. Die Farbe der Wand mit Oberlicht und Seitenteil entspricht dabei den Innentüren.',
            ],
            title: 'Wand mit Tür',
          },
        ],
      ],
      title: 'ÖFFNUNGSSYSTEME',
    },
  },
};

export default function DvereNaMieruClient() {
    const locale = useLocale() as Locale;
    const copy = pageCopy[locale];

    return (
        <main>
            <PageHero title={copy.hero.title} subtitle={copy.hero.subtitle} image="/sources/interierove/interier.webp" />

            <section className="door-intro-section">
                <div className="door-intro-content">
                    <div className="intro-text">
                        <h2>{copy.intro.title}</h2>
                        <p>{copy.intro.body}</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a href="/sources/katalog-namieru.pdf" className="btn-gold-link" target="_blank" rel="noopener noreferrer">{copy.catalog}</a>
                        </div>
                    </div>
                    <div className="intro-image">
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
                            <Image src="/sources/interierove/interier.webp" alt={copy.intro.imageAlt} fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="quality-section">
                <div className="quality-layout">
                    <div className="quality-left">
                        <Image src="/sources/interierove/interier1.webp" alt={copy.materials.imageAlt} fill className="object-cover" />
                    </div>
                    <div className="quality-right">
                        <Image src="/sources/interierove/interier2.webp" alt="" fill className="object-cover" />
                        <div className="quality-overlay">
                            <h2 className="quality-title">{copy.materials.title}</h2>
                            <p>{copy.materials.bodyPrimary}</p>
                            <h3>{copy.materials.subtitle}</h3>
                            <p>{copy.materials.bodySecondary}</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="details-section">
                <div className="container mx-auto px-4">
                    <div className="details-header-content">
                        <h2>{copy.details.title.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2>
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                            <Image src="/sources/interierove/interierove3.webp" alt={copy.details.imageAlt} fill className="object-cover" />
                        </div>
                    </div>

                    <div className="details-grid">
                        {copy.details.items.map((item) => (
                            <div key={item.title} className="detail-item">
                                <h3>{item.title}</h3>
                                <p>{item.body}</p>
                                {item.listTitle && <h3>{item.listTitle}</h3>}
                                {item.list && (
                                    <ul style={{ paddingLeft: '24px', color: '#666', fontFamily: 'var(--font-body)' }}>
                                        {item.list.map((listItem) => (
                                            <li key={listItem}>{listItem}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="custom-doors-section">
                <div className="custom-bg">
                    <Image src="/sources/homepage/vynimocny.webp" alt="" fill className="object-cover" />
                </div>

                <div className="custom-content">
                    <div className="custom-text">
                        <h2>{copy.custom.title}<br /><span className="highlight">{copy.custom.titleHighlight}</span></h2>
                        <div className="custom-features">
                            {copy.custom.introBlocks.map((block) => (
                                <div key={block.title}>
                                    <h3>{block.title}</h3>
                                    <p>{block.body}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="checklist-heading">{copy.custom.prosTitle}</h3>
                        <ul className="checklist-green" style={{ padding: '24px', margin: '0 0 24px 0' }}>
                            {copy.custom.pros.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>

                        <h3 className="checklist-heading cons">{copy.custom.consTitle}</h3>
                        <ul className="checklist-red" style={{ padding: '24px', margin: '0' }}>
                            {copy.custom.cons.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="configurator-content">
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '4/3', margin: '0 auto' }}>
                        <Image src="/sources/interierove/3img.webp" alt="" fill className="object-contain" />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', color: 'white', lineHeight: 1.4, marginBottom: '48px' }}>
                            {copy.ctaBody[0]}<br />{copy.ctaBody[1]}<br />{copy.ctaBody[2]}
                        </p>
                        <Link href="/dvere/konfigurator" className="btn-gold-link">
                            <i className="fas fa-cogs" style={{ marginRight: '8px' }} />
                            {copy.ctaButton}
                        </Link>
                    </div>
                </div>
            </section>

            <section className="systems-section">
                <div className="container mx-auto px-4">
                    <h2>{copy.systems.title}</h2>

                    {copy.systems.rows.map((row, index) => (
                        <div key={index} className="systems-grid">
                            {row.map((item) => (
                                <div key={item.title} className="system-item">
                                    <h3>{item.title}</h3>
                                    {item.body.map((paragraph) => (
                                        <p key={paragraph}>{paragraph}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </section>

            <ContactFormSection />
        </main>
    );
}

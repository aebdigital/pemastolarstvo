import type { Locale } from "@/i18n/routing";
import { floorOptions } from "@/lib/door-models";
import type { DoorConfiguration, DoorType, FloorOption } from "@/types/door";

type ValueSet = {
  doorTypes: Record<DoorType, string>;
  constructions: Record<string, string>;
  glassTypes: Record<string, string>;
  openingTypesShort: Record<string, string>;
  openingTypesLong: Record<string, string>;
  frameTypes: Record<string, string>;
  lockTypes: Record<string, string>;
  floorNames: Record<string, string>;
};

type ConfiguratorCopy = {
  addToQuote: string;
  availableDecors: string;
  back: string;
  backToVariantSelection: string;
  cart: string;
  cartEmpty: string;
  chooseDoorType: string;
  choosePattern: string;
  chooseWallColor: string;
  closeCart: string;
  colorDecor: string;
  completion: string;
  constructionSection: string;
  constructionSummary: string;
  dimensions: {
    height: string;
    thickness: string;
    width: string;
  };
  done: string;
  doorExecution: string;
  doorTypeCards: Record<
    DoorType,
    {
      description: string;
      title: string;
    }
  >;
  editInterior: string;
  floorType: string;
  frameSection: string;
  glassSection: string;
  glassSummary: string;
  inquiryNote: string;
  lockSection: string;
  lockSummary: string;
  modelSeries: string;
  modelVariants: string;
  nextModels: string;
  note: string;
  notePlaceholder: string;
  openCart: string;
  openingSection: string;
  openingSummary: string;
  pieces: string;
  previousModels: string;
  previewVariant: string;
  professionalAssembly: string;
  quantity: string;
  removeItem: string;
  requestedAssembly: string;
  reset: string;
  roomInterior: string;
  sendInquiry: string;
  stepLabel: string;
  steps: string[];
  technicalDimensions: string;
  technicalParameters: string;
  yourSelection: string;
  values: ValueSet;
  wallColor: string;
  yes: string;
  no: string;
  yesCaps: string;
  noCaps: string;
};

const copy: Record<Locale, ConfiguratorCopy> = {
  sk: {
    addToQuote: "Pridať k naceneniu",
    availableDecors: "Dostupné dekory",
    back: "Späť",
    backToVariantSelection: "Späť na výber varianty",
    cart: "Košík",
    cartEmpty: "Váš košík je momentálne prázdny",
    chooseDoorType: "Vyberte typ dverí",
    choosePattern: "Vyberte si svoj vzor",
    chooseWallColor: "Kliknite pre výber vlastnej farby steny",
    closeCart: "Zavrieť košík",
    colorDecor: "CPL lamináty / dekor",
    completion: "Dokončenie",
    constructionSection: "Typové prevedenie konštrukcie",
    constructionSummary: "Konštrukčné prevedenie",
    dimensions: {
      height: "Výška stavebného otvoru",
      thickness: "Hrúbka dokončenej steny",
      width: "Šírka stavebného otvoru",
    },
    done: "Hotovo",
    doorExecution: "Prevedenie dverí",
    doorTypeCards: {
      ramove: {
        description:
          "Klasické rámové dvere s dreveným rámom a výplňou. 10 modelov.",
        title: "Rámové dvere",
      },
      sendvicove: {
        description:
          "Moderné sendvičové dvere s vynikajúcou izoláciou. 13 modelov.",
        title: "Sendvičové dvere",
      },
    },
    editInterior: "Prispôsobiť interiér",
    floorType: "Typ podlahy",
    frameSection: "Prevedenie zárubne",
    glassSection: "Výplň a zasklenie dverí",
    glassSummary: "Typ skla",
    inquiryNote: "Poznámka k dopytu",
    lockSection: "Typ uzamykania (kovanie)",
    lockSummary: "Kovanie - zámok",
    modelSeries: "Modelová rada",
    modelVariants: "Varianty modelu",
    nextModels: "Ďalšie modely",
    note: "Poznámka",
    notePlaceholder:
      "Špecifikujte prosím vaše požiadavky, napríklad atypické rozmery, špeciálne kovanie alebo iné detaily...",
    openCart: "Otvoriť košík",
    openingSection: "Spôsob otvárania",
    openingSummary: "Typ otvárania",
    pieces: "ks",
    previousModels: "Predchádzajúce modely",
    previewVariant: "Variant",
    professionalAssembly: "Odborná montáž",
    quantity: "Množstvo",
    removeItem: "Odstrániť položku",
    requestedAssembly: "Požadovaná montáž",
    reset: "Resetovať",
    roomInterior: "Interiér miestnosti",
    sendInquiry: "Odoslať dopyt",
    stepLabel: "Krok",
    steps: ["Typ", "Model", "Variant", "Konfigurácia"],
    technicalDimensions: "Technické rozmery",
    technicalParameters: "Technické parametre",
    yourSelection: "Váš výber",
    values: {
      constructions: {
        "dutinkove": "Dutinková drevotrieska",
        "plna-mdf": "Plná MDF výplň",
        "vostinove": "Voštinová výplň",
      },
      doorTypes: {
        ramove: "Rámové dvere",
        sendvicove: "Sendvičové dvere",
      },
      floorNames: {
        "borovice-villefort": "Borovica Villefort",
        "dlazba-kridova": "Dlažba kriedová",
        "dub-almington": "Dub Almington",
        "dub-brynford": "Dub Brynford",
        "dub-luena": "Dub Luena",
        "dub-toscolano": "Dub Toscolano",
        "dub-waltham": "Dub Waltham",
        "kamen-santino": "Kameň Santino",
        "metal-rock": "Metal Rock",
        "orech-sevillo": "Orech Sevillo",
        "orech-tureni": "Orech Tureni",
      },
      frameTypes: {
        "bezfalcove": "Bezfalcové dvere",
        "falcove": "Falcové dvere",
      },
      glassTypes: {
        "cincila": "Činčila číra",
        "dub-kora": "Dubová kôra číra",
        "matelux": "Matelux",
        "none": "Bez skla",
      },
      lockTypes: {
        "dozicky-bb": "Dózický zámok (BB)",
        "fab-zamok": "Cylindrický zámok (PZ)",
        "wc-zamok": "WC zámok (WC)",
      },
      openingTypesLong: {
        "kyvne": "Kyvné",
        "lomene": "Lomené",
        "otocne": "Otočné",
        "posuvne-puzdro": "Do púzdra",
        "posuvne-stena": "Na stenu",
        "protipoziarne": "Protipožiarne",
      },
      openingTypesShort: {
        "kyvne": "Kyvné",
        "lomene": "Lomené",
        "otocne": "Otočné",
        "posuvne-puzdro": "Do púzdra",
        "posuvne-stena": "Na stenu",
        "protipoziarne": "Protipož.",
      },
    },
    wallColor: "Farba steny",
    yes: "Áno",
    no: "Nie",
    yesCaps: "ÁNO",
    noCaps: "NIE",
  },
  en: {
    addToQuote: "Add to quote",
    availableDecors: "Available finishes",
    back: "Back",
    backToVariantSelection: "Back to variant selection",
    cart: "Cart",
    cartEmpty: "Your cart is currently empty",
    chooseDoorType: "Choose a door type",
    choosePattern: "Choose your pattern",
    chooseWallColor: "Click to pick a custom wall color",
    closeCart: "Close cart",
    colorDecor: "CPL laminates / finish",
    completion: "Finish",
    constructionSection: "Construction type",
    constructionSummary: "Construction",
    dimensions: {
      height: "Rough opening height",
      thickness: "Finished wall thickness",
      width: "Rough opening width",
    },
    done: "Done",
    doorExecution: "Door version",
    doorTypeCards: {
      ramove: {
        description:
          "Classic framed doors with a wooden frame and infill. 10 models.",
        title: "Framed doors",
      },
      sendvicove: {
        description:
          "Modern sandwich doors with excellent insulation. 13 models.",
        title: "Sandwich doors",
      },
    },
    editInterior: "Adjust interior",
    floorType: "Floor type",
    frameSection: "Frame version",
    glassSection: "Door infill and glazing",
    glassSummary: "Glass type",
    inquiryNote: "Inquiry note",
    lockSection: "Lock type (hardware)",
    lockSummary: "Hardware / lock",
    modelSeries: "Model range",
    modelVariants: "Model variants",
    nextModels: "Next models",
    note: "Note",
    notePlaceholder:
      "Please specify your requirements, for example unusual dimensions, special hardware, or any other details...",
    openCart: "Open cart",
    openingSection: "Opening method",
    openingSummary: "Opening type",
    pieces: "pcs",
    previousModels: "Previous models",
    previewVariant: "Variant",
    professionalAssembly: "Professional installation",
    quantity: "Quantity",
    removeItem: "Remove item",
    requestedAssembly: "Installation requested",
    reset: "Reset",
    roomInterior: "Room interior",
    sendInquiry: "Send inquiry",
    stepLabel: "Step",
    steps: ["Type", "Model", "Variant", "Configuration"],
    technicalDimensions: "Technical dimensions",
    technicalParameters: "Technical parameters",
    yourSelection: "Your selection",
    values: {
      constructions: {
        "dutinkove": "Tubular chipboard core",
        "plna-mdf": "Solid MDF core",
        "vostinove": "Honeycomb core",
      },
      doorTypes: {
        ramove: "Framed doors",
        sendvicove: "Sandwich doors",
      },
      floorNames: {
        "borovice-villefort": "Villefort pine",
        "dlazba-kridova": "Chalk tile",
        "dub-almington": "Almington oak",
        "dub-brynford": "Brynford oak",
        "dub-luena": "Luena oak",
        "dub-toscolano": "Toscolano oak",
        "dub-waltham": "Waltham oak",
        "kamen-santino": "Santino stone",
        "metal-rock": "Metal rock",
        "orech-sevillo": "Sevillo walnut",
        "orech-tureni": "Tureni walnut",
      },
      frameTypes: {
        "bezfalcove": "Flush doors",
        "falcove": "Rebated doors",
      },
      glassTypes: {
        "cincila": "Clear Chinchilla glass",
        "dub-kora": "Clear oak bark glass",
        "matelux": "Matelux",
        "none": "No glass",
      },
      lockTypes: {
        "dozicky-bb": "Key lock (BB)",
        "fab-zamok": "Cylinder lock (PZ)",
        "wc-zamok": "Bathroom lock (WC)",
      },
      openingTypesLong: {
        "kyvne": "Swing",
        "lomene": "Folding",
        "otocne": "Hinged",
        "posuvne-puzdro": "Pocket sliding",
        "posuvne-stena": "Wall sliding",
        "protipoziarne": "Fire-rated",
      },
      openingTypesShort: {
        "kyvne": "Swing",
        "lomene": "Folding",
        "otocne": "Hinged",
        "posuvne-puzdro": "Pocket",
        "posuvne-stena": "Wall",
        "protipoziarne": "Fire",
      },
    },
    wallColor: "Wall color",
    yes: "Yes",
    no: "No",
    yesCaps: "YES",
    noCaps: "NO",
  },
  de: {
    addToQuote: "Zur Anfrage hinzufügen",
    availableDecors: "Verfügbare Dekore",
    back: "Zurück",
    backToVariantSelection: "Zurück zur Variantenauswahl",
    cart: "Warenkorb",
    cartEmpty: "Ihr Warenkorb ist momentan leer",
    chooseDoorType: "Wählen Sie den Türtyp",
    choosePattern: "Wählen Sie Ihr Muster",
    chooseWallColor: "Klicken Sie, um eine eigene Wandfarbe auszuwählen",
    closeCart: "Warenkorb schließen",
    colorDecor: "CPL-Laminate / Dekor",
    completion: "Abschluss",
    constructionSection: "Konstruktionsausführung",
    constructionSummary: "Konstruktion",
    dimensions: {
      height: "Höhe der Rohbauöffnung",
      thickness: "Fertige Wandstärke",
      width: "Breite der Rohbauöffnung",
    },
    done: "Fertig",
    doorExecution: "Türausführung",
    doorTypeCards: {
      ramove: {
        description:
          "Klassische Rahmentüren mit Holzrahmen und Füllung. 10 Modelle.",
        title: "Rahmentüren",
      },
      sendvicove: {
        description:
          "Moderne Sandwich-Türen mit hervorragender Dämmung. 13 Modelle.",
        title: "Sandwich-Türen",
      },
    },
    editInterior: "Innenraum anpassen",
    floorType: "Bodenart",
    frameSection: "Zargenausführung",
    glassSection: "Türfüllung und Verglasung",
    glassSummary: "Glasart",
    inquiryNote: "Anmerkung zur Anfrage",
    lockSection: "Schlossart (Beschlag)",
    lockSummary: "Beschlag / Schloss",
    modelSeries: "Modellreihe",
    modelVariants: "Modellvarianten",
    nextModels: "Nächste Modelle",
    note: "Notiz",
    notePlaceholder:
      "Bitte beschreiben Sie Ihre Anforderungen, zum Beispiel Sondermaße, spezielle Beschläge oder andere Details...",
    openCart: "Warenkorb öffnen",
    openingSection: "Öffnungsart",
    openingSummary: "Öffnungsart",
    pieces: "Stk.",
    previousModels: "Vorherige Modelle",
    previewVariant: "Variante",
    professionalAssembly: "Fachmontage",
    quantity: "Menge",
    removeItem: "Element entfernen",
    requestedAssembly: "Montage gewünscht",
    reset: "Zurücksetzen",
    roomInterior: "Rauminterieur",
    sendInquiry: "Anfrage senden",
    stepLabel: "Schritt",
    steps: ["Typ", "Modell", "Variante", "Konfiguration"],
    technicalDimensions: "Technische Maße",
    technicalParameters: "Technische Parameter",
    yourSelection: "Ihre Auswahl",
    values: {
      constructions: {
        "dutinkove": "Röhrenspanplatte",
        "plna-mdf": "Volle MDF-Füllung",
        "vostinove": "Wabenkern",
      },
      doorTypes: {
        ramove: "Rahmentüren",
        sendvicove: "Sandwich-Türen",
      },
      floorNames: {
        "borovice-villefort": "Kiefer Villefort",
        "dlazba-kridova": "Kreidefliese",
        "dub-almington": "Eiche Almington",
        "dub-brynford": "Eiche Brynford",
        "dub-luena": "Eiche Luena",
        "dub-toscolano": "Eiche Toscolano",
        "dub-waltham": "Eiche Waltham",
        "kamen-santino": "Stein Santino",
        "metal-rock": "Metal Rock",
        "orech-sevillo": "Walnuss Sevillo",
        "orech-tureni": "Walnuss Tureni",
      },
      frameTypes: {
        "bezfalcove": "Stumpfe Türen",
        "falcove": "Gefälzte Türen",
      },
      glassTypes: {
        "cincila": "Chinchilla klar",
        "dub-kora": "Eichenrinde klar",
        "matelux": "Matelux",
        "none": "Ohne Glas",
      },
      lockTypes: {
        "dozicky-bb": "Buntbartschloss (BB)",
        "fab-zamok": "Zylinderschloss (PZ)",
        "wc-zamok": "WC-Schloss",
      },
      openingTypesLong: {
        "kyvne": "Pendeltür",
        "lomene": "Falttür",
        "otocne": "Drehtür",
        "posuvne-puzdro": "Schiebetür in der Wandtasche",
        "posuvne-stena": "Schiebetür vor der Wand",
        "protipoziarne": "Brandschutz",
      },
      openingTypesShort: {
        "kyvne": "Pendel",
        "lomene": "Falt",
        "otocne": "Dreh",
        "posuvne-puzdro": "In der Tasche",
        "posuvne-stena": "Vor der Wand",
        "protipoziarne": "Brand",
      },
    },
    wallColor: "Wandfarbe",
    yes: "Ja",
    no: "Nein",
    yesCaps: "JA",
    noCaps: "NEIN",
  },
};

export function getConfiguratorCopy(locale: Locale): ConfiguratorCopy {
  return copy[locale] || copy.sk;
}

function getLocalizedValues(locale: Locale): ValueSet {
  return getConfiguratorCopy(locale).values;
}

export function getDoorTypeLabel(locale: Locale, doorType: DoorType): string {
  return getLocalizedValues(locale).doorTypes[doorType];
}

export function getConstructionLabel(
  locale: Locale,
  construction: DoorConfiguration["construction"]
): string {
  return (
    getLocalizedValues(locale).constructions[construction] ||
    getLocalizedValues(locale).constructions["plna-mdf"]
  );
}

export function getGlassTypeLabel(
  locale: Locale,
  glassType: DoorConfiguration["glassType"]
): string {
  return (
    getLocalizedValues(locale).glassTypes[glassType] ||
    getLocalizedValues(locale).glassTypes.none
  );
}

export function getOpeningTypeLabel(
  locale: Locale,
  openingType: DoorConfiguration["openingType"],
  variant: "long" | "short" = "long"
): string {
  const labels =
    variant === "short"
      ? getLocalizedValues(locale).openingTypesShort
      : getLocalizedValues(locale).openingTypesLong;
  return labels[openingType] || labels.otocne;
}

export function getFrameTypeLabel(
  locale: Locale,
  frameType: DoorConfiguration["frameType"]
): string {
  return getLocalizedValues(locale).frameTypes[frameType] ||
    getLocalizedValues(locale).frameTypes.falcove;
}

export function getLockTypeLabel(
  locale: Locale,
  lockType: DoorConfiguration["lockType"]
): string {
  return getLocalizedValues(locale).lockTypes[lockType] ||
    getLocalizedValues(locale).lockTypes["dozicky-bb"];
}

export function getFloorDisplayName(locale: Locale, floorId: string): string {
  return getLocalizedValues(locale).floorNames[floorId] || floorId;
}

export function getLocalizedFloorOptions(locale: Locale): FloorOption[] {
  return floorOptions.map((floor) => ({
    ...floor,
    name: getFloorDisplayName(locale, floor.id),
  }));
}

import type { Locale } from "@/i18n/routing";
import { ColorsData } from "@/types/door";

export interface DoorColor {
  code: string;
  name: string;
  swatch?: string;
  hex?: string;
}

// Full mapping from standard-colors.json for consistency
export const unifiedColorMapping: Record<string, string> = {
  "biela hladka.png": "biela hladka.jpg",
  "platinova biela.png": "platinova biela.jpg",
  "biela premium.png": "biela premium.jpg",
  "woodline creme.png": "woodline creme.jpg",
  "lakeland akazie sv.png": "lakeland akazie sv.jpg",
  "jasen navarra.png": "jasen navarra.jpg",
  "dub halifax biely.png": "dub halifax biely.jpg",
  "dub halifax prir.png": "dub halifax prir.jpg",
  "dub halifax tabak.png": "dub halifax tabak.jpg",
  "dub arlington prir.png": "dub arlington prir.jpg",
  "dub corbridge prir.png": "dub corbridge prir.jpg",
  "dub bardolino prir.png": "dub bardolino prir.jpg",
  "dub bardoliny sedy.png": "dub bardoliny sedy.jpg",
  "dub kendal konak.png": "dub kendal konak.jpg",
  "dub lorenzo bez sivy.png": "dub lorenzo bez sivy.jpg",
  "dub nebraska prir.png": "dub nebraska prir.jpg",
  "dub nebraska sedy.png": "dub nebraska sedy.jpg",
  "dub thermo c. h.png": "dub thermo c h.jpg",
  "dub authentic hnedy.png": "dub authentic hnedy.jpg",
  "buk bavaria.png": "buk bavaria.jpg",
  "graphite metalic.png": "graphite metalic.jpg",
  "orech aida tabak.png": "orech aida tabak.jpg",
  "orech dijon prir.png": "orech dijon prir.jpg",
  "orech prirodny.png": "orech prirodny.jpg",
  "orech pacifik tabak.png": "orech pacifik tabak.jpg",
  "orech carini bieleny.png": "orech carini bieleny.jpg",
  "seda.png": "seda.jpg",
  "hlinik.png": "hlinik.jpg"
};

export const variantAvailableColors = {
  ramove: [
    "biela hladka.png", "platinova biela.png", "biela premium.png", "woodline creme.png",
    "lakeland akazie sv.png", "dub halifax biely.png", "dub bardolino prir.png",
    "dub bardoliny sedy.png", "dub nebraska prir.png", "dub arlington prir.png",
    "dub corbridge prir.png", "orech dijon prir.png", "dub nebraska sedy.png",
    "graphite metalic.png", "dub halifax prir.png", "dub halifax tabak.png",
    "orech aida tabak.png", "orech pacifik tabak.png", "dub thermo c. h.png",
    "dub lorenzo bez sivy.png", "dub kendal konak.png"
  ],
  sendvicove: [
    "biela hladka.png", "platinova biela.png", "biela premium.png", "woodline creme.png",
    "lakeland akazie sv.png", "jasen navarra.png", "dub halifax biely.png",
    "dub bardolino prir.png", "dub bardoliny sedy.png", "dub nebraska prir.png",
    "dub arlington prir.png", "dub corbridge prir.png", "buk bavaria.png",
    "orech dijon prir.png", "orech prirodny.png", "dub nebraska sedy.png",
    "graphite metalic.png", "seda.png", "hlinik.png", "dub halifax prir.png",
    "dub halifax tabak.png", "orech aida tabak.png", "orech pacifik tabak.png",
    "orech carini bieleny.png", "dub authentic hnedy.png", "dub thermo c. h.png",
    "dub lorenzo bez sivy.png", "dub kendal konak.png"
  ]
};

const localizedNames: Record<Locale, Record<string, string>> = {
  sk: {
    "biela hladka": "Biela hladká",
    "biela premium": "Biela Premium",
    "platinova biela": "Platinová biela",
    "woodline creme": "Woodline Creme",
    "lakeland akazie sv": "Lakeland Akazie sv.",
    "jasen navarra": "Jaseň Navarra",
    "dub halifax biely": "Dub Halifax biely",
    "dub bardolino prir": "Dub Bardolino prír.",
    "dub bardoliny sedy": "Dub Bardoliny šedý",
    "dub nebraska prir": "Dub Nebraska prír.",
    "dub arlington prir": "Dub Arlington prír.",
    "dub corbridge prir": "Dub Corbridge prír.",
    "buk bavaria": "Buk Bavaria",
    "orech dijon prir": "Orech Dijon prír.",
    "orech prirodny": "Orech prírodný",
    "dub nebraska sedy": "Dub Nebraska šedý",
    "graphite metalic": "Graphite Metallic",
    "seda": "Šedá",
    "hlinik": "Hliník",
    "dub halifax prir": "Dub Halifax prír.",
    "dub halifax tabak": "Dub Halifax tabak",
    "orech aida tabak": "Orech Aida tabak",
    "orech pacifik tabak": "Orech Pacifik tabak",
    "orech carini bieleny": "Orech Carini bielený",
    "dub authentic hnedy": "Dub Authentic hnedý",
    "dub thermo c. h": "Dub Thermo č. h.",
    "dub lorenzo bez sivy": "Dub Lorenzo béž. sivý",
    "dub kendal konak": "Dub Kendal koňak",
  },
  en: {
    "biela hladka": "Smooth white",
    "biela premium": "Premium white",
    "platinova biela": "Platinum white",
    "woodline creme": "Woodline creme",
    "lakeland akazie sv": "Light Lakeland acacia",
    "jasen navarra": "Navarra ash",
    "dub halifax biely": "Halifax white oak",
    "dub bardolino prir": "Bardolino natural oak",
    "dub bardoliny sedy": "Bardolino grey oak",
    "dub nebraska prir": "Nebraska natural oak",
    "dub arlington prir": "Arlington natural oak",
    "dub corbridge prir": "Corbridge natural oak",
    "buk bavaria": "Bavaria beech",
    "orech dijon prir": "Dijon natural walnut",
    "orech prirodny": "Natural walnut",
    "dub nebraska sedy": "Nebraska grey oak",
    "graphite metalic": "Graphite metallic",
    "seda": "Grey",
    "hlinik": "Aluminium",
    "dub halifax prir": "Halifax natural oak",
    "dub halifax tabak": "Halifax tobacco oak",
    "orech aida tabak": "Aida tobacco walnut",
    "orech pacifik tabak": "Pacific tobacco walnut",
    "orech carini bieleny": "Carini bleached walnut",
    "dub authentic hnedy": "Authentic brown oak",
    "dub thermo c. h": "Thermo oak dark brown",
    "dub lorenzo bez sivy": "Lorenzo beige-grey oak",
    "dub kendal konak": "Kendal cognac oak",
  },
  de: {
    "biela hladka": "Glattweiß",
    "biela premium": "Premium-Weiß",
    "platinova biela": "Platinweiß",
    "woodline creme": "Woodline Creme",
    "lakeland akazie sv": "Lakeland Akazie hell",
    "jasen navarra": "Esche Navarra",
    "dub halifax biely": "Halifax-Eiche weiß",
    "dub bardolino prir": "Bardolino-Eiche natur",
    "dub bardoliny sedy": "Bardolino-Eiche grau",
    "dub nebraska prir": "Nebraska-Eiche natur",
    "dub arlington prir": "Arlington-Eiche natur",
    "dub corbridge prir": "Corbridge-Eiche natur",
    "buk bavaria": "Buche Bavaria",
    "orech dijon prir": "Dijon-Nussbaum natur",
    "orech prirodny": "Nussbaum natur",
    "dub nebraska sedy": "Nebraska-Eiche grau",
    "graphite metalic": "Graphit Metallic",
    "seda": "Grau",
    "hlinik": "Aluminium",
    "dub halifax prir": "Halifax-Eiche natur",
    "dub halifax tabak": "Halifax-Eiche Tabak",
    "orech aida tabak": "Aida-Nussbaum Tabak",
    "orech pacifik tabak": "Pazifik-Nussbaum Tabak",
    "orech carini bieleny": "Carini-Nussbaum gebleicht",
    "dub authentic hnedy": "Authentic-Eiche braun",
    "dub thermo c. h": "Thermo-Eiche dunkelbraun",
    "dub lorenzo bez sivy": "Lorenzo-Eiche beige-grau",
    "dub kendal konak": "Kendal-Eiche Cognac",
  },
};

export function getColorDisplayName(
  baseFileName: string,
  locale: Locale = "sk"
): string {
  // strip extension
  const clean = baseFileName.replace(/\.(png|jpg)/, "");
  return localizedNames[locale][clean] || localizedNames.sk[clean] || clean;
}

export function getColorsForType(
  doorType: "ramove" | "sendvicove",
  locale: Locale = "sk"
): DoorColor[] {
  const available =
    variantAvailableColors[doorType === "sendvicove" ? "sendvicove" : "ramove"];
  return available.map((file) => {
    const swatchFile = unifiedColorMapping[file];
    return {
      code: file,
      name: getColorDisplayName(file, locale),
      swatch: `/sources/konfig/color options/${swatchFile}`,
    };
  });
}

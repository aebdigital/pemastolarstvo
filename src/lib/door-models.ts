import { DoorModel, DoorType, OpeningOption, FloorOption } from "@/types/door";

export const doorModels: Record<DoorType, DoorModel[]> = {
  ramove: [
    { id: "O", name: "O-MODEL", variants: 3, description: "3 varianty" },
    { id: "P", name: "P-MODEL", variants: 3, description: "3 varianty" },
    { id: "Q", name: "Q-MODEL", variants: 3, description: "3 varianty" },
    { id: "R", name: "R-MODEL", variants: 3, description: "3 varianty" },
    { id: "S", name: "S-MODEL", variants: 4, description: "4 varianty" },
    { id: "T", name: "T-MODEL", variants: 3, description: "3 varianty" },
    { id: "U", name: "U-MODEL", variants: 5, description: "5 variantov" },
    { id: "V", name: "V-MODEL", variants: 3, description: "3 varianty" },
    { id: "W", name: "W-MODEL", variants: 3, description: "3 varianty" },
    { id: "Z", name: "Z-MODEL", variants: 3, description: "3 varianty" },
  ],
  sendvicove: [
    { id: "A", name: "A-MODEL", variants: 5, description: "5 variantov" },
    { id: "B", name: "B-MODEL", variants: 5, description: "5 variantov" },
    { id: "C", name: "C-MODEL", variants: 2, description: "2 varianty" },
    { id: "D", name: "D-MODEL", variants: 3, description: "3 varianty" },
    { id: "E", name: "E-MODEL", variants: 3, description: "3 varianty" },
    { id: "F", name: "F-MODEL", variants: 8, description: "8 variantov" },
    { id: "G", name: "G-MODEL", variants: 3, description: "3 varianty" },
    { id: "H", name: "H-MODEL", variants: 3, description: "3 varianty" },
    { id: "I", name: "I-MODEL", variants: 3, description: "3 varianty" },
    { id: "J", name: "J-MODEL", variants: 3, description: "3 varianty" },
    { id: "K", name: "K-MODEL", variants: 4, description: "4 varianty" },
    { id: "L", name: "L-MODEL", variants: 5, description: "5 variantov" },
    { id: "M", name: "M-MODEL", variants: 4, description: "4 varianty" },
  ],
};

export const allOpeningOptions: OpeningOption[] = [
  {
    id: "otocne",
    name: "Otočné",
    image: "/sources/konfig/otvaranie/otvaranie 1.svg",
    alt: "Otočné",
  },
  {
    id: "posuvne-stena",
    name: "Posuvné na stenu",
    image: "/sources/konfig/otvaranie/otvaranie 2.svg",
    alt: "Posuvné na stenu",
  },
  {
    id: "posuvne-puzdro",
    name: "Posuvné do púzdra",
    image: "/sources/konfig/otvaranie/otvaranie 3.svg",
    alt: "Posuvné do púzdra",
  },
  {
    id: "lomene",
    name: "Lomené",
    image: "/sources/konfig/otvaranie/otvaranie 4.svg",
    alt: "Lomené",
  },
  {
    id: "kyvne",
    name: "Kyvné",
    image: "/sources/konfig/otvaranie/otvaranie 5.svg",
    alt: "Kyvné",
  },
  {
    id: "protipoziarne",
    name: "Protipožiarne",
    image: "/sources/konfig/otvaranie/otvaranie 6.svg",
    alt: "Protipožiarne",
  },
];

export const openingRules: Record<string, string[]> = {
  O1: ["otocne"],
  O2: ["otocne"],
  O3: ["otocne"],
  P1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  P2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  P3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  Q1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  Q2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  Q3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  R1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  R2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  R3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  S1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  S2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  S3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  S4: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  T1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  T2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  T3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  U1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  U2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  U3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  U4: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  U5: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  V1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  V2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  V3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  W1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  W2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  W3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  Z1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  Z2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  Z3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  A1: [
    "otocne",
    "posuvne-stena",
    "posuvne-puzdro",
    "lomene",
    "kyvne",
    "protipoziarne",
  ],
  A2: [
    "otocne",
    "posuvne-stena",
    "posuvne-puzdro",
    "kyvne",
    "protipoziarne",
  ],
  A3: [
    "otocne",
    "posuvne-stena",
    "posuvne-puzdro",
    "kyvne",
    "protipoziarne",
  ],
  A4: [
    "otocne",
    "posuvne-stena",
    "posuvne-puzdro",
    "kyvne",
    "protipoziarne",
  ],
  A5: [
    "otocne",
    "posuvne-stena",
    "posuvne-puzdro",
    "kyvne",
    "protipoziarne",
  ],
  B1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  B2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  B3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  B4: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  B5: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  C1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  C2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  D1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  D2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  D3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  E1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  E2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  E3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  F1: ["otocne", "posuvne-stena", "posuvne-puzdro", "lomene", "kyvne"],
  F2: ["otocne", "posuvne-stena", "posuvne-puzdro", "lomene", "kyvne"],
  F3: ["otocne", "posuvne-stena", "posuvne-puzdro", "lomene", "kyvne"],
  F4: ["otocne", "posuvne-stena", "posuvne-puzdro", "lomene", "kyvne"],
  F5: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  F6: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  F7: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  F8: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  G1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  G2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  G3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  H1: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  H2: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  H3: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  I1: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  I2: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  I3: ["otocne", "posuvne-stena", "posuvne-puzdro", "kyvne"],
  J1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  J2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  J3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  K1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  K2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  K3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  K4: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  L1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  L2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  L3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  L4: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  L5: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  M1: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  M2: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  M3: ["otocne", "posuvne-stena", "posuvne-puzdro"],
  M4: ["otocne", "posuvne-stena", "posuvne-puzdro"],
};

export const floorOptions: FloorOption[] = [
  {
    id: "borovice-villefort",
    name: "Borovice Villefort",
    image: "/sources/konfig/PODLAHA/borovice-villefort.jpg",
  },
  {
    id: "dlazba-kridova",
    name: "Dlažba Kriedová",
    image: "/sources/konfig/PODLAHA/dlazba-kridova.jpg",
  },
  {
    id: "dub-almington",
    name: "Dub Almington",
    image: "/sources/konfig/PODLAHA/dub-almington.jpg",
  },
  {
    id: "dub-brynford",
    name: "Dub Brynford",
    image: "/sources/konfig/PODLAHA/dub-brynford.jpg",
  },
  {
    id: "dub-luena",
    name: "Dub Luena",
    image: "/sources/konfig/PODLAHA/dub-luena.jpg",
  },
  {
    id: "dub-toscolano",
    name: "Dub Toscolano",
    image: "/sources/konfig/PODLAHA/dub-toscolano.jpg",
  },
  {
    id: "dub-waltham",
    name: "Dub Waltham",
    image: "/sources/konfig/PODLAHA/dub-waltham.jpg",
  },
  {
    id: "kamen-santino",
    name: "Kameň Santino",
    image: "/sources/konfig/PODLAHA/kamen-santino.jpg",
  },
  {
    id: "metal-rock",
    name: "Metal Rock",
    image: "/sources/konfig/PODLAHA/metal-rock.jpg",
  },
  {
    id: "orech-sevillo",
    name: "Orech Sevillo",
    image: "/sources/konfig/PODLAHA/orech-sevillo.jpg",
  },
  {
    id: "orech-tureni",
    name: "Orech Tureni",
    image: "/sources/konfig/PODLAHA/orech-tureni.jpg",
  },
];

export function getDoorImagePath(
  doorType: DoorType,
  modelId: string,
  variant: number
): string {
  const folderName = doorType === "sendvicove" ? "sendvic" : "ramove";
  return `/sources/konfig/${folderName}/${modelId}${variant}.png`;
}

export function getColoredDoorImagePath(
  modelId: string,
  variant: number,
  standardColorFile: string
): string {
  const variantKey = `${modelId}${variant}`;
  return `/sources/konfig/switchable/${variantKey}/${standardColorFile}`;
}

export function getVisibleCardsCount(): number {
  if (typeof window === "undefined") return 5;
  const screenWidth = window.innerWidth;
  if (screenWidth <= 767) return 1;
  if (screenWidth <= 991) return 2;
  return 5;
}

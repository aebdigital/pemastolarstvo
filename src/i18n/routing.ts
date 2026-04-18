import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const locales = ["sk", "en", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "sk";

export const pathnames = {
  "/": {
    sk: "/",
    en: "/",
    de: "/",
  },
  "/dvere/o-nas": {
    sk: "/dvere/o-nas",
    en: "/doors/about-us",
    de: "/tueren/ueber-uns",
  },
  "/dvere/dverenamieru": {
    sk: "/dvere/dverenamieru",
    en: "/doors/custom-doors",
    de: "/tueren/tueren-nach-mass",
  },
  "/dvere/typizovane-dvere": {
    sk: "/dvere/typizovane-dvere",
    en: "/doors/standard-doors",
    de: "/tueren/standardtueren",
  },
  "/dvere/konfigurator": {
    sk: "/dvere/konfigurator",
    en: "/doors/configurator",
    de: "/tueren/konfigurator",
  },
  "/dvere/poradna": {
    sk: "/dvere/poradna",
    en: "/doors/advice",
    de: "/tueren/ratgeber",
  },
  "/dvere/referencie": {
    sk: "/dvere/referencie",
    en: "/doors/references",
    de: "/tueren/referenzen",
  },
  "/dvere/blog": {
    sk: "/dvere/blog",
    en: "/doors/blog",
    de: "/tueren/blog",
  },
  "/dvere/kontakt": {
    sk: "/dvere/kontakt",
    en: "/doors/contact",
    de: "/tueren/kontakt",
  },
  "/dvere/dopyt": {
    sk: "/dvere/dopyt",
    en: "/doors/inquiry",
    de: "/tueren/anfrage",
  },
  "/dvere/polozkydopytu": {
    sk: "/dvere/polozkydopytu",
    en: "/doors/inquiry-items",
    de: "/tueren/anfragepositionen",
  },
  "/dvere/tabulka": {
    sk: "/dvere/tabulka",
    en: "/doors/size-chart",
    de: "/tueren/masstabelle",
  },
  "/stolarstvo/o-nas": {
    sk: "/stolarstvo/o-nas",
    en: "/carpentry/about-us",
    de: "/schreinerei/ueber-uns",
  },
  "/stolarstvo/vstavane-skrine": {
    sk: "/stolarstvo/vstavane-skrine",
    en: "/carpentry/built-in-wardrobes",
    de: "/schreinerei/einbauschraenke",
  },
  "/stolarstvo/referencie": {
    sk: "/stolarstvo/referencie",
    en: "/carpentry/references",
    de: "/schreinerei/referenzen",
  },
  "/stolarstvo/kontakt": {
    sk: "/stolarstvo/kontakt",
    en: "/carpentry/contact",
    de: "/schreinerei/kontakt",
  },
} as const;

export type InternalPathname = keyof typeof pathnames;

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: "always",
  pathnames,
});

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);

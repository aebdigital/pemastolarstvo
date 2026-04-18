import type { Metadata } from "next";
import {
  defaultLocale,
  locales,
  pathnames,
  type InternalPathname,
  type Locale,
} from "@/i18n/routing";

export const BASE_URL = "https://dvereastolarstvo.sk";

const OPEN_GRAPH_LOCALES: Record<Locale, string> = {
  sk: "sk_SK",
  en: "en_US",
  de: "de_DE",
};

export function getLocalizedPath(pathname: InternalPathname, locale: Locale) {
  const localizedPath = pathnames[pathname][locale];
  return localizedPath === "/" ? `/${locale}` : `/${locale}${localizedPath}`;
}

export function getLocalizedUrl(pathname: InternalPathname, locale: Locale) {
  return `${BASE_URL}${getLocalizedPath(pathname, locale)}`;
}

export function getAlternateLanguages(pathname: InternalPathname) {
  return Object.fromEntries(
    locales.map((locale) => [locale, getLocalizedUrl(pathname, locale)]),
  );
}

export function getDefaultLanguageUrl(pathname: InternalPathname) {
  return getLocalizedUrl(pathname, defaultLocale);
}

export function buildPageMetadata({
  locale,
  pathname,
  title,
  description,
  image = "/sources/leftnabytok.jpg",
}: {
  locale: Locale;
  pathname: InternalPathname;
  title: string;
  description: string;
  image?: string;
}): Metadata {
  const url = getLocalizedUrl(pathname, locale);
  const imageUrl = image.startsWith("http") ? image : `${BASE_URL}${image}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
      languages: getAlternateLanguages(pathname),
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: "PMP-Produkt",
      locale: OPEN_GRAPH_LOCALES[locale],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  };
}

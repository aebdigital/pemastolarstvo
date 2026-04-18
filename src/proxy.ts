import { NextRequest, NextResponse } from "next/server";
import {
  defaultLocale,
  locales,
  pathnames,
  type InternalPathname,
  type Locale,
} from "./i18n/routing";

const LOCALE_COOKIE_NAME = "NEXT_LOCALE";
const LOCALE_HEADER_NAME = "X-NEXT-INTL-LOCALE";
const REWRITE_MARKER_HEADER = "x-pema-route-rewrite";

type RouteMaps = {
  externalToInternal: Map<string, InternalPathname>;
  internalToExternal: Map<string, string>;
};

const routeMaps = buildRouteMaps();

function buildRouteMaps(): RouteMaps {
  const externalToInternal = new Map<string, InternalPathname>();
  const internalToExternal = new Map<string, string>();

  for (const [internalPathname, localizedPathname] of Object.entries(pathnames)) {
    for (const locale of locales) {
      const externalPathname =
        typeof localizedPathname === "string"
          ? localizedPathname
          : localizedPathname[locale];

      externalToInternal.set(
        getRouteKey(locale, externalPathname),
        internalPathname as InternalPathname
      );
      internalToExternal.set(
        getRouteKey(locale, internalPathname),
        externalPathname
      );
    }
  }

  return { externalToInternal, internalToExternal };
}

function getRouteKey(locale: Locale, pathname: string) {
  return `${locale}:${pathname}`;
}

function getLocaleFromPath(pathname: string): Locale | undefined {
  return locales.find((locale) => {
    const prefix = `/${locale}`;
    return pathname === prefix || pathname.startsWith(`${prefix}/`);
  });
}

function withoutLocalePrefix(pathname: string, locale: Locale) {
  const prefix = `/${locale}`;
  if (pathname === prefix) return "/";
  return pathname.slice(prefix.length) || "/";
}

function withLocalePrefix(locale: Locale, pathname: string) {
  return pathname === "/" ? `/${locale}` : `/${locale}${pathname}`;
}

function withLocaleHeaders(request: NextRequest, locale: Locale, rewritten = false) {
  const headers = new Headers(request.headers);
  headers.set(LOCALE_HEADER_NAME, locale);

  if (rewritten) {
    headers.set(REWRITE_MARKER_HEADER, "1");
  } else {
    headers.delete(REWRITE_MARKER_HEADER);
  }

  return headers;
}

function withLocaleCookie(response: NextResponse, locale: Locale) {
  response.cookies.set(LOCALE_COOKIE_NAME, locale, {
    path: "/",
    sameSite: "lax",
  });

  return response;
}

function redirectTo(request: NextRequest, locale: Locale, pathname: string) {
  const url = new URL(pathname, request.url);
  const response = NextResponse.redirect(url);
  return withLocaleCookie(response, locale);
}

function rewriteTo(request: NextRequest, locale: Locale, pathname: string) {
  const url = new URL(pathname, request.url);
  const response = NextResponse.rewrite(url, {
    request: {
      headers: withLocaleHeaders(request, locale, true),
    },
  });

  return withLocaleCookie(response, locale);
}

function continueWithLocale(request: NextRequest, locale: Locale) {
  const response = NextResponse.next({
    request: {
      headers: withLocaleHeaders(
        request,
        locale,
        request.headers.get(REWRITE_MARKER_HEADER) === "1"
      ),
    },
  });

  return withLocaleCookie(response, locale);
}

function resolveInternalPath(pathname: string) {
  for (const locale of locales) {
    const localizedMatch = routeMaps.externalToInternal.get(
      getRouteKey(locale, pathname)
    );

    if (localizedMatch) {
      return localizedMatch;
    }

    const internalMatch = routeMaps.internalToExternal.get(
      getRouteKey(locale, pathname)
    );

    if (internalMatch) {
      return pathname as InternalPathname;
    }
  }

  return undefined;
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return redirectTo(request, defaultLocale, `/${defaultLocale}`);
  }

  const locale = getLocaleFromPath(pathname);

  if (!locale) {
    const internalPathname = resolveInternalPath(pathname);

    if (internalPathname) {
      const defaultExternalPathname = routeMaps.internalToExternal.get(
        getRouteKey(defaultLocale, internalPathname)
      );

      if (defaultExternalPathname) {
        return redirectTo(
          request,
          defaultLocale,
          withLocalePrefix(defaultLocale, defaultExternalPathname)
        );
      }
    }

    return redirectTo(request, defaultLocale, `/${defaultLocale}${pathname}`);
  }

  const unprefixedPathname = withoutLocalePrefix(pathname, locale);
  const isRewrittenRequest = request.headers.get(REWRITE_MARKER_HEADER) === "1";

  const internalPathname = routeMaps.externalToInternal.get(
    getRouteKey(locale, unprefixedPathname)
  );

  if (internalPathname) {
    if (internalPathname !== unprefixedPathname) {
      return rewriteTo(
        request,
        locale,
        withLocalePrefix(locale, internalPathname)
      );
    }

    return continueWithLocale(request, locale);
  }

  const localizedExternalPathname = routeMaps.internalToExternal.get(
    getRouteKey(locale, unprefixedPathname)
  );

  if (
    localizedExternalPathname &&
    localizedExternalPathname !== unprefixedPathname &&
    !isRewrittenRequest
  ) {
    return redirectTo(
      request,
      locale,
      withLocalePrefix(locale, localizedExternalPathname)
    );
  }

  return continueWithLocale(request, locale);
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|sources|.*\\..*).*)"],
};

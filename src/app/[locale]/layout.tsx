import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import {
  locales,
  routing,
  type Locale,
} from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import MobileMenu from '@/components/layout/MobileMenu';
import CartSidebar from '@/components/configurator/CartSidebar';
import {
  buildPageMetadata,
  getAlternateLanguages,
  getDefaultLanguageUrl,
} from '@/lib/seo';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const t = await getTranslations({
    locale,
    namespace: 'metadata.shared',
  });

  return {
    ...buildPageMetadata({
      locale: locale as Locale,
      pathname: '/',
      title: t('defaultTitle'),
      description: t('defaultDescription'),
      image: '/sources/leftnabytok.jpg',
    }),
    title: {
      default: t('defaultTitle'),
      template: '%s | PMP-Produkt',
    },
    keywords: t.raw('keywords') as string[],
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const messages = await getMessages();
  const t = await getTranslations({
    locale,
    namespace: 'metadata.shared',
  });
  const languageAlternates = getAlternateLanguages('/');
  const defaultLanguageUrl = getDefaultLanguageUrl('/');

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {Object.entries(languageAlternates).map(([hrefLang, href]) => (
          <link
            key={hrefLang}
            rel="alternate"
            hrefLang={hrefLang}
            href={href}
          />
        ))}
        <link
          rel="alternate"
          hrefLang="x-default"
          href={defaultLanguageUrl}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'PMP-Produkt s.r.o.',
              alternateName: 'PeMa Stolárstvo',
              url: 'https://dvereastolarstvo.sk',
              logo: 'https://dvereastolarstvo.sk/image.svg',
              image: 'https://dvereastolarstvo.sk/sources/leftnabytok.jpg',
              description: t('structuredDataDescription'),
              telephone: ['+421948380618', '+421914225257'],
              email: ['pmpprodukt@gmail.com', 'pemastolarstvo@gmail.com'],
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Vyšná Jedľová 37',
                addressLocality: 'Svidník',
                postalCode: '089 01',
                addressCountry: 'SK',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 49.3058,
                longitude: 21.5708,
              },
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 49.3058,
                  longitude: 21.5708,
                },
                geoRadius: '100000',
              },
              sameAs: ['https://www.facebook.com/groups/808946886107207/'],
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                ],
                opens: '08:00',
                closes: '16:00',
              },
              priceRange: '€€',
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: t('structuredDoorOfferTitle'),
                    description: t('structuredDoorOfferDescription'),
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: t('structuredCarpentryOfferTitle'),
                    description: t('structuredCarpentryOfferDescription'),
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className="font-body text-dark antialiased">
        <NextIntlClientProvider messages={messages}>
          <MobileMenu />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartSidebar />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

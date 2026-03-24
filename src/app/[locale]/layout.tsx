import type { Metadata } from 'next';
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieBanner from '@/components/layout/CookieBanner';
import MobileMenu from '@/components/layout/MobileMenu';
import CartSidebar from '@/components/configurator/CartSidebar';

export const metadata: Metadata = {
  title: {
    default: 'PMP-Produkt | Interiérové dvere a stolárstvo na mieru | Svidník',
    template: '%s | PMP-Produkt',
  },
  description:
    'Interiérové dvere na mieru a stolárska výroba od PMP-Produkt. Kuchyne, vstavané skrine, nábytok na mieru. Showroom Svidník, východné Slovensko.',
  keywords: [
    'interiérové dvere',
    'dvere na mieru',
    'stolárstvo',
    'kuchyne na mieru',
    'vstavané skrine',
    'nábytok na mieru',
    'PMP-Produkt',
    'PeMa Stolárstvo',
    'Svidník',
  ],
  openGraph: {
    type: 'website',
    locale: 'sk_SK',
    siteName: 'PMP-Produkt',
  },
};

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

  return (
    <html lang={locale}>
      <head>
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;500;600;700;800;900&family=Open+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
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
              description:
                'Interiérové dvere na mieru a stolárska výroba. Kuchyne, vstavané skrine, nábytok na mieru.',
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
              sameAs: [
                'https://www.facebook.com/groups/808946886107207/',
              ],
              openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '16:00',
              },
              priceRange: '€€',
              makesOffer: [
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Interiérové dvere na mieru',
                    description: 'Výroba interiérových dverí na mieru podľa vašich rozmerov a požiadaviek.',
                  },
                },
                {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Stolárstvo a nábytok na mieru',
                    description: 'Kuchyne, vstavané skrine, nábytok a kompletné interiéry na mieru.',
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

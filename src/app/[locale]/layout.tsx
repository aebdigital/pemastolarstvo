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
    default: 'PMP-Produkt | Dvere a Stolárstvo',
    template: '%s | PMP-Produkt',
  },
  description:
    'Interiérové dvere na mieru a stolárska výroba. Kvalitné slovenské dvere, kuchyne, postele a ďalší nábytok na zákazku.',
  keywords: [
    'interiérové dvere',
    'dvere na mieru',
    'stolárstvo',
    'kuchyne na mieru',
    'slovenské dvere',
    'PMP-Produkt',
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

import SplitHero from '@/components/home/SplitHero';
import HomeHeader from '@/components/layout/HomeHeader';
import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.home' });

  return buildPageMetadata({
    locale,
    pathname: '/',
    title: t('title'),
    description: t('description'),
    image: '/sources/leftnabytok.jpg',
  });
}

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <SplitHero />
    </>
  );
}

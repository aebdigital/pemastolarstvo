import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import type { Locale } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import TypizovaneDvereClient from './TypizovaneDvereClient';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.doors.standard' });

  return buildPageMetadata({
    locale,
    pathname: '/dvere/typizovane-dvere',
    title: t('title'),
    description: t('description'),
    image: '/sources/doorhero1.jpg',
  });
}

export default function TypizovaneDverePage() {
  return <TypizovaneDvereClient />;
}

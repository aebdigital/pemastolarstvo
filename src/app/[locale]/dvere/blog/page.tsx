import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/ui/PageHero';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
  Locale,
  {
    empty: string;
    intro: string;
    subtitle: string;
    title: string;
  }
> = {
  sk: {
    empty: 'Čoskoro tu nájdete nové články.',
    intro:
      'Pripravujeme pre vás zaujímavé články o interiérových dverách, trendoch v bývaní a stolárskej výrobe. Sledujte nás!',
    subtitle: 'Novinky a články',
    title: 'BLOG',
  },
  en: {
    empty: 'New articles will appear here soon.',
    intro:
      'We are preparing interesting articles about interior doors, living trends, and joinery production. Stay tuned.',
    subtitle: 'News and articles',
    title: 'BLOG',
  },
  de: {
    empty: 'Schon bald finden Sie hier neue Artikel.',
    intro:
      'Wir bereiten interessante Artikel über Innentüren, Wohntrends und Tischlerproduktion für Sie vor. Bleiben Sie dran.',
    subtitle: 'Neuigkeiten und Artikel',
    title: 'BLOG',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.doors.blog' });

  return buildPageMetadata({
    locale,
    pathname: '/dvere/blog',
    title: t('title'),
    description: t('description'),
    image: '/sources/doorhero3.jpg',
  });
}

export default async function BlogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];

  return (
    <main>
      <PageHero title={copy.title} subtitle={copy.subtitle} image="/sources/doorhero3.jpg" />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-medium mb-12 max-w-2xl mx-auto">
            {copy.intro}
          </p>
          <div className="bg-light rounded-lg p-12">
            <p className="text-gray-medium text-lg">
              {copy.empty}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

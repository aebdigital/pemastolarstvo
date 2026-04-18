import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PortfolioGrid from '@/components/gallery/PortfolioGrid';
import PageHero from '@/components/ui/PageHero';
import doorGallery from '@/data/door-gallery.json';
import ContactFormSection from '@/components/forms/ContactFormSection';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'metadata.doors.references',
  });

  return buildPageMetadata({
    locale,
    pathname: '/dvere/referencie',
    title: t('title'),
    description: t('description'),
    image: '/sources/doorhero2.jpg',
  });
}

export default async function DvereReferenciePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const tReferences = await getTranslations({
    locale,
    namespace: 'references',
  });

  return (
    <main>
      <PageHero
        title={tReferences('doorsTitle')}
        subtitle={tReferences('doorsSubtitle')}
        image="/sources/doorhero2.jpg"
      />

      {/* Intro Text */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-black text-dark uppercase tracking-widest leading-tight">
            {tReferences('doorsSubtitle')}
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section pb-32 bg-white">
        <div className="gallery-container">
          <PortfolioGrid images={doorGallery.dvere} variant="dvere" />
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}

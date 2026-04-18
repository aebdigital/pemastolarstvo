import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/ui/PageHero';
import ContactFormSection from '@/components/forms/ContactFormSection';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
  Locale,
  {
    catalogLabel: string;
    downloadLabel: string;
    iframeTitle: string;
    intro: string;
    title: string;
    videoGuides: string;
  }
> = {
  sk: {
    catalogLabel: 'Katalóg interiérových dverí',
    downloadLabel: 'NA STIAHNUTIE',
    iframeTitle: 'Návod na zameranie stavebného otvoru',
    intro: 'Inštruktážne video, ktoré vám poradí, ako správne zamerať a pripraviť stavebný otvor.',
    title: 'AKO ZAMERAŤ?',
    videoGuides: 'VIDEONÁVODY',
  },
  en: {
    catalogLabel: 'Interior door catalogue',
    downloadLabel: 'DOWNLOADS',
    iframeTitle: 'Guide to measuring the rough opening',
    intro: 'An instructional video that shows you how to properly measure and prepare the rough opening.',
    title: 'HOW TO MEASURE?',
    videoGuides: 'VIDEO GUIDES',
  },
  de: {
    catalogLabel: 'Katalog für Innentüren',
    downloadLabel: 'DOWNLOADS',
    iframeTitle: 'Anleitung zum Messen der Rohbauöffnung',
    intro: 'Ein Anleitungsvideo, das zeigt, wie Sie die Rohbauöffnung richtig messen und vorbereiten.',
    title: 'WIE MISST MAN?',
    videoGuides: 'VIDEOANLEITUNGEN',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.doors.advice' });

  return buildPageMetadata({
    locale,
    pathname: '/dvere/poradna',
    title: t('title'),
    description: t('description'),
    image: '/sources/doorhero1.jpg',
  });
}

export default async function PoradnaPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];

  return (
    <main>
      <PageHero title={copy.title} image="/sources/doorhero1.jpg" />

      {/* Video Guide Section */}
      <section className="video-guide-section">
        <div className="video-content">
          <div className="video-text">
            <h2 className="video-section-title">{copy.videoGuides}</h2>
            <div className="video-description">
              <p>{copy.intro}</p>
            </div>
          </div>

          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/sptWWXyCj1o"
              title={copy.iframeTitle}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Resources */}
        <div className="resources-section">
          <h3 className="resources-title">{copy.downloadLabel}</h3>
          <a href="/sources/katalog-typizovane.pdf" className="download-link" target="_blank" rel="noopener noreferrer">
            {copy.catalogLabel}
          </a>
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}

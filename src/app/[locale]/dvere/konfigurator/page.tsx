import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import Configurator from '@/components/configurator/Configurator';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
  Locale,
  {
    brand: string;
    subtitle: string;
    titleAccent: string;
    titleMain: string;
  }
> = {
  sk: {
    brand: 'PMP-Produkt',
    subtitle: 'Navrhnite si svoje vlastné dvere na mieru v niekoľkých jednoduchých krokoch',
    titleAccent: 'Dverí',
    titleMain: 'Konfigurátor',
  },
  en: {
    brand: 'PMP-Produkt',
    subtitle: 'Design your own made-to-measure door in just a few simple steps',
    titleAccent: 'Doors',
    titleMain: 'Configurator',
  },
  de: {
    brand: 'PMP-Produkt',
    subtitle: 'Gestalten Sie Ihre eigene Tür nach Maß in nur wenigen einfachen Schritten',
    titleAccent: 'Türen',
    titleMain: 'Konfigurator',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale,
    namespace: 'metadata.doors.configurator',
  });

  return buildPageMetadata({
    locale,
    pathname: '/dvere/konfigurator',
    title: t('title'),
    description: t('description'),
    image: '/sources/doorhero1.jpg',
  });
}

export default async function KonfiguratorPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];

  return (
    <main className="min-h-screen bg-white">
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden bg-dark">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[60%] bg-gold rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[30%] h-[50%] bg-gold rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10 text-center px-6">
          <div className="flex flex-col items-center gap-4 mb-6">
            <span className="text-gold font-black uppercase tracking-[0.4em] text-xs">{copy.brand}</span>
            <div className="h-0.5 w-12 bg-gold/50" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider leading-none">
            {copy.titleMain} <span className="text-gold">{copy.titleAccent}</span>
          </h1>
          <p className="text-white/50 mt-8 text-sm md:text-lg font-medium leading-relaxed uppercase tracking-wider block max-w-3xl mx-auto">
            {copy.subtitle}
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 -mt-20 relative z-20 pb-20">
        <Configurator />
      </div>
    </main>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import PageHero from '@/components/ui/PageHero';
import ContactFormSection from '@/components/forms/ContactFormSection';
import { Link } from '@/i18n/routing';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
  Locale,
  {
    aboutParagraphs: string[];
    aboutTitle: string;
    custom: {
      alt: string;
      bullets: string[];
      title: string;
    };
    galleryButton: string;
    heroSubtitle: string;
    heroTitle: string;
    referencesTitle: string;
    standard: {
      alt: string;
      bullets: string[];
      title: string;
    };
    workButton: string;
    workParagraphs: string[];
    workTitle: string;
  }
> = {
  sk: {
    aboutParagraphs: [
      'Sme rodinná firma, ktorá dlhé roky pôsobila v zahraničí ako je Slovinsko, Česko, Holandsko, Malorka, Anglicko.',
      'Po bohatých skúsenostiach, ktoré sme nadobudli v zahraničí, sme sa rozhodli usadiť doma a vytvoriť malú rodinnú stolársku firmu špecializujúcu sa na interiérové dvere.',
      'Našou úlohou je aby boli zákazníci vždy spokojní. Samozrejme dbáme na kvalitu a presnosť, sme ochotní pomôcť zákazníkom s výberom farieb, materiálu alebo inými špecifickými požiadavkami.',
      'Tešíme sa na spoluprácu s vami.',
    ],
    aboutTitle: 'O NÁS',
    custom: {
      alt: 'Dvere na mieru',
      bullets: [
        'jedinečné dvere presne podľa vašich požiadaviek',
        'atypické rozmery a individuálny dizajn',
        'vlastný výber materiálov a povrchov',
        'komplexné riešenie od návrhu po montáž',
      ],
      title: 'Dvere na mieru',
    },
    galleryButton: 'Galéria referencií',
    heroSubtitle: 'Kvalitné dvere na mieru a typizované riešenia pre váš domov',
    heroTitle: 'INTERIÉROVÉ DVERE',
    referencesTitle: 'Referencie',
    standard: {
      alt: 'Typizované dvere',
      bullets: [
        'štandardné rozmery a dizajny',
        'rýchla dodávka',
        'kvalitné materiály za výhodnú cenu',
        'široký výber farieb a povrchov',
      ],
      title: 'Typizované dvere',
    },
    workButton: 'Konfigurátor',
    workParagraphs: [
      'Špecializujeme sa na výrobu interiérových dverí na mieru. Ak sa Vám naša práca páči, neváhajte nás kontaktovať.',
      'V rámci prvého kontaktu si radi vypočujeme Vašu predstavu, požiadavky a prípadné otázky spojené s realizáciou projektu. Vďaka naším dlhoročným skúsenostiam vieme pri výbere materiálu a výsledného dizajnu poradiť.',
      'Na základe úvodnej konzultácie pristúpime k návrhu (vizualizácii), zameraniu a cenovej ponuke pre výsledný produkt.',
      'V poslednej fáze upresníme termín ukončenia projektu, dopravu a montáž.',
    ],
    workTitle: 'AKO PRACUJEME',
  },
  en: {
    aboutParagraphs: [
      'We are a family business that spent many years working abroad in Slovenia, the Czech Republic, the Netherlands, Mallorca, and England.',
      'After gaining extensive experience abroad, we decided to settle back home and build a small family joinery company focused on interior doors.',
      'Our goal is to keep our customers satisfied at all times. We place great emphasis on quality and precision, and we are happy to help with the choice of colours, materials, or other specific requirements.',
      'We look forward to working with you.',
    ],
    aboutTitle: 'ABOUT US',
    custom: {
      alt: 'Custom doors',
      bullets: [
        'unique doors tailored exactly to your requirements',
        'custom dimensions and individual design',
        'your own choice of materials and finishes',
        'complete service from design to installation',
      ],
      title: 'Custom doors',
    },
    galleryButton: 'Reference gallery',
    heroSubtitle: 'Quality custom doors and standard solutions for your home',
    heroTitle: 'INTERIOR DOORS',
    referencesTitle: 'References',
    standard: {
      alt: 'Standard doors',
      bullets: [
        'standard sizes and designs',
        'fast delivery',
        'quality materials at a fair price',
        'wide range of colours and finishes',
      ],
      title: 'Standard doors',
    },
    workButton: 'Configurator',
    workParagraphs: [
      'We specialise in made-to-measure interior doors. If you like our work, do not hesitate to contact us.',
      'During the first consultation, we are happy to hear your ideas, requirements, and any questions connected with the project. Thanks to our many years of experience, we can advise on materials and the final design.',
      'Based on the initial consultation, we move on to the proposal (visualisation), on-site measuring, and a price quote for the final product.',
      'In the final phase, we confirm the completion date, delivery, and installation.',
    ],
    workTitle: 'HOW WE WORK',
  },
  de: {
    aboutParagraphs: [
      'Wir sind ein Familienunternehmen, das viele Jahre im Ausland tätig war, unter anderem in Slowenien, Tschechien, den Niederlanden, auf Mallorca und in England.',
      'Nach diesen umfangreichen Auslandserfahrungen haben wir uns entschieden, wieder zuhause sesshaft zu werden und eine kleine familiäre Tischlerei mit Schwerpunkt Innentüren aufzubauen.',
      'Unser Ziel ist es, dass unsere Kunden immer zufrieden sind. Selbstverständlich legen wir Wert auf Qualität und Präzision und helfen gerne bei der Auswahl von Farben, Materialien oder anderen speziellen Anforderungen.',
      'Wir freuen uns auf die Zusammenarbeit mit Ihnen.',
    ],
    aboutTitle: 'ÜBER UNS',
    custom: {
      alt: 'Türen nach Maß',
      bullets: [
        'einzigartige Türen genau nach Ihren Anforderungen',
        'Sondermaße und individuelles Design',
        'eigene Auswahl an Materialien und Oberflächen',
        'Komplettlösung von der Planung bis zur Montage',
      ],
      title: 'Türen nach Maß',
    },
    galleryButton: 'Referenzgalerie',
    heroSubtitle: 'Hochwertige Türen nach Maß und Standardlösungen für Ihr Zuhause',
    heroTitle: 'INNENTÜREN',
    referencesTitle: 'Referenzen',
    standard: {
      alt: 'Standardtüren',
      bullets: [
        'Standardmaße und Designs',
        'schnelle Lieferung',
        'hochwertige Materialien zu einem fairen Preis',
        'große Auswahl an Farben und Oberflächen',
      ],
      title: 'Standardtüren',
    },
    workButton: 'Konfigurator',
    workParagraphs: [
      'Wir sind auf maßgefertigte Innentüren spezialisiert. Wenn Ihnen unsere Arbeit gefällt, zögern Sie nicht, uns zu kontaktieren.',
      'Beim ersten Kontakt hören wir uns gerne Ihre Vorstellungen, Anforderungen und eventuelle Fragen zum Projekt an. Dank unserer langjährigen Erfahrung können wir bei Materialwahl und finalem Design beraten.',
      'Auf Basis der ersten Beratung erstellen wir einen Vorschlag (Visualisierung), nehmen Maß und bereiten ein Preisangebot für das Endprodukt vor.',
      'In der letzten Phase legen wir den Fertigstellungstermin, die Lieferung und die Montage fest.',
    ],
    workTitle: 'SO ARBEITEN WIR',
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata.doors.about' });

  return buildPageMetadata({
    locale,
    pathname: '/dvere/o-nas',
    title: t('title'),
    description: t('description'),
    image: '/sources/doorhero1.jpg',
  });
}

export default async function DvereONasPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = pageCopy[locale];

  return (
    <>
      <PageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} image="/sources/doorhero1.jpg" />

      {/* Door Options Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Typizované dvere */}
            <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 p-10 flex flex-col gap-10">
              <div className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/sources/interierove/type.webp"
                  alt={copy.standard.alt}
                  fill
                  className="object-cover transition-premium group-hover:scale-105"
                />
              </div>
              <div className="w-full">
                <h3 className="font-heading text-2xl font-black text-dark mb-4 uppercase">{copy.standard.title}</h3>
                <ul className="space-y-3">
                  {copy.standard.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-medium leading-tight">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Dvere na mieru */}
            <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 p-10 flex flex-col gap-10">
              <div className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/sources/referencie/dvere/1.jpg"
                  alt={copy.custom.alt}
                  fill
                  className="object-cover transition-premium group-hover:scale-105"
                />
              </div>
              <div className="w-full">
                <h3 className="font-heading text-2xl font-black text-dark mb-4 uppercase">{copy.custom.title}</h3>
                <ul className="space-y-3">
                  {copy.custom.bullets.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-medium leading-tight">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - O NÁS & AKO PRACUJEME */}
      <section className="relative py-32 overflow-hidden bg-dark text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/sources/homepage/vynimocny.webp"
            alt=""
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-20">
            <div>
              <h2 className="font-heading text-4xl font-black mb-10 border-l-4 border-gold pl-8 uppercase tracking-widest">
                {copy.aboutTitle}
              </h2>
              <div className="space-y-8 text-white/80 text-lg leading-relaxed font-light">
                {copy.aboutParagraphs.map((paragraph, index) => (
                  <p key={paragraph} className={index === copy.aboutParagraphs.length - 1 ? 'font-normal text-white text-xl' : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="font-heading text-4xl font-black mb-10 border-l-4 border-gold pl-8 uppercase tracking-widest">
                {copy.workTitle}
              </h2>
              <div className="space-y-8 text-white/80 text-lg leading-relaxed font-light">
                {copy.workParagraphs.map((paragraph) => (
                  <p key={paragraph}>
                    {paragraph}
                  </p>
                ))}
                <div className="pt-10">
                  <Link
                    href="/dvere/konfigurator"
                    className="btn-premium bg-gold text-dark"
                  >
                    <i className="fas fa-cogs mr-3" />
                    {copy.workButton}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inspirations Gallery section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-black text-dark uppercase tracking-[0.2em] mb-4">{copy.referencesTitle}</h2>
            <div className="w-20 h-1.5 bg-gold mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 p-0">
            {[1, 5, 12, 23, 35].map((id) => (
              <div key={id} className="relative aspect-[2/3] overflow-hidden group">
                <Image
                  src={`/sources/referencie/dvere/${id}.jpg`}
                  alt={`${copy.referencesTitle} ${id}`}
                  fill
                  className="object-cover transition-premium group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-premium" />
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/dvere/referencie"
              className="px-10 py-5 bg-dark text-white rounded-2xl font-black uppercase tracking-widest hover:bg-gold hover:text-dark transition-premium shadow-xl inline-block"
            >
              {copy.galleryButton}
              <i className="fas fa-arrow-right ml-3 text-xs" />
            </Link>
          </div>
        </div>
      </section>

      <ContactFormSection />
    </>
  );
}

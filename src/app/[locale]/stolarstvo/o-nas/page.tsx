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
        cta: string;
        galleryButton: string;
        heroSubtitle: string;
        heroTitle: string;
        inspirationsTitle: string;
        services: {
            customFurniture: {
                alt: string;
                items: string[];
                title: string;
            };
            interiorTurnkey: {
                alt: string;
                items: string[];
                title: string;
            };
            kitchenAppliances: {
                alt: string;
                blancoCatalog: string;
                items: string[];
                title: string;
                whirlpoolCatalog: string;
            };
        };
        workParagraphs: string[];
        workTitle: string;
    }
> = {
    sk: {
        aboutParagraphs: [
            'Sme rodinná firma, ktorá dlhé roky pôsobila v zahraničí ako je Slovinsko, Česko, Holandsko, Malorka, Anglicko.',
            'Po bohatých skúsenostiach, ktoré sme nadobudli v zahraničí, sme sa rozhodli usadiť doma a vytvoriť malú rodinnú stolársku firmu.',
            'Našou úlohou je aby boli zákazníci vždy spokojní. Samozrejme dbáme na kvalitu a presnosť, sme ochotní pomôcť zákazníkom s výberom farieb, materiálu alebo inými špecifickými požiadavkami.',
            'Tešíme sa na spoluprácu s vami.',
        ],
        aboutTitle: 'O NÁS',
        cta: 'Mám záujem o ponuku',
        galleryButton: 'Všetky referencie →',
        heroSubtitle: 'Nábytok na mieru, kuchyne, skrine a kompletné stolárske práce',
        heroTitle: 'STOLÁRSTVO',
        inspirationsTitle: 'Inšpirácie',
        services: {
            customFurniture: {
                alt: 'Nábytok na mieru',
                items: [
                    'kuchynské linky',
                    'detské izby, obývacie izby',
                    'kúpeľňové zostavy',
                    'postele',
                    'kancelárie',
                    'schody',
                    'stoly',
                    'lamelové steny a iné',
                ],
                title: 'Nábytok na mieru',
            },
            interiorTurnkey: {
                alt: 'Interiér na kľúč',
                items: [
                    'máš dom alebo byt a chceš zariadiť interiér od podlahy po strop ?',
                    'chceš sa baviť len s jedným človek ohľadom rekonštrukcie bytu alebo domu ?',
                    'potrebuješ zabezpečiť prestavbu bytu alebo domu ?',
                ],
                title: 'Interiér na kľúč',
            },
            kitchenAppliances: {
                alt: 'Kuchynská linka + spotrebiče',
                blancoCatalog: 'Katalóg Blanco umývadla a batérie',
                items: [
                    'uľahči si objednávku spotrebičov a doplnkov k tvojej kuchynskej linke',
                    'bezkonkurenčné ceny spotrebičov (Whirlpool a Beko)',
                    'bezkonkurenčné ceny umývadiel a batérii Blanco',
                ],
                title: 'Kuchynská linka + spotrebiče',
                whirlpoolCatalog: 'Katalóg Whirlpool spotrebiče',
            },
        },
        workParagraphs: [
            'Špecializujeme sa na výrobu nábytku a stavebno-stolárskych produktov na mieru. Ak sa Vám naša práca páči, neváhajte nás kontaktovať.',
            'V rámci prvého kontaktu si radi vypočujeme Vašu predstavu, požiadavky a prípadné otázky spojené s realizáciou projektu. Vďaka naším dlhoročným skúsenostiam vieme pri výbere materiálu a výsledného dizajnu poradiť.',
            'Na základe úvodnej konzultácie pristúpime k návrhu (vizualizácii), zameraniu a cenovej ponuke pre výsledný produkt.',
        ],
        workTitle: 'AKO PRACUJEME',
    },
    en: {
        aboutParagraphs: [
            'We are a family business that spent many years working abroad in Slovenia, the Czech Republic, the Netherlands, Mallorca, and England.',
            'After gaining extensive experience abroad, we decided to settle back home and build a small family joinery company.',
            'Our goal is to keep our customers satisfied at all times. We place great emphasis on quality and precision, and we are happy to help with the choice of colours, materials, or other specific requirements.',
            'We look forward to working with you.',
        ],
        aboutTitle: 'ABOUT US',
        cta: 'I am interested in an offer',
        galleryButton: 'All references →',
        heroSubtitle: 'Custom furniture, kitchens, wardrobes, and complete joinery services',
        heroTitle: 'JOINERY',
        inspirationsTitle: 'Inspiration',
        services: {
            customFurniture: {
                alt: 'Custom furniture',
                items: [
                    'kitchen units',
                    'children’s rooms and living rooms',
                    'bathroom sets',
                    'beds',
                    'offices',
                    'stairs',
                    'tables',
                    'slatted walls and more',
                ],
                title: 'Custom furniture',
            },
            interiorTurnkey: {
                alt: 'Turnkey interior',
                items: [
                    'do you have a house or apartment and want to furnish the interior from floor to ceiling?',
                    'do you want to communicate with just one person regarding the renovation of your apartment or house?',
                    'do you need to arrange a full apartment or house rebuild?',
                ],
                title: 'Turnkey interior',
            },
            kitchenAppliances: {
                alt: 'Kitchen + appliances',
                blancoCatalog: 'Blanco sinks and taps catalogue',
                items: [
                    'make ordering appliances and accessories for your kitchen easier',
                    'highly competitive appliance prices (Whirlpool and Beko)',
                    'highly competitive prices for Blanco sinks and taps',
                ],
                title: 'Kitchen + appliances',
                whirlpoolCatalog: 'Whirlpool appliance catalogue',
            },
        },
        workParagraphs: [
            'We specialise in the production of custom furniture and joinery products for construction and interiors. If you like our work, feel free to contact us.',
            'During the first consultation, we are happy to hear your ideas, requirements, and any questions connected with the project. Thanks to our many years of experience, we can advise on materials and the final design.',
            'Based on the initial consultation, we move on to the proposal (visualisation), on-site measuring, and a price quote for the final product.',
        ],
        workTitle: 'HOW WE WORK',
    },
    de: {
        aboutParagraphs: [
            'Wir sind ein Familienunternehmen, das viele Jahre im Ausland tätig war, unter anderem in Slowenien, Tschechien, den Niederlanden, auf Mallorca und in England.',
            'Nach diesen umfangreichen Auslandserfahrungen haben wir uns entschieden, wieder zuhause sesshaft zu werden und eine kleine familiäre Tischlerei aufzubauen.',
            'Unser Ziel ist es, dass unsere Kunden immer zufrieden sind. Selbstverständlich legen wir Wert auf Qualität und Präzision und helfen gerne bei der Auswahl von Farben, Materialien oder anderen speziellen Anforderungen.',
            'Wir freuen uns auf die Zusammenarbeit mit Ihnen.',
        ],
        aboutTitle: 'ÜBER UNS',
        cta: 'Ich interessiere mich für ein Angebot',
        galleryButton: 'Alle Referenzen →',
        heroSubtitle: 'Möbel nach Maß, Küchen, Schränke und komplette Tischlerarbeiten',
        heroTitle: 'TISCHLEREI',
        inspirationsTitle: 'Inspirationen',
        services: {
            customFurniture: {
                alt: 'Möbel nach Maß',
                items: [
                    'Küchen',
                    'Kinderzimmer und Wohnzimmer',
                    'Badezimmermöbel',
                    'Betten',
                    'Büros',
                    'Treppen',
                    'Tische',
                    'Lamellenwände und mehr',
                ],
                title: 'Möbel nach Maß',
            },
            interiorTurnkey: {
                alt: 'Schlüsselfertiges Interieur',
                items: [
                    'haben Sie ein Haus oder eine Wohnung und möchten den Innenraum von Boden bis Decke einrichten?',
                    'möchten Sie bei der Renovierung Ihres Hauses oder Ihrer Wohnung nur mit einer Person sprechen?',
                    'müssen Sie einen kompletten Umbau des Hauses oder der Wohnung organisieren?',
                ],
                title: 'Schlüsselfertiges Interieur',
            },
            kitchenAppliances: {
                alt: 'Küche + Geräte',
                blancoCatalog: 'Blanco Katalog für Spülen und Armaturen',
                items: [
                    'erleichtern Sie sich die Bestellung von Geräten und Zubehör für Ihre Küche',
                    'sehr attraktive Preise für Geräte (Whirlpool und Beko)',
                    'sehr attraktive Preise für Blanco-Spülen und Armaturen',
                ],
                title: 'Küche + Geräte',
                whirlpoolCatalog: 'Whirlpool Gerätekatalog',
            },
        },
        workParagraphs: [
            'Wir sind auf die Herstellung von Möbeln und baubezogenen Tischlerprodukten nach Maß spezialisiert. Wenn Ihnen unsere Arbeit gefällt, kontaktieren Sie uns gerne.',
            'Beim ersten Kontakt hören wir uns gerne Ihre Vorstellungen, Anforderungen und eventuelle Fragen zum Projekt an. Dank unserer langjährigen Erfahrung können wir bei der Materialwahl und beim finalen Design beraten.',
            'Auf Basis der ersten Beratung erstellen wir einen Vorschlag (Visualisierung), nehmen Maß und bereiten ein Preisangebot für das Endprodukt vor.',
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
    const t = await getTranslations({
        locale,
        namespace: 'metadata.carpentry.about',
    });

    return buildPageMetadata({
        locale,
        pathname: '/stolarstvo/o-nas',
        title: t('title'),
        description: t('description'),
        image: '/sources/leftnabytok.jpg',
    });
}

export default async function StolarstvoONasPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const copy = pageCopy[locale];

    return (
        <>
            <PageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} image="/sources/leftnabytok.jpg" />

            {/* Services Grid Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Nábytok na mieru */}
                        <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/sources/nabytok.jpg"
                                    alt={copy.services.customFurniture.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-premium" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-heading text-2xl font-black text-dark mb-6 tracking-wider">{copy.services.customFurniture.title}</h3>
                                <ul className="space-y-3">
                                    {copy.services.customFurniture.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-medium font-medium leading-tight">
                                            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                                            <span className="tracking-tight">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Kuchynská linka + spotrebiče */}
                        <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/sources/spotrebice.jpg"
                                    alt={copy.services.kitchenAppliances.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-premium" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-heading text-2xl font-black text-dark mb-4 uppercase tracking-wider">{copy.services.kitchenAppliances.title}</h3>
                                <ul className="space-y-3 mb-8">
                                    {copy.services.kitchenAppliances.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-medium font-medium leading-tight">
                                            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="space-y-3">
                                    <a
                                        href="https://www.whirlpool.sk/static_assets/pdf/SK/vstavane-spotrebice-whirlpool-pre-kuchynske-studia-2024.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-light rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-dark hover:bg-gold transition-premium"
                                    >
                                        <i className="fas fa-file-pdf text-lg text-gold group-hover:text-dark transition-colors" />
                                        {copy.services.kitchenAppliances.whirlpoolCatalog}
                                    </a>
                                    <a
                                        href="https://www.drezyblanco.sk/wp-content/uploads/2025/07/ankos-2025_2_compressed.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-light rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-dark hover:bg-gold transition-premium"
                                    >
                                        <i className="fas fa-file-pdf text-lg text-gold group-hover:text-dark transition-colors" />
                                        {copy.services.kitchenAppliances.blancoCatalog}
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Interiér na kľúč */}
                        <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/sources/kluc.jpg"
                                    alt={copy.services.interiorTurnkey.alt}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-premium" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-heading text-2xl font-black text-dark mb-6 uppercase tracking-wider">{copy.services.interiorTurnkey.title}</h3>
                                <ul className="space-y-6">
                                    {copy.services.interiorTurnkey.items.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-medium font-medium leading-tight">
                                            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Information Section - O NÁS & AKO PRACUJEME */}
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
                                        href="/stolarstvo/kontakt"
                                        className="btn-premium bg-gold text-dark"
                                    >
                                        {copy.cta}
                                        <i className="fas fa-arrow-right ml-3" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Inspirations Gallery section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="font-heading text-3xl font-black text-dark uppercase tracking-widest">{copy.inspirationsTitle}</h2>
                        <Link href="/stolarstvo/referencie" className="text-gold font-bold hover:underline">{copy.galleryButton}</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[
                            "/sources/referencie/kuchyne/1.jpg",
                            "/sources/referencie/stoly/stol-dreveny.jpg",
                            "/sources/referencie/obyvacie izby/1.jpg",
                            "/sources/referencie/schodiska/schodisko.jpg",
                            "/sources/referencie/vstavane skrine/1.jpg",
                            "/sources/referencie/kuchyne/10.jpg"
                        ].map((src, idx) => (
                            <div key={idx} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={src}
                                    alt={`${copy.inspirationsTitle} ${idx + 1}`}
                                    fill
                                    className="object-cover transition-premium group-hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ContactFormSection />
        </>
    );
}

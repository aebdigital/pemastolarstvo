import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import PageHero from '@/components/ui/PageHero';
import ContactFormSection from '@/components/forms/ContactFormSection';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
    Locale,
    {
        badExample: {
            items: string[];
            title: string;
        };
        button: string;
        features: Array<{
            number: string;
            text: string;
            title: string;
        }>;
        galleryAltPrefix: string;
        galleryTitle: string;
        goodExample: {
            items: string[];
            title: string;
        };
        heroSubtitle: string;
        heroTitle: string;
        introBody: string;
        introTitle: string;
        reasonsTitle: string;
    }
> = {
    sk: {
        badExample: {
            items: [
                'polky vŕtané priamo do stien',
                'bez vlastných korpusov — nižšia pevnosť',
                'koľajnička na podlahe — zanáša sa prachom',
                'veci v priamom kontakte so stenou',
                'problémy s nerovnosťami podlahy',
            ],
            title: 'Regál — takto nestaviame',
        },
        button: 'Viac realizácií',
        features: [
            {
                number: '1',
                title: 'Pevnosť',
                text: 'Každá časť skrine má vlastný korpus DTDL 18 mm (vlastné dno, vlastný vrch, 2x bok, sololit) — skriňa má tak väčšiu pevnosť a nehrozí, aby sa časom prehli dosky a spôsobili tak problémy pri vysúvaní šuplíkov alebo vypadávanie políčok. Žiadne vŕtanie do stien a podlahy, žiadne elka.',
            },
            {
                number: '2',
                title: 'Nožičky',
                text: 'Skriňa je na nožkách cca 10 cm od zeme — predchádzame tak nerovnosti podláh. Zároveň keďže koľajnička nie je položená na zemi ale priamo na korpuse, tak nedochádza k jej zanášaniu prachom a obaľovaniu koliesok nečistotami, ktoré neskôr spôsobujú problém pri otváraní dverí.',
            },
            {
                number: '3',
                title: 'Sololit',
                text: 'V každom korpuse sa vzadu nachádza sololit (vaša skriňa tak tvorí samostatný celok) — nedochádza tak k styku vašich vecí so stenou, netvoria sa tam pavučiny, nevidíte možné nerovnosti na stene a pod.',
            },
            {
                number: '4',
                title: '2 mm ABS hrany',
                text: 'Pri ohranení používame výhradne len ABS 2 mm. Hrany korpusov sú tak odolné voči úderom. Hrany je možné nakombinovať podľa vlastného uváženia a napr. zladiť aj s farbou dverí na skrini.',
            },
            {
                number: '5',
                title: 'Madlá a vedenie',
                text: 'Madlá, horné a spodné vedenie rôznych farieb — vždy podľa vášho výberu.',
            },
            {
                number: '6',
                title: 'Výsuvy Blum',
                text: 'Výsuv je robený z DTDL 18, dno 10 (zn. Blum) — prémiovej kvality pre bezproblémové používanie na dlhé roky.',
            },
            {
                number: '7',
                title: 'Zrkadlo na dverách',
                text: 'Ak aj zrkadlo na dverách — to je lepené na DTDL 18, je tak na pevnom podklade a nehrozí jeho rozsypaniu v prípade rozbitia.',
            },
        ],
        galleryAltPrefix: 'Realizácia',
        galleryTitle: 'Naše realizácie',
        goodExample: {
            items: [
                'vlastné korpusy DTDL 18 mm — maximálna pevnosť',
                'na nožkách 10 cm od zeme — žiadne nerovnosti',
                'koľajnička na korpuse — nezanáša sa prachom',
                'sololit vzadu — veci sa nedotýkajú steny',
                'ABS hrany 2 mm — odolné voči úderom',
                'výsuvy Blum — prémiová kvalita',
            ],
            title: 'Vstavaná skriňa od PeMa Stolárstvo',
        },
        heroSubtitle: 'Skriňa pre tých, ktorí hľadajú kvalitu, nie kompromisy',
        heroTitle: 'VSTAVANÉ SKRINE NA MIERU',
        introBody: 'Vstavaná skriňa od PeMa Stolárstvo nie je len regál s posuvnými dverami. Každá naša skriňa je postavená z vlastných korpusov — tak, ako má byť. Pozrite sa, prečo je to dôležité.',
        introTitle: 'V čom sa líšime?',
        reasonsTitle: '7 dôvodov, prečo si vybrať naše skrine',
    },
    en: {
        badExample: {
            items: [
                'shelves drilled directly into the walls',
                'no dedicated carcasses — lower rigidity',
                'track on the floor — collects dust',
                'stored items in direct contact with the wall',
                'issues caused by uneven floors',
            ],
            title: 'Shelf unit — this is not how we build',
        },
        button: 'More projects',
        features: [
            {
                number: '1',
                title: 'Strength',
                text: 'Every part of the wardrobe has its own 18 mm laminated chipboard carcass (own bottom, own top, both sides, back panel) — the wardrobe is therefore stronger and there is no risk of boards bending over time and causing issues with drawers or shelf sections.',
            },
            {
                number: '2',
                title: 'Legs',
                text: 'The wardrobe stands on legs about 10 cm above the ground, which helps compensate for uneven floors. Since the track is not laid on the floor but directly on the carcass, it does not collect dust and dirt on the wheels that would later make the doors harder to open.',
            },
            {
                number: '3',
                title: 'Back panel',
                text: 'Each carcass includes a rear back panel, which means your wardrobe forms a self-contained unit. Your belongings do not touch the wall, cobwebs do not form there, and uneven walls stay hidden.',
            },
            {
                number: '4',
                title: '2 mm ABS edges',
                text: 'We use only 2 mm ABS edging. The carcass edges are therefore resistant to impacts, and the edge colour can be combined to match the wardrobe doors as well.',
            },
            {
                number: '5',
                title: 'Handles and guides',
                text: 'Handles plus upper and lower guide rails in various colours — always according to your choice.',
            },
            {
                number: '6',
                title: 'Blum runners',
                text: 'The drawer is made from 18 mm laminated chipboard with a 10 mm bottom and Blum hardware — premium quality for trouble-free use for many years.',
            },
            {
                number: '7',
                title: 'Mirror on the doors',
                text: 'If you choose a mirror on the doors, it is bonded to 18 mm laminated board, so it has a solid backing and will not scatter if broken.',
            },
        ],
        galleryAltPrefix: 'Project',
        galleryTitle: 'Our projects',
        goodExample: {
            items: [
                'dedicated 18 mm carcasses — maximum rigidity',
                'raised 10 cm above the floor — no uneven-floor issues',
                'track fixed on the carcass — does not gather dust',
                'rear back panel — belongings do not touch the wall',
                '2 mm ABS edges — impact resistant',
                'Blum runners — premium quality',
            ],
            title: 'Built-in wardrobe by PeMa Stolárstvo',
        },
        heroSubtitle: 'A wardrobe for people who look for quality, not compromises',
        heroTitle: 'CUSTOM BUILT-IN WARDROBES',
        introBody: 'A built-in wardrobe from PeMa Stolárstvo is not just a shelving unit with sliding doors. Every wardrobe we make is built from dedicated carcasses — the right way. See why that matters.',
        introTitle: 'What makes us different?',
        reasonsTitle: '7 reasons to choose our wardrobes',
    },
    de: {
        badExample: {
            items: [
                'Regalböden direkt in die Wände gebohrt',
                'keine eigenen Korpusse — geringere Stabilität',
                'Schiene auf dem Boden — sammelt Staub',
                'Gegenstände in direktem Kontakt mit der Wand',
                'Probleme durch unebene Böden',
            ],
            title: 'Regal — so bauen wir nicht',
        },
        button: 'Mehr Referenzen',
        features: [
            {
                number: '1',
                title: 'Stabilität',
                text: 'Jeder Teil des Schranks hat einen eigenen 18-mm-Korpus aus Laminatspanplatte (eigener Boden, eigener Deckel, beide Seiten, Rückwand). Dadurch ist der Schrank stabiler und die Platten biegen sich nicht mit der Zeit durch, was später Probleme mit Schubladen oder Fächern verursachen würde.',
            },
            {
                number: '2',
                title: 'Füße',
                text: 'Der Schrank steht auf Füßen etwa 10 cm über dem Boden und gleicht dadurch Unebenheiten des Bodens aus. Da die Schiene nicht auf dem Boden liegt, sondern direkt auf dem Korpus, sammelt sich dort kein Staub und es setzen sich keine Verschmutzungen an den Rollen fest.',
            },
            {
                number: '3',
                title: 'Rückwand',
                text: 'Jeder Korpus besitzt hinten eine Rückwand. Dadurch bildet Ihr Schrank eine eigenständige Einheit, Ihre Sachen berühren die Wand nicht, Spinnweben entstehen nicht und eventuelle Unebenheiten der Wand bleiben verborgen.',
            },
            {
                number: '4',
                title: '2 mm ABS-Kanten',
                text: 'Wir verwenden ausschließlich 2 mm ABS-Kanten. Dadurch sind die Korpuskanten stoßfest und die Kantenfarbe kann auf Wunsch sogar mit der Farbe der Schranktüren abgestimmt werden.',
            },
            {
                number: '5',
                title: 'Griffe und Führung',
                text: 'Griffe sowie obere und untere Führungsschienen in verschiedenen Farben — immer nach Ihrer Wahl.',
            },
            {
                number: '6',
                title: 'Blum-Auszüge',
                text: 'Der Auszug wird aus 18-mm-Laminatspanplatte mit 10-mm-Boden und Blum-Beschlägen gefertigt — Premiumqualität für eine problemlose Nutzung über viele Jahre.',
            },
            {
                number: '7',
                title: 'Spiegel an den Türen',
                text: 'Wenn Sie einen Spiegel an den Türen möchten, wird dieser auf 18-mm-Laminatspanplatte geklebt. Dadurch hat er einen stabilen Untergrund und zerfällt bei einem Bruch nicht.',
            },
        ],
        galleryAltPrefix: 'Referenz',
        galleryTitle: 'Unsere Projekte',
        goodExample: {
            items: [
                'eigene 18-mm-Korpusse — maximale Stabilität',
                '10 cm über dem Boden — keine Probleme mit Unebenheiten',
                'Schiene auf dem Korpus — sammelt keinen Staub',
                'Rückwand — Gegenstände berühren die Wand nicht',
                '2 mm ABS-Kanten — stoßfest',
                'Blum-Auszüge — Premiumqualität',
            ],
            title: 'Einbauschrank von PeMa Stolárstvo',
        },
        heroSubtitle: 'Ein Schrank für alle, die Qualität suchen, nicht Kompromisse',
        heroTitle: 'EINBAUSCHRÄNKE NACH MAß',
        introBody: 'Ein Einbauschrank von PeMa Stolárstvo ist nicht einfach nur ein Regal mit Schiebetüren. Jeder unserer Schränke wird aus eigenen Korpussen gebaut — so, wie es sein soll. Sehen Sie, warum das wichtig ist.',
        introTitle: 'Was unterscheidet uns?',
        reasonsTitle: '7 Gründe für unsere Schränke',
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
        namespace: 'metadata.carpentry.wardrobes',
    });

    return buildPageMetadata({
        locale,
        pathname: '/stolarstvo/vstavane-skrine',
        title: t('title'),
        description: t('description'),
        image: '/sources/leftnabytok.jpg',
    });
}

const galleryImages = [
    { src: '/sources/skrine/19.jpg', alt: 'Vstavaná skriňa so zrkadlom' },
    { src: '/sources/skrine/547151143_122231856452129917_3041828956254044583_n.jpg', alt: 'Vstavaná skriňa drevený dekor' },
    { src: '/sources/skrine/565358808_122235948566129917_4175879254138572814_n.jpg', alt: 'Vstavaná skriňa kombinovaná' },
    { src: '/sources/skrine/580759112_122239805294129917_1207410883449430249_n.jpg', alt: 'Vstavaná skriňa biela' },
    { src: '/sources/skrine/581313015_122239805240129917_2172609459792867784_n.jpg', alt: 'Vstavaná skriňa svetlá' },
    { src: '/sources/skrine/581876774_122239804946129917_7342333417635736121_n.jpg', alt: 'Vstavaná skriňa so zrkadlom detail' },
    { src: '/sources/skrine/640073299_122253566294129917_1680054235553419909_n.jpg', alt: 'Vstavaná skriňa so zrkadlom a drevom' },
];

export default async function VstavaneSkrinePage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const copy = pageCopy[locale];

    return (
        <>
            <PageHero
                title={copy.heroTitle}
                subtitle={copy.heroSubtitle}
                image="/sources/skrine/565358808_122235948566129917_4175879254138572814_n.jpg"
            />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-dark uppercase tracking-widest mb-8">
                        {copy.introTitle}
                    </h2>
                    <p className="text-gray-medium text-lg leading-relaxed">
                        {copy.introBody}
                    </p>
                </div>
            </section>

            {/* Takto nestaviame vs. naše riešenie */}
            <section className="py-24 bg-light">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Bad example */}
                        <div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-8">
                                <Image
                                    src="/sources/skrine/takto-nestaviame.jpg"
                                    alt={copy.badExample.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl px-6 py-4 mb-6">
                                <span className="text-red-500 text-3xl font-black shrink-0">&#10060;</span>
                                <span className="font-heading font-black text-dark uppercase tracking-wider text-lg">
                                    {copy.badExample.title}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {copy.badExample.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-medium">
                                        <span className="text-red-400 shrink-0 mt-0.5">&#10006;</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Good example */}
                        <div>
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg mb-8">
                                <Image
                                    src="/sources/skrine/580759112_122239805294129917_1207410883449430249_n.jpg"
                                    alt={copy.goodExample.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 mb-6">
                                <span className="text-green-500 text-3xl font-black shrink-0">&#9989;</span>
                                <span className="font-heading font-black text-dark uppercase tracking-wider text-lg">
                                    {copy.goodExample.title}
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {copy.goodExample.items.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3 text-sm text-gray-medium">
                                        <span className="text-green-500 shrink-0 mt-0.5">&#10004;</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features / Výhody */}
            <section className="relative py-32 overflow-hidden bg-dark text-white">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/sources/skrine/19.jpg"
                        alt=""
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-16 border-l-4 border-gold pl-8 uppercase tracking-widest">
                        {copy.reasonsTitle}
                    </h2>
                    <div className="space-y-10">
                        {copy.features.map((f) => (
                            <div key={f.number} className="flex gap-6 items-start">
                                <div className="shrink-0 w-12 h-12 rounded-2xl bg-gold flex items-center justify-center">
                                    <span className="font-heading font-black text-dark text-lg">{f.number}</span>
                                </div>
                                <div>
                                    <h3 className="font-heading font-black text-xl uppercase tracking-wider mb-2">{f.title}</h3>
                                    <p className="text-white/80 leading-relaxed font-light">{f.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="py-24 bg-white">
                <div className="w-[95vw] mx-auto">
                    <h2 className="font-heading text-3xl font-black text-dark uppercase tracking-widest text-center mb-12">
                        {copy.galleryTitle}
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={img.src}
                                    alt={`${copy.galleryAltPrefix} ${idx + 1}`}
                                    fill
                                    className="object-cover transition-premium group-hover:scale-105"
                                />
                            </div>
                        ))}
                        {/* Button tile */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-dark flex items-center justify-center">
                            <Link
                                href={{
                                    pathname: '/stolarstvo/referencie',
                                    query: { kategoria: 'vstavane-skrine' },
                                }}
                                className="btn-premium bg-gold text-dark hover:bg-white transition-premium"
                            >
                                {copy.button} <i className="fas fa-arrow-right ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection />
        </>
    );
}

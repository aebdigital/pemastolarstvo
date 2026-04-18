import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/routing';
import PageHero from '@/components/ui/PageHero';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
    Locale,
    {
        back: string;
        cta: string;
        ctaDescription: string;
        ctaTitle: string;
        falcove: string;
        heroSubtitle: string;
        heroTitle: string;
        inner: string;
        nonRebated: string;
        outer: string;
        tableTitle: string;
        typeWidth: string;
    }
> = {
    sk: {
        back: 'Späť na typizované dvere',
        cta: 'Prejsť do konfigurátora',
        ctaDescription: 'Žiaden problém. Vyrobíme dvere presne podľa vašich požiadaviek až do výšky 2100 mm.',
        ctaTitle: 'Potrebujete atypický rozmer?',
        falcove: 'Falcové prevedenie',
        heroSubtitle: 'Kompletný prehľad rozmerov dverí a zárubní podľa STN normy.',
        heroTitle: 'TABUĽKA ROZMEROV',
        inner: 'Vnútorné [mm]',
        nonRebated: 'Bezfalcové',
        outer: 'Vonkajšie [mm]',
        tableTitle: 'Dverné krídlo - Štandardné rozmery (STN 197)',
        typeWidth: 'Typová šírka',
    },
    en: {
        back: 'Back to standard doors',
        cta: 'Go to configurator',
        ctaDescription: 'No problem. We will manufacture the doors exactly to your requirements up to a height of 2100 mm.',
        ctaTitle: 'Need a custom size?',
        falcove: 'Rebated version',
        heroSubtitle: 'A complete overview of door and frame dimensions according to the STN standard.',
        heroTitle: 'SIZE TABLE',
        inner: 'Internal [mm]',
        nonRebated: 'Flush',
        outer: 'External [mm]',
        tableTitle: 'Door leaf - Standard dimensions (STN 197)',
        typeWidth: 'Nominal width',
    },
    de: {
        back: 'Zurück zu den Standardtüren',
        cta: 'Zum Konfigurator',
        ctaDescription: 'Kein Problem. Wir fertigen die Türen exakt nach Ihren Anforderungen bis zu einer Höhe von 2100 mm.',
        ctaTitle: 'Benötigen Sie ein Sondermaß?',
        falcove: 'Gefälzte Ausführung',
        heroSubtitle: 'Vollständige Übersicht der Tür- und Zargenmaße nach STN-Norm.',
        heroTitle: 'MAßTABELLE',
        inner: 'Innen [mm]',
        nonRebated: 'Stumpf',
        outer: 'Außen [mm]',
        tableTitle: 'Türblatt - Standardmaße (STN 197)',
        typeWidth: 'Typbreite',
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
        namespace: 'metadata.doors.table',
    });

    return buildPageMetadata({
        locale,
        pathname: '/dvere/tabulka',
        title: t('title'),
        description: t('description'),
        image: '/sources/doorhero2.jpg',
    });
}

const tableData1 = [
    { type: '60', internal: '620 x 1970', external: '650 x 1985', nonRebated: '622 x 1971' },
    { type: '70', internal: '720 x 1970', external: '750 x 1985', nonRebated: '722 x 1971' },
    { type: '80', internal: '820 x 1970', external: '850 x 1985', nonRebated: '822 x 1971' },
    { type: '90', internal: '920 x 1970', external: '950 x 1985', nonRebated: '922 x 1971' },
    { type: '125', internal: '620/645 x 1970', external: '650/660 x 1985', nonRebated: '641/641 x 1971' },
    { type: '145', internal: '720/745 x 1970', external: '750/760 x 1985', nonRebated: '741/741 x 1971' },
    { type: '165', internal: '820/845 x 1970', external: '850/860 x 1985', nonRebated: '841/841 x 1971' },
    { type: '185', internal: '920/945 x 1970', external: '950/960 x 1985', nonRebated: '941/941 x 1971' },
];

export default async function TabulkaRozmerovPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const copy = pageCopy[locale];

    return (
        <div className="bg-light min-h-screen pb-20">
            <PageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} image="/sources/doorhero2.jpg" />

            <div className="max-w-7xl mx-auto px-4 mt-12">
                {/* Table 1: Door Leaf */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
                    <div className="p-8 md:p-12">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-8 uppercase border-l-4 border-primary pl-4">
                            {copy.tableTitle}
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 border border-gray-100" rowSpan={2}>{copy.typeWidth}</th>
                                        <th className="p-4 border border-gray-100" colSpan={2}>{copy.falcove}</th>
                                        <th className="p-4 border border-gray-100">{copy.nonRebated}</th>
                                    </tr>
                                    <tr className="bg-gray-50 text-xs font-bold text-gray-medium uppercase">
                                        <th className="p-4 border border-gray-100">{copy.inner}</th>
                                        <th className="p-4 border border-gray-100">{copy.outer}</th>
                                        <th className="p-4 border border-gray-100">{copy.outer}</th>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold bg-white"></td>
                                        <td className="p-4 border border-gray-100 bg-white">
                                            <div className="relative w-20 h-40 mx-auto">
                                                <Image src="/sources/table/1.png" alt={copy.inner} fill className="object-contain" />
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-100 bg-white">
                                            <div className="relative w-20 h-40 mx-auto">
                                                <Image src="/sources/table/2.png" alt={copy.outer} fill className="object-contain" />
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-100 bg-white">
                                            <div className="relative w-20 h-40 mx-auto">
                                                <Image src="/sources/table/3.png" alt={copy.nonRebated} fill className="object-contain" />
                                            </div>
                                        </td>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableData1.map((row, i) => (
                                        <tr key={row.type} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                            <td className="p-4 border border-gray-100 font-bold text-primary">{row.type}</td>
                                            <td className="p-4 border border-gray-100">{row.internal}</td>
                                            <td className="p-4 border border-gray-100">{row.external}</td>
                                            <td className="p-4 border border-gray-100">{row.nonRebated}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* Info Box */}
                <div className="bg-primary text-white p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-bold mb-2">{copy.ctaTitle}</h3>
                        <p className="text-white/80">{copy.ctaDescription}</p>
                    </div>
                    <Link
                        href="/dvere/konfigurator"
                        className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all shadow-md shrink-0"
                    >
                        {copy.cta}
                    </Link>
                </div>

                <div className="text-center">
                    <Link
                        href="/dvere/typizovane-dvere"
                        className="inline-flex items-center gap-2 text-gray-medium hover:text-primary transition-colors font-semibold"
                    >
                        <i className="fas fa-arrow-left" /> {copy.back}
                    </Link>
                </div>
            </div>
        </div>
    );
}

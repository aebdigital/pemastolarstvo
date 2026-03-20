import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
    title: 'Tabuľka rozmerov interiérových dverí | PMP-Produkt',
    description: '📋 Kompletná tabuľka typizovaných rozmerov interiérových dverí podľa STN normy. Falcové a bezfalcové prevedenie.',
};

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

export default function TabulkaRozmerovPage() {
    return (
        <div className="bg-light min-h-screen pb-20">
            <PageHero title="TABUĽKA ROZMEROV" subtitle="Kompletný prehľad rozmerov dverí a zárubní podľa STN normy." image="/sources/doorhero2.jpg" />

            <div className="max-w-7xl mx-auto px-4 mt-12">
                {/* Table 1: Door Leaf */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden mb-12">
                    <div className="p-8 md:p-12">
                        <h2 className="font-heading text-2xl font-bold text-dark mb-8 uppercase border-l-4 border-primary pl-4">
                            Dverné krídlo - Štandardné rozmery (STN 197)
                        </h2>

                        <div className="overflow-x-auto">
                            <table className="w-full text-center border-collapse">
                                <thead>
                                    <tr className="bg-gray-50">
                                        <th className="p-4 border border-gray-100" rowSpan={2}>Typová šírka</th>
                                        <th className="p-4 border border-gray-100" colSpan={2}>Falcové prevedenie</th>
                                        <th className="p-4 border border-gray-100">Bezfalcové</th>
                                    </tr>
                                    <tr className="bg-gray-50 text-xs font-bold text-gray-medium uppercase">
                                        <th className="p-4 border border-gray-100">Vnútorné [mm]</th>
                                        <th className="p-4 border border-gray-100">Vonkajšie [mm]</th>
                                        <th className="p-4 border border-gray-100">Vonkajšie [mm]</th>
                                    </tr>
                                    <tr>
                                        <td className="p-4 border border-gray-100 font-bold bg-white"></td>
                                        <td className="p-4 border border-gray-100 bg-white">
                                            <div className="relative w-20 h-40 mx-auto">
                                                <Image src="/sources/table/1.png" alt="Internal" fill className="object-contain" />
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-100 bg-white">
                                            <div className="relative w-20 h-40 mx-auto">
                                                <Image src="/sources/table/2.png" alt="External" fill className="object-contain" />
                                            </div>
                                        </td>
                                        <td className="p-4 border border-gray-100 bg-white">
                                            <div className="relative w-20 h-40 mx-auto">
                                                <Image src="/sources/table/3.png" alt="Non-rebated" fill className="object-contain" />
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
                        <h3 className="text-2xl font-bold mb-2">Potrebujete atypický rozmer?</h3>
                        <p className="text-white/80">Žiaden problém. Vyrobíme dvere presne podľa vašich požiadaviek až do výšky 2100 mm.</p>
                    </div>
                    <Link
                        href="/dvere/konfigurator"
                        className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-100 transition-all shadow-md shrink-0"
                    >
                        Prejsť do konfigurátora
                    </Link>
                </div>

                <div className="text-center">
                    <Link
                        href="/dvere/typizovane-dvere"
                        className="inline-flex items-center gap-2 text-gray-medium hover:text-primary transition-colors font-semibold"
                    >
                        <i className="fas fa-arrow-left" /> Späť na typizované dvere
                    </Link>
                </div>
            </div>
        </div>
    );
}

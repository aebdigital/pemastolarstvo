import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import ContactFormSection from '@/components/forms/ContactFormSection';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
    title: 'O nás - Stolárstvo | PMP-Produkt',
    description:
        'Sme rodinná firma s bohatými skúsenosťami zo zahraničia. Špecializujeme sa na výrobu nábytku a interiérov na mieru.',
};

export default function StolarstvoONasPage() {
    return (
        <>
            <PageHero title="STOLÁRSTVO" subtitle="Nábytok na mieru, kuchyne, skrine a kompletné stolárske práce" image="/sources/leftnabytok.jpg" />

            {/* Services Grid Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Nábytok na mieru */}
                        <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/sources/nabytok.jpg"
                                    alt="Nábytok na mieru"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-premium" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-heading text-2xl font-black text-dark mb-6 uppercase tracking-wider">Nábytok na mieru</h3>
                                <ul className="space-y-3">
                                    {[
                                        'kuchynské linky',
                                        'detské izby, obývacie izby',
                                        'kúpeľňové zostavy',
                                        'postele',
                                        'kancelárie',
                                        'schody',
                                        'stoly',
                                        'lamelové steny a iné'
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-medium font-medium leading-tight">
                                            <span className="w-1.5 h-1.5 bg-gold rounded-full shrink-0" />
                                            <span className="uppercase tracking-tight">{item}</span>
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
                                    alt="Kuchynská linka + spotrebiče"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-premium" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-heading text-2xl font-black text-dark mb-4 uppercase tracking-wider">Kuchynská linka + spotrebiče</h3>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'uľahči si objednávku spotrebičov a doplnkov k tvojej kuchynskej linke',
                                        'bezkonkurenčné ceny spotrebičov (Whirlpool a Beko)',
                                        'bezkonkurenčné ceny umývadiel a batérii Blanco'
                                    ].map((item, idx) => (
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
                                        Katalóg Whirlpool spotrebiče
                                    </a>
                                    <a
                                        href="https://www.drezyblanco.sk/wp-content/uploads/2025/07/ankos-2025_2_compressed.pdf"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-4 bg-light rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] text-dark hover:bg-gold transition-premium"
                                    >
                                        <i className="fas fa-file-pdf text-lg text-gold group-hover:text-dark transition-colors" />
                                        Katalóg Blanco umývadla a batérie
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Interiér na kľúč */}
                        <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 flex flex-col">
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src="/sources/kluc.jpg"
                                    alt="Interiér na kľúč"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-dark/20 group-hover:bg-transparent transition-premium" />
                            </div>
                            <div className="p-8 flex-1">
                                <h3 className="font-heading text-2xl font-black text-dark mb-6 uppercase tracking-wider">Interiér na kľúč</h3>
                                <ul className="space-y-6">
                                    {[
                                        'máš dom alebo byt a chceš zariadiť interiér od podlahy po strop ?',
                                        'chceš sa baviť len s jedným človek ohľadom rekonštrukcie bytu alebo domu ?',
                                        'potrebuješ zabezpečiť prestavbu bytu alebo domu ?'
                                    ].map((item, idx) => (
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
                        alt="Background"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="max-w-7xl mx-auto px-4 relative z-10">
                    <div className="grid md:grid-cols-2 gap-20">
                        <div>
                            <h2 className="font-heading text-4xl font-black mb-10 border-l-4 border-gold pl-8 uppercase tracking-widest">
                                O NÁS
                            </h2>
                            <div className="space-y-8 text-white/80 text-lg leading-relaxed font-light">
                                <p>
                                    Sme rodinná firma, ktorá dlhé roky pôsobila v zahraničí ako je Slovinsko, Česko, Holandsko, Malorka, Anglicko.
                                </p>
                                <p>
                                    Po bohatých skúsenostiach, ktoré sme nadobudli v zahraničí, sme sa rozhodli usadiť doma a vytvoriť malú rodinnú stolársku firmu.
                                </p>
                                <p>
                                    Našou úlohou je aby boli zákazníci vždy spokojní. Samozrejme dbáme na kvalitu a presnosť, sme ochotní pomôcť zákazníkom s výberom farieb, materiálu alebo inými špecifickými požiadavkami.
                                </p>
                                <p className="font-normal text-white text-xl">
                                    Tešíme sa na spoluprácu s vami.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="font-heading text-4xl font-black mb-10 border-l-4 border-gold pl-8 uppercase tracking-widest">
                                AKO PRACUJEME
                            </h2>
                            <div className="space-y-8 text-white/80 text-lg leading-relaxed font-light">
                                <p>
                                    Špecializujeme sa na výrobu nábytku a stavebno-stolárskych produktov na mieru. Ak sa Vám naša práca páči, neváhajte nás kontaktovať.
                                </p>
                                <p>
                                    V rámci prvého kontaktu si radi vypočujeme Vašu predstavu, požiadavky a prípadné otázky spojené s realizáciou projektu. Vďaka naším dlhoročným skúsenostiam vieme pri výbere materiálu a výsledného dizajnu poradiť.
                                </p>
                                <p>
                                    Na základe úvodnej konzultácie pristúpime k návrhu (vizualizácii), zameraniu a cenovej ponuke pre výsledný produkt.
                                </p>
                                <div className="pt-10">
                                    <Link
                                        href="/stolarstvo/kontakt"
                                        className="btn-premium bg-gold text-dark"
                                    >
                                        Mám záujem o ponuku
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
                        <h2 className="font-heading text-3xl font-black text-dark uppercase tracking-widest">Inšpirácie</h2>
                        <Link href="/stolarstvo/referencie" className="text-gold font-bold hover:underline">Všetky referencie &rarr;</Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        {[2, 8, 15, 22, 30].map((id) => (
                            <div key={id} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={`/sources/referencie/vyroba/${id}.jpg`}
                                    alt={`Inšpirácia ${id}`}
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

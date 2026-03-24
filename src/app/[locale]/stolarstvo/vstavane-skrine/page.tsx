import type { Metadata } from 'next';
import Image from 'next/image';
import { Link } from '@/i18n/routing';
import PageHero from '@/components/ui/PageHero';
import ContactFormSection from '@/components/forms/ContactFormSection';

export const metadata: Metadata = {
    title: 'Vstavané skrine na mieru - PeMa Stolárstvo',
    description:
        'Vstavané skrine na mieru s vlastnými korpusmi DTDL 18mm, ABS hranami 2mm a výsuvmi Blum. Kvalita bez kompromisov. Svidník.',
};

const features = [
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
];

const galleryImages = [
    { src: '/sources/skrine/19.jpg', alt: 'Vstavaná skriňa so zrkadlom' },
    { src: '/sources/skrine/547151143_122231856452129917_3041828956254044583_n.jpg', alt: 'Vstavaná skriňa drevený dekor' },
    { src: '/sources/skrine/565358808_122235948566129917_4175879254138572814_n.jpg', alt: 'Vstavaná skriňa kombinovaná' },
    { src: '/sources/skrine/580759112_122239805294129917_1207410883449430249_n.jpg', alt: 'Vstavaná skriňa biela' },
    { src: '/sources/skrine/581313015_122239805240129917_2172609459792867784_n.jpg', alt: 'Vstavaná skriňa svetlá' },
    { src: '/sources/skrine/581876774_122239804946129917_7342333417635736121_n.jpg', alt: 'Vstavaná skriňa so zrkadlom detail' },
    { src: '/sources/skrine/640073299_122253566294129917_1680054235553419909_n.jpg', alt: 'Vstavaná skriňa so zrkadlom a drevom' },
];

export default function VstavaneSkrinePage() {
    return (
        <>
            <PageHero
                title="VSTAVANÉ SKRINE NA MIERU"
                subtitle="Skriňa pre tých, ktorí hľadajú kvalitu, nie kompromisy"
                image="/sources/skrine/565358808_122235948566129917_4175879254138572814_n.jpg"
            />

            {/* Intro */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="font-heading text-3xl md:text-4xl font-black text-dark uppercase tracking-widest mb-8">
                        V čom sa líšime?
                    </h2>
                    <p className="text-gray-medium text-lg leading-relaxed">
                        Vstavaná skriňa od PeMa Stolárstvo nie je len regál s posuvnými dverami.
                        Každá naša skriňa je postavená z vlastných korpusov — tak, ako má byť.
                        Pozrite sa, prečo je to dôležité.
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
                                    alt="Takto nestaviame vstavané skrine"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-3 bg-red-50 border border-red-200 rounded-2xl px-6 py-4 mb-6">
                                <span className="text-red-500 text-3xl font-black shrink-0">&#10060;</span>
                                <span className="font-heading font-black text-dark uppercase tracking-wider text-lg">
                                    Regál — takto nestaviame
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'polky vŕtané priamo do stien',
                                    'bez vlastných korpusov — nižšia pevnosť',
                                    'koľajnička na podlahe — zanáša sa prachom',
                                    'veci v priamom kontakte so stenou',
                                    'problémy s nerovnosťami podlahy',
                                ].map((item, idx) => (
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
                                    alt="Vstavaná skriňa od PeMa Stolárstvo"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-2xl px-6 py-4 mb-6">
                                <span className="text-green-500 text-3xl font-black shrink-0">&#9989;</span>
                                <span className="font-heading font-black text-dark uppercase tracking-wider text-lg">
                                    Vstavaná skriňa od PeMa Stolárstvo
                                </span>
                            </div>
                            <ul className="space-y-3">
                                {[
                                    'vlastné korpusy DTDL 18 mm — maximálna pevnosť',
                                    'na nožkách 10 cm od zeme — žiadne nerovnosti',
                                    'koľajnička na korpuse — nezanáša sa prachom',
                                    'sololit vzadu — veci sa nedotýkajú steny',
                                    'ABS hrany 2 mm — odolné voči úderom',
                                    'výsuvy Blum — prémiová kvalita',
                                ].map((item, idx) => (
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
                        alt="Background"
                        fill
                        className="object-cover opacity-10"
                    />
                </div>
                <div className="max-w-5xl mx-auto px-4 relative z-10">
                    <h2 className="font-heading text-3xl md:text-4xl font-black mb-16 border-l-4 border-gold pl-8 uppercase tracking-widest">
                        7 dôvodov, prečo si vybrať naše skrine
                    </h2>
                    <div className="space-y-10">
                        {features.map((f) => (
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
                        Naše realizácie
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {galleryImages.map((img, idx) => (
                            <div key={idx} className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg group">
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-premium group-hover:scale-105"
                                />
                            </div>
                        ))}
                        {/* Button tile */}
                        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg bg-dark flex items-center justify-center">
                            <Link
                                href="/stolarstvo/referencie?kategoria=vstavane-skrine"
                                className="btn-premium bg-gold text-dark hover:bg-white transition-premium"
                            >
                                Viac realizácií <i className="fas fa-arrow-right ml-2" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection />
        </>
    );
}

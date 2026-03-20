import type { Metadata } from 'next';
import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import ContactFormSection from '@/components/forms/ContactFormSection';
import { Link } from '@/i18n/routing';

export const metadata: Metadata = {
  title: 'O nás - Interiérové dvere | PMP-Produkt',
  description:
    'Spoznajte PMP-Produkt - výrobcu kvalitných interiérových dverí na mieru. Rodinná firma s medzinárodnou praxou a showroomom v Svidníku.',
};

const faqItems = [
  {
    question: 'Koľko trvá výroba dverí na mieru?',
    answer:
      'Štandardná doba výroby dverí na mieru je 4-6 týždňov od potvrdenia objednávky. Pri typizovaných dverách je doba kratšia.',
  },
  {
    question: 'Zabezpečujete aj montáž dverí?',
    answer:
      'Áno, zabezpečujeme kompletnú montáž dverí vrátane zárubní. Naši montážni pracovníci majú dlhoročné skúsenosti.',
  },
  {
    question: 'Aké materiály používate?',
    answer:
      'Používame kvalitné materiály od overených dodávateľov. Naše dvere sú vyrobené z masívu, MDF, alebo ich kombinácie s rôznymi povrchovými úpravami.',
  },
];

export default function DvereONasPage() {
  return (
    <>
      <PageHero title="INTERIÉROVÉ DVERE" subtitle="Kvalitné dvere na mieru a typizované riešenia pre váš domov" image="/sources/doorhero1.jpg" />

      {/* Door Options Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Typizované dvere */}
            <div className="group rounded-3xl overflow-hidden bg-white shadow-premium hover:shadow-2xl transition-premium border border-gray-100 p-10 flex flex-col gap-10">
              <div className="w-full aspect-[16/10] relative rounded-2xl overflow-hidden shadow-lg">
                <Image
                  src="/sources/interierove/type.webp"
                  alt="Typizované dvere"
                  fill
                  className="object-cover transition-premium group-hover:scale-105"
                />
              </div>
              <div className="w-full">
                <h3 className="font-heading text-2xl font-black text-dark mb-4 uppercase">Typizované dvere</h3>
                <ul className="space-y-3">
                  {[
                    'štandardné rozmery a dizajny',
                    'rýchla dodávka',
                    'kvalitné materiály za výhodnú cenu',
                    'široký výber farieb a povrchov'
                  ].map((item, idx) => (
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
                  alt="Dvere na mieru"
                  fill
                  className="object-cover transition-premium group-hover:scale-105"
                />
              </div>
              <div className="w-full">
                <h3 className="font-heading text-2xl font-black text-dark mb-4 uppercase">Dvere na mieru</h3>
                <ul className="space-y-3">
                  {[
                    'jedinečné dvere presne podľa vašich požiadaviek',
                    'atypické rozmery a individuálny dizajn',
                    'vlastný výber materiálov a povrchov',
                    'komplexné riešenie od návrhu po montáž'
                  ].map((item, idx) => (
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
                  Po bohatých skúsenostiach, ktoré sme nadobudli v zahraničí, sme sa rozhodli usadiť doma a vytvoriť malú rodinnú stolársku firmu špecializujúcu sa na interiérové dvere.
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
                  Špecializujeme sa na výrobu interiérových dverí na mieru. Ak sa Vám naša práca páči, neváhajte nás kontaktovať.
                </p>
                <p>
                  V rámci prvého kontaktu si radi vypočujeme Vašu predstavu, požiadavky a prípadné otázky spojené s realizáciou projektu. Vďaka naším dlhoročným skúsenostiam vieme pri výbere materiálu a výsledného dizajnu poradiť.
                </p>
                <p>
                  Na základe úvodnej konzultácie pristúpime k návrhu (vizualizácii), zameraniu a cenovej ponuke pre výsledný produkt.
                </p>
                <p>
                  V poslednej fáze upresníme termín ukončenia projektu, dopravu a montáž.
                </p>
                <div className="pt-10">
                  <Link
                    href="/dvere/konfigurator"
                    className="btn-premium bg-gold text-dark"
                  >
                    <i className="fas fa-cogs mr-3" />
                    Konfigurátor
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
            <h2 className="font-heading text-3xl font-black text-dark uppercase tracking-widest">Referencie</h2>
            <Link href="/dvere/referencie" className="text-gold font-bold hover:underline">Galéria referencií &rarr;</Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 5, 12, 23, 35].map((id) => (
              <div key={id} className="relative aspect-square rounded-2xl overflow-hidden shadow-lg group">
                <Image
                  src={`/sources/referencie/dvere/${id}.jpg`}
                  alt={`Referencia ${id}`}
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

import type { Metadata } from 'next';
import Configurator from '@/components/configurator/Configurator';

export const metadata: Metadata = {
  title: 'Konfigurátor interiérových dverí',
  description:
    'Online konfigurátor interiérových dverí. Vyberte si typ, model, farbu a ďalšie parametre. Bezplatná cenová ponuka.',
};

export default function KonfiguratorPage() {
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
            <span className="text-gold font-black uppercase tracking-[0.4em] text-xs">PMP-Produkt</span>
            <div className="h-0.5 w-12 bg-gold/50" />
          </div>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-wider leading-none">
            Konfigurátor <span className="text-gold">Dverí</span>
          </h1>
          <p className="text-white/50 mt-8 text-sm md:text-lg font-medium leading-relaxed uppercase tracking-wider block max-w-3xl mx-auto">
            Navrhnite si svoje vlastné dvere na mieru v niekoľkých jednoduchých krokoch
          </p>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 -mt-20 relative z-20 pb-20">
        <Configurator />
      </div>
    </main>
  );
}

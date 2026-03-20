import type { Metadata } from 'next';
import PortfolioGrid from '@/components/gallery/PortfolioGrid';
import PageHero from '@/components/ui/PageHero';
import doorGallery from '@/data/door-gallery.json';
import ContactFormSection from '@/components/forms/ContactFormSection';

export const metadata: Metadata = {
  title: 'Referencie - Dvere | PMP-Produkt',
  description:
    'Galéria realizácií interiérových dverí. Pozrite si naše referencie z reálnych inštalácií.',
};

export default function DvereReferenciePage() {
  return (
    <main>
      <PageHero title="REFERENCIE DVERÍ" image="/sources/doorhero2.jpg" />

      {/* Intro Text */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl font-black text-dark uppercase tracking-widest leading-tight">
            Pozrite si naše realizácie interiérových dverí
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section pb-32 bg-white">
        <div className="gallery-container">
          <PortfolioGrid images={doorGallery.dvere} variant="dvere" />
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}

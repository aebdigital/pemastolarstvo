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
      <PageHero title="REFERENCIE DVERÍ" subtitle="Pozrite si naše realizácie interiérových dverí" image="/sources/doorhero2.jpg" />


      {/* Gallery */}
      <section className="gallery-section py-32">
        <div className="gallery-container">
          <PortfolioGrid images={doorGallery.dvere} variant="dvere" />
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}

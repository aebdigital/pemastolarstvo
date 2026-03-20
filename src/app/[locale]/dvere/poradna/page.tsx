import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';
import ContactFormSection from '@/components/forms/ContactFormSection';

export const metadata: Metadata = {
  title: 'Poradňa - Ako zamerať dvere | PMP-Produkt',
  description:
    'Inštruktážne video, ktoré vám poradí, ako správne zamerať a pripraviť stavebný otvor.',
};

export default function PoradnaPage() {
  return (
    <main>
      <PageHero title="AKO ZAMERAŤ?" image="/sources/doorhero1.jpg" />

      {/* Video Guide Section */}
      <section className="video-guide-section">
        <div className="video-content">
          <div className="video-text">
            <h2 className="video-section-title">VIDEONÁVODY</h2>
            <div className="video-description">
              <p>Inštruktážne video, ktoré vám poradí, ako správne zamerať a pripraviť stavebný otvor.</p>
            </div>
          </div>

          <div className="video-container">
            <iframe
              src="https://www.youtube.com/embed/sptWWXyCj1o"
              title="Návod na zameranie stavebného otvoru"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        {/* Resources */}
        <div className="resources-section">
          <h3 className="resources-title">NA STIAHNUTIE</h3>
          <a href="/sources/katalog-typizovane.pdf" className="download-link" target="_blank" rel="noopener noreferrer">
            Katalóg interiérových dverí
          </a>
        </div>
      </section>

      <ContactFormSection />
    </main>
  );
}

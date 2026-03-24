'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import PortfolioGrid from '@/components/gallery/PortfolioGrid';
import PageHero from '@/components/ui/PageHero';
import stolarstvoGallery from '@/data/stolarstvo-gallery.json';

const categories = [
  { id: 'kuchyne', label: 'Kuchyne' },
  { id: 'kupelne', label: 'Kúpeľne' },
  { id: 'vstavane-skrine', label: 'Vstavané skrine' },
  { id: 'obyvacie-izby', label: 'Obývacie izby' },
  { id: 'postele', label: 'Postele a nočné stolíky' },
  { id: 'schodiska', label: 'Schodiská' },
  { id: 'stoly', label: 'Stoly' },
  { id: 'vesiakove', label: 'Vešiakové steny' },
  { id: 'exterierove', label: 'Exteriérové produkty' },
  { id: 'ine', label: 'Iné' },
];

const galleryData: Record<string, string[]> = stolarstvoGallery.reduce(
  (acc, item) => {
    acc[item.category] = item.images;
    return acc;
  },
  {} as Record<string, string[]>
);

export default function StolarstvoReferenciePage() {
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('kategoria');
  const [activeCategory, setActiveCategory] = useState(
    categories.some((c) => c.id === categoryParam) ? categoryParam! : 'kuchyne'
  );

  useEffect(() => {
    if (categoryParam && categories.some((c) => c.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [categoryParam]);

  return (
    <main>
      <PageHero title="REFERENCIE STOLÁRSTVA" subtitle="Pozrite si naše realizované stolárske projekty a nábytok na mieru." image="/sources/leftnabytok.jpg" />

      {/* Filter Bar */}
      <section className="filter-section">
        <div className="container mx-auto px-4">
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`filter-tab${activeCategory === cat.id ? ' active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="gallery-section pb-32">
        <div className="gallery-container">
          <PortfolioGrid images={galleryData[activeCategory] || []} />
        </div>
      </section>
    </main>
  );
}

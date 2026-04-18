'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import PortfolioGrid from '@/components/gallery/PortfolioGrid';
import PageHero from '@/components/ui/PageHero';
import stolarstvoGallery from '@/data/stolarstvo-gallery.json';

const galleryData: Record<string, string[]> = stolarstvoGallery.reduce(
  (acc, item) => {
    acc[item.category] = item.images;
    return acc;
  },
  {} as Record<string, string[]>
);

export default function StolarstvoReferenciePage() {
  const tReferences = useTranslations('references');
  const tCategories = useTranslations('references.categories');
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get('kategoria');
  const categories = [
    { id: 'kuchyne', label: tCategories('kitchens') },
    { id: 'kupelne', label: tCategories('bathrooms') },
    { id: 'vstavane-skrine', label: tCategories('wardrobes') },
    { id: 'obyvacie-izby', label: tCategories('livingRooms') },
    { id: 'postele', label: tCategories('beds') },
    { id: 'schodiska', label: tCategories('stairs') },
    { id: 'stoly', label: tCategories('tables') },
    { id: 'vesiakove', label: tCategories('coatRacks') },
    { id: 'exterierove', label: tCategories('exterior') },
    { id: 'ine', label: tCategories('other') },
  ];
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
      <PageHero title={tReferences('carpentryTitle')} subtitle={tReferences('carpentrySubtitle')} image="/sources/leftnabytok.jpg" />

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

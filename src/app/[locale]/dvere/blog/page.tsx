import type { Metadata } from 'next';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
  title: 'Blog - Novinky a články o dverách',
  description: 'Novinky a články o interiérových dverách, trendoch v bývaní a stolárskej výrobe od PMP-Produkt.',
};

export default function BlogPage() {
  return (
    <main>
      <PageHero title="BLOG" subtitle="Novinky a články" image="/sources/doorhero3.jpg" />

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-medium mb-12 max-w-2xl mx-auto">
            Pripravujeme pre vás zaujímavé články o interiérových dverách, trendoch v bývaní
            a stolárskej výrobe. Sledujte nás!
          </p>
          <div className="bg-light rounded-lg p-12">
            <p className="text-gray-medium text-lg">
              Čoskoro tu nájdete nové články.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

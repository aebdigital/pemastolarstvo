import SplitHero from '@/components/home/SplitHero';
import HomeHeader from '@/components/layout/HomeHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PMP-Produkt | Interiérové dvere a stolárstvo na mieru | Svidník',
  description:
    'Kvalitné interiérové dvere na mieru a kompletné stolárstvo. Kuchyne, vstavané skrine, nábytok na mieru. Rodinná firma s showroomom vo Svidníku.',
};

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <SplitHero />
    </>
  );
}

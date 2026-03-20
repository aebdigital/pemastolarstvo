import SplitHero from '@/components/home/SplitHero';
import HomeHeader from '@/components/layout/HomeHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PMP-Produkt | Dvere a Stolárstvo',
  description:
    'Interiérové dvere na mieru and stolárska výroba. Kvalitné slovenské dvere, kuchyne, postele a ďalší nábytok na zákazku.',
};

export default function HomePage() {
  return (
    <>
      <HomeHeader />
      <SplitHero />
    </>
  );
}

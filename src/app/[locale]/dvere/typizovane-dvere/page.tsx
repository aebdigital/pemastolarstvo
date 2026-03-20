import { Metadata } from 'next';
import TypizovaneDvereClient from './TypizovaneDvereClient';

export const metadata: Metadata = {
  title: 'Typizované dvere | PMP-Produkt',
  description: '🚪 Štandardné interiérové dvere podľa normy STN. Kvalitné typizované dvere pre váš domov s rýchlym dodaním.',
};

export default function TypizovaneDverePage() {
  return <TypizovaneDvereClient />;
}

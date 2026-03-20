import { Metadata } from 'next';
import DvereNaMieruClient from './DvereNaMieruClient';

export const metadata: Metadata = {
  title: 'Dvere na mieru | PMP-Produkt',
  description: '🚪 Dvere na mieru od PMP-Produkt. Atypické interiérové dvere presne podľa vašich rozmerov, kvalitné materiály, profesionálna montáž.',
};

export default function DvereNaMieruPage() {
  return <DvereNaMieruClient />;
}

import { Metadata } from 'next';
import DvereNaMieruClient from './DvereNaMieruClient';

export const metadata: Metadata = {
  title: 'Interiérové dvere na mieru',
  description: 'Atypické interiérové dvere presne podľa vašich rozmerov. Kvalitné materiály, profesionálna montáž. Bezplatné zameranie.',
};

export default function DvereNaMieruPage() {
  return <DvereNaMieruClient />;
}

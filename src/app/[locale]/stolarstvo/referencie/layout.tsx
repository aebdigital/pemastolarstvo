import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Referencie - Stolárstvo a nábytok na mieru',
    description:
        'Galéria realizácií stolárskych prác. Kuchyne, vstavané skrine, nábytok na mieru. Pozrite si naše referencie.',
};

export default function ReferencieLayout({ children }: { children: React.ReactNode }) {
    return children;
}

import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: 'metadata.carpentry.references',
    });

    return buildPageMetadata({
        locale,
        pathname: '/stolarstvo/referencie',
        title: t('title'),
        description: t('description'),
        image: '/sources/leftnabytok.jpg',
    });
}

export default function ReferencieLayout({ children }: { children: React.ReactNode }) {
    return children;
}

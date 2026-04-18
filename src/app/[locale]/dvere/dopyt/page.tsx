import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import InquiryForm from '@/components/forms/InquiryForm';
import PageHero from '@/components/ui/PageHero';
import { buildPageMetadata } from '@/lib/seo';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
    Locale,
    {
        subtitle: string;
        title: string;
    }
> = {
    sk: {
        subtitle: 'Dokončite váš dopyt vyplnením kontaktných údajov',
        title: 'ODOSLAŤ DOPYT',
    },
    en: {
        subtitle: 'Complete your inquiry by filling in your contact details',
        title: 'SEND INQUIRY',
    },
    de: {
        subtitle: 'Schließen Sie Ihre Anfrage ab, indem Sie Ihre Kontaktdaten ausfüllen',
        title: 'ANFRAGE SENDEN',
    },
};

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({
        locale,
        namespace: 'metadata.doors.inquiry',
    });

    return buildPageMetadata({
        locale,
        pathname: '/dvere/dopyt',
        title: t('title'),
        description: t('description'),
        image: '/sources/doorhero1.jpg',
    });
}

export default async function DopytPage({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const copy = pageCopy[locale];

    return (
        <main>
            <PageHero title={copy.title} subtitle={copy.subtitle} image="/sources/doorhero1.jpg" />

            <div className="bg-light py-12 md:py-20">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                        <div className="p-8 md:p-16">
                            <InquiryForm />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

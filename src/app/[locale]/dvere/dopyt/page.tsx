import type { Metadata } from 'next';
import InquiryForm from '@/components/forms/InquiryForm';
import PageHero from '@/components/ui/PageHero';

export const metadata: Metadata = {
    title: 'Odoslať dopyt - Dvere',
    description: 'Vyplňte formulár a odošlite dopyt na vaše nové dvere na mieru.',
};

export default function DopytPage() {
    return (
        <main>
            <PageHero title="ODOSLAŤ DOPYT" subtitle="Dokončite váš dopyt vyplnením kontaktných údajov" image="/sources/doorhero1.jpg" />

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

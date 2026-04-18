'use client';

import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { getColorDisplayName } from '@/lib/colors';
import {
    getConfiguratorCopy,
    getDoorTypeLabel,
    getFrameTypeLabel,
    getLockTypeLabel,
} from '@/lib/configurator-i18n';
import { getSiteUiContent } from '@/lib/site-ui-content';
import { useRouter } from '@/i18n/routing';

export default function PolozkyDopytuPage() {
    const { items, removeItem, updateQuantity, count } = useCart();
    const locale = useLocale() as Locale;
    const tInquiry = useTranslations('inquiry');
    const copy = getSiteUiContent(locale).inquiryForm;
    const configCopy = getConfiguratorCopy(locale);
    const router = useRouter();

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                <h1 className="font-heading text-3xl font-bold mb-6 text-dark">{copy.emptyCart}</h1>
                <p className="text-gray-medium mb-8">{tInquiry('emptyCartMessage')}</p>
                <button
                    onClick={() => router.push('/dvere/konfigurator')}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
                >
                    {tInquiry('goToConfigurator')}
                </button>
            </div>
        );
    }

    return (
        <div className="bg-light min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-dark text-white p-8 md:p-12 text-center">
                        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2 uppercase">{copy.summaryTitle}</h1>
                        <p className="text-gray-300">{copy.summaryEyebrow}</p>
                    </div>

                    <div className="p-6 md:p-10 space-y-8">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="flex flex-col md:flex-row gap-8 pb-8 border-b border-gray-100 last:border-0 last:pb-0"
                            >
                                {/* Image Placeholder or Actual Image if available */}
                                <div className="relative w-full md:w-48 aspect-[3/4] bg-gray-100 rounded-lg overflow-hidden shrink-0">
                                    <Image
                                        src={`/sources/interierove/type.webp`} // fallback image
                                        alt={getDoorTypeLabel(locale, item.configuration.doorType)}
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="font-heading text-2xl font-bold text-dark uppercase">
                                                {getDoorTypeLabel(locale, item.configuration.doorType)} - Model {item.configuration.modelId}
                                            </h2>
                                            <p className="text-primary font-bold">{configCopy.previewVariant} {item.configuration.variantIndex}</p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-light hover:text-red-500 transition-colors"
                                            aria-label={tInquiry('remove')}
                                        >
                                            <i className="fas fa-trash-alt text-xl" />
                                        </button>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-medium">
                                        <div className="space-y-1">
                                            <p><strong>{configCopy.colorDecor}:</strong> {getColorDisplayName(item.configuration.color, locale)}</p>
                                            <p><strong>{configCopy.technicalDimensions}:</strong> {item.configuration.width} x {item.configuration.height} cm</p>
                                            <p><strong>{configCopy.dimensions.thickness}:</strong> {item.configuration.thickness} cm</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p><strong>{configCopy.frameSection}:</strong> {getFrameTypeLabel(locale, item.configuration.frameType)}</p>
                                            <p><strong>{configCopy.lockSummary}:</strong> {getLockTypeLabel(locale, item.configuration.lockType)}</p>
                                            <p><strong>{configCopy.requestedAssembly}:</strong> {item.configuration.assembly ? configCopy.yes : configCopy.no}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-semibold text-dark">{configCopy.quantity}:</span>
                                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                                                <button
                                                    onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                                    className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                                                >
                                                    -
                                                </button>
                                                <span className="px-4 py-1 font-bold min-w-[40px] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="px-3 py-1 bg-gray-50 hover:bg-gray-100 transition-colors"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="bg-light p-8 md:p-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                        <button
                            onClick={() => router.push('/dvere/konfigurator')}
                            className="text-primary font-bold hover:underline flex items-center gap-2"
                        >
                            <i className="fas fa-arrow-left" />
                            {tInquiry('goToConfigurator')}
                        </button>
                        <button
                            onClick={() => router.push('/dvere/dopyt')}
                            className="px-12 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {tInquiry('continueInquiry')} ({count})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

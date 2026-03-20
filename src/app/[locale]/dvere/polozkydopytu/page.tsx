'use client';

import { useCart } from '@/hooks/useCart';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

export default function PolozkyDopytuPage() {
    const { items, removeItem, updateQuantity, count } = useCart();
    const router = useRouter();
    const locale = useLocale();

    if (items.length === 0) {
        return (
            <div className="max-w-4xl mx-auto px-4 py-24 text-center">
                <h1 className="font-heading text-3xl font-bold mb-6 text-dark">Váš košík je prázdny</h1>
                <p className="text-gray-medium mb-8">Zatiaľ ste si nevybrali žiadne dvere.</p>
                <button
                    onClick={() => router.push(`/${locale}/dvere/konfigurator`)}
                    className="px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-colors"
                >
                    Prejsť do konfigurátora
                </button>
            </div>
        );
    }

    return (
        <div className="bg-light min-h-screen py-12">
            <div className="max-w-5xl mx-auto px-4">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <div className="bg-dark text-white p-8 md:p-12 text-center">
                        <h1 className="font-heading text-3xl md:text-4xl font-bold mb-2 uppercase">Položky dopytu</h1>
                        <p className="text-gray-300">Prehľad vybraných dverí</p>
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
                                        alt="Door item"
                                        fill
                                        className="object-cover"
                                    />
                                </div>

                                <div className="flex-1 space-y-4">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h2 className="font-heading text-2xl font-bold text-dark uppercase">
                                                {item.configuration.doorType === 'ramove' ? 'Rámové' : 'Sendvičové'} - Model {item.configuration.modelId}
                                            </h2>
                                            <p className="text-primary font-bold">Variant {item.configuration.variantIndex + 1}</p>
                                        </div>
                                        <button
                                            onClick={() => removeItem(item.id)}
                                            className="text-gray-light hover:text-red-500 transition-colors"
                                            aria-label="Remove item"
                                        >
                                            <i className="fas fa-trash-alt text-xl" />
                                        </button>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-medium">
                                        <div className="space-y-1">
                                            <p><strong>Farba:</strong> {item.configuration.colorName}</p>
                                            <p><strong>Rozmery:</strong> {item.configuration.width} x {item.configuration.height} cm</p>
                                            <p><strong>Hrúbka muriva:</strong> {item.configuration.thickness} cm</p>
                                        </div>
                                        <div className="space-y-1">
                                            <p><strong>Zárubeň:</strong> {item.configuration.frameType === 'falcove' ? 'Falcová' : 'Bezfalcová'}</p>
                                            <p><strong>Zámok:</strong> {item.configuration.lockType}</p>
                                            <p><strong>Montáž:</strong> {item.configuration.assembly ? 'Áno' : 'Nie'}</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-4">
                                        <div className="flex items-center gap-4">
                                            <span className="text-sm font-semibold text-dark">Množstvo:</span>
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
                            onClick={() => router.push(`/${locale}/dvere/konfigurator`)}
                            className="text-primary font-bold hover:underline flex items-center gap-2"
                        >
                            <i className="fas fa-arrow-left" />
                            Pridať ďalšie dvere
                        </button>
                        <button
                            onClick={() => router.push(`/${locale}/dvere/dopyt`)}
                            className="px-12 py-4 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Pokračovať v dopyte ({count})
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

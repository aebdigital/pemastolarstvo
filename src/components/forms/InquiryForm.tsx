'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { getDoorImagePath, getColoredDoorImagePath } from '@/lib/door-models';

export default function InquiryForm() {
  const t = useTranslations('inquiry');
  const { items, clearAll } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    zipCode: '',
    message: '',
    gdpr: false,
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdpr || items.length === 0) return;

    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type: 'inquiry',
          ...formData,
          items: items.map((item) => ({
            configuration: item.configuration,
            quantity: item.quantity,
          })),
        }),
      });
      if (res.ok) {
        setStatus('success');
        clearAll();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const updateField = (field: string, value: string | boolean) => {
    setFormData((f) => ({ ...f, [field]: value }));
  };

  if (status === 'success') {
    return (
      <div className="text-center py-16">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-heading text-3xl font-bold text-dark mb-4">
          {t('successTitle')}
        </h2>
        <p className="text-gray-medium max-w-md mx-auto">
          {t('successMessage')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid lg:grid-cols-2 gap-12">
        {/* Customer info */}
        <div>
          <h2 className="font-heading text-2xl font-bold text-dark mb-6 text-dark uppercase">
            {t('orderItems')}
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {t('firstName')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {t('lastName')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {t('email')}
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {t('phone')}
              </label>
              <input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {t('company')}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                Ulica a číslo *
              </label>
              <input
                type="text"
                required
                value={formData.address}
                onChange={(e) => updateField('address', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {t('city')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {t('zipCode')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.zipCode}
                  onChange={(e) => updateField('zipCode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {t('message')}
              </label>
              <textarea
                rows={4}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-y"
              />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-white p-8 rounded-3xl shadow-premium border border-gray-100 h-fit sticky top-32">
          <div className="flex flex-col items-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-2">Prehľad dopytu</span>
            <h2 className="font-heading text-2xl font-black text-dark uppercase tracking-widest text-center">
              Položky dopytu
            </h2>
          </div>

          {items.length === 0 ? (
            <div className="bg-light rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300 shadow-sm">
                <i className="fas fa-shopping-cart text-2xl" />
              </div>
              <p className="text-gray-medium font-medium">Váš košík je momentálne prázdny</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, i) => {
                const imagePath = item.configuration.color && item.configuration.color.endsWith('.png')
                  ? getColoredDoorImagePath(item.configuration.modelId, item.configuration.variantIndex, item.configuration.color)
                  : getDoorImagePath(item.configuration.doorType, item.configuration.modelId, item.configuration.variantIndex);

                return (
                  <div key={item.id} className="bg-light rounded-3xl p-6 border border-gray-100 shadow-inner-premium group">
                    <div className="flex gap-4 mb-4 pb-4 border-b border-gray-200/50">
                      <div className="w-16 h-20 relative bg-white rounded-xl overflow-hidden shadow-sm shrink-0 border border-gray-100">
                        <Image
                          src={imagePath}
                          alt={item.configuration.modelId}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div className="flex-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gold">{item.configuration.doorType === 'ramove' ? 'Rámové' : 'Sendvičové'}</span>
                        <h3 className="font-heading text-sm font-black text-dark uppercase mt-0.5">
                          {item.configuration.modelId} — VARIANT {item.configuration.variantIndex}
                        </h3>
                        <p className="text-[10px] font-black text-gray- medium mt-1 uppercase tracking-wider">Množstvo: {item.quantity} ks</p>
                      </div>
                    </div>

                      <div className="space-y-3 text-[11px] leading-relaxed">
                        <div className="space-y-0.5">
                          <p className="font-black text-dark uppercase tracking-tighter text-[10px]">Rozmery</p>
                          <p className="text-gray-medium">— Výška stavebného otvoru [cm] → <span className="text-dark font-bold">{item.configuration.height} cm</span></p>
                          <p className="text-gray-medium">— Šírka stavebného otvoru [cm] → <span className="text-dark font-bold">{item.configuration.width} cm</span></p>
                          <p className="text-gray-medium">— Hrúbka muriva [cm] → <span className="text-dark font-bold">{item.configuration.thickness} cm</span></p>
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-gray-200/50">
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">CPL lamináty</span> — {item.configuration.colorName.replace('.png', '')}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">Konštrukčné prevedenie</span> — {
                            item.configuration.construction === 'plna-mdf' ? 'Plná MDF výplň' : 
                            item.configuration.construction === 'vostinove' ? 'Voštinová výplň' : 
                            item.configuration.construction === 'dutinkove' ? 'Dutinková drevotrieska' : 'Plná MDF výplň'
                          }</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">Typ skla</span> — {
                            item.configuration.glassType === 'none' ? 'Bez skla' :
                            item.configuration.glassType === 'matelux' ? 'Matelux' :
                            item.configuration.glassType === 'cincila' ? 'Činčila číra' :
                            item.configuration.glassType === 'dub-kora' ? 'Dubová kôra číra' : 'Matelux'
                          }</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">Typ otvárania</span> — {
                            item.configuration.openingType === 'otocne' ? 'Otočné' :
                            item.configuration.openingType === 'posuvne-stena' ? 'Na stenu' :
                            item.configuration.openingType === 'posuvne-puzdro' ? 'Do púzdra' :
                            item.configuration.openingType === 'lomene' ? 'Lomené' :
                            item.configuration.openingType === 'kyvne' ? 'Kyvné' :
                            item.configuration.openingType === 'protipoziarne' ? 'Protipožiarne' : 'Otočné'
                          }</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">Falcové/Bezfalcové dvere</span> — {item.configuration.frameType === 'falcove' ? 'Falcové dvere' : 'Bezfalcové dvere'}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">Kovanie - zámok</span> — {
                            item.configuration.lockType === 'dozicky-bb' ? 'Dózický zámok (BB)' :
                            item.configuration.lockType === 'wc-zamok' ? 'WC zámok (WC)' :
                            item.configuration.lockType === 'fab-zamok' ? 'Cylindrický zámok (PZ)' : 'Dózický zámok (BB)'
                          }</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">Montáž</span> — {item.configuration.assembly ? 'S montážou' : 'Bez montáže'}</p>
                        </div>
                      </div>
                  </div>
                );
              })}
              
              <div className="pt-6 border-t font-black uppercase tracking-[0.2em] text-dark flex justify-between items-center px-2">
                <span className="text-xs">Celkom dverí</span>
                <span className="text-xl">{items.reduce((sum, item) => sum + item.quantity, 0)} ks</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* GDPR & Submit */}
      <div className="mt-8 border-t border-gray-100 pt-8">
        <div className="flex items-start gap-3 mb-6">
          <input
            id="gdpr-inquiry"
            type="checkbox"
            required
            checked={formData.gdpr}
            onChange={(e) => updateField('gdpr', e.target.checked)}
            className="mt-1 w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
          />
          <label htmlFor="gdpr-inquiry" className="text-sm text-gray-medium">
            {t('terms')}
          </label>
        </div>
        <button
          type="submit"
          disabled={status === 'sending' || items.length === 0}
          className="w-full px-12 py-4 bg-primary text-white font-bold text-lg rounded-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50"
        >
          {status === 'sending' ? t('sending') : t('submit')}
        </button>
        {status === 'error' && (
          <p className="mt-3 text-red-600 text-sm font-semibold">{t('error')}</p>
        )}
      </div>
    </form>
  );
}

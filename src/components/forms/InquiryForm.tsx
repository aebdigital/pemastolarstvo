'use client';

import { useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { useCart } from '@/hooks/useCart';
import { getColorDisplayName } from '@/lib/colors';
import {
  getConfiguratorCopy,
  getConstructionLabel,
  getDoorTypeLabel,
  getFrameTypeLabel,
  getGlassTypeLabel,
  getLockTypeLabel,
  getOpeningTypeLabel,
} from '@/lib/configurator-i18n';
import { getSiteUiContent } from '@/lib/site-ui-content';
import PrivacyModal from '@/components/ui/PrivacyModal';

export default function InquiryForm() {
  const locale = useLocale() as Locale;
  const t = useTranslations('inquiry');
  const copy = getSiteUiContent(locale).inquiryForm;
  const configCopy = getConfiguratorCopy(locale);
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
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.gdpr || items.length === 0) return;

    setStatus('sending');
    try {
      const res = await fetch('/.netlify/functions/contact', {
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
        <p className="text-gray-medium max-w-2xl mx-auto">
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
            {copy.contactDetailsTitle}
          </h2>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {copy.firstName}
                </label>
                <input
                  type="text"
                  required
                  placeholder={copy.firstNamePlaceholder}
                  value={formData.firstName}
                  onChange={(e) => updateField('firstName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {copy.lastName}
                </label>
                <input
                  type="text"
                  required
                  placeholder={copy.lastNamePlaceholder}
                  value={formData.lastName}
                  onChange={(e) => updateField('lastName', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {copy.email}
              </label>
              <input
                type="email"
                required
                placeholder={copy.emailPlaceholder}
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {copy.phone}
              </label>
              <input
                type="tel"
                required
                placeholder={copy.phonePlaceholder}
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {copy.company}
              </label>
              <input
                type="text"
                placeholder={copy.companyPlaceholder}
                value={formData.company}
                onChange={(e) => updateField('company', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-dark mb-1">
                {copy.address}
              </label>
              <input
                type="text"
                required
                placeholder={copy.addressPlaceholder}
                value={formData.address}
                onChange={(e) => updateField('address', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {copy.city}
                </label>
                <input
                  type="text"
                  required
                  placeholder={copy.cityPlaceholder}
                  value={formData.city}
                  onChange={(e) => updateField('city', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-dark mb-1">
                  {copy.zipCode}
                </label>
                <input
                  type="text"
                  required
                  placeholder={copy.zipPlaceholder}
                  value={formData.zipCode}
                  onChange={(e) => updateField('zipCode', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mt-8 mb-4">{copy.additionalInfoTitle}</h3>
              <label className="block text-sm font-semibold text-dark mb-1">
                {copy.notes}
              </label>
              <textarea
                rows={4}
                placeholder={copy.notesPlaceholder}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none resize-y"
              />
            </div>
          </div>
        </div>

        {/* Order summary */}
        <div className="bg-white p-0 sm:p-8 rounded-3xl sm:shadow-premium sm:border border-gray-100 h-fit sticky top-32">
          <div className="flex flex-col items-center mb-10">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-2">{copy.summaryEyebrow}</span>
            <h2 className="font-heading text-2xl font-black text-dark uppercase tracking-widest text-center">
              {copy.summaryTitle}
            </h2>
          </div>

          {items.length === 0 ? (
            <div className="bg-light rounded-3xl p-12 text-center border-2 border-dashed border-gray-200">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-gray-300 shadow-sm">
                <i className="fas fa-shopping-cart text-2xl" />
              </div>
              <p className="text-gray-medium font-medium">{copy.emptyCart}</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item) => {
                return (
                  <div key={item.id} className="bg-light rounded-3xl p-6 border border-gray-100 shadow-inner-premium group">
                    <div className="flex gap-4 mb-4 pb-4 border-b border-gray-200/50">
                      <div className="flex-1">
                        <span className="text-[9px] font-black uppercase tracking-widest text-gold">{getDoorTypeLabel(locale, item.configuration.doorType)}</span>
                        <h3 className="font-heading text-lg font-black text-dark uppercase mt-0.5">
                          {item.configuration.modelId} — {configCopy.previewVariant} {item.configuration.variantIndex}
                        </h3>
                        <p className="text-[10px] font-black text-gray-medium mt-1 uppercase tracking-wider">{configCopy.quantity}: {item.quantity} {copy.pieces}</p>
                      </div>
                    </div>

                      <div className="space-y-3 text-[11px] leading-relaxed">
                        <div className="space-y-0.5">
                          <p className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.technicalDimensions}</p>
                          <p className="text-gray-medium">— {configCopy.dimensions.height} [cm] → <span className="text-dark font-bold">{item.configuration.height} cm</span></p>
                          <p className="text-gray-medium">— {configCopy.dimensions.width} [cm] → <span className="text-dark font-bold">{item.configuration.width} cm</span></p>
                          <p className="text-gray-medium">— {configCopy.dimensions.thickness} [cm] → <span className="text-dark font-bold">{item.configuration.thickness} cm</span></p>
                        </div>

                        <div className="space-y-1.5 pt-2 border-t border-gray-200/50">
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.colorDecor}</span> — {getColorDisplayName(item.configuration.color, locale)}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.constructionSummary}</span> — {getConstructionLabel(locale, item.configuration.construction)}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.glassSummary}</span> — {getGlassTypeLabel(locale, item.configuration.glassType)}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.openingSummary}</span> — {getOpeningTypeLabel(locale, item.configuration.openingType)}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.doorExecution}</span> — {getFrameTypeLabel(locale, item.configuration.frameType)}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.lockSummary}</span> — {getLockTypeLabel(locale, item.configuration.lockType)}</p>
                          <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[10px]">{configCopy.requestedAssembly}</span> — {item.configuration.assembly ? configCopy.yes : configCopy.no}</p>
                        </div>
                      </div>
                  </div>
                );
              })}
              
              <div className="pt-6 border-t font-black uppercase tracking-[0.2em] text-dark flex justify-between items-center px-2">
                <span className="text-xs">{copy.totalDoors}</span>
                <span className="text-xl">{items.reduce((sum, item) => sum + item.quantity, 0)} {copy.pieces}</span>
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
            className="mt-1 w-5 h-5 rounded border-gray-300 text-dark focus:ring-dark"
          />
          <label htmlFor="gdpr-inquiry" className="text-sm text-gray-medium">
            {copy.consentPrefix}{' '}
            <button
              type="button"
              onClick={() => setPrivacyOpen(true)}
              className="text-dark font-bold underline underline-offset-4 hover:text-gold transition-colors"
            >
              {copy.privacyPolicy}
            </button>
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
          <p className="mt-3 text-red-600 text-sm font-semibold">{copy.error}</p>
        )}
      </div>

      <PrivacyModal 
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />
    </form>
  );
}

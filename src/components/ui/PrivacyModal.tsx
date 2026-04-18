"use client";

import { useLocale } from "next-intl";
import type { Locale } from "@/i18n/routing";
import { getSiteUiContent } from "@/lib/site-ui-content";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const locale = useLocale() as Locale;
  const copy = getSiteUiContent(locale).privacy;
  const connector = locale === "en" ? "or" : locale === "de" ? "oder" : "alebo";

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 z-[300000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-10 text-dark shadow-2xl border border-gray-100"
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
          <h3 className="text-2xl font-heading font-black uppercase tracking-wider">
            {copy.title}
          </h3>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-light text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-premium shadow-sm"
          >
            <i className="fas fa-times" />
          </button>
        </div>
        
        <div className="space-y-8 text-sm leading-relaxed text-gray-medium font-medium">
          <div className="bg-light p-6 rounded-2xl border border-gray-100 italic">
            {copy.companyCard.map((line, index) => (
              <p key={line} className={index === 0 ? "font-bold text-dark mb-2" : undefined}>
                {line}
              </p>
            ))}
          </div>

          <p>
            {copy.contactConsentText}
          </p>

          <section>
            <h4 className="text-dark font-black uppercase tracking-widest mb-4">{copy.contactForm.title}</h4>
            <p className="mb-4">{copy.contactForm.intro}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {copy.contactForm.uses.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            
            <p className="font-bold text-dark mb-2">{copy.contactForm.scopeLabel}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {copy.contactForm.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="font-bold text-dark mb-2">{copy.contactForm.purposeLabel}</p>
            <p className="mb-4">{copy.contactForm.purpose}</p>

            <p className="font-bold text-dark mb-2">{copy.contactForm.legalBasisLabel}</p>
            <p className="mb-4">{copy.contactForm.legalBasis}</p>

            <p className="font-bold text-dark mb-2">{copy.contactForm.retentionLabel}</p>
            <p>{copy.contactForm.retention}</p>
          </section>

          <section>
            <h4 className="text-dark font-black uppercase tracking-widest mb-4">{copy.cookiesSection.title}</h4>
            <p className="mb-4">{copy.cookiesSection.intro}</p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
              {copy.cookiesSection.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="font-bold text-dark mb-2">{copy.cookiesSection.consentLabel}</p>
            <p>{copy.cookiesSection.consent}</p>
          </section>

          <section>
            <h4 className="text-dark font-black uppercase tracking-widest mb-4">{copy.rightsSection.title}</h4>
            <p className="mb-4">{copy.rightsSection.intro}</p>
            <ul className="list-disc pl-5 space-y-2">
              {copy.rightsSection.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-6">
              {copy.contactRightsText}{" "}
              <a href="mailto:pmpprodukt@gmail.com" className="text-gold font-bold hover:underline">
                {copy.contactEmailLabel}
              </a>{" "}
              {connector}{" "}
              <a href="tel:0948380618" className="text-gold font-bold hover:underline">
                {copy.contactPhoneLabel}
              </a>
              .
            </p>
          </section>

          <p className="pt-8 border-t border-gray-100 font-bold text-dark">{copy.effectiveDate}</p>
        </div>
      </div>
    </div>
  );
}

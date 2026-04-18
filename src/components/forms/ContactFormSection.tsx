'use client';

import { useLocale } from 'next-intl';
import type { Locale } from '@/i18n/routing';
import { getSiteUiContent } from '@/lib/site-ui-content';
import ContactForm from './ContactForm';

interface ContactFormSectionProps {
  section?: 'dvere' | 'stolarstvo';
}

export default function ContactFormSection({ section = 'dvere' }: ContactFormSectionProps) {
  const locale = useLocale() as Locale;
  const copy = getSiteUiContent(locale).contactFormSection;

  return (
    <section className="contact-form-section">
      <div className="container mx-auto px-4">
        <div className="contact-form-content">
          <div className="contact-text">
            <h2 className="heading-section">
              {copy.title[0]}<br />{copy.title[1]}
            </h2>
            <p>
              {copy.description[0]}<br />{copy.description[1]}
            </p>
          </div>

          <ContactForm section={section} />
        </div>
      </div>
    </section>
  );
}

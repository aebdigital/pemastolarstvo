'use client';

import ContactForm from './ContactForm';

interface ContactFormSectionProps {
  section?: 'dvere' | 'stolarstvo';
}

export default function ContactFormSection({ section = 'dvere' }: ContactFormSectionProps) {
  return (
    <section className="contact-form-section">
      <div className="container mx-auto px-4">
        <div className="contact-form-content">
          <div className="contact-text">
            <h2 className="heading-section">
              MÁTE NA NÁS<br />OTÁZKY?
            </h2>
            <p>
              Vyplňte formulár a my sa vám<br />čo najskôr ozveme späť.
            </p>
          </div>

          <ContactForm section={section} />
        </div>
      </div>
    </section>
  );
}

import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import ContactFormSection from '@/components/forms/ContactFormSection';
import PageHero from '@/components/ui/PageHero';
import { getContactPageCopy } from '@/lib/contact-page-content';
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
    namespace: 'metadata.carpentry.contact',
  });

  return buildPageMetadata({
    locale,
    pathname: '/stolarstvo/kontakt',
    title: t('title'),
    description: t('description'),
    image: '/sources/leftnabytok.jpg',
  });
}

export default async function StolarstvoKontaktPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getContactPageCopy(locale);

  return (
    <main>
      <PageHero title={copy.pageTitle} image="/sources/leftnabytok.jpg" />

      {/* Contact Content */}
      <section className="contact-content-section">
        <div className="container mx-auto px-4">
          <div className="contact-sections">
            {/* Sídlo */}
            <div className="contact-section">
              <div className="section-content">
                <h2>{copy.headquartersTitle}</h2>
                <h3 className="text-xl font-bold text-dark mb-4">{copy.companyName}</h3>

                <div className="address-info">
                  <p>
                    <a
                      href="https://maps.google.com/?q=Vyšná Jedľová 37, 089 01 Svidník"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="address-link"
                    >
                      Vyšná Jedľová 37<br />
                      089 01 Svidník<br />
                      {copy.country}
                    </a>
                  </p>
                </div>

                <div className="contact-details">
                  <p><strong>{copy.phoneFaxLabel}:</strong> <a href="tel:+421948380618" className="phone-link">0948 380 618</a></p>
                  <p><strong>{copy.mobileLabel}:</strong> <a href="tel:+421914225257" className="phone-link">0914 225 257</a></p>
                  <p><strong>{copy.emailLabel}:</strong> <a href="mailto:pmpprodukt@gmail.com" className="email-link">pmpprodukt@gmail.com</a></p>

                  <div className="opening-hours">
                    <p><strong>{copy.hours}</strong></p>
                    <ul>
                      <li>{copy.hoursByAppointment}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="section-image">
                <Image
                  src="/sources/SIDLO.jpg"
                  alt={copy.headquartersAlt}
                  width={800}
                  height={250}
                  className="location-image"
                />
              </div>

              <div className="section-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.844!2d21.57447!3d49.31139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e0c5f8c5f8c5f%3A0x5f8c5f8c5f8c5f8c!2sVy%C5%A1n%C3%A1%20Jed%C4%BEov%C3%A1%2037%2C%20089%2001%20Svidn%C3%ADk!5e0!3m2!1ssk!2ssk!4v1641234567890!5m2!1ssk!2ssk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={copy.headquartersMapTitle}
                />
              </div>
            </div>

            {/* Showroom */}
            <div className="contact-section">
              <div className="section-content">
                <h2>{copy.showroomTitle}</h2>
                <h3 className="text-xl font-bold text-dark mb-4">{copy.showroomName}</h3>

                <div className="address-info">
                  <p>
                    <a
                      href="https://maps.google.com/?q=Vyšná Jedľová 37, 089 01 Svidník"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="address-link"
                    >
                      Vyšná Jedľová 37<br />
                      089 01 Svidník<br />
                      {copy.country}
                    </a>
                  </p>
                </div>

                <div className="contact-details">
                  <p><strong>{copy.phoneFaxLabel}:</strong> <a href="tel:+421948380618" className="phone-link">0948 380 618</a></p>
                  <p><strong>{copy.mobileLabel}:</strong> <a href="tel:+421914225257" className="phone-link">0914 225 257</a></p>
                  <p><strong>{copy.emailLabel}:</strong> <a href="mailto:pemastolarstvo@gmail.com" className="email-link">pemastolarstvo@gmail.com</a></p>

                  <div className="opening-hours">
                    <p><strong>{copy.hours}</strong></p>
                    <ul>
                      <li>{copy.hoursByAppointment}</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="section-image">
                <Image
                  src="/sources/Showroom foto.jpg"
                  alt={copy.showroomAlt}
                  width={800}
                  height={250}
                  className="location-image"
                />
              </div>

              <div className="section-map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2585.844!2d21.57447!3d49.31139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473e0c5f8c5f8c5f%3A0x5f8c5f8c5f8c5f8c!2sStropkovsk%C3%A1%20568%2C%20089%2001%20Svidn%C3%ADk!5e0!3m2!1ssk!2ssk!4v1641234567890!5m2!1ssk!2ssk"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={copy.showroomMapTitle}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection section="stolarstvo" />
    </main>
  );
}

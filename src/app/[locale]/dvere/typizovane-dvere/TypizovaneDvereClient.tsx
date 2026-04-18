'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import PageHero from '@/components/ui/PageHero';
import { Link } from '@/i18n/routing';
import ContactFormSection from '@/components/forms/ContactFormSection';
import type { Locale } from '@/i18n/routing';

const pageCopy: Record<
    Locale,
    {
        advantages: string[];
        advantagesTitle: string;
        catalog: string;
        configurator: string;
        disadvantages: string[];
        disadvantagesTitle: string;
        heroSubtitle: string;
        heroTitle: string;
        introBody: string;
        introTitle: string;
        sectionBody: string;
        sectionTitle: string;
        tableLink: string;
    }
> = {
    sk: {
        advantages: [
            'Lacnejšie oproti atypickým.',
            'Dostupnejšie v rôznych obchodných reťazcoch.',
        ],
        advantagesTitle: 'VÝHODY TYPIZOVANÝCH DVERÍ:',
        catalog: 'Katalóg',
        configurator: 'Konfigurátor',
        disadvantages: [
            'Potrebné dodržať presnú šírku a výšku stavebného otvoru (viď tabuľka nižšie).',
            'V bytových domoch alebo starších rodinných domoch je častokrát potrebné upraviť stavebné otvory, s čím sú spojené nepríjemnosti (prašnosť, hlučnosť, mokrý a zdĺhavý proces osadenia dverí).',
        ],
        disadvantagesTitle: 'NEVÝHODY TYPIZOVANÝCH DVERÍ:',
        heroSubtitle: 'Štandardné rozmery podľa STN normy pre váš interiér',
        heroTitle: 'TYPIZOVANÉ DVERE',
        introBody: 'Typizované dvere sú riešením pre všetkých, ktorí hľadajú kvalitné interiérové dvere v štandardných rozmeroch. Tieto dvere sú navrhnuté podľa STN normy 1970 a ponúkajú optimálny pomer ceny a kvality. Sú ideálne pre nové stavby alebo rekonštrukcie, kde je možné pripraviť stavebný otvor v presných rozmeroch.',
        introTitle: 'ŠTANDARDNÉ ROZMERY',
        sectionBody: 'Typizované dvere sú dvere, ktorých výška a šírka je vopred daná podľa STN normy 1970. Na zaklade nej sa musí pripraviť aj stavebný otvor v presných rozmeroch.',
        sectionTitle: 'TYPIZOVANÉ\nINTERIÉROVÉ\nDVERE',
        tableLink: 'Tabuľka pre typizované šírky a výšky',
    },
    en: {
        advantages: [
            'More affordable than custom-made doors.',
            'More readily available across different retail chains.',
        ],
        advantagesTitle: 'ADVANTAGES OF STANDARD DOORS:',
        catalog: 'Catalogue',
        configurator: 'Configurator',
        disadvantages: [
            'The exact width and height of the rough opening must be respected (see the table below).',
            'In apartment buildings or older family houses, rough openings often need to be adjusted, which brings inconvenience such as dust, noise, and a wet, time-consuming installation process.',
        ],
        disadvantagesTitle: 'DISADVANTAGES OF STANDARD DOORS:',
        heroSubtitle: 'Standard sizes according to the STN standard for your interior',
        heroTitle: 'STANDARD DOORS',
        introBody: 'Standard doors are the right solution for everyone looking for quality interior doors in standard dimensions. These doors are designed according to the STN 1970 standard and offer an optimal balance of price and quality. They are ideal for new builds or renovations where the rough opening can be prepared in exact dimensions.',
        introTitle: 'STANDARD SIZES',
        sectionBody: 'Standard doors are doors whose height and width are predefined according to the STN 1970 standard. Based on it, the rough opening must also be prepared in exact dimensions.',
        sectionTitle: 'STANDARD\nINTERIOR\nDOORS',
        tableLink: 'Table for standard widths and heights',
    },
    de: {
        advantages: [
            'Günstiger als Sonderanfertigungen.',
            'Leichter in verschiedenen Handelsketten verfügbar.',
        ],
        advantagesTitle: 'VORTEILE VON STANDARDTÜREN:',
        catalog: 'Katalog',
        configurator: 'Konfigurator',
        disadvantages: [
            'Die genaue Breite und Höhe der Rohbauöffnung muss eingehalten werden (siehe Tabelle unten).',
            'In Wohnhäusern oder älteren Einfamilienhäusern müssen die Rohbauöffnungen oft angepasst werden, was Unannehmlichkeiten wie Staub, Lärm und einen nassen, langwierigen Einbauprozess mit sich bringt.',
        ],
        disadvantagesTitle: 'NACHTEILE VON STANDARDTÜREN:',
        heroSubtitle: 'Standardmaße nach STN-Norm für Ihr Interieur',
        heroTitle: 'STANDARDTÜREN',
        introBody: 'Standardtüren sind die richtige Lösung für alle, die hochwertige Innentüren in Standardmaßen suchen. Diese Türen werden nach der STN-Norm 1970 gefertigt und bieten ein optimales Verhältnis von Preis und Qualität. Sie eignen sich ideal für Neubauten oder Renovierungen, bei denen die Rohbauöffnung exakt vorbereitet werden kann.',
        introTitle: 'STANDARDMAßE',
        sectionBody: 'Standardtüren sind Türen, deren Höhe und Breite im Voraus nach der STN-Norm 1970 festgelegt sind. Danach muss auch die Rohbauöffnung in exakten Maßen vorbereitet werden.',
        sectionTitle: 'STANDARD\nINNEN\nTÜREN',
        tableLink: 'Tabelle für Standardbreiten und -höhen',
    },
};

export default function TypizovaneDvereClient() {
    const locale = useLocale() as Locale;
    const copy = pageCopy[locale];

    return (
        <main>
            <PageHero title={copy.heroTitle} subtitle={copy.heroSubtitle} image="/sources/interierove/type.webp" />

            {/* Intro Section */}
            <section className="door-intro-section">
                <div className="door-intro-content">
                    <div className="intro-text">
                        <h2>{copy.introTitle}</h2>
                        <p>{copy.introBody}</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a href="/sources/1.pdf" className="btn-gold-link" target="_blank" rel="noopener noreferrer">{copy.catalog}</a>
                        </div>
                    </div>
                    <div className="intro-image">
                        <div style={{ position: 'relative', width: '50%', aspectRatio: '3/5', margin: '0 auto' }}>
                            <Image src="/sources/interierove/type.webp" alt={copy.heroTitle} fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Typized Main Section */}
            <section className="typized-section">
                <div className="typized-content">
                    <div className="typized-text">
                        <h2>{copy.sectionTitle.split('\n').map((line, index) => <span key={line}>{index > 0 && <br />}{line}</span>)}</h2>
                        <p>{copy.sectionBody}</p>

                        <div style={{ marginBottom: '48px' }}>
                            <Link href="/dvere/tabulka" className="link-brown">
                                {copy.tableLink}
                            </Link>
                        </div>

                        <Link href="/dvere/konfigurator" className="btn-gold-link">
                            <i className="fas fa-cogs" style={{ marginRight: '8px' }} />
                            {copy.configurator}
                        </Link>
                    </div>

                    <div className="typized-image">
                        <Image src="/sources/interierove/type.webp" alt={copy.heroTitle} width={200} height={400} style={{ borderRadius: '10px' }} />
                    </div>

                    <div>
                        <div className="advantage-box advantage-green">
                            <h3>{copy.advantagesTitle}</h3>
                            <ul>
                                {copy.advantages.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="advantage-box advantage-red">
                            <h3>{copy.disadvantagesTitle}</h3>
                            <ul>
                                {copy.disadvantages.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection />
        </main>
    );
}

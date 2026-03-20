'use client';

import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import { Link } from '@/i18n/routing';
import ContactFormSection from '@/components/forms/ContactFormSection';

export default function TypizovaneDvereClient() {
    return (
        <main>
            <PageHero title="TYPIZOVANÉ DVERE" subtitle="Štandardné rozmery podľa STN normy pre váš interiér" image="/sources/interierove/type.webp" />

            {/* Intro Section */}
            <section className="door-intro-section">
                <div className="door-intro-content">
                    <div className="intro-text">
                        <h2>ŠTANDARDNÉ ROZMERY</h2>
                        <p>Typizované dvere sú riešením pre všetkých, ktorí hľadajú kvalitné interiérové dvere v štandardných rozmeroch. Tieto dvere sú navrhnuté podľa STN normy 1970 a ponúkajú optimálny pomer ceny a kvality. Sú ideálne pre nové stavby alebo rekonštrukcie, kde je možné pripraviť stavebný otvor v presných rozmeroch.</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a href="/sources/1.pdf" className="btn-gold-link" target="_blank" rel="noopener noreferrer">Katalóg</a>
                        </div>
                    </div>
                    <div className="intro-image">
                        <div style={{ position: 'relative', width: '50%', aspectRatio: '3/5', margin: '0 auto' }}>
                            <Image src="/sources/interierove/type.webp" alt="Typizované dvere showcase" fill className="object-contain" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Typized Main Section */}
            <section className="typized-section">
                <div className="typized-content">
                    <div className="typized-text">
                        <h2>TYPIZOVANÉ<br />INTERIÉROVÉ<br />DVERE</h2>
                        <p>Typizované dvere sú dvere, ktorých výška a šírka je vopred daná podľa STN normy 1970. Na zaklade nej sa musí pripraviť aj stavebný otvor v presných rozmeroch.</p>

                        <div style={{ marginBottom: '48px' }}>
                            <Link href="/dvere/tabulka" className="link-brown">
                                Tabuľka pre typizované šírky a výšky
                            </Link>
                        </div>

                        <Link href="/dvere/konfigurator" className="btn-gold-link">
                            <i className="fas fa-cogs" style={{ marginRight: '8px' }} />
                            Konfigurátor
                        </Link>
                    </div>

                    <div className="typized-image">
                        <Image src="/sources/interierove/type.webp" alt="Typizované dvere" width={200} height={400} style={{ borderRadius: '10px' }} />
                    </div>

                    <div>
                        <div className="advantage-box advantage-green">
                            <h3>VÝHODY TYPIZOVANÝCH DVERÍ:</h3>
                            <ul>
                                <li>Lacnejšie oproti atypickým.</li>
                                <li>Dostupnejšie v rôznych obchodných reťazcoch.</li>
                            </ul>
                        </div>

                        <div className="advantage-box advantage-red">
                            <h3>NEVÝHODY TYPIZOVANÝCH DVERÍ:</h3>
                            <ul>
                                <li>Potrebné dodržať presnú šírku a výšku stavebného otvoru (viď tabuľka nižšie).</li>
                                <li>V bytových domoch alebo starších rodinných domoch je častokrát potrebné upraviť stavebné otvory, s čím sú spojené nepríjemnosti (prašnosť, hlučnosť, mokrý a zdĺhavý proces osadenia dverí).</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection />
        </main>
    );
}

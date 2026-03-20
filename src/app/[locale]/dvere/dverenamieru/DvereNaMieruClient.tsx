'use client';

import Image from 'next/image';
import PageHero from '@/components/ui/PageHero';
import { Link } from '@/i18n/routing';
import ContactFormSection from '@/components/forms/ContactFormSection';

export default function DvereNaMieruClient() {
    return (
        <main>
            <PageHero title="DVERE NA MIERU" subtitle="Atypické interiérové dvere presne podľa vašich rozmerov a predstáv" image="/sources/interierove/interier.webp" />

            {/* Intro Section */}
            <section className="door-intro-section">
                <div className="door-intro-content">
                    <div className="intro-text">
                        <h2>AŽ K VAŠIM DVERÁM</h2>
                        <p>Interiérové dvere sú dominantou interiéru. Pomáhajú budovať celkový dojem a vytvárajú plynulý prechod medzi jednotlivými časťami vášho domova tak, aby sa spojili v jednom výnimočnom a útulnom celku. Každý detail je preto potrebné zvážiť a venovať mu potrebnú dávku pozornosti. Preto máte v rámci našich služieb kompletný servis od zamerania, výroby, dodávky až po montáž.</p>
                        <div style={{ marginTop: '1.5rem' }}>
                            <a href="/sources/katalog-namieru.pdf" className="btn-gold-link" target="_blank" rel="noopener noreferrer">Katalóg</a>
                        </div>
                    </div>
                    <div className="intro-image">
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '4/5' }}>
                            <Image src="/sources/interierove/interier.webp" alt="Interiérové dvere showcase" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality / Materials Section */}
            <section className="quality-section">
                <div className="quality-layout">
                    <div className="quality-left">
                        <Image src="/sources/interierove/interier1.webp" alt="Interiérové dvere - materiály" fill className="object-cover" />
                    </div>
                    <div className="quality-right">
                        <Image src="/sources/interierove/interier2.webp" alt="Background" fill className="object-cover" />
                        <div className="quality-overlay">
                            <h2 className="quality-title">MATERIÁLY A POVRCHOVÉ ÚPRAVY</h2>
                            <p>Pracujeme s laminátovou povrchovou úpravou, ktorá sa vyznačuje vysokou odolnosťou voči oderu či poškriabaniu. Laminát sa ľahko udržiava a čistí, keďže nesaje žiadne kvapaliny. Farebne identický CPL laminát používame aj na zárubniach a zasklievacích lištách, aby celkový výsledok pôsobil esteticky a prirodzene.</p>
                            <h3>Lamináty EGGER a KAINDL</h3>
                            <p>sú dokonalou imitáciou prírodných drevín ako je dyha, či drevený masív. Na rozdiel od dyhy a masívu je laminát stálofarebný. Koncern EGGER a KAINDL sú výrobcami veľkoplošného materiálu, pracovných dosák a podláh, takže farebné prevedenie dverí a interiéru môže byť identické.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="details-section">
                <div className="container mx-auto px-4">
                    <div className="details-header-content">
                        <h2>CHCETE PRAKTICKÉ RIEŠENIA<br />PREMYSLENÉ DO DETAILOV?</h2>
                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9' }}>
                            <Image src="/sources/interierove/interierove3.webp" alt="Interiérové dvere detail" fill className="object-cover" />
                        </div>
                    </div>

                    <div className="details-grid">
                        <div className="detail-item">
                            <h3>Hrany</h3>
                            <p>Dlhobočné skúsenosti nás naučili, že každá maličkosť je rozhodujúca. Preto je napríklad na našich dverách namiesto papierovej falcovej hrany použitá odolná, farebne zladená ABS hrana HRANIPEX. Falc dverí je totiž najviac namáhanou časťou.</p>
                        </div>
                        <div className="detail-item">
                            <h3>Spoje</h3>
                            <p>Najviac namáhanou časťou zárubne je zase jej stredová časť. Preto sme ostrú hranu ofrézovali na rádius 6 mm a následne sme ju obalili CPL laminátom. Vznikol tak krajší a bezpečnejší jednoliaty diel zárubne, ktorý nemá viditeľný ostrý spoj doska-lepidlo-hrana.</p>
                            <h3>Typ spoja na zárubni:</h3>
                            <ul style={{ paddingLeft: '24px', color: '#666', fontFamily: 'var(--font-body)' }}>
                                <li>45 stupňový uhol (klasický spoj)</li>
                                <li>90 stupňový uhol (tzv. tupý spoj)</li>
                            </ul>
                        </div>
                        <div className="detail-item">
                            <h3>Zámok</h3>
                            <p>V dverách je osadený kvalitný zámok talianskej firmy AGB s elegantným pochromovaným kľúčom. Vo falcových zárubniach sú osadené bezúdržbové závesy s teflonovou stopkou, aby sa predišlo vrzganiu dverí. Tie sú osadené v pevných kovových nemeckých kapsách Simonswerk, ktoré sú pevnejšie než plastové kapsy a majú vyššiu nosnosť.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom Doors Section (dark) */}
            <section className="custom-doors-section">
                <div className="custom-bg">
                    <Image src="/sources/homepage/vynimocny.webp" alt="" fill className="object-cover" />
                </div>

                <div className="custom-content">
                    <div className="custom-text">
                        <h2>INTERIÉROVÉ DVERE<br /><span className="highlight">NA MIERU</span></h2>
                        <div className="custom-features">
                            <h3>Máte špecifické požiadavky?</h3>
                            <p>Ak potrebujete dvere v rozmeroch, ktoré na trhu nie sú dostupné, alebo váš otvor nezodpovedá STN, obráťte sa na nás. Dokážeme dodať dvere v šírke od 52 do 112 cm a výške od 182 do 210 cm vrátane zárubní.</p>
                            <h3>Sme otvorený vašim predstavám</h3>
                            <p>Sme pripravení na atypické priestory i neštandardné požiadavky. Interiérové dvere a zárubne dodávame štandardne do 2 mesiacov. Ozvite sa nám a my urobíme všetko pre vaše pohodlie a spokojnosť.</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="checklist-heading">VÝHODY DVERÍ NA MIERU:</h3>
                        <ul className="checklist-green" style={{ padding: '24px', margin: '0 0 24px 0' }}>
                            <li>Nie je potrebné upravovať stavebné otvory (šírku ani výšku),</li>
                            <li>Je možné prekryť starú železnú, alebo inú zárubňu, pomocou už novej drevenej obložky,</li>
                            <li>Odpadáva práca s murovaním, stierkovaním, maľovaním a pod.,</li>
                            <li>Aj napriek o niečo vyššej cene je to menej invazívny zásah (bez prachu a neporiadku, bez mokrého procesu).</li>
                        </ul>

                        <h3 className="checklist-heading cons">NEVÝHODY DVERÍ NA MIERU:</h3>
                        <ul className="checklist-red" style={{ padding: '24px', margin: '0' }}>
                            <li>Vyššia cena oproti typizovaným dverám.</li>
                        </ul>
                    </div>
                </div>

                {/* Configurator CTA */}
                <div className="configurator-content">
                    <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '4/3', margin: '0 auto' }}>
                        <Image src="/sources/interierove/3img.webp" alt="3 doors showcase" fill className="object-contain" />
                    </div>
                    <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '1.4rem', color: 'white', lineHeight: 1.4, marginBottom: '48px' }}>
                            Navrhnite si dvere online.<br />Vyskúšajte náš konfigurátor<br />dverí na mieru.
                        </p>
                        <Link href="/dvere/konfigurator" className="btn-gold-link">
                            <i className="fas fa-cogs" style={{ marginRight: '8px' }} />
                            Konfigurátor
                        </Link>
                    </div>
                </div>
            </section>

            {/* Systems Section */}
            <section className="systems-section">
                <div className="container mx-auto px-4">
                    <h2>SYSTÉMY OTVÁRANIA</h2>

                    <div className="systems-grid">
                        <div className="system-item">
                            <h3>Otočné dvere</h3>
                            <p>Tvoria najširšiu skupinu interiérových dverí. Dodávame ich ako jednokrídlové dvere v štandardizovaných veľkostiach 60, 70, 80, 90 (100 a 110 na objednávku) a dvojkrídlové dvere vo veľkostiach 125, 145, 165 a 185. Tento rad dverí sa delí na falcové a bezfalcové dvere.</p>
                        </div>
                        <div className="system-item">
                            <h3>Falcové dvere</h3>
                            <p>Tento typ dverí má po obvode krídla vytvorenú polodrážku, ktorá pri zatvorení prekryje medzeru medzi dverami a zárubňou.</p>
                        </div>
                        <div className="system-item">
                            <h3>Bezfalcové dvere</h3>
                            <p>Predstavujú trend v interiérovom dizajne. Pri tomto modernom riešení sú dvere zapustené na úroveň obložiek, čo vytvára jednotnú plochu dverí so zárubňou. Navyše 3D skryté závesy umožňujú otvorenie dverí plných 180° a nastavenie dverí až v troch rôznych smeroch. Zamykanie zabezpečuje magnetický zámok.</p>
                        </div>
                    </div>

                    <div className="systems-grid">
                        <div className="system-item">
                            <h3>Dvere posuvné pred stenu</h3>
                            <p>Posuvné dvere majú dômyselnú mechaniku. Tá je zabudovaná v hornej vodiacej koľajnici, ktorá umožňuje ľahký pohyb krídiel dverí do strán pri ich odsúvaní. Pri dvojkrídlovom variante je možné krídla odsúvať jednotlivo alebo synchrónne.</p>
                            <p>Obložková zárubňa sa montuje tak, aby posuvné dvere čo možno najtesnejšie priliehali k zárubni.</p>
                        </div>
                        <div className="system-item">
                            <h3>Dvere do púzdra steny</h3>
                            <p>Dvere do stavebného puzdra dodávame ako jednokrídlové bezfalcové posuvné dvere vo veľkostiach 60, 70, 80, 90 (100 a 110 na objednávku) a dvojkrídlové vo veľkostiach 125, 145, 165 a 185, pričom typový rad je podriadený štandardizovanému stavebnému puzdru. Hrúbka dverí je 4 cm.</p>
                        </div>
                        <div className="system-item">
                            <h3>Lamelové-harmonikové dvere</h3>
                            <p>Ideálne do zúžených priestorov, ktoré neumožňujú plné otvorenie klasických dverí. Po otvorení tohto typu dverí pretŕča približne 1/3 šírky krídla do obidvoch strán miestností. Svetlosť prechodu je znížená približne o 10 cm.</p>
                        </div>
                    </div>

                    <div className="systems-grid">
                        <div className="system-item">
                            <h3>Kyvné dvere</h3>
                            <p>Vhodné najmä do podnikov, kde frekvencia pohybu personálu cez dvere neumožňuje otváranie dverí manuálne, ale pohybom tela. Tieto dvere sa vyrábajú ako jednokrídlové vo veľkostiach 60, 70, 80, 90 (100 a 110 na objednávku).</p>
                        </div>
                        <div className="system-item">
                            <h3>Dvere s nadsvetlíkom</h3>
                            <p>Máte tmavú chodbu? Zárubne s nadsvetlíkom ju presvetlia. Do takýchto zárubní sa osadzujú štandardizované otočné dvere buď jednokrídlové vo veľkostiach 60, 70, 80, 90, alebo dvojkrídlové dvere vo veľkostiach 125, 145, 165 a 185.</p>
                        </div>
                        <div className="system-item">
                            <h3>Stena s dverami</h3>
                            <p>Ak nechcete, aby vám zbytočne unikalo teplo pri vstupe do domu, siahnite po stene s dverami. Tie môžu byť otočné alebo posuvné. Farba steny s nadsvetlíkom ako aj prisvetlíkom je pritom totožná s interierovými dverami.</p>
                        </div>
                    </div>
                </div>
            </section>

            <ContactFormSection />
        </main>
    );
}

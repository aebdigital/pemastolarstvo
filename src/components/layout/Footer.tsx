"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const [privacyOpen, setPrivacyOpen] = useState(false);

  return (
    <>
      <footer className="bg-dark text-white">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Showroom */}
            <div>
              <h4 className="font-heading font-bold text-gold mb-4">
                {t("showroomTitle")}
              </h4>
              <p className="text-gray-300 text-sm whitespace-pre-line">
                {t("showroomAddress")}
              </p>
            </div>

            {/* Headquarters */}
            <div>
              <h4 className="font-heading font-bold text-gold mb-4">
                {t("headquartersTitle")}
              </h4>
              <p className="text-gray-300 text-sm whitespace-pre-line">
                {t("headquartersAddress")}
              </p>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading font-bold text-gold mb-4">
                {t("contactTitle")}
              </h4>
              <div className="space-y-2 text-sm text-gray-300">
                <a
                  href="tel:+421948380618"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <i className="fas fa-phone text-xs" />
                  0948 380 618
                </a>
                <a
                  href="tel:+421914225257"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <i className="fas fa-phone text-xs" />
                  0914 225 257
                </a>
                  <a
                  href="mailto:pmpprodukt@gmail.com"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <i className="fas fa-envelope text-xs" />
                  pmpprodukt@gmail.com
                </a>
                <a
                  href="mailto:pemastolarstvo@gmail.com"
                  className="flex items-center gap-2 hover:text-white"
                >
                  <i className="fas fa-envelope text-xs" />
                  pemastolarstvo@gmail.com
                </a>
              </div>
            </div>

            {/* Collaboration */}
            <div>
              <h4 className="font-heading font-bold text-gold mb-4">
                {t("collaborationTitle")}
              </h4>
              <p className="text-gray-300 text-sm">{t("collaborationText")}</p>
              <div className="mt-4 flex gap-3">
                <a
                  href="https://www.facebook.com/groups/808946886107207/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PMP-Produkt s.r.o.{" "}
              {t("allRightsReserved")}
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setPrivacyOpen(true)}
                className="hover:text-white transition-colors"
              >
                {t("privacyPolicy")}
              </button>
              <Link
                href="/dvere/kontakt"
                className="hover:text-white transition-colors"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Privacy Policy Modal */}
      {privacyOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
          onClick={() => setPrivacyOpen(false)}
        >
          <div
            className="bg-white rounded-3xl max-w-3xl w-full max-h-[80vh] overflow-y-auto p-10 text-dark shadow-2xl border border-gray-100"
            onClick={(e) => e.stopPropagation()}
            data-lenis-prevent
          >
            <div className="flex justify-between items-center mb-8 pb-6 border-b border-gray-100">
              <h3 className="text-2xl font-heading font-black uppercase tracking-wider">
                Ochrana osobných údajov
              </h3>
              <button
                onClick={() => setPrivacyOpen(false)}
                className="w-10 h-10 rounded-full bg-light text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-premium shadow-sm"
              >
                <i className="fas fa-times" />
              </button>
            </div>
            
            <div className="space-y-8 text-sm leading-relaxed text-gray-medium font-medium">
              <div className="bg-light p-6 rounded-2xl border border-gray-100 italic">
                <p className="font-bold text-dark mb-2">PMP-Produkt s.r.o</p>
                <p>Vyšná Jedľová 37</p>
                <p>089 01 Vyšná Jedľová, Slovenská republika</p>
                <p>IČO: 53568630, DIČ: 2121418354</p>
                <p>IČ DPH: SK2121418354, podľa §4, registrácia od 23.12.2022</p>
                <p>E-mail: pmpprodukt@gmail.com</p>
                <p>Tel.: 0948 380 618</p>
              </div>

              <p>
                Tieto Zásady ochrany osobných údajov (ďalej len „Zásady") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.
              </p>

              <section>
                <h4 className="text-dark font-black uppercase tracking-widest mb-4">I. Kontaktný formulár</h4>
                <p className="mb-4">Na stránke prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Položiť otázku k našim produktom a službám</li>
                  <li>Požiadať o cenovú ponuku</li>
                </ul>
                
                <p className="font-bold text-dark mb-2">Rozsah spracúvaných údajov:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Meno a priezvisko</li>
                  <li>E-mailová adresa</li>
                  <li>Telefónne číslo</li>
                </ul>

                <p className="font-bold text-dark mb-2">Účel spracovania:</p>
                <p className="mb-4">Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.</p>

                <p className="font-bold text-dark mb-2">Právny základ:</p>
                <p className="mb-4">Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.</p>

                <p className="font-bold text-dark mb-2">Doba uchovávania:</p>
                <p>Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.</p>
              </section>

              <section>
                <h4 className="text-dark font-black uppercase tracking-widest mb-4">II. Súbory cookies</h4>
                <p className="mb-4">Na našej webovej stránke používame cookies výlučne na nasledujúce účely:</p>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li><span className="font-bold text-dark">Nevyhnutné cookies</span> – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).</li>
                  <li><span className="font-bold text-dark">Štatistické (analytické) cookies</span> – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).</li>
                </ul>
                <p className="font-bold text-dark mb-2">Správa súhlasov:</p>
                <p>Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.</p>
              </section>

              <section>
                <h4 className="text-dark font-black uppercase tracking-widest mb-4">III. Práva dotknutej osoby</h4>
                <p className="mb-4">Podľa nariadenia GDPR máte nasledujúce práva:</p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Prístup k osobným údajom, ktoré spracúvame</li>
                  <li>Oprava nepresných alebo neúplných údajov</li>
                  <li>Vymazanie („právo zabudnutia"), ak na spracovanie už nie je právny základ</li>
                  <li>Obmedzenie spracovania</li>
                  <li>Prenosnosť údajov</li>
                  <li>Odvolanie súhlasu – stane sa účinným dňom odvolania</li>
                  <li>Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)</li>
                </ul>
                <p className="mt-6">V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na <a href="mailto:pmpprodukt@gmail.com" className="text-gold font-bold hover:underline">pmpprodukt@gmail.com</a> alebo telefónnom čísle <a href="tel:0948380618" className="text-gold font-bold hover:underline">0948 380 618</a>.</p>
              </section>

              <p className="pt-8 border-t border-gray-100 font-bold text-dark">Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

"use client";

import { useTranslations } from "next-intl";

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  const t = useTranslations("footer");

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
            Ochrana osobných údajov
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
  );
}

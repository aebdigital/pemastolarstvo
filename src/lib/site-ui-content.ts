import type { Locale } from "@/i18n/routing";

type ContactFormSectionCopy = {
  description: [string, string];
  title: [string, string];
};

type ContactFormCopy = {
  consentPrefix: string;
  error: string;
  formTitle: string;
  messagePlaceholder: string;
  namePlaceholder: string;
  phonePlaceholder: string;
  privacyPolicy: string;
  sending: string;
  submit: string;
  success: string;
  emailPlaceholder: string;
};

type InquiryFormCopy = {
  additionalInfoTitle: string;
  address: string;
  addressPlaceholder: string;
  city: string;
  cityPlaceholder: string;
  company: string;
  companyPlaceholder: string;
  consentPrefix: string;
  contactDetailsTitle: string;
  email: string;
  emailPlaceholder: string;
  emptyCart: string;
  error: string;
  firstName: string;
  firstNamePlaceholder: string;
  lastName: string;
  lastNamePlaceholder: string;
  notes: string;
  notesPlaceholder: string;
  phone: string;
  phonePlaceholder: string;
  pieces: string;
  privacyPolicy: string;
  summaryEyebrow: string;
  summaryTitle: string;
  totalDoors: string;
  zipCode: string;
  zipPlaceholder: string;
};

type CookiesCopy = {
  accept: string;
  analyticsDescription: string;
  analyticsTitle: string;
  bannerMessage: string;
  bannerTitle: string;
  decline: string;
  marketingDescription: string;
  marketingTitle: string;
  modalEyebrow: string;
  modalTitle: string;
  necessaryDescription: string;
  necessaryTitle: string;
  save: string;
  settings: string;
};

type PrivacyCopy = {
  companyCard: string[];
  contactConsentText: string;
  contactEmailLabel: string;
  contactPhoneLabel: string;
  contactRightsText: string;
  contactForm: {
    intro: string;
    legalBasisLabel: string;
    legalBasis: string;
    purposeLabel: string;
    purpose: string;
    retentionLabel: string;
    retention: string;
    scopeLabel: string;
    scope: string[];
    title: string;
    uses: string[];
  };
  cookiesSection: {
    consentLabel: string;
    consent: string;
    intro: string;
    items: string[];
    title: string;
  };
  effectiveDate: string;
  intro: string;
  rightsSection: {
    intro: string;
    items: string[];
    title: string;
  };
  title: string;
};

type SiteUiContent = {
  contactForm: ContactFormCopy;
  contactFormSection: ContactFormSectionCopy;
  cookies: CookiesCopy;
  inquiryForm: InquiryFormCopy;
  privacy: PrivacyCopy;
};

const content: Record<Locale, SiteUiContent> = {
  sk: {
    contactForm: {
      consentPrefix: "Odoslaním formuláru súhlasím s",
      emailPlaceholder: "Váš email ...",
      error: "Nepodarilo sa odoslať správu. Skúste to znova.",
      formTitle: "Kontaktný formulár",
      messagePlaceholder: "Vaša správa ...",
      namePlaceholder: "Vaše meno ...",
      phonePlaceholder: "Váš telefón ...",
      privacyPolicy: "ochranou osobných údajov",
      sending: "Odosiela sa...",
      submit: "Odoslať email",
      success: "Správa bola odoslaná!",
    },
    contactFormSection: {
      description: [
        "Vyplňte formulár a my sa vám",
        "čo najskôr ozveme späť.",
      ],
      title: ["MÁTE NA NÁS", "OTÁZKY?"],
    },
    cookies: {
      accept: "Súhlasím",
      analyticsDescription:
        "Pomáhajú nám anonymne sledovať návštevnosť a správanie používateľov, aby sme mohli stránku neustále zlepšovať.",
      analyticsTitle: "Analytické",
      bannerMessage:
        "Táto stránka využíva súbory cookies na zabezpečenie správneho fungovania, personalizáciu obsahu a analýzu návštevnosti. Môžete si prispôsobiť svoje preferencie v nastaveniach.",
      bannerTitle: "Cookies",
      decline: "Odmietnuť",
      marketingDescription:
        "Umožňujú nám zobrazovať relevantnú reklamu na iných platformách a sledovať úspešnosť našich kampaní.",
      marketingTitle: "Marketingové",
      modalEyebrow: "Súkromie",
      modalTitle: "Nastavenia cookies",
      necessaryDescription:
        "Tieto cookies sú potrebné na základné fungovanie webu (zabezpečenie, nákupný košík) a nemožno ich vypnúť.",
      necessaryTitle: "Nevyhnutné",
      save: "Uložiť a potvrdiť výber",
      settings: "Nastavenia",
    },
    inquiryForm: {
      additionalInfoTitle: "Dodatočné informácie",
      address: "Ulica a číslo *",
      addressPlaceholder: "Testovacia 22",
      city: "Mesto *",
      cityPlaceholder: "Svidník",
      company: "Názov firmy (nepovinné)",
      companyPlaceholder: "ABC s.r.o.",
      consentPrefix: "Súhlasím so spracovaním osobných údajov podľa",
      contactDetailsTitle: "Kontaktné údaje",
      email: "Emailová adresa *",
      emailPlaceholder: "jan.novak@example.com",
      emptyCart: "Váš košík je momentálne prázdny",
      error: "Nepodarilo sa odoslať dopyt. Skúste to znova.",
      firstName: "Meno *",
      firstNamePlaceholder: "Ján",
      lastName: "Priezvisko *",
      lastNamePlaceholder: "Novák",
      notes: "Poznámky (nepovinné)",
      notesPlaceholder:
        "Poznámky k vašej objednávke, napr. špeciálne pokyny na doručenie.",
      phone: "Telefón *",
      phonePlaceholder: "0900 123 456",
      pieces: "ks",
      privacyPolicy: "zásad ochrany osobných údajov",
      summaryEyebrow: "Prehľad dopytu",
      summaryTitle: "Položky dopytu",
      totalDoors: "Celkom dverí",
      zipCode: "PSČ *",
      zipPlaceholder: "08901",
    },
    privacy: {
      companyCard: [
        "PMP-Produkt s.r.o.",
        "Vyšná Jedľová 37",
        "089 01 Vyšná Jedľová, Slovenská republika",
        "IČO: 53568630, DIČ: 2121418354",
        "IČ DPH: SK2121418354, podľa §4, registrácia od 23.12.2022",
        "E-mail: pmpprodukt@gmail.com",
        "Tel.: 0948 380 618",
      ],
      contactConsentText:
        "Tieto Zásady ochrany osobných údajov (ďalej len „Zásady\") popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.",
      contactEmailLabel: "pmpprodukt@gmail.com",
      contactForm: {
        intro:
          "Na stránke prevádzkujeme kontaktný formulár na dvoch samostatných stránkach, ktorého účelom je umožniť vám:",
        legalBasisLabel: "Právny základ:",
        legalBasis:
          "Článok 6 ods. 1 písm. b) GDPR – plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.",
        purposeLabel: "Účel spracovania:",
        purpose:
          "Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt.",
        retentionLabel: "Doba uchovávania:",
        retention:
          "Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.",
        scopeLabel: "Rozsah spracúvaných údajov:",
        scope: ["Meno a priezvisko", "E-mailová adresa", "Telefónne číslo"],
        title: "I. Kontaktný formulár",
        uses: [
          "Položiť otázku k našim produktom a službám",
          "Požiadať o cenovú ponuku",
        ],
      },
      contactPhoneLabel: "0948 380 618",
      contactRightsText:
        "V prípade otázok alebo uplatnenia Vašich práv nás môžete kontaktovať na",
      cookiesSection: {
        consentLabel: "Správa súhlasov:",
        consent:
          "Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.",
        intro:
          "Na našej webovej stránke používame cookies výlučne na nasledujúce účely:",
        items: [
          "Nevyhnutné cookies – zabezpečujú základnú funkčnosť stránky (napr. ukladanie relácie, nastavení prehliadača).",
          "Štatistické (analytické) cookies – pomáhajú nám pochopiť, ako návštevníci stránku používajú (nasadzujeme ich len so súhlasom používateľa).",
        ],
        title: "II. Súbory cookies",
      },
      effectiveDate: "Tieto Zásady nadobúdajú účinnosť dňom 25. 4. 2025.",
      intro:
        "Ochrana osobných údajov",
      rightsSection: {
        intro: "Podľa nariadenia GDPR máte nasledujúce práva:",
        items: [
          "Prístup k osobným údajom, ktoré spracúvame",
          "Oprava nepresných alebo neúplných údajov",
          "Vymazanie („právo zabudnutia\"), ak na spracovanie už nie je právny základ",
          "Obmedzenie spracovania",
          "Prenosnosť údajov",
          "Odvolanie súhlasu – stane sa účinným dňom odvolania",
          "Podanie sťažnosti u Úradu na ochranu osobných údajov SR (Hraničná 12, 820 07 Bratislava, www.dataprotection.gov.sk)",
        ],
        title: "III. Práva dotknutej osoby",
      },
      title: "Ochrana osobných údajov",
    },
  },
  en: {
    contactForm: {
      consentPrefix: "By submitting the form, I agree to the",
      emailPlaceholder: "Your email ...",
      error: "We couldn't send your message. Please try again.",
      formTitle: "Contact form",
      messagePlaceholder: "Your message ...",
      namePlaceholder: "Your name ...",
      phonePlaceholder: "Your phone ...",
      privacyPolicy: "privacy policy",
      sending: "Sending...",
      submit: "Send email",
      success: "Your message has been sent!",
    },
    contactFormSection: {
      description: [
        "Fill out the form and we will",
        "get back to you soon.",
      ],
      title: ["DO YOU HAVE", "QUESTIONS?"],
    },
    cookies: {
      accept: "Accept",
      analyticsDescription:
        "They help us anonymously track traffic and user behaviour so we can keep improving the website.",
      analyticsTitle: "Analytics",
      bannerMessage:
        "This website uses cookies to ensure proper functionality, personalize content, and analyse traffic. You can adjust your preferences in the settings.",
      bannerTitle: "Cookies",
      decline: "Decline",
      marketingDescription:
        "They allow us to show relevant advertising on other platforms and track the performance of our campaigns.",
      marketingTitle: "Marketing",
      modalEyebrow: "Privacy",
      modalTitle: "Cookie settings",
      necessaryDescription:
        "These cookies are required for the basic operation of the website (security, shopping cart) and cannot be turned off.",
      necessaryTitle: "Necessary",
      save: "Save and confirm selection",
      settings: "Settings",
    },
    inquiryForm: {
      additionalInfoTitle: "Additional information",
      address: "Street and number *",
      addressPlaceholder: "Main Street 22",
      city: "City *",
      cityPlaceholder: "Svidnik",
      company: "Company name (optional)",
      companyPlaceholder: "Example Ltd.",
      consentPrefix: "I agree to the processing of personal data according to the",
      contactDetailsTitle: "Contact details",
      email: "Email address *",
      emailPlaceholder: "john.doe@example.com",
      emptyCart: "Your cart is currently empty",
      error: "We couldn't send the inquiry. Please try again.",
      firstName: "First name *",
      firstNamePlaceholder: "John",
      lastName: "Last name *",
      lastNamePlaceholder: "Doe",
      notes: "Notes (optional)",
      notesPlaceholder:
        "Notes about your inquiry, for example special delivery instructions.",
      phone: "Phone *",
      phonePlaceholder: "+421 900 123 456",
      pieces: "pcs",
      privacyPolicy: "privacy policy",
      summaryEyebrow: "Inquiry overview",
      summaryTitle: "Inquiry items",
      totalDoors: "Total doors",
      zipCode: "ZIP code *",
      zipPlaceholder: "08901",
    },
    privacy: {
      companyCard: [
        "PMP-Produkt s.r.o.",
        "Vysna Jedlova 37",
        "089 01 Vysna Jedlova, Slovakia",
        "Company ID: 53568630, Tax ID: 2121418354",
        "VAT ID: SK2121418354, registered under §4 since 23 December 2022",
        "Email: pmpprodukt@gmail.com",
        "Phone: 0948 380 618",
      ],
      contactConsentText:
        "These Privacy Policy principles (the “Policy\") describe which personal data we process in connection with the use of our website and contact forms.",
      contactEmailLabel: "pmpprodukt@gmail.com",
      contactForm: {
        intro:
          "We operate a contact form on two separate pages of this website to allow you to:",
        legalBasisLabel: "Legal basis:",
        legalBasis:
          "Article 6(1)(b) GDPR – taking steps at the request of the data subject prior to entering into a contract.",
        purposeLabel: "Purpose of processing:",
        purpose:
          "We process the above data so that we can contact you and respond to your inquiry.",
        retentionLabel: "Retention period:",
        retention:
          "We will retain personal data for a maximum of 10 years from the response to your inquiry, unless a further contractual relationship arises.",
        scopeLabel: "Scope of processed data:",
        scope: ["First and last name", "Email address", "Phone number"],
        title: "I. Contact form",
        uses: ["Ask a question about our products and services", "Request a price quote"],
      },
      contactPhoneLabel: "0948 380 618",
      contactRightsText:
        "If you have questions or wish to exercise your rights, you can contact us at",
      cookiesSection: {
        consentLabel: "Consent management:",
        consent:
          "Users can withdraw their consent to statistical cookies at any time through the cookie banner settings or directly in their browser.",
        intro:
          "We use cookies on our website exclusively for the following purposes:",
        items: [
          "Necessary cookies – they ensure the basic functionality of the website (for example session storage and browser settings).",
          "Statistical (analytics) cookies – they help us understand how visitors use the website (we only deploy them with the user's consent).",
        ],
        title: "II. Cookies",
      },
      effectiveDate: "These principles take effect on 25 April 2025.",
      intro: "Privacy policy",
      rightsSection: {
        intro: "Under the GDPR, you have the following rights:",
        items: [
          "Access to the personal data we process",
          "Correction of inaccurate or incomplete data",
          "Erasure (“right to be forgotten\") if there is no longer a legal basis for processing",
          "Restriction of processing",
          "Data portability",
          "Withdrawal of consent – effective on the day of withdrawal",
          "Filing a complaint with the Office for Personal Data Protection of the Slovak Republic (Hranična 12, 820 07 Bratislava, www.dataprotection.gov.sk)",
        ],
        title: "III. Rights of the data subject",
      },
      title: "Privacy policy",
    },
  },
  de: {
    contactForm: {
      consentPrefix: "Mit dem Absenden des Formulars stimme ich der",
      emailPlaceholder: "Ihre E-Mail ...",
      error: "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      formTitle: "Kontaktformular",
      messagePlaceholder: "Ihre Nachricht ...",
      namePlaceholder: "Ihr Name ...",
      phonePlaceholder: "Ihre Telefonnummer ...",
      privacyPolicy: "Datenschutzerklärung",
      sending: "Wird gesendet...",
      submit: "E-Mail senden",
      success: "Ihre Nachricht wurde gesendet!",
    },
    contactFormSection: {
      description: [
        "Füllen Sie das Formular aus und wir",
        "melden uns schnellstmöglich bei Ihnen.",
      ],
      title: ["HABEN SIE", "FRAGEN?"],
    },
    cookies: {
      accept: "Akzeptieren",
      analyticsDescription:
        "Sie helfen uns, Besucherzahlen und Nutzerverhalten anonym zu verfolgen, damit wir die Website laufend verbessern können.",
      analyticsTitle: "Analyse",
      bannerMessage:
        "Diese Website verwendet Cookies, um die korrekte Funktion sicherzustellen, Inhalte zu personalisieren und den Traffic zu analysieren. Sie können Ihre Einstellungen in den Optionen anpassen.",
      bannerTitle: "Cookies",
      decline: "Ablehnen",
      marketingDescription:
        "Sie ermöglichen uns, relevante Werbung auf anderen Plattformen anzuzeigen und den Erfolg unserer Kampagnen zu messen.",
      marketingTitle: "Marketing",
      modalEyebrow: "Datenschutz",
      modalTitle: "Cookie-Einstellungen",
      necessaryDescription:
        "Diese Cookies sind für die grundlegende Funktion der Website erforderlich (Sicherheit, Warenkorb) und können nicht deaktiviert werden.",
      necessaryTitle: "Erforderlich",
      save: "Auswahl speichern und bestätigen",
      settings: "Einstellungen",
    },
    inquiryForm: {
      additionalInfoTitle: "Zusätzliche Informationen",
      address: "Straße und Hausnummer *",
      addressPlaceholder: "Musterstraße 22",
      city: "Stadt *",
      cityPlaceholder: "Svidnik",
      company: "Firmenname (optional)",
      companyPlaceholder: "Beispiel GmbH",
      consentPrefix: "Ich stimme der Verarbeitung personenbezogener Daten gemäß der",
      contactDetailsTitle: "Kontaktdaten",
      email: "E-Mail-Adresse *",
      emailPlaceholder: "max.mustermann@example.com",
      emptyCart: "Ihr Warenkorb ist momentan leer",
      error: "Die Anfrage konnte nicht gesendet werden. Bitte versuchen Sie es erneut.",
      firstName: "Vorname *",
      firstNamePlaceholder: "Max",
      lastName: "Nachname *",
      lastNamePlaceholder: "Mustermann",
      notes: "Notizen (optional)",
      notesPlaceholder:
        "Hinweise zu Ihrer Anfrage, zum Beispiel besondere Lieferanweisungen.",
      phone: "Telefon *",
      phonePlaceholder: "+421 900 123 456",
      pieces: "Stk.",
      privacyPolicy: "Datenschutzerklärung",
      summaryEyebrow: "Anfrageübersicht",
      summaryTitle: "Anfragepositionen",
      totalDoors: "Türen gesamt",
      zipCode: "PLZ *",
      zipPlaceholder: "08901",
    },
    privacy: {
      companyCard: [
        "PMP-Produkt s.r.o.",
        "Vysna Jedlova 37",
        "089 01 Vysna Jedlova, Slowakei",
        "Firmen-ID: 53568630, Steuer-ID: 2121418354",
        "USt-IdNr.: SK2121418354, Registrierung nach §4 seit 23. Dezember 2022",
        "E-Mail: pmpprodukt@gmail.com",
        "Telefon: 0948 380 618",
      ],
      contactConsentText:
        "Diese Datenschutzerklärung (im Folgenden „Erklärung\") beschreibt, welche personenbezogenen Daten wir im Zusammenhang mit der Nutzung unserer Website und Kontaktformulare verarbeiten.",
      contactEmailLabel: "pmpprodukt@gmail.com",
      contactForm: {
        intro:
          "Wir betreiben auf zwei separaten Seiten dieser Website ein Kontaktformular, damit Sie:",
        legalBasisLabel: "Rechtsgrundlage:",
        legalBasis:
          "Artikel 6 Abs. 1 lit. b DSGVO – Durchführung vorvertraglicher Maßnahmen auf Anfrage der betroffenen Person.",
        purposeLabel: "Zweck der Verarbeitung:",
        purpose:
          "Wir verarbeiten die oben genannten Daten, damit wir Sie kontaktieren und auf Ihre Anfrage reagieren können.",
        retentionLabel: "Speicherdauer:",
        retention:
          "Wir bewahren personenbezogene Daten maximal 10 Jahre ab der Antwort auf Ihre Anfrage auf, sofern kein weiteres Vertragsverhältnis entsteht.",
        scopeLabel: "Umfang der verarbeiteten Daten:",
        scope: ["Vor- und Nachname", "E-Mail-Adresse", "Telefonnummer"],
        title: "I. Kontaktformular",
        uses: ["Eine Frage zu unseren Produkten und Dienstleistungen stellen", "Ein Preisangebot anfordern"],
      },
      contactPhoneLabel: "0948 380 618",
      contactRightsText:
        "Wenn Sie Fragen haben oder Ihre Rechte ausüben möchten, kontaktieren Sie uns bitte unter",
      cookiesSection: {
        consentLabel: "Einwilligungsverwaltung:",
        consent:
          "Nutzer können ihre Zustimmung zu statistischen Cookies jederzeit über die Einstellungen des Cookie-Banners oder direkt im Browser widerrufen.",
        intro:
          "Wir verwenden Cookies auf unserer Website ausschließlich zu folgenden Zwecken:",
        items: [
          "Erforderliche Cookies – sie gewährleisten die grundlegende Funktionalität der Website (z. B. Sitzungsspeicherung und Browsereinstellungen).",
          "Statistische (Analyse-)Cookies – sie helfen uns zu verstehen, wie Besucher die Website nutzen (wir setzen sie nur mit Einwilligung des Nutzers ein).",
        ],
        title: "II. Cookies",
      },
      effectiveDate: "Diese Grundsätze treten am 25. April 2025 in Kraft.",
      intro: "Datenschutzerklärung",
      rightsSection: {
        intro: "Nach der DSGVO haben Sie folgende Rechte:",
        items: [
          "Auskunft über die von uns verarbeiteten personenbezogenen Daten",
          "Berichtigung unrichtiger oder unvollständiger Daten",
          "Löschung („Recht auf Vergessenwerden\"), wenn keine Rechtsgrundlage für die Verarbeitung mehr besteht",
          "Einschränkung der Verarbeitung",
          "Datenübertragbarkeit",
          "Widerruf der Einwilligung – wirksam ab dem Tag des Widerrufs",
          "Beschwerde bei der Datenschutzbehörde der Slowakischen Republik (Hranična 12, 820 07 Bratislava, www.dataprotection.gov.sk)",
        ],
        title: "III. Rechte der betroffenen Person",
      },
      title: "Datenschutzerklärung",
    },
  },
};

export function getSiteUiContent(locale: Locale): SiteUiContent {
  return content[locale] || content.sk;
}

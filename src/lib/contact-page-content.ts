import type { Locale } from "@/i18n/routing";

const content = {
  sk: {
    companyName: "PMP-Produkt s.r.o",
    country: "Slovenská republika",
    emailLabel: "E-mail",
    headquartersAlt: "Sídlo firmy PMP-Produkt",
    headquartersMapTitle: "Sídlo - Google Maps",
    headquartersTitle: "SÍDLO SPOLOČNOSTI",
    hours: "Otváracie hodiny",
    hoursByAppointment: "podľa objednávky",
    mobileLabel: "Mobil",
    pageTitle: "KONTAKT",
    phoneFaxLabel: "Tel/Fax",
    showroomAlt: "PMP-Produkt Showroom",
    showroomMapTitle: "Showroom - Google Maps",
    showroomName: "PeMa Stolárstvo",
    showroomTitle: "SHOWROOM",
  },
  en: {
    companyName: "PMP-Produkt s.r.o",
    country: "Slovakia",
    emailLabel: "Email",
    headquartersAlt: "PMP-Produkt headquarters",
    headquartersMapTitle: "Headquarters - Google Maps",
    headquartersTitle: "COMPANY HEADQUARTERS",
    hours: "Opening hours",
    hoursByAppointment: "by appointment",
    mobileLabel: "Mobile",
    pageTitle: "CONTACT",
    phoneFaxLabel: "Phone/Fax",
    showroomAlt: "PMP-Produkt showroom",
    showroomMapTitle: "Showroom - Google Maps",
    showroomName: "PeMa Stolárstvo",
    showroomTitle: "SHOWROOM",
  },
  de: {
    companyName: "PMP-Produkt s.r.o",
    country: "Slowakei",
    emailLabel: "E-Mail",
    headquartersAlt: "Firmensitz von PMP-Produkt",
    headquartersMapTitle: "Firmensitz - Google Maps",
    headquartersTitle: "FIRMENSITZ",
    hours: "Öffnungszeiten",
    hoursByAppointment: "nach Vereinbarung",
    mobileLabel: "Mobil",
    pageTitle: "KONTAKT",
    phoneFaxLabel: "Telefon/Fax",
    showroomAlt: "PMP-Produkt Showroom",
    showroomMapTitle: "Showroom - Google Maps",
    showroomName: "PeMa Stolárstvo",
    showroomTitle: "SHOWROOM",
  },
} satisfies Record<Locale, Record<string, string>>;

export function getContactPageCopy(locale: Locale) {
  return content[locale] || content.sk;
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import PrivacyModal from "@/components/ui/PrivacyModal";
import CookieSettingsModal from "@/components/ui/CookieSettingsModal";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [cookiesOpen, setCookiesOpen] = useState(false);
  const pathname = usePathname();
  const isStolarstvo = pathname.includes("/stolarstvo");

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
              <h4 className="font-heading font-bold text-gold mb-2 uppercase tracking-widest text-xs">
                {t("collaborationTitle")}
              </h4>
              <p className="text-gray-400 text-[13px] leading-relaxed mb-6 font-light">
                {isStolarstvo ? t("collaborationCarpentryText") : t("collaborationDoorsText")}
              </p>
              
              <div className="space-y-4">
                <Link 
                  href={isStolarstvo ? "/dvere/o-nas" : "/stolarstvo/o-nas"}
                  className="group flex flex-col gap-1 hover:opacity-80 transition-opacity"
                >
                  <span className="text-white font-black uppercase tracking-widest border-b border-gold/30 pb-1 w-fit group-hover:border-gold transition-colors">
                    {isStolarstvo ? t("collaborationCarpentryTitle") : t("collaborationDoorsTitle")}
                  </span>
                  <span className="text-[10px] text-gold font-bold uppercase tracking-widest">
                    {t("viewMore")} &rarr;
                  </span>
                </Link>
                
                {!isStolarstvo && (
                  <div className="pt-2 flex gap-3">
                    <a
                      href="https://www.facebook.com/groups/808946886107207/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors"
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} PMP-Produkt s.r.o.{" "}
              {t("allRightsReserved")}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <LanguageSwitcher />
              <button
                onClick={() => setCookiesOpen(true)}
                className="hover:text-white transition-colors"
              >
                Cookies
              </button>
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
                {tNav("contact")}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <PrivacyModal 
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <CookieSettingsModal 
        isOpen={cookiesOpen}
        onClose={() => setCookiesOpen(false)}
      />
    </>
  );
}

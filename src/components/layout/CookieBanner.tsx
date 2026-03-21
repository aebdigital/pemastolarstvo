"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import CookieSettingsModal from "@/components/ui/CookieSettingsModal";

export default function CookieBanner() {
  const t = useTranslations("cookies");
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setTimeout(() => setVisible(true), 1500);
    }

    const handleUpdate = () => {
      setVisible(false);
    };
    window.addEventListener('cookie-settings-updated', handleUpdate);
    return () => window.removeEventListener('cookie-settings-updated', handleUpdate);
  }, []);

  const acceptAll = () => {
    localStorage.setItem("cookie-consent", "accepted");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true
    }));
    setVisible(false);
  };

  const declineAll = () => {
    localStorage.setItem("cookie-consent", "declined");
    localStorage.setItem("cookie-preferences", JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false
    }));
    setVisible(false);
  };

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="fixed bottom-0 left-0 right-0 z-[500000] bg-white/95 backdrop-blur-xl border-t border-gray-100"
          >
            <div className="max-w-[1400px] mx-auto px-6 py-6 md:py-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                <div className="flex-1 max-w-2xl text-left">
                  <h4 className="font-heading text-xl font-black text-dark uppercase tracking-widest mb-2">
                    {t("title")}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {t("message")} Táto stránka využíva súbory cookies na zabezpečenie správneho fungovania, personalizáciu obsahu a analýzu návštevnosti. 
                    Môžete si prispôsobiť svoje preferencie v nastaveniach.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-4 w-full lg:w-auto shrink-0">
                  <button
                    onClick={() => setSettingsOpen(true)}
                    className="text-xs font-black uppercase tracking-[0.2em] text-dark/40 hover:text-gold transition-colors lg:mr-4 w-full lg:w-auto text-center"
                  >
                    {t("settings")}
                  </button>
                  <button
                    onClick={declineAll}
                    className="flex-1 lg:flex-none px-8 py-4 text-xs font-black uppercase tracking-[0.2em] text-dark border-2 border-dark/10 rounded-2xl hover:bg-dark hover:text-white transition-premium"
                  >
                    {t("decline")}
                  </button>
                  <button
                    onClick={acceptAll}
                    className="flex-1 lg:flex-none px-10 py-5 text-xs font-black uppercase tracking-[0.2em] bg-dark text-white rounded-2xl hover:bg-gold hover:text-dark transition-premium shadow-xl"
                  >
                    {t("accept")}
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <CookieSettingsModal 
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
      />
    </>
  );
}

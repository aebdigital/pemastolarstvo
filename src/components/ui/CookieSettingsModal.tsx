"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface CookieSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CookieSettingsModal({ isOpen, onClose }: CookieSettingsModalProps) {
  const [settings, setSettings] = useState({
    necessary: true,
    analytics: true,
    marketing: true,
  });

  useEffect(() => {
    const saved = localStorage.getItem("cookie-preferences");
    if (saved) {
      try {
        setSettings(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse cookie preferences", e);
      }
    }
  }, [isOpen]);

  const save = () => {
    localStorage.setItem("cookie-preferences", JSON.stringify(settings));
    localStorage.setItem("cookie-consent", "custom");
    onClose();
    // Force a reload or a state update in Banner if needed
    window.dispatchEvent(new Event('cookie-settings-updated'));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[600001] flex items-center justify-center p-4 md:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 30 }}
            className="relative w-full max-w-[540px] bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
            style={{ maxHeight: 'calc(100vh - 40px)' }}
          >
            <div className="p-8 md:p-10 overflow-y-auto" data-lenis-prevent>
              <div className="flex items-center justify-between mb-8">
                <div className="text-left">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-1 block">Súkromie</span>
                  <h2 className="font-heading text-2xl md:text-3xl font-black text-dark uppercase tracking-widest leading-tight">
                    Nastavenia Cookies
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50 hover:bg-dark hover:text-white transition-premium text-gray-400 shrink-0 ml-4"
                >
                  <i className="fas fa-times text-lg" />
                </button>
              </div>

              <div className="space-y-4 mb-10">
                {/* Necessary */}
                <div className="p-6 rounded-3xl bg-gray-50 border border-gray-100 flex items-start justify-between gap-6">
                  <div className="text-left">
                    <p className="font-black text-dark uppercase tracking-wider text-sm mb-1">Nevyhnutné</p>
                    <p className="text-gray-500 leading-relaxed text-xs">Tieto cookies sú potrebné na základné fungovanie webu (zabezpečenie, nákupný košík) a nemožno ich vypnúť.</p>
                  </div>
                  <div className="mt-1 shrink-0">
                    <div className="w-12 h-6 bg-gold rounded-full relative opacity-50 cursor-not-allowed">
                      <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                    </div>
                  </div>
                </div>

                {/* Analytics */}
                <div className="p-6 rounded-3xl border border-gray-100 flex items-start justify-between gap-6 hover:bg-gray-50 transition-colors group">
                  <div className="text-left">
                    <p className="font-black text-dark uppercase tracking-wider text-sm mb-1">Analytické</p>
                    <p className="text-gray-500 leading-relaxed text-xs">Pomáhajú nám anonymne sledovať návštevnosť a správanie používateľov, aby sme mohli stránku neustále zlepšovať.</p>
                  </div>
                  <button
                    onClick={() => setSettings(s => ({ ...s, analytics: !s.analytics }))}
                    className="mt-1 shrink-0"
                  >
                    <div className={`w-12 h-6 rounded-full relative transition-colors ${settings.analytics ? 'bg-gold' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${settings.analytics ? 'left-7' : 'left-1'}`} />
                    </div>
                  </button>
                </div>

                {/* Marketing */}
                <div className="p-6 rounded-3xl border border-gray-100 flex items-start justify-between gap-6 hover:bg-gray-50 transition-colors group">
                  <div className="text-left">
                    <p className="font-black text-dark uppercase tracking-wider text-sm mb-1">Marketingové</p>
                    <p className="text-gray-500 leading-relaxed text-xs">Umožňujú nám zobrazovať relevantnú reklamu na iných platformách a sledovať úspešnosť našich kampaní.</p>
                  </div>
                  <button
                    onClick={() => setSettings(s => ({ ...s, marketing: !s.marketing }))}
                    className="mt-1 shrink-0"
                  >
                    <div className={`w-12 h-6 rounded-full relative transition-colors ${settings.marketing ? 'bg-gold' : 'bg-gray-200'}`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${settings.marketing ? 'left-7' : 'left-1'}`} />
                    </div>
                  </button>
                </div>
              </div>

              <button
                onClick={save}
                className="w-full bg-dark text-white py-5 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-gold hover:text-dark transition-premium shadow-xl"
              >
                Uložiť a potvrdiť výber
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

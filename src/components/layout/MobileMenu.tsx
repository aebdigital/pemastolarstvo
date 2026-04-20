'use client';

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import type { InternalPathname } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "./Portal";

type NavLink =
  | {
      href: InternalPathname;
      label: string;
      isExternal?: false;
    }
  | {
      href: string;
      label: string;
      isExternal: true;
    };

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations("nav");

  useEffect(() => {
    const handleOpen = () => setOpen(true);
    window.addEventListener('open-mobile-menu', handleOpen);
    return () => window.removeEventListener('open-mobile-menu', handleOpen);
  }, []);

  const isStolarstvo = pathname.includes('/stolarstvo');
  
  const doorLinks: NavLink[] = [
    { href: "/dvere/o-nas", label: t("aboutUs") },
    { href: "/dvere/dverenamieru", label: t("customDoors") },
    { href: "/dvere/typizovane-dvere", label: t("standardDoors") },
    { href: "/dvere/poradna", label: t("howToMeasure") },
    { href: "/dvere/referencie", label: t("references") },
    { href: "/dvere/blog", label: t("blog") },
    { href: "/dvere/kontakt", label: t("contact") },
  ];

  const carpentryLinks: NavLink[] = [
    { href: "/stolarstvo/o-nas", label: t("aboutUs") },
    { href: "/stolarstvo/vstavane-skrine", label: t("builtInWardrobes") },
    { href: "/stolarstvo/referencie", label: t("references") },
    { href: "/stolarstvo/kontakt", label: t("contact") },
  ];

  const links = isStolarstvo ? carpentryLinks : doorLinks;

  const closeMenu = () => setOpen(false);

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[300000] bg-dark/60 backdrop-blur-sm"
              onClick={closeMenu}
            />

            {/* Sidebar Container - Rebuilt to match InteriorSidebar 1:1 */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 40, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[300001] shadow-[-20px_0_50px_rgba(0,0,0,0.15)] flex flex-col will-change-transform"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
            >
              <div className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
                <img
                  src="/image.svg"
                  alt="PMP-Produkt"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={closeMenu}
                  className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center transition-premium hover:bg-gold shadow-lg"
                >
                   <i className="fas fa-times text-xl" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto px-8 py-4">
                <div className="flex flex-col">
                  {links.map((link, idx) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                    >
                      {link.isExternal ? (
                        <a
                          href={link.href}
                          onClick={closeMenu}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group flex items-center gap-4 py-4 border-b border-gray-100 transition-premium text-dark"
                        >
                          <span className="text-[10px] font-black text-gold/50 group-hover:text-gold transition-colors">0{idx + 1}</span>
                          <span className="text-xl font-black uppercase tracking-wider">
                            {link.label}
                          </span>
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          onClick={closeMenu}
                          className={`group flex items-center gap-4 py-4 border-b border-gray-100 transition-premium ${pathname === link.href ? "text-gold" : "text-dark"
                            }`}
                        >
                          <span className="text-[10px] font-black text-gold/50 group-hover:text-gold transition-colors">0{idx + 1}</span>
                          <span className="text-xl font-black uppercase tracking-wider">
                            {link.label}
                          </span>
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  {!isStolarstvo && (
                    <motion.div 
                      key="konfigurator-sidebar"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + links.length * 0.05 }}
                    >
                      <Link
                        href="/dvere/konfigurator"
                        onClick={closeMenu}
                        className="group flex items-center gap-4 py-4 bg-dark text-white transition-premium hover:bg-gold hover:text-dark"
                      >
                        <span className="text-[10px] font-black text-gold/50 group-hover:text-dark/50 transition-colors">0{links.length + 1}</span>
                        <span className="text-xl font-black uppercase tracking-wider">
                          {t("configurator")}
                        </span>
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="px-8 py-5 bg-gray-50 border-t border-gray-100 space-y-3">
                <a href="tel:+421948380618" className="flex items-center gap-4 text-dark group">
                  <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-premium">
                     <i className="fas fa-phone text-xs" />
                  </div>
                </a>
                <a href="mailto:pmpprodukt@gmail.com" className="flex items-center gap-4 text-dark group">
                  <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center group-hover:bg-dark group-hover:text-white transition-premium">
                     <i className="fas fa-envelope text-xs" />
                  </div>
                  <span className="text-sm font-black lowercase tracking-widest">pmpprodukt@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}

"use client";

import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  links: { href: string; label: string }[];
  currentPath: string;
}

export default function MobileMenu({
  open,
  onClose,
  links,
  currentPath,
}: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-[60]"
          />

          {/* Full Screen Menu */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[70] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-8">
              <span className="font-heading text-xl font-black text-dark uppercase tracking-widest">Menu</span>
              <button
                onClick={onClose}
                className="w-12 h-12 bg-dark text-white rounded-full flex items-center justify-center transition-premium hover:bg-gold"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-xl" />
              </button>
            </div>

            <nav className="flex-1 px-8 py-4 overflow-y-auto">
              <div className="space-y-4">
                {links.map((link, idx) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className={`group flex items-baseline gap-4 py-4 border-b border-gray-100 transition-premium ${currentPath === link.href ? "text-gold" : "text-dark"
                        }`}
                    >
                      <span className="text-[10px] font-black text-gold/50 group-hover:text-gold transition-colors">0{idx + 1}</span>
                      <span className="text-xl font-black uppercase tracking-wider">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Special link for configurator in mobile */}
              {!currentPath.includes('/stolarstvo') && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                  className="mt-12"
                >
                  <Link
                    href="/dvere/konfigurator"
                    onClick={onClose}
                    className="block w-full py-5 bg-dark text-white text-center rounded-2xl font-black uppercase tracking-widest hover:bg-gold hover:text-dark transition-premium"
                  >
                    Konfigurátor
                  </Link>
                </motion.div>
              )}
            </nav>

            <div className="p-8 bg-gray-50 space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 font-primary">Kontaktujte nás</h4>
              <a
                href="tel:+421948380618"
                className="flex items-center gap-4 text-dark hover:text-gold transition-premium"
              >
                <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center">
                  <i className="fas fa-phone text-xs" />
                </div>
                <span className="text-sm font-black">0948 380 618</span>
              </a>
              <a
                href="mailto:pmpprodukt@gmail.com"
                className="flex items-center gap-4 text-dark hover:text-gold transition-premium"
              >
                <div className="w-10 h-10 rounded-full border border-dark/10 flex items-center justify-center">
                  <i className="fas fa-envelope text-xs" />
                </div>
                <span className="text-sm font-black lowercase">pmpprodukt@gmail.com</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

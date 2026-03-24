"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";

interface HeaderProps {
  section?: "dvere" | "stolarstvo";
}

export default function Header({ section = "dvere" }: HeaderProps) {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 50);
      setHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const doorLinks = [
    { href: "/dvere/o-nas", label: t("aboutUs") },
    { href: "/dvere/dverenamieru", label: t("customDoors") },
    { href: "/dvere/typizovane-dvere", label: t("standardDoors") },
    { href: "/dvere/poradna", label: t("howToMeasure") },
    { href: "/dvere/referencie", label: t("references") },
    { href: "/dvere/blog", label: t("blog") },
    { href: "/dvere/kontakt", label: t("contact") },
    { href: "/Akciovy-katalog-5_26-1.pdf", label: "AKCIOVÝ KATALÓG", isExternal: true },
  ];

  const carpentryLinks = [
    { href: "/stolarstvo/o-nas", label: t("aboutUs") },
    { href: "/stolarstvo/vstavane-skrine", label: "Vstavané skrine na mieru" },
    { href: "/stolarstvo/referencie", label: t("references") },
    { href: "/stolarstvo/kontakt", label: t("contact") },
  ];

  const isStolarstvo = pathname.includes('/stolarstvo');
  const links = isStolarstvo ? carpentryLinks : doorLinks;

  if (pathname === "/") return null;

  return (
    <>
      <header
        className={`fixed top-4 left-[2.5vw] right-[2.5vw] md:left-[5vw] md:right-[5vw] lg:left-1/2 lg:-translate-x-1/2 z-[200] transition-premium lg:w-[95vw] max-w-[1920px] rounded-[2rem] overflow-hidden ${scrolled ? "bg-white/95 backdrop-blur-xl shadow-premium border border-gray-100" : "bg-white border border-gray-100"
          } ${hidden ? "-translate-y-40" : "translate-y-0"}`}
      >
        <div className="max-w-[1920px] mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-16 md:h-24">
            {/* Logo */}
            <div className="shrink-0">
              <Link href="/" className="group block">
                <img
                  src="/image.svg"
                  alt="PMP-Produkt"
                  className="h-12 md:h-16 w-auto object-contain transition-premium group-hover:scale-105"
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center bg-gray-50/50 px-8 py-2.5 rounded-full border border-gray-100 shadow-inner-premium">
              <ul className="flex items-center gap-6">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      target={(link as any).isExternal ? "_blank" : undefined}
                      rel={(link as any).isExternal ? "noopener noreferrer" : undefined}
                      className={`text-[11px] font-black uppercase tracking-[0.2em] transition-premium relative py-1 group ${pathname === link.href ? "text-gold" : "text-dark"
                        }`}
                    >
                      {link.label}
                      <span className={`absolute -bottom-1 left-0 h-0.5 bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions (Desktop) */}
            <div className="hidden lg:flex items-center gap-10">
              {!isStolarstvo && (
                <Link
                  href="/dvere/konfigurator"
                  className={`px-8 py-3.5 rounded-2xl text-[11px] font-black uppercase tracking-[0.2em] transition-premium shadow-lg hover:shadow-gold/20 flex items-center gap-3 ${pathname === '/dvere/konfigurator'
                      ? 'bg-gold text-dark'
                      : 'bg-dark text-white hover:bg-gold hover:text-dark'
                    }`}
                >
                  <i className="fas fa-sliders-h text-xs" />
                  {t("configurator")}
                </Link>
              )}

              <div className="flex items-center gap-6">
                <div className="flex flex-col text-right">
                  <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">Máte otázky?</span>
                  <a href="tel:+421948380618" className="text-sm font-black text-dark hover:text-gold transition-premium tracking-wider">
                    0948 380 618
                  </a>
                </div>
                <div className="w-12 h-12 rounded-2xl border-2 border-dark/5 flex items-center justify-center text-dark hover:bg-dark hover:text-white transition-premium cursor-pointer group shadow-sm bg-white">
                  <a href="tel:+421948380618" className="flex items-center justify-center w-full h-full">
                    <i className="fas fa-phone text-base group-hover:rotate-12 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden relative z-[500] w-12 h-12 bg-dark text-white rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-xl transition-premium active:scale-95 group"
              onClick={(e) => {
                e.stopPropagation();
                window.dispatchEvent(new Event('open-mobile-menu'));
              }}
              aria-label="Open menu"
            >
              <span className="w-6 h-0.5 bg-white rounded-full transition-all group-hover:w-4" />
              <span className="w-6 h-0.5 bg-white rounded-full" />
              <span className="w-6 h-0.5 bg-white rounded-full transition-all group-hover:w-4" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

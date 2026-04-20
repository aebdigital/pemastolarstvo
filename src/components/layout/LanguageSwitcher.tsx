'use client';

import { useEffect, useRef, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/routing';

const languageFlags: Record<Locale, string> = {
  sk: '🇸🇰',
  en: '🇬🇧',
  de: '🇩🇪',
};

type LanguageSwitcherProps = {
  variant?: 'inline' | 'dropdown';
};

export default function LanguageSwitcher({
  variant = 'inline',
}: LanguageSwitcherProps) {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations('languages');
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('pointerdown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  if (variant === 'dropdown') {
    return (
      <div ref={dropdownRef} className="relative z-[550]">
        <button
          type="button"
          onClick={() => setOpen((current) => !current)}
          className="flex h-12 items-center gap-2 rounded-2xl border border-dark/10 bg-white px-3 text-dark shadow-sm transition-premium hover:border-gold hover:bg-light active:scale-95"
          aria-label={t('label')}
          aria-expanded={open}
        >
          <span className="text-lg leading-none">{languageFlags[locale]}</span>
          <span className="text-[11px] font-black uppercase tracking-[0.18em]">
            {t(locale)}
          </span>
          <i
            className={`fas fa-chevron-down text-[9px] text-gold transition-transform ${
              open ? 'rotate-180' : ''
            }`}
          />
        </button>

        {open && (
          <nav
            aria-label={t('label')}
            className="absolute right-0 top-[calc(100%+0.5rem)] min-w-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-1 shadow-premium"
          >
            {locales.map((targetLocale) => {
              const isActive = targetLocale === locale;

              return (
                <Link
                  key={targetLocale}
                  href={pathname}
                  locale={targetLocale}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-2 rounded-xl px-3 py-2 text-[11px] font-black uppercase tracking-[0.18em] transition-premium ${
                    isActive
                      ? 'bg-dark text-white'
                      : 'text-gray-medium hover:bg-light hover:text-dark'
                  }`}
                  aria-current={isActive ? 'true' : undefined}
                >
                  <span className="text-base leading-none">
                    {languageFlags[targetLocale]}
                  </span>
                  {t(targetLocale)}
                </Link>
              );
            })}
          </nav>
        )}
      </div>
    );
  }

  return (
    <nav
      aria-label={t('label')}
      className="flex items-center gap-2 rounded-full border border-gray-200 bg-white/90 px-2 py-1 shadow-sm"
    >
      {locales.map((targetLocale) => {
        const isActive = targetLocale === locale;

        return (
          <Link
            key={targetLocale}
            href={pathname}
            locale={targetLocale}
            className={`rounded-full px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] transition-premium ${
              isActive
                ? 'bg-dark text-white'
                : 'text-gray-medium hover:bg-light hover:text-dark'
            }`}
            aria-current={isActive ? 'true' : undefined}
          >
            {t(targetLocale)}
          </Link>
        );
      })}
    </nav>
  );
}

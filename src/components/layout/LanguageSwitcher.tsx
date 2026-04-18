'use client';

import { useLocale, useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import { locales, type Locale } from '@/i18n/routing';

export default function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const t = useTranslations('languages');

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

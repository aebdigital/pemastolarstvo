"use client";

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import LanguageSwitcher from '@/components/layout/LanguageSwitcher';

export default function HomeHeader() {
  const t = useTranslations('homeHeader');

  return (
    <header className="bg-white border-b border-gray-100 flex items-center justify-center relative z-[200]">
      <div className="container mx-auto px-4 h-16 md:h-24 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-1 shrink-0">
          <Link href="/" className="block cursor-pointer">
            <Image
              src="/image.svg"
              alt="PMP-Produkt"
              width={140}
              height={70}
              className="h-10 md:h-16 w-auto object-contain transition-transform hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Welcome message in the middle (Desktop Only) */}
        <div className="flex-[2] text-center hidden md:block">
          <h2 className="text-lg md:text-2xl font-black uppercase text-dark tracking-wider">
            {t('welcome')}
          </h2>
        </div>

        <div className="flex-1 hidden md:flex justify-end">
          <LanguageSwitcher variant="dropdown" />
        </div>
      </div>
    </header>
  );
}

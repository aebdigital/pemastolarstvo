"use client";

import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function HomeHeader() {
  return (
    <header className="bg-white border-b border-gray-100 flex items-center justify-center relative z-[200]">
      <div className="container mx-auto px-4 h-16 md:h-24 flex items-center justify-between">
        {/* Logo on the left */}
        <div className="shrink-0">
          <Link href="/" className="block cursor-pointer">
            <Image
              src="/image.svg"
              alt="PMP-Produkt Logo"
              width={140}
              height={70}
              className="h-10 md:h-16 w-auto object-contain transition-transform hover:scale-105"
              priority
            />
          </Link>
        </div>

        {/* Welcome message in the middle (Desktop Only) */}
        <div className="flex-1 text-center hidden md:block">
          <h2 className="text-lg md:text-2xl font-black uppercase text-dark tracking-wider">
            Vitajte na stránke dvere a stolárstvo
          </h2>
        </div>

        {/* Mobile Toggle on the right */}
        <div className="shrink-0 flex items-center">
          <button
            className="relative z-[500] w-12 h-12 bg-dark text-white rounded-2xl flex flex-col items-center justify-center gap-1.5 shadow-xl transition-premium active:scale-95 group"
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
  );
}

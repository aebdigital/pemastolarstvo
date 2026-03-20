"use client";

import Image from 'next/image';
import { Link } from '@/i18n/routing';

export default function HomeHeader() {
  return (
    <header className="bg-white border-b border-gray-100 dark:border-gray-800">
      <div className="container mx-auto px-4 h-20 md:h-24 flex items-center">
        {/* Logo on the left */}
        <div className="w-1/4">
          <Link href="/" className="block">
            <Image
              src="/image.svg"
              alt="PMP-Produkt Logo"
              width={140}
              height={70}
              className="h-12 md:h-16 w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Welcome message in the middle */}
        <div className="flex-1 text-center">
          <h2 className="text-lg md:text-2xl font-black uppercase text-dark tracking-wider">
            Vitajte na stránke dvere a stolárstvo
          </h2>
        </div>

        {/* Empty space for balance */}
        <div className="w-1/4 hidden md:block" />
      </div>
    </header>
  );
}

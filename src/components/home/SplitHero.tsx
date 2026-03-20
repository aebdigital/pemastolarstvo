'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';

export default function SplitHero() {
  const [hovered, setHovered] = useState<'left' | 'right' | null>(null);
  const router = useRouter();
  const locale = useLocale();
  const t = useTranslations('home');

  return (
    <div className="split-container">
      {/* Left - Stolárstvo */}
      <div
        className="split-half left-half"
        data-hovered={hovered === 'left' ? 'true' : undefined}
        data-shrunk={hovered === 'right' ? 'true' : undefined}
        onMouseEnter={() => setHovered('left')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => router.push(`/${locale}/stolarstvo/o-nas`)}
      >
        <div className="split-bg">
          <Image
            src="/sources/leftnabytok.jpg"
            alt="Stolárstvo"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="split-overlay" />
        <div className="split-content">
          <h1>{t('carpentry')}</h1>
          <p>{t('carpentrySubtitle')}</p>
        </div>
      </div>

      {/* Right - Dvere */}
      <div
        className="split-half"
        data-hovered={hovered === 'right' ? 'true' : undefined}
        data-shrunk={hovered === 'left' ? 'true' : undefined}
        onMouseEnter={() => setHovered('right')}
        onMouseLeave={() => setHovered(null)}
        onClick={() => router.push(`/${locale}/dvere/o-nas`)}
      >
        <div className="split-bg">
          <Image
            src="/sources/rightdvere.jpg"
            alt="Dvere"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="split-overlay" />
        <div className="split-content">
          <h1>{t('doors')}</h1>
          <p>{t('doorsSubtitle')}</p>
        </div>
      </div>

    </div>
  );
}

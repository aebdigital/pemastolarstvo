'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';

export default function CookieBanner() {
  const t = useTranslations('cookies');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-dark text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          {t('message')}
        </p>
        <div className="flex gap-3 shrink-0">
          <button
            onClick={decline}
            className="px-4 py-2 text-sm border border-gray-500 rounded hover:bg-gray-700 transition-colors"
          >
            {t('decline')}
          </button>
          <button
            onClick={accept}
            className="px-4 py-2 text-sm bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            {t('accept')}
          </button>
        </div>
      </div>
    </div>
  );
}

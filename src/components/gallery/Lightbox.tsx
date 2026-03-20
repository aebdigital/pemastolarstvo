'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);

  const prev = useCallback(() => {
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
  }, [images.length]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose, prev, next]);

  return (
    <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={onClose}>
      <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
        <Image
          src={images[index]}
          alt={`Image ${index + 1}`}
          width={1200}
          height={800}
          className="max-h-[85vh] w-auto object-contain"
        />

        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-3xl hover:text-gray-300"
          aria-label="Close"
        >
          &times;
        </button>

        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
              aria-label="Previous"
            >
              &#8249;
            </button>
            <button
              onClick={next}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 text-white text-4xl hover:text-gray-300"
              aria-label="Next"
            >
              &#8250;
            </button>
          </>
        )}

        <div className="text-center text-white mt-3 text-sm">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

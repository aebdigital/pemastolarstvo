'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Lightbox from './Lightbox';

interface PortfolioGridProps {
  images: string[];
  variant?: 'default' | 'dvere';
}

export default function PortfolioGrid({ images, variant = 'default' }: PortfolioGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const gridClass = variant === 'dvere' ? 'gallery-grid dvere-active' : 'gallery-grid';
  const itemClass = variant === 'dvere' ? 'gallery-item dvere-tall' : 'gallery-item';

  return (
    <>
      <div className={gridClass}>
        {images.map((src, i) => (
          <div
            key={src}
            className={itemClass}
            onClick={() => setLightboxIndex(i)}
          >
            <Image
              src={src}
              alt={`Portfolio image ${i + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, (max-width: 1200px) 33vw, 25vw"
            />
          </div>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={images}
            initialIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}

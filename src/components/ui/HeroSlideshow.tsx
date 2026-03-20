'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface HeroSlideshowProps {
  images: string[];
  interval?: number;
  children?: React.ReactNode;
}

export default function HeroSlideshow({ images, interval = 5000, children }: HeroSlideshowProps) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          className={`object-cover transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
          priority={i === 0}
        />
      ))}
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        {children}
      </div>
    </section>
  );
}

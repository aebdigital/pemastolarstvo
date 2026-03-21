'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  images: string[];
  initialIndex: number;
  onClose: () => void;
}

export default function Lightbox({ images, initialIndex, onClose }: LightboxProps) {
  const [index, setIndex] = useState(initialIndex);
  const [direction, setDirection] = useState(0);

  const prev = useCallback(() => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  }, [images.length]);

  const next = useCallback(() => {
    setDirection(1);
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

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300000] bg-dark/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-20"
      onClick={onClose}
    >
      {/* Close button - Top Right */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-[300002] w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-dark transition-premium shadow-2xl group"
        aria-label="Close"
      >
        <i className="fas fa-times text-xl" />
      </button>

      {/* Navigation Arrows - Far left/right */}
      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="fixed left-4 sm:left-12 top-1/2 -translate-y-1/2 z-[300002] w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-dark transition-premium shadow-2xl group"
            aria-label="Previous"
          >
            <i className="fas fa-chevron-left text-xl" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="fixed right-4 sm:right-12 top-1/2 -translate-y-1/2 z-[300002] w-14 h-14 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-gold hover:text-dark transition-premium shadow-2xl group"
            aria-label="Next"
          >
            <i className="fas fa-chevron-right text-xl" />
          </button>
        </>
      )}

      {/* Image Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
        <div className="relative w-full h-[75vh] sm:h-[80vh] flex items-center justify-center overflow-hidden">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
                scale: { duration: 0.4 }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                <Image
                  src={images[index]}
                  alt={`Image ${index + 1}`}
                  fill
                  className="object-contain shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]"
                  priority
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Counter */}
        <div className="mt-8 px-6 py-2 bg-white/10 rounded-full backdrop-blur-md">
          <span className="text-gold font-black tracking-[0.3em] text-[10px] uppercase">
            {index + 1} / {images.length}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

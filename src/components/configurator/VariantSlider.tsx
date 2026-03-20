'use client';

import { useRef } from 'react';
import Image from 'next/image';
import type { DoorModel, DoorType } from '@/types/door';
import { motion } from 'framer-motion';

interface VariantSliderProps {
  model: DoorModel;
  doorType: DoorType;
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export default function VariantSlider({ model, doorType, selectedIndex, onSelect }: VariantSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  if (model.variants <= 1) return null;

  const variants = Array.from({ length: model.variants }, (_, i) => i + 1);

  return (
    <div className="mb-20">
      <div className="flex flex-col items-center gap-2 mb-12">
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Varianty Modelu</span>
        <h2 className="font-heading text-2xl md:text-3xl font-black text-dark text-center uppercase tracking-widest text-balance">
          {model.name} <span className="text-gold">Varianty</span>
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scrollbar-hide px-8 py-10 justify-center flex-wrap"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {variants.map((variantNum) => (
          <button
            key={variantNum}
            onClick={() => onSelect(variantNum)}
            className={`group relative flex-shrink-0 w-60 md:w-64 rounded-[2.5rem] overflow-hidden border-2 transition-premium transform ${selectedIndex === variantNum
              ? 'border-gold shadow-premium scale-[1.05] bg-white'
              : 'border-gray-50 bg-white hover:border-gold/30 hover:scale-[1.02]'
              }`}
          >
            <div className="relative aspect-[3/5] bg-white overflow-hidden p-0">
              <Image
                src={`/sources/konfig/${doorType === "sendvicove" ? "sendvic" : "ramove"}/${model.id}${variantNum}.png`}
                alt={`${model.name} variant ${variantNum}`}
                fill
                className="object-contain scale-[1.6] group-hover:scale-[1.7] transition-premium duration-700"
                sizes="320px"
              />

              {selectedIndex === variantNum && (
                <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
              )}
            </div>
            <div className={`p-6 text-center transition-premium ${selectedIndex === variantNum ? 'bg-dark text-gold' : 'bg-gray-100 text-gray-400 group-hover:text-dark'}`}>
              <span className="text-sm font-black uppercase tracking-[0.3em]">
                {model.id}-{variantNum}
              </span>
            </div>
            {selectedIndex === variantNum && (
              <div className="absolute top-3 right-3 w-7 h-7 bg-gold text-dark rounded-xl flex items-center justify-center shadow-lg animate-in zoom-in">
                <i className="fas fa-check text-[10px]" />
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

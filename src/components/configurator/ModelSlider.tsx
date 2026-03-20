'use client';

import { useRef } from 'react';
import Image from 'next/image';
import type { DoorModel } from '@/types/door';
import { motion } from 'framer-motion';

interface ModelSliderProps {
  models: DoorModel[];
  selectedId: string;
  doorType: 'ramove' | 'sendvicove';
  onSelect: (id: string) => void;
}

export default function ModelSlider({ models, selectedId, doorType, onSelect }: ModelSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 400;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="mb-20">
      <div className="flex flex-col items-center gap-2 mb-12">
        <span className="text-gold font-black uppercase tracking-[0.4em] text-[10px]">Modelová Rada</span>
        <h2 className="font-heading text-3xl md:text-4xl font-black text-dark text-center uppercase tracking-widest text-balance">
          Vyberte si svoj <span className="text-gold">Vzor</span>
        </h2>
      </div>

      <div className="relative group/slider max-w-[1400px] mx-auto">
        {/* Scroll buttons */}
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white shadow-premium rounded-2xl flex items-center justify-center hover:bg-dark hover:text-gold transition-premium opacity-0 group-hover/slider:opacity-100 -translate-x-7"
          aria-label="Previous"
        >
          <i className="fas fa-chevron-left text-lg" />
        </button>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white shadow-premium rounded-2xl flex items-center justify-center hover:bg-dark hover:text-gold transition-premium opacity-0 group-hover/slider:opacity-100 translate-x-7"
          aria-label="Next"
        >
          <i className="fas fa-chevron-right text-lg" />
        </button>

        {/* Slider */}
        <div
          ref={scrollRef}
          className="flex gap-10 overflow-x-auto scrollbar-hide px-8 py-10 snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {models.map((model) => (
            <button
              key={model.id}
              onClick={() => onSelect(model.id)}
              className={`group flex-shrink-0 w-60 md:w-64 snap-center rounded-[2.5rem] overflow-hidden border-2 transition-premium transform ${selectedId === model.id
                ? 'border-gold shadow-premium scale-[1.02] bg-white'
                : 'border-gray-50 bg-white hover:border-gold/30 hover:shadow-xl'
                }`}
            >
              <div className="relative aspect-[3/5] bg-white overflow-hidden p-0">
                <Image
                  src={`/sources/konfig/${doorType === "sendvicove" ? "sendvic" : "ramove"}/${model.id}1.png`}
                  alt={`Model ${model.name}`}
                  fill
                  className="object-contain scale-[1.6] group-hover:scale-[1.7] transition-premium duration-1000"
                  sizes="450px"
                />

                {selectedId === model.id ? (
                  <div className="absolute inset-0 bg-gold/5 pointer-events-none" />
                ) : (
                  <div className="absolute inset-0 bg-dark/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}
              </div>
              <div className={`p-8 text-center transition-premium ${selectedId === model.id ? 'bg-dark text-gold' : 'bg-gray-50 text-gray-400 group-hover:text-dark'}`}>
                <span className="text-sm font-black uppercase tracking-[0.3em]">
                  {model.name}
                </span>
              </div>

              {selectedId === model.id && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-gold text-dark rounded-xl flex items-center justify-center shadow-lg animate-bounce-subtle">
                  <i className="fas fa-check text-xs" />
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

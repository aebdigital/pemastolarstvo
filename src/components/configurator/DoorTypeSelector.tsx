'use client';

import Image from 'next/image';
import type { DoorType } from '@/types/door';

interface DoorTypeSelectorProps {
  selected: DoorType;
  onSelect: (type: DoorType) => void;
}

const types = [
  {
    id: 'ramove' as DoorType,
    title: 'Rámové dvere',
    description: 'Klasické rámové dvere s dreveným rámom a výplňou. 10 modelov.',
    image: '/sources/konfig/ramove.jpg',
  },
  {
    id: 'sendvicove' as DoorType,
    title: 'Sendvičové dvere',
    description: 'Moderné sendvičové dvere s vynikajúcou izoláciou. 13 modelov.',
    image: '/sources/konfig/sendvic.jpg',
  },
];

export default function DoorTypeSelector({ selected, onSelect }: DoorTypeSelectorProps) {
  return (
    <div className="mb-16">
      <h2 className="font-heading text-3xl font-black text-dark mb-10 text-center uppercase tracking-widest">
        Vyberte typ dverí
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {types.map((type) => (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
            className="relative group rounded-[3rem] overflow-hidden border-2 border-gray-100 bg-white transition-premium hover:border-gold/50 hover:shadow-2xl"
          >
            <div className="relative aspect-[16/11] w-full overflow-hidden">
              <Image
                src={type.image}
                alt={type.title}
                fill
                className="object-cover group-hover:scale-110 transition-premium duration-1000"
              />
              <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-premium" />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-80" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-heading text-4xl md:text-5xl font-black text-white uppercase tracking-wider drop-shadow-xl text-center px-4">
                  {type.title}
                </h3>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

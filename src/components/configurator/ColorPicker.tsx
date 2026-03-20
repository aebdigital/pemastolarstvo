'use client';

import Image from 'next/image';
import { getColorsForType } from '@/lib/colors';
import type { DoorColor } from '@/lib/colors';
import { DoorType } from '@/types/door';

interface ColorPickerProps {
  selectedCode: string;
  onSelect: (color: DoorColor) => void;
  doorType: DoorType;
}

export default function ColorPicker({ selectedCode, onSelect, doorType }: ColorPickerProps) {
  const colors = getColorsForType(doorType);
  const selectedColor = colors.find(c => c.code === selectedCode);

  return (
    <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
      <div className="flex justify-between items-baseline mb-6">
        <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">
          Dostupné dekory
        </label>
        <span className="text-xs font-black text-gold uppercase tracking-wider">
          {selectedColor?.name || selectedCode.replace('.png', '')}
        </span>
      </div>

      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-4">
        {colors.map((color) => (
          <button
            key={color.code}
            onClick={() => onSelect(color)}
            title={color.name}
            className={`group relative aspect-square rounded-full transition-premium ${selectedCode === color.code
              ? 'ring-2 ring-gold ring-offset-2 scale-110'
              : 'hover:scale-105'
              }`}
          >
            <div className={`w-full h-full rounded-full overflow-hidden border-2 transition-premium ${selectedCode === color.code ? 'border-gold' : 'border-transparent shadow-md'
              }`}>
              {color.swatch ? (
                <Image
                  src={color.swatch}
                  alt={color.name}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              ) : (
                <div
                  className="w-full h-full bg-gray-200"
                />
              )}
            </div>
            {selectedCode === color.code && (
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-gold rounded-full flex items-center justify-center shadow-lg border border-white">
                <i className="fas fa-check text-[8px] text-dark" />
              </div>
            )}

            {/* Tooltip hint for desktop */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-dark text-white text-[8px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
              {color.name}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

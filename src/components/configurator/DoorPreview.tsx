'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { DoorConfiguration, DoorModel } from '@/types/door';
import { getColorsForType } from '@/lib/colors';
import { getDoorImagePath, getColoredDoorImagePath, floorOptions } from '@/lib/door-models';
import BackgroundRoom from './BackgroundRoom';

interface DoorPreviewProps {
  config: DoorConfiguration;
  model: DoorModel;
}

export default function DoorPreview({ config, model }: DoorPreviewProps) {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Mirror the logic in Header.tsx
      // If we are scrolling down and passed 100px, header is likely hidden
      setHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const colors = getColorsForType(config.doorType);
  const color = colors.find((c) => c.code === config.color);

  // Try to get colored image, fallback to standard
  const imagePath = config.color && config.color.endsWith('.png')
    ? getColoredDoorImagePath(model.id, config.variantIndex, config.color)
    : getDoorImagePath(config.doorType, model.id, config.variantIndex);

  const selectedFloor = floorOptions.find(f => f.id === config.floorId) || floorOptions[2]; // Default to some floor

  return (
    <div
      className={`bg-white rounded-[2.5rem] p-10 sticky transition-all duration-300 shadow-premium border border-gray-100 overflow-hidden group`}
      style={{ top: headerHidden ? '2rem' : '8rem' }}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gold" />

      <div className="flex flex-col items-center mb-6">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-gold mb-2">Vizuálny náhľad</span>
        <h3 className="font-heading text-2xl font-black text-dark uppercase tracking-widest text-center">
          {model.name}
        </h3>
      </div>

      {/* Door image with Legacy-style Background & Floor */}
      <div className="door-preview-container relative aspect-square w-full mx-auto mb-10 overflow-hidden rounded-[2rem] shadow-inner-premium border border-gray-100">


        {/* 1. Background Wall (SVG) */}
        <div className="absolute inset-0 z-0 bg-white">
          <BackgroundRoom color={config.wallColor || '#c5bcb3'} />
        </div>

        {/* 2. Floor Overlay (Aligns with SVG floor y=781) */}
        <div
          className="floor-overlay-container absolute bottom-0 left-0 right-0 h-[11.25%] z-10 overflow-hidden"
        >
          <div
            className="floor-overlay absolute bottom-0 left-[-25%] w-[150%] h-[600%] opacity-90 transition-premium"
            style={{
              backgroundImage: `url('${selectedFloor.image}')`,
              backgroundRepeat: 'repeat',
              backgroundPosition: 'center bottom',
              backgroundSize: '400px 248px',
              transform: 'perspective(200px) rotateX(45deg)',
              transformOrigin: '50% bottom'
            }}
          />
        </div>

        {/* 3. Door Image (Stretched to full frame as in legacy) */}
        <div className="absolute inset-0 z-20 pointer-events-none">
          <Image
            src={imagePath}
            alt={`${model.name}`}
            fill
            className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-premium duration-700"
            priority
          />
        </div>

        {/* Edit Interior Button Shortcut */}
        <button
          onClick={() => {
            const el = document.getElementById('interior-section');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="absolute top-6 right-6 z-30 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex items-center justify-center text-dark hover:bg-gold hover:text-dark transition-premium group/edit"
        >
          <i className="fas fa-magic text-xs group-hover/edit:rotate-12 transition-transform" />
        </button>
      </div>

      {/* Config summary with premium list */}
      <div className="space-y-1">
        <SummaryItem label="Podskupina" value={config.doorType === 'ramove' ? 'Rámové dvere' : 'Sendvičové dvere'} />
        <SummaryItem label="Model" value={model.name} />
        <SummaryItem label="Variant" value={`${model.id}-${config.variantIndex}`} />

        <div className="flex justify-between items-center py-2.5 border-b border-gray-100 group/item">
          <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 group-hover/item:text-gold transition-colors">DEKOR</span>
          <span className="text-[11px] font-black text-dark flex items-center gap-3">
            {color?.swatch ? (
              <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-md">
                <Image src={color.swatch} alt={color.name} fill className="object-cover" />
              </div>
            ) : (
              <div
                className="w-8 h-8 rounded-full border-2 border-white shadow-md bg-gray-200"
              />
            )}
            <span className="uppercase tracking-tight">{config.colorName.replace('.png', '')}</span>
          </span>
        </div>

        <SummaryItem
          label="OTVÁRANIE"
          value={config.openingType}
        />

        <SummaryItem
          label="ZÁRUBEN"
          value={config.frameType === 'falcove' ? 'Falcová' : 'Bezfalcová'}
        />

        <div className="pt-6 mt-4">
          <div className="bg-dark rounded-2xl p-4 flex justify-between items-center">
            <span className="text-[10px] uppercase font-black tracking-widest text-gold">ROZMERY</span>
            <span className="text-sm font-black text-white">
              {config.width} × {config.height} × {config.thickness} <span className="text-[10px] text-white/50 ml-0.5 not-italic">cm</span>
            </span>
          </div>
        </div>

        {config.assembly && (
          <div className="mt-4 flex items-center gap-3 bg-gold/10 p-4 rounded-2xl border border-gold/20">
            <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shrink-0">
              <i className="fas fa-tools text-xs text-dark" />
            </div>
            <span className="text-[10px] uppercase font-black tracking-widest text-dark">Vrátane odbornej montáže</span>
          </div>
        )}
      </div>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2.5 border-b border-gray-100 group/item">
      <span className="text-[10px] uppercase font-black tracking-widest text-gray-400 group-hover/item:text-gold transition-colors">{label}</span>
      <span className="text-[11px] font-black text-dark uppercase tracking-wide">{value}</span>
    </div>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import type { DoorConfiguration, DoorModel } from '@/types/door';
import { getColorsForType } from '@/lib/colors';
import { getDoorImagePath, getColoredDoorImagePath, floorOptions } from '@/lib/door-models';
import BackgroundRoom from './BackgroundRoom';
import InteriorSidebar from './InteriorSidebar';

interface DoorPreviewProps {
  config: DoorConfiguration;
  model: DoorModel;
  onUpdate?: (updates: Partial<DoorConfiguration>) => void;
}

export default function DoorPreview({ config, model, onUpdate }: DoorPreviewProps) {
  const [headerHidden, setHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isInteriorOpen, setIsInteriorOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setHeaderHidden(currentScrollY > lastScrollY && currentScrollY > 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const colors = getColorsForType(config.doorType);
  const color = colors.find((c) => c.code === config.color);

  const imagePath = config.color && config.color.endsWith('.png')
    ? getColoredDoorImagePath(model.id, config.variantIndex, config.color)
    : getDoorImagePath(config.doorType, model.id, config.variantIndex);

  const selectedFloor = floorOptions.find(f => f.id === config.floorId) || floorOptions[2];

  return (
    <div
      className={`bg-white rounded-[1.5rem] sm:rounded-[2.5rem] p-4 sm:p-10 sticky transition-all duration-300 shadow-premium border border-gray-100 overflow-hidden group`}
      style={{ top: headerHidden ? '1rem' : '7rem' }}
    >
      <div className="absolute top-0 left-0 w-full h-2 bg-gold" />

      <div className="flex flex-col items-center mb-10 pt-4">
        <h3 className="font-heading text-2xl font-black text-dark uppercase tracking-widest text-center">
          {model.id} - Variant {config.variantIndex}
        </h3>
      </div>

      {/* Door image with Legacy-style Background & Floor */}
      <div className="door-preview-container relative aspect-square w-full mx-auto mb-10 overflow-hidden rounded-[2rem] shadow-inner-premium border border-gray-100">

        {/* 1. Background Wall (SVG) */}
        <div className="absolute inset-0 z-0 bg-white">
          <BackgroundRoom color={config.wallColor || '#c5bcb3'} />
        </div>

        {/* 2. Floor Overlay */}
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

        {/* 3. Door Image */}
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
          onClick={() => setIsInteriorOpen(true)}
          className="absolute top-6 right-6 z-30 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl flex items-center justify-center text-dark hover:bg-gold hover:text-dark transition-premium group/edit border border-gray-100"
          title="Prispôsobiť interiér"
        >
          <i className="fas fa-paint-brush text-sm group-hover/edit:rotate-12 transition-transform" />
          <span className="absolute inset-0 rounded-2xl bg-gold/20 animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>
      </div>

      {/* Interior Customization Sidebar */}
      {onUpdate && (
        <InteriorSidebar 
          isOpen={isInteriorOpen}
          onClose={() => setIsInteriorOpen(false)}
          config={config}
          onUpdate={onUpdate}
        />
      )}
    </div>
  );
}

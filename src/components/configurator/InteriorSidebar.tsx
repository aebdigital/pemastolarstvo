'use client';

import Image from 'next/image';
import { useLocale } from 'next-intl';
import type { DoorConfiguration } from '@/types/door';
import Portal from '@/components/layout/Portal';
import type { Locale } from '@/i18n/routing';
import { getConfiguratorCopy, getLocalizedFloorOptions } from '@/lib/configurator-i18n';
import { motion, AnimatePresence } from 'framer-motion';

interface InteriorSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  config: DoorConfiguration;
  onUpdate: (updates: Partial<DoorConfiguration>) => void;
}

export default function InteriorSidebar({ isOpen, onClose, config, onUpdate }: InteriorSidebarProps) {
  const locale = useLocale() as Locale;
  const copy = getConfiguratorCopy(locale);
  const floorOptions = getLocalizedFloorOptions(locale);

  return (
    <Portal>
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Sidebar overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 z-[300000] bg-dark/60 backdrop-blur-sm"
              onClick={onClose}
            />

            {/* Sidebar container */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 40, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-[300001] shadow-[-20px_0_50px_rgba(0,0,0,0.15)] flex flex-col"
              onClick={(e) => e.stopPropagation()}
              data-lenis-prevent
            >
              <div className="flex items-center justify-between p-8 border-b border-gray-100">
                <div className="flex flex-col gap-1">
                  <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">{copy.editInterior}</span>
                  <h2 className="font-heading text-2xl font-black text-dark uppercase tracking-wider">
                    {copy.roomInterior}
                  </h2>
                </div>
                <button
                  onClick={onClose}
                  className="w-10 h-10 rounded-full bg-light text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-premium shadow-sm"
                >
                  <i className="fas fa-times" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 space-y-12">
                {/* Wall Color Selection */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-xl bg-dark text-gold flex items-center justify-center text-xs font-black shadow-lg">1</div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-dark">{copy.wallColor}</h3>
                  </div>
                  
                  <div className="bg-light p-6 rounded-3xl border border-gray-100">
                    <div className="flex items-center gap-6">
                      <input 
                        type="color" 
                        value={config.wallColor || '#c5bcb3'} 
                        onChange={(e) => onUpdate({ wallColor: e.target.value })}
                        className="w-20 h-20 rounded-2xl cursor-pointer border-4 border-white shadow-sm ring-2 ring-transparent hover:ring-gold transition-all"
                      />
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-black text-dark uppercase tracking-wider">{config.wallColor || '#c5bcb3'}</span>
                        <span className="text-[10px] text-gray-400 leading-tight uppercase font-medium">{copy.chooseWallColor}</span>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Floor Selection */}
                <section className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-xl bg-dark text-gold flex items-center justify-center text-xs font-black shadow-lg">2</div>
                    <h3 className="text-sm font-black uppercase tracking-widest text-dark">{copy.floorType}</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-6">
                    {floorOptions.map((floor) => (
                      <button
                        key={floor.id}
                        onClick={() => onUpdate({ floorId: floor.id })}
                        className={`group relative flex flex-col gap-3 p-3 rounded-2xl border-2 transition-premium ${config.floorId === floor.id ? 'border-gold bg-gold/5 shadow-md' : 'border-gray-50 bg-white hover:border-gold/20'}`}
                      >
                        <div className="relative aspect-[16/6] rounded-xl overflow-hidden shadow-sm">
                          <Image src={floor.image} alt={floor.name} fill className="object-cover group-hover:scale-110 transition-premium duration-1000" />
                          {config.floorId === floor.id && (
                            <div className="absolute inset-0 bg-gold/10 flex items-center justify-center">
                              <div className="w-10 h-10 rounded-full bg-gold text-dark flex items-center justify-center shadow-lg transform scale-100">
                                 <i className="fas fa-check text-xs" />
                              </div>
                            </div>
                          )}
                        </div>
                        <span className="text-[10px] font-black uppercase text-center tracking-wider text-dark opacity-60 group-hover:opacity-100 transition-opacity">
                          {floor.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </section>
              </div>

              <div className="p-8 border-t border-gray-100 bg-white">
                <button
                  onClick={onClose}
                  className="w-full py-5 bg-dark text-white font-black uppercase tracking-widest rounded-2xl hover:bg-gold hover:text-dark transition-premium shadow-xl"
                >
                  {copy.done}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </Portal>
  );
}

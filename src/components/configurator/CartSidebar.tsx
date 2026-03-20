'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useCart } from '@/hooks/useCart';
import { useEffect } from 'react';
import { getColorsForType } from '@/lib/colors';
import { getDoorImagePath, getColoredDoorImagePath } from '@/lib/door-models';

export default function CartSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const { items, removeItem, count } = useCart();
  const router = useRouter();
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-cart', handleOpen);
    return () => window.removeEventListener('open-cart', handleOpen);
  }, []);

  const isConfigurator = pathname?.includes('konfigurator');

  return (
    <>
      {/* Floating cart button */}
      {isConfigurator && (
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed top-32 right-4 z-[120] w-16 h-16 bg-dark text-white rounded-full shadow-premium flex items-center justify-center group border-2 border-gold/20 transition-all duration-300 ${isOpen ? 'translate-x-32' : 'translate-x-0'}`}
        aria-label="Open cart"
      >
          <div className="relative">
            <i className="fas fa-shopping-cart text-xl group-hover:text-gold transition-colors" />
            {count > 0 && (
              <span className="absolute -top-3 -right-3 w-6 h-6 bg-red-600 text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-dark shadow-lg">
                {count}
              </span>
            )}
          </div>
        </button>
      )}

      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 z-[99998] bg-dark/60 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar container */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[450px] bg-white z-[99999] shadow-[-20px_0_50px_rgba(0,0,0,0.15)] flex flex-col transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) ${isOpen ? 'translate-x-0' : 'translate-x-full pointer-events-none'}`}
        onClick={(e) => e.stopPropagation()}
        data-lenis-prevent
      >
        <div className="flex items-center justify-between p-8 border-b border-gray-100">
          <div className="flex flex-col gap-1">
            <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Váš Výber</span>
            <h2 className="font-heading text-2xl font-black text-dark uppercase tracking-wider">
              Košík <span className="text-gray-medium opacity-50 ml-2">({count})</span>
            </h2>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-10 h-10 rounded-full bg-light text-dark flex items-center justify-center hover:bg-dark hover:text-white transition-premium shadow-sm"
            aria-label="Close"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-8 scrollbar-hide">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-light flex items-center justify-center text-gray-300">
                <i className="fas fa-shopping-cart text-2xl" />
              </div>
              <p className="text-gray-medium font-medium text-sm">Váš košík je momentálne prázdny</p>
            </div>
          ) : (
            <div className="space-y-6">
              {items.map((item, idx) => {
                const colors = getColorsForType(item.configuration.doorType);
                const color = colors.find((c) => c.code === item.configuration.color);
                
                // Image path logic same as DoorPreview
                const imagePath = item.configuration.color && item.configuration.color.endsWith('.png')
                  ? getColoredDoorImagePath(item.configuration.modelId, item.configuration.variantIndex, item.configuration.color)
                  : getDoorImagePath(item.configuration.doorType, item.configuration.modelId, item.configuration.variantIndex);

                return (
                  <div
                    key={item.id}
                    className="bg-light rounded-[2.5rem] p-6 border border-gray-100 shadow-inner-premium group relative"
                  >
                    <div className="flex flex-col gap-6">
                      {/* Door Image Thumbnail - Larger on top */}
                      <div className="w-full h-64 relative bg-white rounded-2xl overflow-hidden shadow-sm shrink-0 border border-gray-100 group-hover:shadow-md transition-premium">
                        <Image
                          src={imagePath}
                          alt={item.configuration.modelId}
                          fill
                          className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>

                      <div className="flex-1 space-y-4 px-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">{item.configuration.doorType === 'ramove' ? 'Rámové dvere' : 'Sendvičové dvere'}</span>
                            <h3 className="font-heading text-xl font-black text-dark uppercase mt-1 leading-none tracking-tight">
                              Model {item.configuration.modelId} — VARIANT {item.configuration.variantIndex}
                            </h3>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="w-10 h-10 rounded-full bg-white text-gray-400 flex items-center justify-center hover:bg-red-50 hover:text-red-500 transition-premium shadow-sm shrink-0"
                            aria-label="Remove"
                          >
                            <i className="fas fa-trash-alt text-xs" />
                          </button>
                        </div>

                        <div className="space-y-4 text-[12px] leading-relaxed">
                          <div className="space-y-2">
                            <p className="font-black text-dark uppercase tracking-widest text-[10px] opacity-30">Technické Parametre</p>
                            <div className="grid grid-cols-1 gap-1.5 pl-1 italic text-gray-medium">
                              <p>— Výška stavebného otvoru [cm] → <span className="text-dark font-bold not-italic">{item.configuration.height} cm</span></p>
                              <p>— Šírka stavebného otvoru [cm] → <span className="text-dark font-bold not-italic">{item.configuration.width} cm</span></p>
                              <p>— Hrúbka muriva [cm] → <span className="text-dark font-bold not-italic">{item.configuration.thickness} cm</span></p>
                            </div>
                          </div>

                          <div className="space-y-2 pt-4 border-t border-gray-200/50">
                            <div className="flex flex-col gap-1.5">
                              <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[11px] block">CPL lamináty / Dekor</span> {item.configuration.colorName.replace('.png', '')}</p>
                              <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[11px] block">Konštrukčné prevedenie</span> {
                                item.configuration.construction === 'plna-mdf' ? 'Plná MDF výplň' : 
                                item.configuration.construction === 'vostinove' ? 'Voštinová výplň' : 
                                item.configuration.construction === 'dutinkove' ? 'Dutinková drevotrieska' : 'Plná MDF výplň'
                              }</p>
                              <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[11px] block">Typ skla</span> {
                                item.configuration.glassType === 'none' ? 'Bez skla' :
                                item.configuration.glassType === 'matelux' ? 'Matelux' :
                                item.configuration.glassType === 'cincila' ? 'Činčila číra' :
                                item.configuration.glassType === 'dub-kora' ? 'Dubová kôra číra' : 'Matelux'
                              }</p>
                              <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[11px] block">Typ otvárania</span> {
                                item.configuration.openingType === 'otocne' ? 'Otočné' :
                                item.configuration.openingType === 'posuvne-stena' ? 'Na stenu' :
                                item.configuration.openingType === 'posuvne-puzdro' ? 'Do púzdra' :
                                item.configuration.openingType === 'lomene' ? 'Lomené' :
                                item.configuration.openingType === 'kyvne' ? 'Kyvné' :
                                item.configuration.openingType === 'protipoziarne' ? 'Protipožiarne' : 'Otočné'
                              }</p>
                              <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[11px] block">Prevedenie dverí</span> {item.configuration.frameType === 'falcove' ? 'Falcové dvere' : 'Bezfalcové dvere'}</p>
                              <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[11px] block">Kovanie - zámok</span> {
                                item.configuration.lockType === 'dozicky-bb' ? 'Dózický zámok (BB)' :
                                item.configuration.lockType === 'wc-zamok' ? 'WC zámok (WC)' :
                                item.configuration.lockType === 'fab-zamok' ? 'Cylindrický zámok (PZ)' : 'Dózický zámok (BB)'
                              }</p>
                              <p className="text-gray-medium"><span className="font-black text-dark uppercase tracking-tighter text-[11px] block text-gold">Požadovaná montáž</span> {item.configuration.assembly ? 'ÁNO' : 'NIE'}</p>
                            </div>
                          </div>

                          {item.configuration.notes && (
                            <div className="pt-2 border-t border-gray-200/50">
                              <p className="text-gray-medium italic"><span className="font-black text-dark uppercase tracking-tighter text-[10px] not-italic">Poznámka:</span> {item.configuration.notes}</p>
                            </div>
                          )}

                          <div className="pt-2 flex items-center justify-between">
                            <span className="text-[10px] uppercase font-black tracking-widest text-gray-400">Množstvo:</span>
                            <span className="text-sm font-black text-dark">{item.quantity} ks</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-8 border-t border-gray-100 bg-white">
            <button
              onClick={() => {
                setIsOpen(false);
                router.push(`/${locale}/dvere/dopyt`);
              }}
              className="w-full py-4 bg-dark text-white font-black uppercase tracking-[0.1em] text-sm rounded-xl hover:bg-gold hover:text-dark transition-premium shadow-xl flex items-center justify-center gap-3 group"
            >
              <span>Odoslať dopyt</span>
              <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        )}
      </div>
    </>
  );
}
function SummaryTag({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white/50 rounded-full border border-gray-200">
      <span className="text-[8px] font-black uppercase text-gray-400">{label}:</span>
      <span className="text-[9px] font-black uppercase text-dark tracking-tighter">{value}</span>
    </div>
  )
}

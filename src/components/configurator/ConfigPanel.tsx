'use client';

import type { DoorConfiguration } from '@/types/door';
import ColorPicker from './ColorPicker';
import type { DoorColor } from '@/lib/colors';
import Image from 'next/image';

interface ConfigPanelProps {
  config: DoorConfiguration;
  onUpdate: (updates: Partial<DoorConfiguration>) => void;
}

export default function ConfigPanel({ config, onUpdate }: ConfigPanelProps) {
  const handleColorSelect = (color: DoorColor) => {
    onUpdate({ color: color.code, colorName: color.name });
  };

  const isRamove = config.doorType === 'ramove';

  return (
    <div className="space-y-16">

      {/* 1. Color picker */}
      <section className="space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-dark text-gold flex items-center justify-center text-lg font-black shadow-xl rotate-3">1</div>
          <h3 className="font-heading text-2xl font-black text-dark uppercase tracking-widest">CPL Lamináty a Dekory</h3>
        </div>
        <div className="bg-light p-0 rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
          <ColorPicker selectedCode={config.color} onSelect={handleColorSelect} doorType={config.doorType} />
        </div>
      </section>

      {/* 2. Dimensions */}
      <section className="space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-dark text-gold flex items-center justify-center text-lg font-black shadow-xl -rotate-3">2</div>
          <h3 className="font-heading text-2xl font-black text-dark uppercase tracking-widest">Technické Rozmery</h3>
        </div>
        <div className="bg-white p-10 rounded-[2.5rem] border border-gray-100 shadow-inner-premium grid grid-cols-1 sm:grid-cols-3 gap-8">
          <DimensionInput
            label="Výška stavebného otvoru"
            value={config.height}
            onChange={(v) => onUpdate({ height: v })}
            min={150} max={250}
            unit="cm"
          />
          <DimensionInput
            label="Šírka stavebného otvoru"
            value={config.width}
            onChange={(v) => onUpdate({ width: v })}
            min={50} max={120}
            unit="cm"
          />
          <DimensionInput
            label="Hrúbka dokončenej steny"
            value={config.thickness}
            onChange={(v) => onUpdate({ thickness: v })}
            min={3} max={40}
            unit="cm"
          />
        </div>
      </section>


      {/* 3 & 4. Construction & Glass */}
      <div className="grid md:grid-cols-2 gap-12">
        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-dark text-gold flex items-center justify-center text-lg font-black shadow-xl rotate-3">3</div>
            <h3 className="font-heading text-xl font-black text-dark uppercase tracking-widest text-balance">Typové prevedenie konštrukcie</h3>
          </div>
          <div className="space-y-4">
            {isRamove ? (
              <OptionButton
                selected={config.construction === 'plna-mdf'}
                onClick={() => onUpdate({ construction: 'plna-mdf' })}
                label="Plná MDF výplň"
                description="Masívna konštrukcia pre maximálnu stabilitu"
                icon={`/sources/konfig/ramove konstrukcne 1.svg`}
              />
            ) : (
              <>
                <OptionButton
                  selected={config.construction === 'vostinove'}
                  onClick={() => onUpdate({ construction: 'vostinove' })}
                  label="Voštinová výplň"
                  description="Ľahká konštrukcia vhodná do interiéru"
                  icon={`/sources/konfig/sendvic konstrukcne 1.svg`}
                />
                <OptionButton
                  selected={config.construction === 'dutinkove'}
                  onClick={() => onUpdate({ construction: 'dutinkove' })}
                  label="Dutinková drevotrieska"
                  description="Zvýšená pevnosť a zvuková izolácia"
                  icon={`/sources/konfig/sendvic konstrukcne 2.svg`}
                />
              </>
            )}
          </div>
        </section>

        <section className="space-y-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-2xl bg-dark text-gold flex items-center justify-center text-lg font-black shadow-xl -rotate-3">4</div>
            <h3 className="font-heading text-xl font-black text-dark uppercase tracking-widest text-balance">Výplň a zasklenie dverí</h3>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <OptionButton small selected={config.glassType === 'none'} onClick={() => onUpdate({ glassType: 'none' })} label="Bez skla" />
            <OptionButton small selected={config.glassType === 'matelux'} onClick={() => onUpdate({ glassType: 'matelux' })} label="Matelux" icon="/sources/konfig/sklo 1.png" />
            <OptionButton small selected={config.glassType === 'cincila'} onClick={() => onUpdate({ glassType: 'cincila' })} label="Činčila číra" icon="/sources/konfig/sklo 2.png" />
            <OptionButton small selected={config.glassType === 'dub-kora'} onClick={() => onUpdate({ glassType: 'dub-kora' })} label="Dubová kôra číra" icon="/sources/konfig/sklo 3.png" />
          </div>
        </section>
      </div>

      {/* 5. Opening direction */}
      <section className="space-y-8">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-dark text-gold flex items-center justify-center text-lg font-black shadow-xl rotate-3">5</div>
          <h3 className="font-heading text-2xl font-black text-dark uppercase tracking-widest">Spôsob otvárania</h3>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            { id: 'otocne', label: 'Otočné', icon: '/sources/konfig/otvaranie/otvaranie 1.svg' },
            { id: 'posuvne-stena', label: 'Na stenu', icon: '/sources/konfig/otvaranie/otvaranie 2.svg' },
            { id: 'posuvne-puzdro', label: 'Do púzdra', icon: '/sources/konfig/otvaranie/otvaranie 3.svg' },
            { id: 'lomene', label: 'Lomené', icon: '/sources/konfig/otvaranie/otvaranie 4.svg' },
            { id: 'kyvne', label: 'Kyvné', icon: '/sources/konfig/otvaranie/otvaranie 5.svg' },
            { id: 'protipoziarne', label: 'Protipož.', icon: '/sources/konfig/otvaranie/otvaranie 6.svg' },
          ].map((opt) => (
            <OptionButton
              key={opt.id}
              vertical
              selected={config.openingType === opt.id}
              onClick={() => onUpdate({ openingType: opt.id })}
              label={opt.label}
              icon={opt.icon}
            />
          ))}
        </div>
      </section>

      {/* 6. Frame & Locks */}
      <div className="grid md:grid-cols-2 gap-12">
        <ConfigSection title="6. Prevedenie zárubne">
          <OptionButton
            selected={config.frameType === 'falcove'}
            onClick={() => onUpdate({ frameType: 'falcove' })}
            label="Falcové dvere"
            description="Klasické s viditeľným dorazom (falcom)"
            icon="/sources/konfig/falcove 1.svg"
          />
          <OptionButton
            selected={config.frameType === 'bezfalcove'}
            onClick={() => onUpdate({ frameType: 'bezfalcove' })}
            label="Bezfalcové dvere"
            description="Moderné dvere v jednej rovine so zárubňou"
            icon="/sources/konfig/falcove 2.svg"
          />
        </ConfigSection>

        <ConfigSection title="7. Typ uzamykania (Kovanie)">
          <ConfigButton
            active={config.lockType === 'dozicky-bb'}
            onClick={() => onUpdate({ lockType: 'dozicky-bb' })}
            label="Dózický zámok (BB)"
            description="Obyčajný kľúč pre vnútorné dvere"
          />
          <ConfigButton
            active={config.lockType === 'wc-zamok'}
            onClick={() => onUpdate({ lockType: 'wc-zamok' })}
            label="WC zámok (WC)"
            description="Špeciálne uzamykanie do kúpeľne/WC"
          />
          <ConfigButton
            active={config.lockType === 'fab-zamok'}
            onClick={() => onUpdate({ lockType: 'fab-zamok' })}
            label="Cylindrický zámok (PZ)"
            description="Zámok na cylindrickú vložku (FAB)"
          />
        </ConfigSection>
      </div>

      {/* 5.5 Montáž */}
      <section className="space-y-8 mt-12 mb-12">
        <div className="flex items-center gap-6">
          <div className="w-12 h-12 rounded-2xl bg-dark text-gold flex items-center justify-center text-lg font-black shadow-xl -rotate-2">
            <i className="fas fa-tools text-sm" />
          </div>
          <h3 className="font-heading text-xl font-black text-dark uppercase tracking-widest">Odborná montáž</h3>
        </div>
        <label className="flex items-center gap-6 p-8 bg-gold/5 rounded-[2.5rem] border-2 border-gold/10 cursor-pointer hover:bg-gold/10 hover:border-gold/30 transition-premium group/box">
          <div className="relative">
            <input
              type="checkbox"
              checked={config.assembly}
              onChange={(e) => onUpdate({ assembly: e.target.checked })}
              className="peer sr-only"
            />
            <div className="w-10 h-10 rounded-2xl border-2 border-dark/10 flex items-center justify-center transition-premium peer-checked:bg-gold peer-checked:border-gold">
              <i className="fas fa-check text-dark scale-0 peer-checked:scale-100 transition-premium" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black uppercase tracking-widest text-dark">Požadujem odbornú montáž</span>
          </div>
        </label>
      </section>

      {/* Finalize section */}
      <section className="bg-dark text-white p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-premium relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-110 group-hover:rotate-6 transition-premium duration-1000">
          <i className="fas fa-file-signature text-[12rem]" />
        </div>

        <div className="relative z-10 w-full space-y-8">
          <div className="flex flex-col gap-2">
            <span className="text-gold font-black uppercase tracking-[0.3em] text-[10px]">Dokončenie</span>
            <h3 className="text-3xl font-black uppercase tracking-wider">Poznámka k dopytu</h3>
          </div>
          <textarea
            value={config.notes || ''}
            onChange={(e) => onUpdate({ notes: e.target.value })}
            rows={4}
            placeholder="Špecifikujte prosím vaše požiadavky, napríklad atypické rozmery, špeciálne kovanie alebo iné detaily..."
            className="w-full px-6 py-4 sm:px-8 sm:py-6 bg-white/5 border border-white/10 rounded-[1.5rem] sm:rounded-3xl focus:ring-2 focus:ring-gold focus:bg-white/10 outline-none resize-none text-white placeholder:text-white/20 transition-premium text-sm leading-relaxed"
          />
        </div>
      </section>
    </div>
  );
}

function DimensionInput({ label, value, onChange, min, max, unit }: { label: string; value: number; onChange: (v: number) => void; min: number; max: number; unit?: string }) {
  return (
    <div className="space-y-3 group/dim">
      <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 pl-1 group-hover/dim:text-gold transition-colors">{label}</label>
      <div className="relative">
        <input
          type="number"
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          min={min}
          max={max}
          className="w-full px-6 py-5 bg-light border-2 border-transparent rounded-[1.5rem] focus:border-gold focus:bg-white outline-none text-xl font-black text-dark text-center transition-premium shadow-sm hover:shadow-md"
        />
        {unit && (
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[10px] font-black text-gray-300 pointer-events-none uppercase">{unit}</span>
        )}
      </div>
    </div>
  );
}

function OptionButton({ selected, onClick, label, description, icon, small, vertical }: { selected: boolean; onClick: () => void; label: string; description?: string; icon?: string; small?: boolean; vertical?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`relative w-full transition-premium flex overflow-hidden ${vertical ? 'flex-col items-center p-6 gap-4 text-center' : 'items-center p-5 gap-5 text-left'
        } ${small ? 'p-4 rounded-2xl' : 'rounded-[1.5rem]'
        } border-2 ${selected
          ? 'border-gold bg-gold/5 shadow-xl scale-[1.02]'
          : 'border-gray-50 bg-white hover:border-gold/30 hover:shadow-md'
        }`}
    >
      {selected && (
        <div className="absolute top-3 right-3 flex items-center justify-center w-6 h-6 bg-gold rounded-full shadow-lg z-10">
          <i className="fas fa-check text-[11px] text-dark" />
        </div>
      )}

      {icon && (
        <div className={`relative ${small ? 'w-10 h-10' : vertical ? 'w-16 h-16' : 'w-14 h-14'} shrink-0`}>
          <Image src={icon} alt={label} fill className="object-contain" />
        </div>
      )}

      <div className="flex flex-col gap-0.5">
        <span className={`text-[11px] font-black uppercase tracking-widest leading-tight ${selected ? 'text-dark' : 'text-gray-medium'}`}>
          {label}
        </span>
        {description && !small && !vertical && (
          <span className={`text-[10px] font-medium leading-tight ${selected ? 'text-dark/60' : 'text-gray-400'}`}>
            {description}
          </span>
        )}
      </div>
    </button>
  );
}

function ConfigSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-8">
      <div className="flex items-center gap-6">
        <div className="w-10 h-10 rounded-xl bg-dark text-gold flex items-center justify-center text-sm font-black shadow-lg">
          {title.split('.')[0]}
        </div>
        <h3 className="font-heading text-lg font-black text-dark uppercase tracking-widest">{title.split('.')[1] || title}</h3>
      </div>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
}

function ConfigButton({ active, onClick, label, description }: { active: boolean; onClick: () => void; label: string; description?: string }) {
  return (
    <button
      onClick={onClick}
      className={`w-full p-6 rounded-[1.5rem] border-2 transition-premium flex flex-col items-start gap-1 ${active
        ? 'border-gold bg-gold/5 shadow-xl scale-[1.02]'
        : 'border-gray-50 bg-white hover:border-gold/30 hover:shadow-md'
        }`}
    >
      <div className="flex justify-between items-center w-full">
        <span className={`text-xs font-black uppercase tracking-widest ${active ? 'text-dark' : 'text-gray-medium'}`}>
          {label}
        </span>
        {active && (
          <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center shadow-md">
            <i className="fas fa-check text-[10px] text-dark" />
          </div>
        )}
      </div>
      {description && (
        <span className={`text-[10px] text-left leading-relaxed ${active ? 'text-dark/60' : 'text-gray-400 font-medium'}`}>
          {description}
        </span>
      )}
    </button>
  );
}

'use client';

import { useConfigurator } from '@/hooks/useConfigurator';
import { useCart } from '@/hooks/useCart';
import DoorTypeSelector from './DoorTypeSelector';
import ModelSlider from './ModelSlider';
import VariantSlider from './VariantSlider';
import ConfigPanel from './ConfigPanel';
import DoorPreview from './DoorPreview';
import { motion, AnimatePresence } from 'framer-motion';

export default function Configurator() {
  const {
    config,
    step,
    models,
    currentModel,
    setStep,
    setDoorType,
    setModel,
    setVariant,
    updateConfig,
    resetConfig,
  } = useConfigurator();

  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: Date.now(),
      configuration: config,
      quantity: 1,
    });
    // Dispatch event to open sidebar
    window.dispatchEvent(new CustomEvent('open-cart'));
  };

  const steps = ['Typ', 'Model', 'Variant', 'Konfigurácia'];

  return (
    <div className="min-h-screen bg-white">
      {/* Progress steps - now interactive for past steps */}
      <div className="bg-light border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 py-8">
          <div className="grid grid-cols-4 gap-2 sm:gap-4">
            {steps.map((label, i) => (
              <div key={label} className="flex items-center gap-2 sm:gap-4">
                <button
                  disabled={i > step}
                  onClick={() => setStep(i)}
                  className={`flex items-center gap-3 transition-premium group ${step === i ? 'text-dark' : i < step ? 'text-gold cursor-pointer hover:opacity-70' : 'text-gray-300 cursor-not-allowed'
                    }`}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-black transition-premium ${step === i
                      ? 'bg-dark text-white shadow-xl scale-110'
                      : i < step
                        ? 'bg-gold text-dark'
                        : 'bg-gray-100 text-gray-400'
                      }`}
                  >
                    {i < step ? (
                      <i className="fas fa-check text-sm" />
                    ) : (
                      i + 1
                    )}
                  </div>
                  <div className="flex flex-col items-start translate-y-0.5 whitespace-nowrap">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none mb-1 opacity-50">Krok {i + 1}</span>
                    <span className={`text-[11px] font-black uppercase tracking-widest ${step === i ? 'text-dark' : ''}`}>
                      {label}
                    </span>
                  </div>
                </button>
                {i < 3 && (
                  <div
                    className={`w-8 sm:w-16 h-0.5 rounded-full transition-premium ${step > i ? 'bg-gold' : 'bg-gray-200'
                      }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 py-16">
        <AnimatePresence mode="wait">
          {/* Step 1: Door type */}
          {step === 0 && (
            <motion.div
              key="step-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <DoorTypeSelector selected={config.doorType} onSelect={setDoorType} />
            </motion.div>
          )}

          {/* Step 2: Model selection */}
          {step === 1 && (
            <motion.div
              key="step-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <ModelSlider
                models={models}
                selectedId={config.modelId}
                doorType={config.doorType}
                onSelect={setModel}
              />
              <NavigationButtons onBack={() => setStep(0)} />
            </motion.div>
          )}

          {/* Step 3: Variant selection */}
          {step === 2 && (
            <motion.div
              key="step-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <VariantSlider
                model={currentModel}
                doorType={config.doorType}
                selectedIndex={config.variantIndex}
                onSelect={setVariant}
              />
              <NavigationButtons onBack={() => setStep(1)} />
            </motion.div>
          )}

          {/* Step 4: Configuration + Preview */}
          {step === 3 && (
            <motion.div
              key="step-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid lg:grid-cols-12 gap-12 xl:gap-20"
            >
              <div className="lg:col-span-7 xl:col-span-6 space-y-12">
                <ConfigPanel config={config} onUpdate={updateConfig} />

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-6 pt-10 border-t border-gray-100">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 py-6 bg-dark text-white font-black uppercase tracking-[0.2em] rounded-full hover:bg-gold hover:text-dark transition-premium shadow-2xl group flex items-center justify-center gap-4"
                  >
                    <span>Pridať k naceneniu</span>
                    <i className="fas fa-file-invoice text-sm opacity-50 group-hover:opacity-100 transition-opacity" />
                  </button>
                  <button
                    onClick={resetConfig}
                    className="px-12 py-6 border-2 border-dark text-dark font-black uppercase tracking-[0.2em] rounded-full hover:bg-dark hover:text-white transition-premium"
                  >
                    Resetovať
                  </button>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-gold transition-colors flex items-center gap-2"
                >
                  <i className="fas fa-arrow-left" />
                  Späť na výber varianty
                </button>
              </div>

              {/* Door Preview */}
              <div className="relative lg:col-span-5 xl:col-span-6">
                <DoorPreview
                  config={config}
                  model={currentModel}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </div>
  );
}

function NavigationButtons({ onBack }: { onBack: () => void }) {
  return (
    <div className="max-w-4xl mx-auto flex justify-start mt-12">
      <button
        onClick={onBack}
        className="flex items-center gap-4 px-8 py-4 rounded-full border-2 border-dark/10 font-black uppercase tracking-widest text-[10px] hover:border-dark transition-premium"
      >
        <i className="fas fa-arrow-left" />
        Späť
      </button>
    </div>
  );
}

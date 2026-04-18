'use client';

import { useState, useCallback, useMemo } from 'react';
import type { DoorType, DoorConfiguration } from '@/types/door';
import { doorModels } from '@/lib/door-models';

const defaultConfig: DoorConfiguration = {
  doorType: 'ramove',
  modelId: 'O',
  variantIndex: 1, // Start with variant 1
  color: 'dub nebraska sedy.png',
  colorName: 'dub nebraska sedy.png',
  construction: 'konstrukcne-1',
  glassType: 'none',
  openingType: 'otocne', // Match with allOpeningOptions id
  frameType: 'falcove',
  lockType: 'standard',
  assembly: false,
  height: 197,
  width: 80,
  thickness: 4,
  floorId: 'dub-almington',
  wallColor: '#F5E6D3',
  notes: '',
};

export function useConfigurator() {
  const [config, setConfig] = useState<DoorConfiguration>(defaultConfig);
  const [step, setStep] = useState(0);

  const models = useMemo(
    () => (config.doorType === 'ramove' ? doorModels.ramove : doorModels.sendvicove),
    [config.doorType]
  );

  const currentModel = useMemo(
    () => models.find((m) => m.id === config.modelId) || models[0],
    [models, config.modelId]
  );

  // variants in DoorModel is a number representing total count
  const setDoorType = useCallback((doorType: DoorType) => {
    const newModels = doorType === 'ramove' ? doorModels.ramove : doorModels.sendvicove;
    setConfig((c) => ({
      ...c,
      doorType,
      modelId: newModels[0].id,
      variantIndex: 1,
    }));
    setStep(1);
  }, []);

  const setModel = useCallback((modelId: string) => {
    setConfig((c) => ({ ...c, modelId, variantIndex: 1 }));
    setStep(2);
  }, []);

  const setVariant = useCallback((variantIndex: number) => {
    setConfig((c) => ({ ...c, variantIndex }));
    setStep(3);
  }, []);

  const updateConfig = useCallback((updates: Partial<DoorConfiguration>) => {
    setConfig((c) => ({ ...c, ...updates }));
  }, []);

  const resetConfig = useCallback(() => {
    setConfig(defaultConfig);
    setStep(0);
  }, []);

  return {
    config,
    step,
    setStep,
    models,
    currentModel,
    setDoorType,
    setModel,
    setVariant,
    updateConfig,
    resetConfig,
  };
}

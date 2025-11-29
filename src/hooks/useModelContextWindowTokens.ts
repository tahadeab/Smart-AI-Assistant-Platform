/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { aiModelSelectors, useAiInfraStore } from '@/store/aiInfra';

export const useModelContextWindowTokens = (model: string, provider: string) => {
  const newValue = useAiInfraStore(aiModelSelectors.modelContextWindowTokens(model, provider));

  return newValue as number;
};

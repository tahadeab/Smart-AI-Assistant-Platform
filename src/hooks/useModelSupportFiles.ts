/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { aiModelSelectors, useAiInfraStore } from '@/store/aiInfra';

export const useModelSupportFiles = (model: string, provider: string) => {
  return useAiInfraStore(aiModelSelectors.isModelSupportFiles(model, provider));
};

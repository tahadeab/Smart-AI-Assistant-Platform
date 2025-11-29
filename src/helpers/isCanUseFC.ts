/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { aiModelSelectors, getAiInfraStoreState } from '@/store/aiInfra';

export const isCanUseFC = (model: string, provider: string): boolean => {
  return aiModelSelectors.isModelSupportToolUse(model, provider)(getAiInfraStoreState()) || false;
};

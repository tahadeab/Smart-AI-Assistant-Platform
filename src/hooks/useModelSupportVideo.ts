/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useAiInfraStore } from '@/store/aiInfra';
import { aiModelSelectors } from '@/store/aiInfra/selectors';

export const useModelSupportVideo = (id?: string, provider?: string) => {
  return useAiInfraStore((s) => {
    if (!id || !provider) return false;

    return aiModelSelectors.isModelSupportVideo(id, provider)(s);
  });
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import isEqual from 'fast-deep-equal';

import { useAiInfraStore } from '@/store/aiInfra';
import { EnabledProviderWithModels } from '@/types/aiProvider';

export const useEnabledChatModels = (): EnabledProviderWithModels[] => {
  const enabledChatModelList = useAiInfraStore((s) => s.enabledChatModelList, isEqual);

  return enabledChatModelList || [];
};

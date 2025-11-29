/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useAgentStore } from '@/store/agent';
import { agentSelectors } from '@/store/agent/slices/chat';
import { aiModelSelectors, useAiInfraStore } from '@/store/aiInfra';

export const useModelHasContextWindowToken = () => {
  const model = useAgentStore(agentSelectors.currentAgentModel);
  const provider = useAgentStore(agentSelectors.currentAgentModelProvider);

  return useAiInfraStore(aiModelSelectors.isModelHasContextWindowToken(model, provider));
};

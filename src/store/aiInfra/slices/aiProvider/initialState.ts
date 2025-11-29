/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { EnabledAiModel } from 'model-bank';

import {
  AiProviderDetailItem,
  AiProviderListItem,
  AiProviderRuntimeConfig,
  EnabledProvider,
  EnabledProviderWithModels,
} from '@/types/aiProvider';

export interface AIProviderState {
  activeAiProvider?: string;
  activeProviderModelList: any[];
  aiProviderConfigUpdatingIds: string[];
  aiProviderDetail?: AiProviderDetailItem | null;
  aiProviderList: AiProviderListItem[];
  aiProviderLoadingIds: string[];
  aiProviderRuntimeConfig: Record<string, AiProviderRuntimeConfig>;
  enabledAiModels?: EnabledAiModel[];
  enabledAiProviders?: EnabledProvider[];
  // used for select
  enabledChatModelList?: EnabledProviderWithModels[];
  enabledImageModelList?: EnabledProviderWithModels[];
  initAiProviderList: boolean;
  isInitAiProviderRuntimeState: boolean;
  providerSearchKeyword: string;
}

export const initialAIProviderState: AIProviderState = {
  activeProviderModelList: [],
  aiProviderConfigUpdatingIds: [],
  aiProviderList: [],
  aiProviderLoadingIds: [],
  aiProviderRuntimeConfig: {},
  initAiProviderList: false,
  isInitAiProviderRuntimeState: false,
  providerSearchKeyword: '',
};

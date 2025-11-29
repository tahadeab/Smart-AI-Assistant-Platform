/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { AiProviderModelListItem, LobeDefaultAiModelListItem } from 'model-bank';

export interface AIModelsState {
  aiModelLoadingIds: string[];
  aiProviderModelList: AiProviderModelListItem[];
  builtinAiModelList: LobeDefaultAiModelListItem[];
  isAiModelListInit?: boolean;
  modelSearchKeyword: string;
}

export const initialAIModelState: AIModelsState = {
  aiModelLoadingIds: [],
  aiProviderModelList: [],
  builtinAiModelList: [],
  modelSearchKeyword: '',
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { AIModelsState, initialAIModelState } from './slices/aiModel';
import { AIProviderState, initialAIProviderState } from './slices/aiProvider';

export interface AIProviderStoreState extends AIProviderState, AIModelsState {
  /* empty */
}

export const initialState: AIProviderStoreState = {
  ...initialAIProviderState,
  ...initialAIModelState,
};

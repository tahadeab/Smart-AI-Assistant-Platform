/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { KnowledgeBaseState, initialKnowledgeBaseState } from '../knowledgeBase/slices/crud';
import { RAGEvalState, initialDatasetState } from '../knowledgeBase/slices/ragEval';

export type KnowledgeBaseStoreState = KnowledgeBaseState & RAGEvalState;

export const initialState: KnowledgeBaseStoreState = {
  ...initialKnowledgeBaseState,
  ...initialDatasetState,
};

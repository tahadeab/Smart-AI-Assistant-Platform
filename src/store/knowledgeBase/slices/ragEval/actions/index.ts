/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { StateCreator } from 'zustand/vanilla';

import { KnowledgeBaseStore } from '@/store/knowledgeBase/store';

import { RAGEvalDatasetAction, createRagEvalDatasetSlice } from './dataset';
import { RAGEvalEvaluationAction, createRagEvalEvaluationSlice } from './evaluation';

export interface RAGEvalAction extends RAGEvalDatasetAction, RAGEvalEvaluationAction {
  // empty
}

export const createRagEvalSlice: StateCreator<
  KnowledgeBaseStore,
  [['zustand/devtools', never]],
  [],
  RAGEvalAction
> = (...params) => ({
  ...createRagEvalDatasetSlice(...params),
  ...createRagEvalEvaluationSlice(...params),
});

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { GenerationBatch } from '@/types/generation';

export interface GenerationBatchState {
  /**
   * Generation batches mapped by topic ID
   * Key: generationTopicId, Value: array of GenerationBatch
   */
  generationBatchesMap: Record<string, GenerationBatch[]>;
}

export const initialGenerationBatchState: GenerationBatchState = {
  generationBatchesMap: {},
};

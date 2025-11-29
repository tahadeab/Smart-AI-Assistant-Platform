/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ImageGenerationTopic } from '@/types/generation';

export interface GenerationTopicState {
  activeGenerationTopicId: string | null;
  loadingGenerationTopicIds: string[];
  generationTopics: ImageGenerationTopic[];
}

export const initialGenerationTopicState: GenerationTopicState = {
  activeGenerationTopicId:
    typeof window !== 'undefined' ? new URLSearchParams(window.location.search).get('topic') : null,
  loadingGenerationTopicIds: [],
  generationTopics: [],
};

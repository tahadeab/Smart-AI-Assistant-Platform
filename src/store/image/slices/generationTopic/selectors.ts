/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ImageStoreState } from '../../initialState';

const activeGenerationTopicId = (s: ImageStoreState) => s.activeGenerationTopicId;
const generationTopics = (s: ImageStoreState) => s.generationTopics;
const getGenerationTopicById = (id: string) => (s: ImageStoreState) =>
  s.generationTopics.find((topic) => topic.id === id);
const isLoadingGenerationTopic = (id: string) => (s: ImageStoreState) =>
  s.loadingGenerationTopicIds.includes(id);

export const generationTopicSelectors = {
  activeGenerationTopicId,
  generationTopics,
  getGenerationTopicById,
  isLoadingGenerationTopic,
};

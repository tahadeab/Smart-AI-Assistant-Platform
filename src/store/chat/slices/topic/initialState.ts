/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ChatTopic } from '@/types/topic';

export interface ChatTopicState {
  // TODO: need to add the null to the type
  activeTopicId?: string;
  creatingTopic: boolean;
  inSearchingMode?: boolean;
  isSearchingTopic: boolean;
  searchTopics: ChatTopic[];
  topicLoadingIds: string[];
  topicMaps: Record<string, ChatTopic[]>;
  topicRenamingId?: string;
  topicSearchKeywords: string;
  /**
   * whether topics have fetched
   */
  topicsInit: boolean;
}

export const initialTopicState: ChatTopicState = {
  activeTopicId: null as any,
  creatingTopic: false,
  isSearchingTopic: false,
  searchTopics: [],
  topicLoadingIds: [],
  topicMaps: {},
  topicSearchKeywords: '',
  topicsInit: false,
};

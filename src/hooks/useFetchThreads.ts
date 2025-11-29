/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useChatStore } from '@/store/chat';

export const useFetchThreads = (activeTopicId?: string) => {
  const [useFetchThreads] = useChatStore((s) => [s.useFetchThreads]);

  useFetchThreads(true, activeTopicId);
};

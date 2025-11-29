/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useChatStore } from '@/store/chat';
import { useSessionStore } from '@/store/session';

/**
 * Fetch topics for the current session
 */
export const useFetchTopics = () => {
  const [sessionId] = useSessionStore((s) => [s.activeId]);
  const useFetchTopics = useChatStore((s) => s.useFetchTopics);

  useFetchTopics(true, sessionId);
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useKnowledgeBaseStore } from '@/store/knowledgeBase';

export const useKnowledgeBaseItem = (id: string) => {
  const useFetchKnowledgeBaseItem = useKnowledgeBaseStore((s) => s.useFetchKnowledgeBaseItem);

  return useFetchKnowledgeBaseItem(id);
};

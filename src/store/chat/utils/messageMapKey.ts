/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export const messageMapKey = (sessionId: string, topicId?: string | null) => {
  let topic = topicId;

  if (typeof topicId === 'undefined') topic = null;

  return `${sessionId}_${topic}`;
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export interface MentionState {
  mentionedUsers: string[];
}

export const initialMentionState: MentionState = {
  mentionedUsers: [],
};

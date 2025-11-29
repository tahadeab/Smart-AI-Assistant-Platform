/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { MentionState } from './initialState';

const mentionedUsers = (s: MentionState) => s.mentionedUsers;
const hasMentionedUsers = (s: MentionState) => s.mentionedUsers.length > 0;

export const mentionSelectors = {
  hasMentionedUsers,
  mentionedUsers,
};

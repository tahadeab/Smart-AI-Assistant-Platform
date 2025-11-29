/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { SessionStore } from '@/store/session';

const sessionGroupItems = (s: SessionStore) => s.sessionGroups;

const getGroupById = (id: string) => (s: SessionStore) =>
  sessionGroupItems(s).find((group) => group.id === id);

export const sessionGroupSelectors = {
  getGroupById,
  sessionGroupItems,
};

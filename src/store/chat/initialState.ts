/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
// sort-imports-ignore
import { ChatAIChatState, initialAiChatState } from './slices/aiChat/initialState';
import { ChatToolState, initialToolState } from './slices/builtinTool/initialState';
import { ChatMessageState, initialMessageState } from './slices/message/initialState';
import { ChatOperationState, initialOperationState } from './slices/operation/initialState';
import { ChatPortalState, initialChatPortalState } from './slices/portal/initialState';
import { ChatThreadState, initialThreadState } from './slices/thread/initialState';
import { ChatTopicState, initialTopicState } from './slices/topic/initialState';

export type ChatStoreState = ChatTopicState &
  ChatMessageState &
  ChatAIChatState &
  ChatToolState &
  ChatThreadState &
  ChatPortalState &
  ChatOperationState;

export const initialState: ChatStoreState = {
  ...initialMessageState,
  ...initialAiChatState,
  ...initialTopicState,
  ...initialToolState,
  ...initialThreadState,
  ...initialChatPortalState,
  ...initialOperationState,

  // cloud
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DEFAULT_CHAT_GROUP_CHAT_CONFIG, DEFAULT_CHAT_GROUP_META_CONFIG } from '@/const/settings';
import { LobeChatGroupConfig, LobeChatGroupMetaConfig } from '@/types/chatGroup';

export type LoadingState = Record<string, boolean>;

export interface State {
  config?: LobeChatGroupConfig;
  id?: string;
  loading?: boolean;
  loadingState?: LoadingState;
  meta?: LobeChatGroupMetaConfig;
  onConfigChange?: (config: LobeChatGroupConfig) => void;
  onMetaChange?: (meta: LobeChatGroupMetaConfig) => void;
}

export const initialState: State = {
  config: DEFAULT_CHAT_GROUP_CHAT_CONFIG,
  loading: true,
  loadingState: {
    meta: false,
  },
  meta: DEFAULT_CHAT_GROUP_META_CONFIG,
};

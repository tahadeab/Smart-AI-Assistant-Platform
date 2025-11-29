/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useChatStore } from '@/store/chat';
import { useChatGroupStore } from '@/store/chatGroup';

export const useEnable = () => useChatGroupStore((s) => !!s.activeThreadAgentId);

export const onClose = () => {
  useChatGroupStore.setState({ activeThreadAgentId: '' });
  useChatStore.getState().togglePortal(false);
};

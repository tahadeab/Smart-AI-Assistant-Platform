/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useChatStore } from '@/store/chat';
import { portalThreadSelectors } from '@/store/chat/selectors';

export const useEnable = () => useChatStore(portalThreadSelectors.showThread);

export const onClose = () => {
  useChatStore.setState({ portalThreadId: undefined });
};

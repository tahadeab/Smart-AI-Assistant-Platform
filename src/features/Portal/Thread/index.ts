/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { PortalImpl } from '../type';
import Chat from './Chat';
import Header from './Header';
import { onClose, useEnable } from './hook';

export const Thread: PortalImpl = {
  Body: Chat,
  Header,
  Title: () => null,
  onClose,
  useEnable,
};

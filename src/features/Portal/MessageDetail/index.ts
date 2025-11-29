/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { PortalImpl } from '../type';
import Body from './Body';
import Header from './Header';
import { useEnable } from './useEnable';

export const MessageDetail: PortalImpl = {
  Body,
  Title: Header,
  useEnable,
};

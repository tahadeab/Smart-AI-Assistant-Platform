/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { BuiltinPortal } from '@lobechat/types';

import { WebBrowsingManifest } from './web-browsing';
import WebBrowsing from './web-browsing/Portal';

export const BuiltinToolsPortals: Record<string, BuiltinPortal> = {
  [WebBrowsingManifest.identifier]: WebBrowsing as BuiltinPortal,
};

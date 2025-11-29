/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { LobeBuiltinTool } from '@lobechat/types';

import { builtinTools } from '@/tools';

export interface BuiltinToolState {
  builtinToolLoading: Record<string, boolean>;
  builtinTools: LobeBuiltinTool[];
}

export const initialBuiltinToolState: BuiltinToolState = {
  builtinToolLoading: {},
  builtinTools,
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { BuiltinToolState, initialBuiltinToolState } from './slices/builtin';
import { CustomPluginState, initialCustomPluginState } from './slices/customPlugin';
import { MCPStoreState, initialMCPStoreState } from './slices/mcpStore';
import { PluginStoreState, initialPluginStoreState } from './slices/oldStore';
import { PluginState, initialPluginState } from './slices/plugin';

export type ToolStoreState = PluginState &
  CustomPluginState &
  PluginStoreState &
  BuiltinToolState &
  MCPStoreState;

export const initialState: ToolStoreState = {
  ...initialPluginState,
  ...initialCustomPluginState,
  ...initialPluginStoreState,
  ...initialBuiltinToolState,
  ...initialMCPStoreState,
};

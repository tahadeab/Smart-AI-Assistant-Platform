/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { LobeTool } from '@lobechat/types';

export type PluginsSettings = Record<string, any>;

export interface PluginState {
  installedPlugins: LobeTool[];
  loadingInstallPlugins: boolean;
  pluginsSettings: PluginsSettings;
  updatePluginSettingsSignal?: AbortController;
}

export const initialPluginState: PluginState = {
  installedPlugins: [],
  loadingInstallPlugins: true,
  pluginsSettings: {},
};

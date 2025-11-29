/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DEFAULT_SETTINGS } from '@lobechat/const';
import { UserSettings } from '@lobechat/types';
import type { PartialDeep } from 'type-fest';

export interface UserSettingsState {
  defaultSettings: UserSettings;
  settings: PartialDeep<UserSettings>;
  updateSettingsSignal?: AbortController;
}

export const initialSettingsState: UserSettingsState = {
  defaultSettings: DEFAULT_SETTINGS,
  settings: {},
};

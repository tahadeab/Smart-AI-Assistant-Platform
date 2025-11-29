/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DEFAULT_PREFERENCE } from '@/const/user';
import { UserPreference } from '@/types/user';

export interface UserPreferenceState {
  /**
   * the user preference, which only store in local storage
   */
  preference: UserPreference;
}

export const initialPreferenceState: UserPreferenceState = {
  preference: DEFAULT_PREFERENCE,
};

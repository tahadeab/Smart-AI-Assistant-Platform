/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { CustomSessionGroup, LobeSessionGroups } from '@/types/session';

export interface SessionGroupState {
  customSessionGroups: CustomSessionGroup[];
  sessionGroups: LobeSessionGroups;
}

export const initSessionGroupState: SessionGroupState = {
  customSessionGroups: [],
  sessionGroups: [],
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { useMemo } from 'react';

import { useStoreApi } from '../store';
import { PublicAction } from '../store/action';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

export type GroupChatSettingsInstance = PublicAction;

export const useGroupChatSettings = (): GroupChatSettingsInstance => {
  const storeApi = useStoreApi();

  const { updateGroupConfig, updateGroupMeta, resetGroupConfig, resetGroupMeta } =
    storeApi.getState();

  return useMemo(
    () => ({
      resetGroupConfig,
      resetGroupMeta,
      updateGroupConfig,
      updateGroupMeta,
    }),
    [],
  );
};

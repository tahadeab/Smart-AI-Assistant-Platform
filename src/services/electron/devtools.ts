/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { dispatch } from '@lobechat/electron-client-ipc';

class DevtoolsService {
  async openDevtools(): Promise<void> {
    return dispatch('openDevtools');
  }
}

export const electronDevtoolsService = new DevtoolsService();

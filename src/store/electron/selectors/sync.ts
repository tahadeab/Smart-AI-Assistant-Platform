/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ElectronState } from '../initialState';

const isSyncActive = (s: ElectronState) => s.dataSyncConfig.active;

const storageMode = (s: ElectronState) => s.dataSyncConfig.storageMode;
const remoteServerUrl = (s: ElectronState) => s.dataSyncConfig.remoteServerUrl || '';

export const electronSyncSelectors = {
  isSyncActive,
  remoteServerUrl,
  storageMode,
};

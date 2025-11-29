/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ElectronState } from '@/store/electron/initialState';

const userPath = (s: ElectronState) => s.appState.userPath;
const userHomePath = (s: ElectronState) => userPath(s)?.home || '';

const displayRelativePath = (path: string) => (s: ElectronState) => {
  const basePath = userHomePath(s);

  return !!basePath ? path.replaceAll(basePath, '~') : path;
};

export const desktopStateSelectors = {
  displayRelativePath,
  userHomePath,
  userPath,
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useToolStore } from '@/store/tool';

export const useCheckPluginsIsInstalled = (plugins: string[]) => {
  const checkPluginsIsInstalled = useToolStore((s) => s.useCheckPluginsIsInstalled);

  checkPluginsIsInstalled(true, plugins);
};

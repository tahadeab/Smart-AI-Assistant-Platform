/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useToolStore } from '@/store/tool';

export const useFetchInstalledPlugins = () => {
  const [useFetchInstalledPlugins] = useToolStore((s) => [s.useFetchInstalledPlugins]);

  return useFetchInstalledPlugins(true);
};

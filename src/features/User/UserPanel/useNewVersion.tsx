/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useGlobalStore } from '@/store/global';
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

export const useNewVersion = () => {
  const [hasNewVersion, useCheckLatestVersion] = useGlobalStore((s) => [
    s.hasNewVersion,
    s.useCheckLatestVersion,
  ]);

  const { enableCheckUpdates } = useServerConfigStore(featureFlagsSelectors);
  useCheckLatestVersion(enableCheckUpdates);

  return hasNewVersion;
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { PropsWithChildren, createContext, useContext } from 'react';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface FeatureFlags {
  hideDocs?: boolean;
  showChangelog?: boolean;
}

const FeatureFlagsContext = createContext<FeatureFlags>({});

export const useFeatureFlags = () => useContext(FeatureFlagsContext);

export const FeatureFlagsProvider = ({
  children,
  hideDocs,
  showChangelog,
}: PropsWithChildren<FeatureFlags>) => {
  return (
    <FeatureFlagsContext.Provider value={{ hideDocs, showChangelog }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
};

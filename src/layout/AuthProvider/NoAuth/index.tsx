/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { PropsWithChildren, memo } from 'react';
import { createStoreUpdater } from 'zustand-utils';

import { useUserStore } from '@/store/user';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const NoAuthProvider = memo<PropsWithChildren>(({ children }) => {
  const useStoreUpdater = createStoreUpdater(useUserStore);

  useStoreUpdater('isLoaded', true);

  return children;
});

export default NoAuthProvider;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { useGlobalStore } from '@/store/global';
import { systemStatusSelectors } from '@/store/global/selectors';

import Toast from './Toast';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const ZenModeToast = memo(() => {
  const inZenMode = useGlobalStore(systemStatusSelectors.inZenMode);

  return inZenMode && <Toast />;
});

export default ZenModeToast;

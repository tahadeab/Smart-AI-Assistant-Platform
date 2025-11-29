/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { useTheme } from 'antd-style';
import NextTopLoader from 'nextjs-toploader';
import { memo } from 'react';

import { isDesktop } from '@/const/version';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const NProgress = memo(() => {
  const theme = useTheme();
  return (
    !isDesktop && (
      <NextTopLoader
        color={theme.colorText}
        height={2}
        shadow={false}
        showSpinner={false}
        zIndex={1000}
      />
    )
  );
});

export default NProgress;

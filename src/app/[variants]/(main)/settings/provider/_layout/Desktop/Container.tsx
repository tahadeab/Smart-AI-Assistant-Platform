/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { PropsWithChildren, memo } from 'react';

import SettingContainer from '@/features/Setting/SettingContainer';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Container = memo<PropsWithChildren>(({ children }) => {
  return (
    <SettingContainer
      style={{
        paddingBlock: 24,
        paddingInline: 32,
      }}
    >
      {children}
    </SettingContainer>
  );
});
export default Container;

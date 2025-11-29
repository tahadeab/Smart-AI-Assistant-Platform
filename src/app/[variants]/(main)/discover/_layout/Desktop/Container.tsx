/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { useTheme } from 'antd-style';
import { PropsWithChildren, memo } from 'react';
import { Flexbox } from 'react-layout-kit';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Container = memo<PropsWithChildren>(({ children }) => {
  const theme = useTheme();

  return (
    <Flexbox
      height={'100%'}
      style={{
        background: theme.colorBgContainerSecondary,
        overflow: 'hidden',
        position: 'relative',
      }}
      width={'100%'}
    >
      {children}
    </Flexbox>
  );
});

export default Container;

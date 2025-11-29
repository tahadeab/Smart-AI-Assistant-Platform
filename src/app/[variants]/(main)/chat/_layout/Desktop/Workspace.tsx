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

const Workspace = memo<PropsWithChildren>(({ children }) => {
  const theme = useTheme();
  return (
    <Flexbox
      flex={1}
      style={{
        background: theme.colorBgContainerSecondary,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
    </Flexbox>
  );
});

export default Workspace;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { App } from 'antd';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const DesktopKnowledgeLayout = memo(() => {
  return (
    <App style={{ display: 'flex', flex: 1, height: '100%' }}>
      <Outlet />
    </App>
  );
});

DesktopKnowledgeLayout.displayName = 'DesktopKnowledgeLayout';

export default DesktopKnowledgeLayout;

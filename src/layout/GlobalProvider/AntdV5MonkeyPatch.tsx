/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { unstableSetRender } from 'antd';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const AntdV5MonkeyPatch = () => {
  useEffect(() => {
    unstableSetRender((node, container) => {
      const root = createRoot(container);
      root.render(node);
      return async () => {
        root.unmount();
      };
    });
  }, []);
  return null;
};

export default AntdV5MonkeyPatch;

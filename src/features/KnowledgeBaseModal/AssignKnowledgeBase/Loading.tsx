/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Skeleton } from 'antd';
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

const Loading = memo(() => {
  return (
    <Flexbox>
      <Skeleton paragraph={{ rows: 8 }} title={false} />
    </Flexbox>
  );
});

export default Loading;

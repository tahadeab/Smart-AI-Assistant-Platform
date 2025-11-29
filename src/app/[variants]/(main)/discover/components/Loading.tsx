/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { Skeleton } from 'antd';
import { memo } from 'react';

import Title from './Title';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Loading = memo<{ title: string }>(({ title }) => {
  return (
    <>
      <Title>{title}</Title>
      <Skeleton active paragraph={{ rows: 8 }} title={false} />
    </>
  );
});

export default Loading;

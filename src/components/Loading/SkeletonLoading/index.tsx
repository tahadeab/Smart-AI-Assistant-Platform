/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { Skeleton, SkeletonProps } from 'antd';
import { createStyles } from 'antd-style';
import { memo } from 'react';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const useStyles = createStyles(
  ({ css, responsive }) => css`
    ${responsive.mobile} {
      padding: 16px;
    }
  `,
);

const SkeletonLoading = memo<SkeletonProps>(({ className, ...rest }) => {
  const { cx, styles } = useStyles();

  return <Skeleton active className={cx(styles, className)} paragraph={{ rows: 8 }} {...rest} />;
});

export default SkeletonLoading;

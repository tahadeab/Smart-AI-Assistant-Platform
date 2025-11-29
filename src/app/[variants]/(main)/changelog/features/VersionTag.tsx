/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { Tag } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import { memo } from 'react';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const useStyles = createStyles(({ token, css }) => {
  return {
    tag: css`
      margin: 0;
      padding-block: 4px;
      padding-inline: 12px;
      border-radius: 16px;

      color: ${token.colorTextSecondary};
    `,
  };
});

const VersionTag = memo<{ range: string[] }>(({ range }) => {
  const { styles } = useStyles();

  return <Tag className={styles.tag}>{range.map((v) => 'v' + v).join(' ~ ')}</Tag>;
});

export default VersionTag;

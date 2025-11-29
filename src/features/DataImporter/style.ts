/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css }) => {
  return {
    children: css`
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background-color: transparent;
      }
    `,
    wrapper: css`
      font-size: inherit;
    `,
  };
});

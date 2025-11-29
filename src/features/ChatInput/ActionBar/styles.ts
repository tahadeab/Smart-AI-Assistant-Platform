/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, prefixCls }) => ({
  dropdownMenu: css`
    &.${prefixCls}-dropdown-menu {
      .${prefixCls}-dropdown-menu-item-group-list {
        margin: 0;
      }
      .${prefixCls}-avatar {
        margin-inline-end: var(--ant-margin-xs);
      }
    }
  `,
}));

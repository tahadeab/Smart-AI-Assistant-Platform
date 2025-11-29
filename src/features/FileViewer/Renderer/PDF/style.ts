/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => ({
  container: css`
    min-height: 100%;
  `,
  document: css`
    position: relative;
  `,
  documentContainer: css`
    padding-block: 10px;
    background-color: ${token.colorBgLayout};
  `,
  page: css`
    overflow: hidden;
    margin-block-end: 12px;
    border-radius: 4px;
    box-shadow: ${token.boxShadowTertiary};
  `,
}));

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createStyles } from 'antd-style';

export const useStyles = createStyles(({ css, token }) => {
  return {
    code: css`
      font-family: ${token.fontFamilyCode};
    `,
  };
});

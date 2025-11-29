/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { css, cx } from 'antd-style';

export const draggable = cx(css`
  -webkit-app-region: drag;
`);

export const nodrag = cx(css`
  -webkit-app-region: no-drag;
`);

export const electronStylish = {
  draggable,
  nodrag,
};

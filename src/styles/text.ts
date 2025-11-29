/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { css, cx } from 'antd-style';

export const lineEllipsis = (line: number) =>
  cx(css`
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: ${line};

    text-overflow: ellipsis;
  `);

export const oneLineEllipsis = lineEllipsis(1);

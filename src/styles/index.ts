/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createGlobalStyle } from 'antd-style';

import antdOverride from './antdOverride';
import global from './global';

const prefixCls = 'ant';

export const GlobalStyle = createGlobalStyle(({ theme }) => [
  global({ prefixCls, token: theme }),
  antdOverride({ prefixCls, token: theme }),
]);

export * from './text';

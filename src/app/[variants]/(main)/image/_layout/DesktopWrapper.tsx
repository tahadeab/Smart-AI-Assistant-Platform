/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import Menu from '../@menu/default';
import Topic from '../@topic/default';
import Desktop from './Desktop';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const DesktopImageWrapper = memo(() => {
  return <Desktop menu={<Menu />} topic={<Topic />} />;
});

DesktopImageWrapper.displayName = 'DesktopImageWrapper';

export default DesktopImageWrapper;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import Category from '../@category/default';
import Desktop from './Desktop';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const DesktopProfileWrapper = memo(() => {
  return <Desktop category={<Category />} />;
});

DesktopProfileWrapper.displayName = 'DesktopProfileWrapper';

export default DesktopProfileWrapper;

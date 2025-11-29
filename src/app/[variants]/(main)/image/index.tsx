/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { Suspense, memo } from 'react';

import ImageWorkspace from './features/ImageWorkspace';
import SkeletonList from './features/ImageWorkspace/SkeletonList';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const DesktopImagePage = memo(() => {
  return (
    <Suspense fallback={<SkeletonList />}>
      <ImageWorkspace />
    </Suspense>
  );
});

DesktopImagePage.displayName = 'DesktopImagePage';

export default DesktopImagePage;

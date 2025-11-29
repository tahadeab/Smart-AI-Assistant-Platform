/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Suspense } from 'react';

import Loading from '@/components/Loading/BrandTextLoading';

import AuthSignInBox from './AuthSignInBox';

export default () => (
  <Suspense fallback={<Loading />}>
    <AuthSignInBox />
  </Suspense>
);

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Suspense } from 'react';

import Loading from '@/components/Loading/BrandTextLoading';

import AuthErrorPage from './AuthErrorPage';

export default () => (
  <Suspense fallback={<Loading />}>
    <AuthErrorPage />
  </Suspense>
);

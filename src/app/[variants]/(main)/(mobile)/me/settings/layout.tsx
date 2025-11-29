/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loading from '@/components/Loading/BrandTextLoading';
import MobileContentLayout from '@/components/server/MobileNavLayout';

import Header from './features/Header';

const Layout = () => {
  return (
    <MobileContentLayout header={<Header />} withNav>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </MobileContentLayout>
  );
};

export default Layout;

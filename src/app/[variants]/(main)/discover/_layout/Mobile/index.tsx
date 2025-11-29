/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Outlet } from 'react-router-dom';

import NProgress from '@/components/NProgress';

const Layout = () => {
  return (
    <>
      <NProgress />
      <Outlet />
    </>
  );
};

Layout.displayName = 'MobileDiscoverStoreLayout';

export default Layout;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Outlet } from 'react-router-dom';

import MobileContentLayout from '@/components/server/MobileNavLayout';

import Header from './features/Header';

const Layout = () => {
  return (
    <MobileContentLayout header={<Header />}>
      <Outlet />
    </MobileContentLayout>
  );
};

export default Layout;

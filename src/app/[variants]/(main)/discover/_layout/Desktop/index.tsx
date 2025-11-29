/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Outlet } from 'react-router-dom';

import NProgress from '@/components/NProgress';

import Container from './Container';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <NProgress />
      <Container>
        <Header />
        <Outlet />
      </Container>
      {/* ↓ cloud slot ↓ */}

      {/* ↑ cloud slot ↑ */}
    </>
  );
};

Layout.displayName = 'DesktopDiscoverStoreLayout';

export default Layout;

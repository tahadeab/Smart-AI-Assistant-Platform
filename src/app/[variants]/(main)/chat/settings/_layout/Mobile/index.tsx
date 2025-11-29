/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { PropsWithChildren } from 'react';

import MobileContentLayout from '@/components/server/MobileNavLayout';
import Footer from '@/features/Setting/Footer';

import Header from './Header';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Layout = ({ children }: PropsWithChildren) => (
  <MobileContentLayout header={<Header />}>
    {children}
    <Footer />
  </MobileContentLayout>
);

Layout.displayName = 'MobileSessionSettingsLayout';

export default Layout;

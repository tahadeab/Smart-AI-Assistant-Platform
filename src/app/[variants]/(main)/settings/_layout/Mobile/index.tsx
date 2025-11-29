/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import MobileContentLayout from '@/components/server/MobileNavLayout';
import Footer from '@/features/Setting/Footer';
import { parseAsString, useQueryState } from '@/hooks/useQueryParam';
import { SettingsTabs } from '@/store/global/initialState';

import SettingsContent from '../SettingsContent';
import Header from './Header';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Layout = () => {
  const [activeTab] = useQueryState('active', parseAsString.withDefault(SettingsTabs.Common));

  return (
    <MobileContentLayout header={<Header />}>
      <SettingsContent activeTab={activeTab} mobile={true} />
      <Footer />
    </MobileContentLayout>
  );
};

Layout.displayName = 'MobileSettingsLayout';

export default Layout;

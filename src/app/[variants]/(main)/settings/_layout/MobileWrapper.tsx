/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';
import { Outlet } from 'react-router-dom';

import SettingsContextProvider from './ContextProvider';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const MobileSettingsWrapper = memo(() => {
  return (
    <SettingsContextProvider
      value={{
        showOpenAIApiKey: true,
        showOpenAIProxyUrl: true,
      }}
    >
      <Outlet />
    </SettingsContextProvider>
  );
});

MobileSettingsWrapper.displayName = 'MobileSettingsWrapper';

export default MobileSettingsWrapper;

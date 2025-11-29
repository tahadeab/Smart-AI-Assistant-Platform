/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { SessionProvider } from 'next-auth/react';
import { PropsWithChildren } from 'react';

import { API_ENDPOINTS } from '@/services/_url';

import UserUpdater from './UserUpdater';

const NextAuth = ({ children }: PropsWithChildren) => {
  return (
    <SessionProvider basePath={API_ENDPOINTS.oauth}>
      {children}
      <UserUpdater />
    </SessionProvider>
  );
};

export default NextAuth;

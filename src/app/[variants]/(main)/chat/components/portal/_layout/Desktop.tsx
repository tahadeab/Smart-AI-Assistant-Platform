/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { PropsWithChildren } from 'react';

import { PortalHeader } from '@/features/Portal/router';

import Body from '../features/Body';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <PortalHeader />
      <Body>{children}</Body>
    </>
  );
};

export default Layout;

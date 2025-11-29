/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { PropsWithChildren } from 'react';
import { Flexbox } from 'react-layout-kit';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Flexbox height={'100%'} style={{ overflow: 'hidden', position: 'relative' }} width={'100%'}>
      {children}
    </Flexbox>
  );
};

export default Layout;

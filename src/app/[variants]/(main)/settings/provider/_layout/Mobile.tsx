/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { PropsWithChildren } from 'react';
import { useSearchParams } from 'react-router-dom';

import ProviderMenu from '../ProviderMenu';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface LayoutProps extends PropsWithChildren {
  onProviderSelect: (providerKey: string) => void;
}

const Layout = ({ children, onProviderSelect }: LayoutProps) => {
  const [searchParams] = useSearchParams();
  const provider = searchParams.get('provider');
  return provider === 'all' || !provider ? (
    <ProviderMenu mobile={true} onProviderSelect={onProviderSelect} />
  ) : (
    children
  );
};

export default Layout;

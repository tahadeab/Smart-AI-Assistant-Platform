/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import React, { Suspense, lazy } from 'react';

import Loading from '@/components/Loading/BrandTextLoading';
import { DynamicLayoutProps } from '@/types/next';
import { RouteVariants } from '@/utils/server/routeVariants';

import Desktop from './_layout/Desktop';
import Mobile from './_layout/Mobile';

const PortalBody = lazy(() => import('@/features/Portal/router'));

const Inspector = async (props: DynamicLayoutProps) => {
  const isMobile = await RouteVariants.getIsMobile(props);

  const Layout = isMobile ? Mobile : Desktop;

  return (
    <Suspense fallback={<Loading />}>
      <Layout>
        <PortalBody />
      </Layout>
    </Suspense>
  );
};

Inspector.displayName = 'ChatInspector';

export default Inspector;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { RouterProvider } from 'react-router-dom';

import type { Locales } from '@/types/locale';

import { createMobileRouter } from './mobileRouter.config';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface ClientRouterProps {
  locale: Locales;
}

const ClientRouter = ({ locale }: ClientRouterProps) => {
  const router = createMobileRouter(locale);
  return <RouterProvider router={router} />;
};

ClientRouter.displayName = 'ClientRouter';

export default ClientRouter;

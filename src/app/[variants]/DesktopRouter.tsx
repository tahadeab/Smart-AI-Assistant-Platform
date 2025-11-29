/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import dynamic from 'next/dynamic';

import Loading from '@/components/Loading/BrandTextLoading';
import type { Locales } from '@/types/locale';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const DesktopRouterClient = dynamic(() => import('./DesktopClientRouter'), {
  loading: () => <Loading />,
  ssr: false,
});
interface DesktopRouterProps {
  locale: Locales;
}

const DesktopRouter = ({ locale }: DesktopRouterProps) => {
  return <DesktopRouterClient locale={locale} />;
};

export default DesktopRouter;

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

const MobileRouterClient = dynamic(() => import('./MobileClientRouter'), {
  loading: () => <Loading />,
  ssr: false,
});
interface MobileRouterProps {
  locale: Locales;
}

const MobileRouter = ({ locale }: MobileRouterProps) => {
  return <MobileRouterClient locale={locale} />;
};

export default MobileRouter;

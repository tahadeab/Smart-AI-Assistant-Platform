/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { Loader } from 'next/dist/shared/lib/dynamic';
import dynamic from 'next/dynamic';
import { FC, memo } from 'react';

import MobileSwitchLoading from '@/features/MobileSwitchLoading';
import { useIsMobile } from '@/hooks/useIsMobile';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface ClientResponsiveContentProps {
  Desktop: FC;
  Mobile: Loader;
}

const ClientResponsiveContent = ({ Mobile, Desktop }: ClientResponsiveContentProps) => {
  const MobileComponent = dynamic(Mobile, {
    loading: MobileSwitchLoading,
    ssr: false,
  });

  const Content = memo(() => {
    const mobile = useIsMobile();

    return mobile ? <MobileComponent /> : <Desktop />;
  });

  Content.displayName = 'ClientResponsiveContent';

  return Content;
};

export default ClientResponsiveContent;

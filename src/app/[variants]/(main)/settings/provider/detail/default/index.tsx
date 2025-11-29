/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { useAiInfraStore } from '@/store/aiInfra';
import { useServerConfigStore } from '@/store/serverConfig';

import ModelList from '../../features/ModelList';
import ProviderConfig, { ProviderConfigProps } from '../../features/ProviderConfig';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface ProviderDetailProps extends ProviderConfigProps {
  showConfig?: boolean;
}
const ProviderDetail = memo<ProviderDetailProps>(({ showConfig = true, ...card }) => {
  const useFetchAiProviderItem = useAiInfraStore((s) => s.useFetchAiProviderItem);
  const useFetchAiProviderList = useAiInfraStore((s) => s.useFetchAiProviderList);
  const isMobile = useServerConfigStore((s) => s.isMobile);

  useFetchAiProviderList({ enabled: isMobile });
  useFetchAiProviderItem(card.id);

  return (
    <Flexbox gap={24} paddingBlock={8}>
      {/* ↓ cloud slot ↓ */}

      {/* ↑ cloud slot ↑ */}
      {showConfig && <ProviderConfig {...card} />}
      <ModelList id={card.id} {...card.settings} />
    </Flexbox>
  );
});

export default ProviderDetail;

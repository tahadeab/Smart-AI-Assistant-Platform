/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Skeleton } from 'antd';
import { Suspense, memo } from 'react';

import { ChatSettingsTabs } from '@/store/global/initialState';
import { useServerConfigStore } from '@/store/serverConfig';

import AgentSettingsContent from './AgentSettingsContent';
import { AgentSettingsProvider } from './AgentSettingsProvider';
import { StoreUpdaterProps } from './StoreUpdater';

export interface AgentSettingsProps extends StoreUpdaterProps {
  tab: ChatSettingsTabs;
}

const AgentSettings = memo<AgentSettingsProps>(({ tab = ChatSettingsTabs.Meta, ...rest }) => {
  const isMobile = useServerConfigStore((s) => s.isMobile);
  const loadingSkeleton = (
    <Skeleton active paragraph={{ rows: 6 }} style={{ padding: isMobile ? 16 : 0 }} title={false} />
  );

  return (
    <AgentSettingsProvider {...rest}>
      <Suspense fallback={loadingSkeleton}>
        <AgentSettingsContent loadingSkeleton={loadingSkeleton} tab={tab} />
      </Suspense>
    </AgentSettingsProvider>
  );
});

export default AgentSettings;

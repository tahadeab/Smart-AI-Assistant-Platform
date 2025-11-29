/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { useWatchBroadcast } from '@lobechat/electron-client-ipc';
import { useCallback, useState } from 'react';

import { McpInstallRequest } from '@/features/ProtocolUrlHandler/InstallPlugin/types';

import PluginInstallConfirmModal from './InstallPlugin';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const ProtocolUrlHandler = () => {
  const [installRequest, setInstallRequest] = useState<McpInstallRequest | null>(null);

  const handleMcpInstallRequest = useCallback(
    (data: { marketId?: string; pluginId: string; schema: any }) => {
      // 将原始数据传递给子组件处理
      setInstallRequest(data as McpInstallRequest);
    },
    [],
  );

  const handleComplete = useCallback(() => {
    setInstallRequest(null);
  }, []);

  useWatchBroadcast('mcpInstallRequest', handleMcpInstallRequest);

  return <PluginInstallConfirmModal installRequest={installRequest} onComplete={handleComplete} />;
};

export default ProtocolUrlHandler;

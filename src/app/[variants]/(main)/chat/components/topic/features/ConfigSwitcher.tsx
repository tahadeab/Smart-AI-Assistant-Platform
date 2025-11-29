/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';
import { useSessionStore } from '@/store/session';
import { sessionSelectors } from '@/store/session/selectors';

import AgentConfig from './AgentConfig';
import GroupConfig from './GroupConfig';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const ConfigSwitcher = memo(() => {
  const { isAgentEditable: showSystemRole } = useServerConfigStore(featureFlagsSelectors);
  const isInbox = useSessionStore(sessionSelectors.isInboxSession);
  const isGroupSession = useSessionStore(sessionSelectors.isCurrentSessionGroupSession);

  if (isInbox) return;
  if (isGroupSession) return <GroupConfig />;
  if (showSystemRole) return <AgentConfig />;
  return;
});

ConfigSwitcher.displayName = 'ConfigSwitcher';

export default ConfigSwitcher;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import PageTitle from '@/components/PageTitle';
import { useChatStore } from '@/store/chat';
import { topicSelectors } from '@/store/chat/selectors';
import { useSessionStore } from '@/store/session';
import { sessionMetaSelectors } from '@/store/session/selectors';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Title = memo(() => {
  const agentTitle = useSessionStore(sessionMetaSelectors.currentAgentTitle);

  const topicTitle = useChatStore((s) => topicSelectors.currentActiveTopic(s)?.title);
  return <PageTitle title={[topicTitle, agentTitle].filter(Boolean).join(' · ')} />;
});

export default Title;

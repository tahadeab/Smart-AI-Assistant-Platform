/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { DEFAULT_REWRITE_QUERY } from '@lobechat/prompts';

import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import SystemAgentForm from './features/SystemAgentForm';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Page = () => {
  const { enableKnowledgeBase } = useServerConfigStore(featureFlagsSelectors);
  return (
    <>
      <SystemAgentForm systemAgentKey="topic" />
      <SystemAgentForm systemAgentKey="generationTopic" />
      <SystemAgentForm systemAgentKey="translation" />
      <SystemAgentForm systemAgentKey="historyCompress" />
      <SystemAgentForm systemAgentKey="agentMeta" />
      {enableKnowledgeBase && (
        <SystemAgentForm
          allowCustomPrompt
          allowDisable
          defaultPrompt={DEFAULT_REWRITE_QUERY}
          systemAgentKey="queryRewrite"
        />
      )}
    </>
  );
};

Page.displayName = 'SystemAgent';

export default Page;

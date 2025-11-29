/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { Divider } from 'antd';
import React, { memo } from 'react';

import { useSessionStore } from '@/store/session';
import { sessionSelectors } from '@/store/session/selectors';

import Header from './Header';
import TopicListContent from './TopicListContent';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Topic = memo(() => {
  const isInbox = useSessionStore(sessionSelectors.isInboxSession);

  return (
    <>
      {!isInbox && <Divider style={{ margin: 0 }} />}

      <Header />
      <TopicListContent />
    </>
  );
});

Topic.displayName = 'Topic';

export default Topic;

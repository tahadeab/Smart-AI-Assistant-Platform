/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { useSessionStore } from '@/store/session';
import { sessionSelectors } from '@/store/session/selectors';

import ClassicChatInput from './ClassicChat';
import GroupChatInput from './GroupChat';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Desktop = memo((props: { targetMemberId?: string }) => {
  const isGroupSession = useSessionStore(sessionSelectors.isCurrentSessionGroupSession);
  return isGroupSession ? <GroupChatInput {...props} /> : <ClassicChatInput />;
});

export default Desktop;

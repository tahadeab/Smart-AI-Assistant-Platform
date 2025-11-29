/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { useSessionStore } from '@/store/session';

import DefaultMode from './DefaultMode';
import SearchMode from './SearchMode';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const SessionListContent = memo(() => {
  const isSearching = useSessionStore((s) => s.isSearching);

  return isSearching ? <SearchMode /> : <DefaultMode />;
});

SessionListContent.displayName = 'SessionListContent';

export default SessionListContent;

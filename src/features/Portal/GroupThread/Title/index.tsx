/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { memo } from 'react';

import { useChatGroupStore } from '@/store/chatGroup';

const Title = memo(() => {
  useChatGroupStore((s) => s.activeThreadAgentId);
  return <span>DM</span>;
});

export default Title;

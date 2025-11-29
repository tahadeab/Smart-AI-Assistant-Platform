/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { AgentCategory } from '@/features/AgentSetting';
import { parseAsString, useQueryState } from '@/hooks/useQueryParam';
import { ChatSettingsTabs } from '@/store/global/initialState';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Menu = memo(() => {
  const [tab, setTab] = useQueryState('tab', parseAsString.withDefault(ChatSettingsTabs.Prompt));

  return <AgentCategory setTab={setTab} tab={tab} />;
});

export default Menu;

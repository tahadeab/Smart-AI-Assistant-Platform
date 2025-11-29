/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import Menu from '@/components/Menu';
import { GroupSettingsTabs } from '@/store/global/initialState';

import { useChatGroupSettingsCategory } from './useGroupCategory';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface GroupCategoryProps {
  setTab: (tab: GroupSettingsTabs) => void;
  tab: string;
}

const GroupCategory = memo<GroupCategoryProps>(({ setTab, tab }) => {
  const cateItems = useChatGroupSettingsCategory();
  return (
    <Menu
      compact
      items={cateItems}
      onClick={({ key }) => {
        setTab(key as GroupSettingsTabs);
      }}
      selectable
      selectedKeys={[tab as any]}
    />
  );
});

export default GroupCategory;

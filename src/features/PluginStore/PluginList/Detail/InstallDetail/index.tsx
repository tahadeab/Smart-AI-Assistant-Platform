/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { memo, useState } from 'react';
import { Flexbox } from 'react-layout-kit';

import { PluginNavKey } from '@/types/discover';

import Nav from './Nav';
import Settings from './Settings';
import Tools from './Tools';

const InstallDetail = memo(() => {
  const [activeTab, setActiveTab] = useState(PluginNavKey.Tools);

  return (
    <Flexbox gap={16}>
      <Nav activeTab={activeTab as PluginNavKey} setActiveTab={setActiveTab} />
      <Flexbox>
        {activeTab === PluginNavKey.Tools && <Tools />}
        {activeTab === PluginNavKey.Settings && <Settings />}
      </Flexbox>
    </Flexbox>
  );
});

export default InstallDetail;

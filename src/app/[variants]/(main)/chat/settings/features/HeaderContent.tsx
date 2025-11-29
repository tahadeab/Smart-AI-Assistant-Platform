/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { memo } from 'react';

import SmartAgentActionButton from './SmartAgentActionButton';

export const HeaderContent = memo<{ mobile?: boolean; modal?: boolean }>(({ modal }) => {
  return <SmartAgentActionButton modal={modal} />;
});

export default HeaderContent;

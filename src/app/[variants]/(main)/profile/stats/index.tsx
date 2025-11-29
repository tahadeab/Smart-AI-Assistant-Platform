/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import StatsClient from './Client';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const MobileProfileStatsPage = memo(() => {
  const mobile = true;
  return <StatsClient mobile={mobile} />;
});

MobileProfileStatsPage.displayName = 'MobileProfileStatsPage';

const DesktopProfileStatsPage = memo(() => {
  const mobile = false;
  return <StatsClient mobile={mobile} />;
});

export { DesktopProfileStatsPage, MobileProfileStatsPage };

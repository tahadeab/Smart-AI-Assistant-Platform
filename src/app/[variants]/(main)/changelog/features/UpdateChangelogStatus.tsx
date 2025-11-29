/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo, useEffect } from 'react';

import { useGlobalStore } from '@/store/global';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const UpdateChangelogStatus = memo<{ currentId?: string }>(({ currentId }) => {
  const [latestChangelogId, updateSystemStatus] = useGlobalStore((s) => [
    s.status.latestChangelogId,
    s.updateSystemStatus,
  ]);

  useEffect(() => {
    if (!currentId || currentId === latestChangelogId) return;
    updateSystemStatus({ latestChangelogId: currentId });
  }, [latestChangelogId, currentId]);

  return null;
});

export default UpdateChangelogStatus;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DiscoverTab } from '@/types/discover';

import { useQueryState } from './useQueryParam';

export const useDiscoverTab = () => {
  const [type] = useQueryState('type', {
    clearOnDefault: true,
    defaultValue: DiscoverTab.Assistants,
  });

  return type as DiscoverTab;
};

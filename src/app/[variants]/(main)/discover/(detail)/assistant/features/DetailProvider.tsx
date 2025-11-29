/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { type ReactNode, createContext, memo, use } from 'react';

import { DiscoverAssistantDetail } from '@/types/discover';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

export type DetailContextConfig = Partial<DiscoverAssistantDetail>;

export const DetailContext = createContext<DetailContextConfig>({});

export const DetailProvider = memo<{ children: ReactNode; config?: DetailContextConfig }>(
  ({ children, config = {} }) => {
    return <DetailContext value={config}>{children}</DetailContext>;
  },
);

export const useDetailContext = () => {
  return use(DetailContext);
};

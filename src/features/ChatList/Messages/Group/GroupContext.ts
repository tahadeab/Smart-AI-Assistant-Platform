/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createContext, useContext } from 'react';

interface GroupMessageContextValue {
  assistantGroupId: string;
}

export const GroupMessageContext = createContext<GroupMessageContextValue | null>(null);

export const useGroupMessage = () => {
  const context = useContext(GroupMessageContext);
  if (!context) {
    throw new Error('useGroupMessage must be used within GroupMessageContext');
  }
  return context;
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ReactNode, memo } from 'react';

import StoreUpdater, { StoreUpdaterProps } from './StoreUpdater';
import { Provider, createStore } from './store';

interface GroupChatSettingsProviderProps extends StoreUpdaterProps {
  children: ReactNode;
}

export const GroupChatSettingsProvider = memo<GroupChatSettingsProviderProps>(
  ({ children, ...props }) => {
    return (
      <Provider createStore={createStore}>
        <StoreUpdater {...props} />
        {children}
      </Provider>
    );
  },
);

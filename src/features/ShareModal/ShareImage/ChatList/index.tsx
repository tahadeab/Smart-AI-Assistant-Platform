/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { memo } from 'react';
import { Flexbox } from 'react-layout-kit';

import { ChatItem } from '@/features/ChatList';
import { useChatStore } from '@/store/chat';
import { chatSelectors } from '@/store/chat/selectors';

const ChatList = memo(() => {
  const ids = useChatStore(chatSelectors.mainDisplayChatIDs);

  return (
    <Flexbox height={'100%'} style={{ paddingTop: 24, position: 'relative' }} width={'100%'}>
      {ids.map((id, index) => (
        <ChatItem id={id} index={index} key={id} />
      ))}
    </Flexbox>
  );
});

export default ChatList;

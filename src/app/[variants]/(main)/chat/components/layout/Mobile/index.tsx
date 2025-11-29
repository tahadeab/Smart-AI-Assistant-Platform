/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import MainInterfaceTracker from '@/components/Analytics/MainInterfaceTracker';
import MobileContentLayout from '@/components/server/MobileNavLayout';

import { LayoutProps } from '../type';
import ChatHeader from './ChatHeader';
import TopicModal from './TopicModal';

const Layout = ({ children, topic, conversation, portal }: LayoutProps) => {
  return (
    <>
      <MobileContentLayout header={<ChatHeader />} style={{ overflowY: 'hidden' }}>
        {conversation}
        {children}
      </MobileContentLayout>
      <TopicModal>{topic}</TopicModal>
      {portal}
      <MainInterfaceTracker />
    </>
  );
};

Layout.displayName = 'MobileConversationLayout';

export default Layout;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { isDesktop } from '@/const/version';

import Conversation from './features/Conversation';
import Desktop from './features/Desktop';
import Essential from './features/Essential';

const Page = () => {
  return (
    <>
      {isDesktop && <Desktop />}
      <Essential />
      <Conversation />
    </>
  );
};

Page.displayName = 'HotkeySetting';

export default Page;

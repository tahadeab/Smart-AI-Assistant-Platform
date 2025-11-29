/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import Appearance from './features/Appearance';
import ChatAppearance from './features/ChatAppearance';
import Common from './features/Common/Common';

const Page = () => {
  return (
    <>
      <Common />
      <Appearance />
      <ChatAppearance />
    </>
  );
};

Page.displayName = 'CommonSetting';

export default Page;

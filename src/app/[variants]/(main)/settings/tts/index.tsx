/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import OpenAI from './features/OpenAI';
import STT from './features/STT';

const Page = () => {
  return (
    <>
      <STT />
      <OpenAI />
    </>
  );
};

Page.displayName = 'TtsSetting';

export default Page;

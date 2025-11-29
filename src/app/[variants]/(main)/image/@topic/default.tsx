/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import Topics from './features/Topics';
import TopicUrlSync from './features/Topics/TopicUrlSync';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const page = () => {
  return (
    <>
      <TopicUrlSync />
      <Topics />
    </>
  );
};

page.displayName = 'ImageTopics';

export default page;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import dynamic from 'next/dynamic';
import React from 'react';

import SkeletonList from './SkeletonList';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const TopicsList = dynamic(() => import('./TopicList'), {
  loading: () => <SkeletonList />,
  ssr: false,
});

const Topics = () => {
  return <TopicsList />;
};

Topics.displayName = 'Topics';

export default Topics;

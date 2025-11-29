/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import Cell from '@/components/Cell';

import { useCategory } from './useCategory';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Category = memo(() => {
  const items = useCategory();

  return items?.map(({ key, ...item }, index) => <Cell key={key || index} {...item} />);
});

export default Category;

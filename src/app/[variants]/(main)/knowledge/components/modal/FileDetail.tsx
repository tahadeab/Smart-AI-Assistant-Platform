/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { fileManagerSelectors, useFileStore } from '@/store/file';

import Detail from '../FileDetail';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const FileDetail = memo<{ id: string }>(({ id }) => {
  const file = useFileStore(fileManagerSelectors.getFileById(id));

  if (!file) return;

  return <Detail {...file} />;
});
export default FileDetail;

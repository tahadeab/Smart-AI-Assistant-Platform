/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import FileViewer from '@/features/FileViewer';
import { fileManagerSelectors, useFileStore } from '@/store/file';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const FilePreview = memo<{ id: string }>(({ id }) => {
  const file = useFileStore(fileManagerSelectors.getFileById(id));

  if (!file) return;

  return <FileViewer {...file} />;
});
export default FilePreview;

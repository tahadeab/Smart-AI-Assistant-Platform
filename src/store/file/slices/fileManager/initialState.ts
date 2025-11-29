/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { FileListItem, QueryFileListParams } from '@/types/files';
import { UploadFileItem } from '@/types/files/upload';

export interface FileManagerState {
  creatingChunkingTaskIds: string[];
  creatingEmbeddingTaskIds: string[];
  dockUploadFileList: UploadFileItem[];
  fileDetail?: FileListItem;
  fileList: FileListItem[];
  queryListParams?: QueryFileListParams;
}

export const initialFileManagerState: FileManagerState = {
  creatingChunkingTaskIds: [],
  creatingEmbeddingTaskIds: [],
  dockUploadFileList: [],
  fileList: [],
};

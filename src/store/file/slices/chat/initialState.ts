/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { UploadFileItem } from '@/types/files/upload';

export interface ImageFileState {
  chatUploadFileList: UploadFileItem[];
  uploadingIds: string[];
}

export const initialImageFileState: ImageFileState = {
  chatUploadFileList: [],
  uploadingIds: [],
};

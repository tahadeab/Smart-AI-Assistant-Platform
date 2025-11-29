/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { FileItem } from '@/types/files';

export interface ChatToolState {
  activePageContentUrl?: string;
  codeInterpreterExecuting: Record<string, boolean>;
  codeInterpreterImageMap: Record<string, FileItem>;
  dalleImageLoading: Record<string, boolean>;
  dalleImageMap: Record<string, FileItem>;
  localFileLoading: Record<string, boolean>;
  searchLoading: Record<string, boolean>;
}

export const initialToolState: ChatToolState = {
  codeInterpreterExecuting: {},
  codeInterpreterImageMap: {},
  dalleImageLoading: {},
  dalleImageMap: {},
  localFileLoading: {},
  searchLoading: {},
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { filesSelectors as imageFilesSelectors } from './slices/chat';
import { ttsFilesSelectors } from './slices/tts';

export const filesSelectors = {
  ...imageFilesSelectors,
  ...ttsFilesSelectors,
};

export { fileChatSelectors } from './slices/chat/selectors';
export * from './slices/fileManager/selectors';

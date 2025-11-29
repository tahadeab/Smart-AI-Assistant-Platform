/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ImageStore } from '../../store';

const isCreating = (state: ImageStore) => state.isCreating;
const isCreatingWithNewTopic = (state: ImageStore) => state.isCreatingWithNewTopic;

export const createImageSelectors = {
  isCreating,
  isCreatingWithNewTopic,
};

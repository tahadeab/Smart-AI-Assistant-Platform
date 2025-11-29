/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export interface CreateImageState {
  isCreating: boolean;
  isCreatingWithNewTopic: boolean;
}

export const initialCreateImageState: CreateImageState = {
  isCreating: false,
  isCreatingWithNewTopic: false,
};

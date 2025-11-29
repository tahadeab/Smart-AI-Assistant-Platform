/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { SendButtonProps, State, initialSendButtonState } from './initialState';

export const selectors = {
  sendButtonProps: (s: State): SendButtonProps => s.sendButtonProps || initialSendButtonState,
};

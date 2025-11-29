/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Plans } from '@/types/subscription';

export interface CommonState {
  isOnboard: boolean;
  isShowPWAGuide: boolean;
  isUserCanEnableTrace: boolean;
  isUserHasConversation: boolean;
  isUserStateInit: boolean;
  subscriptionPlan?: Plans;
}

export const initialCommonState: CommonState = {
  isOnboard: false,
  isShowPWAGuide: false,
  isUserCanEnableTrace: false,
  isUserHasConversation: false,
  isUserStateInit: false,
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { parseAsBoolean, useQueryState } from './useQueryParam';

export const useShowMobileWorkspace = () => {
  const [showMobileWorkspace] = useQueryState('showMobileWorkspace', parseAsBoolean);

  return showMobileWorkspace;
};

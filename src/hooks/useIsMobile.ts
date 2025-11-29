/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useResponsive } from 'antd-style';
import { useMemo } from 'react';

export const useIsMobile = (): boolean => {
  const { mobile } = useResponsive();

  return useMemo(() => !!mobile, [mobile]);
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { memo } from 'react';

export interface BorderSpacingProps {
  borderSpacing?: number;
}

const BorderSpacing = memo<BorderSpacingProps>(({ borderSpacing }) => {
  if (!borderSpacing) return null;

  return <div style={{ flex: 'none', width: borderSpacing }} />;
});

export default BorderSpacing;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Markdown } from '@lobehub/ui';
import { memo } from 'react';

import { useIsMobile } from '@/hooks/useIsMobile';

import { useContainerStyles } from '../style';

const Preview = memo<{ content: string }>(({ content }) => {
  const { styles } = useContainerStyles();
  const isMobile = useIsMobile();

  return (
    <div className={styles.preview} style={{ padding: 12 }}>
      <Markdown variant={isMobile ? 'chat' : undefined}>{content}</Markdown>
    </div>
  );
});

export default Preview;

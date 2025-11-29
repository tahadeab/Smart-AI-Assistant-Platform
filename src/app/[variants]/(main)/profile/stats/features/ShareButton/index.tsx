/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { ActionIcon } from '@lobehub/ui';
import { Share2Icon } from 'lucide-react';
import { memo, useState } from 'react';

import { DESKTOP_HEADER_ICON_SIZE, MOBILE_HEADER_ICON_SIZE } from '@/const/layoutTokens';

import ShareModal from './ShareModal';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const ShareButton = memo<{ mobile?: boolean }>(({ mobile }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ActionIcon
        icon={Share2Icon}
        onClick={() => setOpen(true)}
        size={mobile ? MOBILE_HEADER_ICON_SIZE : DESKTOP_HEADER_ICON_SIZE}
      />
      <ShareModal mobile={mobile} onCancel={() => setOpen(false)} open={open} />
    </>
  );
});

export default ShareButton;

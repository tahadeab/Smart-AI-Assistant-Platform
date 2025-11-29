/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Tag } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

import { isNewReleaseDate } from '@/utils/time';

interface NewModelBadgeProps {
  releasedAt?: string;
}

const NewModelBadge = memo<NewModelBadgeProps>(({ releasedAt }) => {
  const { t } = useTranslation('common');

  if (!releasedAt || !isNewReleaseDate(releasedAt)) return null;

  return (
    <Tag color="blue" size="small">
      {t('new')}
    </Tag>
  );
});

export default NewModelBadge;

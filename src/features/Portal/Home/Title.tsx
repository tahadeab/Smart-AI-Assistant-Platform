/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { Text } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Title = memo(() => {
  const { t } = useTranslation('portal');

  return (
    <Text style={{ fontSize: 16 }} type={'secondary'}>
      {t('title')}
    </Text>
  );
});

export default Title;

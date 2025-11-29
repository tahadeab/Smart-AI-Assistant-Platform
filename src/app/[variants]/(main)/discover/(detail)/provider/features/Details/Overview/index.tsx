/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Tag } from '@lobehub/ui';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import Title from '@/app/[variants]/(main)/discover/features/Title';

import { useDetailContext } from '../../DetailProvider';
import ModelList from './ModelList';

const Overview = memo(() => {
  const { t } = useTranslation('discover');
  const { models = [] } = useDetailContext();

  return (
    <Flexbox gap={16}>
      <Title tag={<Tag>{models.length}</Tag>}>{t('providers.supportedModels')}</Title>
      <ModelList />
    </Flexbox>
  );
});

export default Overview;

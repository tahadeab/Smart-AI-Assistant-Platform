/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

import FullscreenLoading from '@/components/Loading/FullscreenLoading';

import { AppLoadingStage, SERVER_LOADING_STAGES } from '../stage';

interface ContentProps {
  loadingStage: AppLoadingStage;
}

const Content = memo<ContentProps>(({ loadingStage }) => {
  const { t } = useTranslation('common');
  const activeStage = SERVER_LOADING_STAGES.indexOf(loadingStage);

  const stages = SERVER_LOADING_STAGES.map((key) => t(`appLoading.${key}`));

  return <FullscreenLoading activeStage={activeStage} stages={stages} />;
});

export default Content;

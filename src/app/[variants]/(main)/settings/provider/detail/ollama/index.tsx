/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { useTranslation } from 'react-i18next';

import { OllamaProviderCard } from '@/config/modelProviders';

import ProviderDetail from '../default';
import CheckError from './CheckError';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Page = () => {
  const { t } = useTranslation('modelProvider');

  return (
    <ProviderDetail
      {...OllamaProviderCard}
      checkErrorRender={CheckError}
      settings={{
        ...OllamaProviderCard.settings,
        proxyUrl: {
          desc: t('ollama.endpoint.desc'),
          placeholder: 'http://127.0.0.1:11434',
          title: t('ollama.endpoint.title'),
        },
      }}
    />
  );
};

export default Page;

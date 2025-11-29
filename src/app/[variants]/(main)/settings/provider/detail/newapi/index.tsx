/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { useTranslation } from 'react-i18next';

import { NewAPIProviderCard } from '@/config/modelProviders';

import ProviderDetail from '../default';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Page = () => {
  const { t } = useTranslation('modelProvider');

  return (
    <ProviderDetail
      {...NewAPIProviderCard}
      settings={{
        ...NewAPIProviderCard.settings,
        proxyUrl: {
          desc: t('newapi.apiUrl.desc'),
          placeholder: 'https://any-newapi-provider.com/',
          title: t('newapi.apiUrl.title'),
        },
      }}
    />
  );
};

export default Page;

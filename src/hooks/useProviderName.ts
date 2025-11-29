/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DEFAULT_MODEL_PROVIDER_LIST } from '@/config/modelProviders';

export const useProviderName = (provider: string) => {
  // const { t } = useTranslation('modelProvider');
  const providerCard = DEFAULT_MODEL_PROVIDER_LIST.find((p) => p.id === provider);

  return providerCard?.name || provider;
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DEFAULT_MODEL_PROVIDER_LIST } from '@/config/modelProviders';

const providerMap: { [key: string]: string } = {};

DEFAULT_MODEL_PROVIDER_LIST.filter((item) => item.chatModels.length > 0).forEach((item) => {
  providerMap[item.id] = item.name;
});

export { providerMap };

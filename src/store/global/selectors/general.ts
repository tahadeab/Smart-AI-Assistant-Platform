/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DEFAULT_LANG } from '@/const/locale';
import { Locales } from '@/locales/resources';
import { isOnServerSide } from '@/utils/env';

import { GlobalState } from '../initialState';
import { systemStatus } from './systemStatus';

const language = (s: GlobalState) => systemStatus(s).language || 'auto';

const currentLanguage = (s: GlobalState) => {
  const locale = language(s);

  if (locale === 'auto') {
    if (isOnServerSide) return DEFAULT_LANG;

    return navigator.language as Locales;
  }

  return locale as Locales;
};

export const globalGeneralSelectors = {
  currentLanguage,
  language,
};

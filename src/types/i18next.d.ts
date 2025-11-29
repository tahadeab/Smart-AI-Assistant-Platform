/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DefaultResources } from '@/types/locale';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: ['common', 'setting'];
    resources: DefaultResources;
  }
}

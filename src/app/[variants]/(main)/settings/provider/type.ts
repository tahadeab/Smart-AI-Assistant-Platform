/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ProviderConfigProps } from './features/ProviderConfig';

export interface ProviderItem extends Omit<ProviderConfigProps, 'id' | 'source'> {
  id: string;
}

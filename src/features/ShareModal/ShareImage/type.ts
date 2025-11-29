/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ImageType } from '@/hooks/useScreenshot';

export enum WidthMode {
  Narrow = 'narrow',
  Wide = 'wide',
}

export type FieldType = {
  imageType: ImageType;
  widthMode: WidthMode;
  withBackground: boolean;
  withFooter: boolean;
  withPluginInfo: boolean;
  withSystemRole: boolean;
};

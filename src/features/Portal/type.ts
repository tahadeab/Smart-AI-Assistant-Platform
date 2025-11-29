/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { FC } from 'react';

export interface PortalImpl {
  Body: FC;
  Header?: FC;
  Title: FC;
  onClose?: () => void;
  useEnable: () => boolean;
}

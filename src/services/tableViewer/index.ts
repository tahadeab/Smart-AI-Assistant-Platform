/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { isDesktop } from '@/const/version';

import { ClientService } from './client';
import { DesktopService } from './desktop';

export const tableViewerService = isDesktop ? new DesktopService() : new ClientService();

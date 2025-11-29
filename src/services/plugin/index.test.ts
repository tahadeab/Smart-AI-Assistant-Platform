/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { describe } from 'vitest';
import { testService } from '~test-utils';

import { PluginService } from './index';

describe('PluginService', () => {
  testService(PluginService, { checkAsync: false });
});

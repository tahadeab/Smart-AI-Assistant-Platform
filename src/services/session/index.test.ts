/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { describe } from 'vitest';
import { testService } from '~test-utils';

import { SessionService } from './index';

describe('SessionService', () => {
  testService(SessionService, { checkAsync: false });
});

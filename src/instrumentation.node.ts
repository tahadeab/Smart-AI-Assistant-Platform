/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { register } from '@lobechat/observability-otel/node';

import { version } from '../package.json';

register({ version });

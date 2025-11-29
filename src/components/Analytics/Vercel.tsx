/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Analytics } from '@vercel/analytics/react';
import { memo } from 'react';

import { analyticsEnv } from '@/envs/analytics';

const VercelAnalytics = memo(() => <Analytics debug={analyticsEnv.DEBUG_VERCEL_ANALYTICS} />);

export default VercelAnalytics;

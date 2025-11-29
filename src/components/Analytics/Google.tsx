/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { GoogleAnalytics as GA } from '@next/third-parties/google';

import { analyticsEnv } from '@/envs/analytics';

const GoogleAnalytics = () => <GA gaId={analyticsEnv.GOOGLE_ANALYTICS_MEASUREMENT_ID!} />;

export default GoogleAnalytics;

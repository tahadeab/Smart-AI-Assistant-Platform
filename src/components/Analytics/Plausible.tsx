/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import Script from 'next/script';
import { memo } from 'react';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface PlausibleAnalyticsProps {
  domain?: string;
  scriptBaseUrl: string;
}

const PlausibleAnalytics = memo<PlausibleAnalyticsProps>(
  ({ domain, scriptBaseUrl }) =>
    domain && <Script data-domain={domain} defer src={`${scriptBaseUrl}/js/script.js`} />,
);

export default PlausibleAnalytics;

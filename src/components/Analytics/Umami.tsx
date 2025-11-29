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

interface UmamiAnalyticsProps {
  scriptUrl: string;
  websiteId?: string;
}

const UmamiAnalytics = memo<UmamiAnalyticsProps>(
  ({ scriptUrl, websiteId }) =>
    websiteId && <Script data-website-id={websiteId} defer src={scriptUrl} />,
);

export default UmamiAnalytics;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import posthog from 'posthog-js';
import { memo, useEffect } from 'react';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

interface PostHogProps {
  debug: boolean;
  host: string;
  token?: string;
}

const PostHog = memo<PostHogProps>(({ token, host, debug }) => {
  useEffect(() => {
    if (!token) return;

    posthog.init(token, { api_host: host, debug });
  }, []);

  return null;
});

export default PostHog;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createTRPCClient, httpLink } from '@trpc/client';
import superjson from 'superjson';

import type { DesktopRouter } from '@/server/routers/desktop';

export const desktopClient = createTRPCClient<DesktopRouter>({
  links: [
    httpLink({
      transformer: superjson,
      url: '/trpc/desktop',
    }),
  ],
});

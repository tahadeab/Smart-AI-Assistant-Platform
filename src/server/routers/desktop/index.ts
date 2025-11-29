/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { router } from '@/libs/trpc/lambda';
import { mcpRouter } from '@/server/routers/desktop/mcp';

import { pgTableRouter } from './pgTable';

export const desktopRouter = router({
  mcp: mcpRouter,
  pgTable: pgTableRouter,
});

export type DesktopRouter = typeof desktopRouter;

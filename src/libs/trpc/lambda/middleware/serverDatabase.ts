/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { getServerDB } from '@/database/core/db-adaptor';

import { trpc } from '../init';

export const serverDatabase = trpc.middleware(async (opts) => {
  const serverDB = await getServerDB();

  return opts.next({
    ctx: { serverDB },
  });
});

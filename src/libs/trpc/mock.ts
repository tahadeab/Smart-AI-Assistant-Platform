/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
/**
 * This file contains the root router of your tRPC-backend
 */
import { createCallerFactory } from '@/libs/trpc/lambda';
import { lambdaRouter } from '@/server/routers/lambda';

export const createCaller = createCallerFactory(lambdaRouter);

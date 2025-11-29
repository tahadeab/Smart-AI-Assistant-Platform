/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import Pino from 'pino';

export const pino = Pino({
  level: process.env.LOG_LEVEL ? process.env.LOG_LEVEL : 'info',
});

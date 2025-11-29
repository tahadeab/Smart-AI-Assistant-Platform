/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.ENABLE_TELEMETRY) {
    await import('./instrumentation.node');
  }
}

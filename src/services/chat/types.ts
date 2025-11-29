/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { FetchSSEOptions } from '@lobechat/fetch-sse';
import { TracePayload } from '@lobechat/types';

export interface FetchOptions extends FetchSSEOptions {
  historySummary?: string;
  signal?: AbortSignal | undefined;
  trace?: TracePayload;
}

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ComfyUIInternalError } from './base';
import { ModelResolverError } from './modelResolverError';

/**
 * Type guard to check if an error is a ComfyUI internal error
 *
 * @param error - The error to check
 * @returns True if the error is a ComfyUI internal error
 */
export function isComfyUIInternalError(error: unknown): error is ComfyUIInternalError {
  return error instanceof ComfyUIInternalError || error instanceof ModelResolverError;
}

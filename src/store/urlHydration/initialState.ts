/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
/**
 * URL Hydration Store State
 *
 * Tracks initialization status to ensure one-time URL reading.
 */
export interface UrlHydrationState {
  isAgentPinnedInitialized: boolean;
}

export const initialState: UrlHydrationState = {
  isAgentPinnedInitialized: false,
};

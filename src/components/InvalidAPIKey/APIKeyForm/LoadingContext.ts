/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { createContext } from 'react';

interface LoadingContextValue {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const LoadingContext = createContext<LoadingContextValue>({
  loading: false,
  setLoading: () => {},
});

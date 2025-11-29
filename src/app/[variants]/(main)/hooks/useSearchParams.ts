/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useSearchParams as useReactRouterSearchParams } from 'react-router-dom';

/**
 * Hook to get search params
 * React Router version for (main) directory
 *
 * Returns [searchParams, setSearchParams] tuple similar to React Router
 */
export const useSearchParams = () => {
  return useReactRouterSearchParams();
};

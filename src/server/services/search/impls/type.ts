/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { SearchParams, UniformSearchResponse } from '@lobechat/types';

/**
 * Search service implementation interface
 */
export interface SearchServiceImpl {
  /**
   * Query for search results
   */
  query(query: string, params?: SearchParams): Promise<UniformSearchResponse>;
}

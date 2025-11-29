/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export interface AnspireSearchParameters {
  FromTime?: string;
  Insite?: string;
  ToTime?: string;
  mode?: number;
  query: string;
  top_k?: number;
}

interface AnspireResults {
  content?: string;
  score?: number;
  title: string;
  url: string;
}

export interface AnspireResponse {
  Uuid?: string;
  query?: string;
  results?: AnspireResults[];
}

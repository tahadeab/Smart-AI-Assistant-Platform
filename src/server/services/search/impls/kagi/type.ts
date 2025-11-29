/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export interface KagiSearchParameters {
  limit?: number;
  q: string;
}

interface KagiThumbnail {
  height?: number | null;
  url: string;
  width?: number | null;
}

interface KagiData {
  published?: number;
  snippet?: string;
  t: number;
  thumbnail?: KagiThumbnail;
  title: string;
  url: string;
}

export interface KagiResponse {
  data: KagiData[];
  meta?: any;
}

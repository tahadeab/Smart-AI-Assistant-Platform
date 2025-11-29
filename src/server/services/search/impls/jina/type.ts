/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export interface JinaSearchParameters {
  q: string;
}

interface JinaUsage {
  tokens: number;
}

interface JinaMeta {
  usage: JinaUsage;
}

interface JinaData {
  content?: string;
  description?: string;
  title: string;
  url: string;
  usage?: JinaUsage;
}

export interface JinaResponse {
  code?: number;
  data: JinaData[];
  meta?: JinaMeta;
  status?: number;
}

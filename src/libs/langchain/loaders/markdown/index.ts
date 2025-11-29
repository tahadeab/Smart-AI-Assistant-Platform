/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { MarkdownTextSplitter } from 'langchain/text_splitter';

import { loaderConfig } from '../config';

export const MarkdownLoader = async (text: string) => {
  const splitter = new MarkdownTextSplitter(loaderConfig);

  return await splitter.createDocuments([text]);
};

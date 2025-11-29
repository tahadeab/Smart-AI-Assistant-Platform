/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { LatexTextSplitter } from 'langchain/text_splitter';

import { loaderConfig } from '../config';

export const LatexLoader = async (text: string) => {
  const splitter = new LatexTextSplitter(loaderConfig);

  return await splitter.createDocuments([text]);
};

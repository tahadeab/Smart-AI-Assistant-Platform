/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

import { loaderConfig } from '../config';

export const TextLoader = async (text: string) => {
  const splitter = new RecursiveCharacterTextSplitter(loaderConfig);

  return await splitter.createDocuments([text]);
};

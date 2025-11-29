/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { DocxLoader as Loader } from '@langchain/community/document_loaders/fs/docx';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

import { loaderConfig } from '../config';

export const DocxLoader = async (fileBlob: Blob | string) => {
  const loader = new Loader(fileBlob);

  const splitter = new RecursiveCharacterTextSplitter(loaderConfig);
  const documents = await loader.load();

  return await splitter.splitDocuments(documents);
};

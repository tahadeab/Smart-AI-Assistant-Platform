/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { PPTXLoader as Loader } from '@langchain/community/document_loaders/fs/pptx';

export const PPTXLoader = async (fileBlob: Blob | string) => {
  const loader = new Loader(fileBlob);

  return await loader.load();
};

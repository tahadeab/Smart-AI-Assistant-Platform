/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { PDFLoader } from '@langchain/community/document_loaders/fs/pdf';

export const PdfLoader = async (fileBlob: Blob) => {
  const loader = new PDFLoader(fileBlob, { splitPages: true });

  return await loader.load();
};

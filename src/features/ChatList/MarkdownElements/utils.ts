/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
export const isTagClosed = (tag: string, input: string = '') => {
  const openTag = `<${tag}>`;
  const closeTag = `</${tag}>`;

  return input.includes(openTag) && input.includes(closeTag);
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { UIChatMessage } from '@lobechat/types';
import { template } from 'lodash-es';

import { LOADING_FLAT } from '@/const/message';

const markdownTemplate = template(`{{message.content}}`, {
  evaluate: /<%([\S\s]+?)%>/g,
  interpolate: /{{([\S\s]+?)}}/g,
});

interface MarkdownParams {
  message: UIChatMessage;
}

export const generateMarkdown = ({ message }: MarkdownParams) => {
  // Filter out loading content
  if (message.content === LOADING_FLAT) {
    return '';
  }

  return markdownTemplate({
    message,
  });
};

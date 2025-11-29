/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { UIChatMessage } from '@lobechat/types';
import { template } from 'lodash-es';

import { LOADING_FLAT } from '@/const/message';

const markdownTemplate = template(
  `<% messages.forEach(function(chat) { %>

{{chat.content}}

<% }); %>
`,
  {
    evaluate: /<%([\S\s]+?)%>/g,
    interpolate: /{{([\S\s]+?)}}/g,
  },
);

interface MarkdownParams {
  messages: UIChatMessage[];
}

export const generateMarkdown = ({ messages }: MarkdownParams) =>
  markdownTemplate({
    messages: messages.filter((m) => m.content !== LOADING_FLAT),
  });

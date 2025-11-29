/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { MENTION_TAG } from '@/const/plugin';

import { createRemarkSelfClosingTagPlugin } from '../remarkPlugins/createRemarkSelfClosingTagPlugin';
import { MarkdownElement } from '../type';
import Component from './Render';

const Mention: MarkdownElement = {
  Component,
  remarkPlugin: createRemarkSelfClosingTagPlugin(MENTION_TAG),
  scope: 'user',
  tag: MENTION_TAG,
};

export default Mention;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ARTIFACT_THINKING_TAG } from '@/const/plugin';

import { createRemarkCustomTagPlugin } from '../remarkPlugins/createRemarkCustomTagPlugin';
import { MarkdownElement } from '../type';
import Component from './Render';

const LobeThinkingElement: MarkdownElement = {
  Component,
  remarkPlugin: createRemarkCustomTagPlugin(ARTIFACT_THINKING_TAG),
  scope: 'assistant',
  tag: ARTIFACT_THINKING_TAG,
};

export default LobeThinkingElement;

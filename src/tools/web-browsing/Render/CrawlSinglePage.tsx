/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { BuiltinRenderProps, CrawlPluginState, CrawlSinglePageQuery } from '@lobechat/types';
import { memo } from 'react';

import PageContent from './PageContent';

const MultiPages = memo<BuiltinRenderProps<CrawlSinglePageQuery, CrawlPluginState>>(
  ({ messageId, pluginState, args }) => {
    const { results } = pluginState || {};
    const { url } = args || {};

    return <PageContent messageId={messageId} results={results} urls={[url]} />;
  },
);

export default MultiPages;

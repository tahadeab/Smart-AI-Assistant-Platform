/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { WebBrowsingApiName } from '../index';
import CrawlMultiPages from './CrawlMultiPages';
import CrawlSinglePage from './CrawlSinglePage';
import Search from './Search';

/**
 * Web Browsing Render Components Registry
 */
export const WebBrowsingRenders = {
  [WebBrowsingApiName.crawlMultiPages]: CrawlMultiPages,
  [WebBrowsingApiName.crawlSinglePage]: CrawlSinglePage,
  [WebBrowsingApiName.search]: Search,
};

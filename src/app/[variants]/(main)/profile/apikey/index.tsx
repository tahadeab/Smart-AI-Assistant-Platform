/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import NotFound from '@/components/404';
import { serverFeatureFlags } from '@/config/featureFlags';

import Page from '../../settings/system-agent';
import Client from './Client';

const page = () => {
  const { showApiKeyManage } = serverFeatureFlags();

  if (!showApiKeyManage) return <NotFound />;

  return <Client />;
};

Page.displayName = 'ApiKey';

export default page;

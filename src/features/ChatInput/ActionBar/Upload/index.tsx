/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { featureFlagsSelectors, useServerConfigStore } from '@/store/serverConfig';

import ServerMode from './ServerMode';

const Upload = () => {
  const { enableKnowledgeBase } = useServerConfigStore(featureFlagsSelectors);
  return enableKnowledgeBase && <ServerMode />;
};

export default Upload;

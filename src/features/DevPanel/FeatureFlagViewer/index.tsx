/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { getServerFeatureFlagsValue } from '@/config/featureFlags';

import FeatureFlagForm from './Form';

const FeatureFlagViewer = () => {
  const serverFeatureFlags = getServerFeatureFlagsValue();

  return <FeatureFlagForm flags={serverFeatureFlags} />;
};

export default FeatureFlagViewer;

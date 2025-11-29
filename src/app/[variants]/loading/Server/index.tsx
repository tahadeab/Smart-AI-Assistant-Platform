/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { useState } from 'react';

import { AppLoadingStage } from '../stage';
import Content from './Content';
import Redirect from './Redirect';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const ServerMode = () => {
  const [loadingStage, setLoadingStage] = useState(AppLoadingStage.Initializing);

  return (
    <>
      <Content loadingStage={loadingStage} />
      <Redirect setLoadingStage={setLoadingStage} />
    </>
  );
};

ServerMode.displayName = 'ServerMode';

export default ServerMode;

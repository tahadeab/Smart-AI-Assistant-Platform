/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { Flexbox } from 'react-layout-kit';

import Files from './Files';
import Plugins from './Plugins';

const Home = () => {
  return (
    <Flexbox gap={12} height={'100%'}>
      <Files />
      <Plugins />
    </Flexbox>
  );
};

export default Home;

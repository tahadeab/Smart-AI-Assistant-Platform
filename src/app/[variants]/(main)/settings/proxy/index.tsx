/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import ProxyForm from './features/ProxyForm';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const ProxySettings = () => {
  return (
    <div style={{ maxWidth: '1024px', width: '100%' }}>
      <ProxyForm />
    </div>
  );
};

ProxySettings.displayName = 'ProxySettings';

export default ProxySettings;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { DesktopWorkspace, MobileWorkspace } from './components/WorkspaceLayout';
import TelemetryNotification from './components/features/TelemetryNotification';
import PageTitle from './features/PageTitle';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const MobileChatPage = memo(() => {
  return (
    <>
      <PageTitle />
      <MobileWorkspace />
      <TelemetryNotification mobile={true} />
    </>
  );
});

const DesktopChatPage = memo(() => {
  return (
    <>
      <PageTitle />
      <DesktopWorkspace />
      <TelemetryNotification mobile={false} />
    </>
  );
});

export { DesktopChatPage, MobileChatPage };

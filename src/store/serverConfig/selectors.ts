/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ServerConfigStore } from './store';

export const featureFlagsSelectors = (s: ServerConfigStore) => s.featureFlags;

export const serverConfigSelectors = {
  enableUploadFileToServer: (s: ServerConfigStore) => s.serverConfig.enableUploadFileToServer,
  enabledAccessCode: (s: ServerConfigStore) => !!s.serverConfig?.enabledAccessCode,
  enabledOAuthSSO: (s: ServerConfigStore) => s.serverConfig.enabledOAuthSSO,
  enabledTelemetryChat: (s: ServerConfigStore) => s.serverConfig.telemetry.langfuse || false,
  isMobile: (s: ServerConfigStore) => s.isMobile || false,
  oAuthSSOProviders: (s: ServerConfigStore) => s.serverConfig.oAuthSSOProviders,
};

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ArtifactsManifest } from './artifacts';
import { CodeInterpreterManifest } from './code-interpreter';
import { KnowledgeBaseManifest } from './knowledge-base';
import { LocalSystemManifest } from './local-system';
import { WebBrowsingManifest } from './web-browsing';

export const builtinToolIdentifiers: string[] = [
  ArtifactsManifest.identifier,
  LocalSystemManifest.identifier,
  WebBrowsingManifest.identifier,
  KnowledgeBaseManifest.identifier,
  CodeInterpreterManifest.identifier,
];

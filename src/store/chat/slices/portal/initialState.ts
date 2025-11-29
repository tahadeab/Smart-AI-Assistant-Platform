/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { PortalArtifact } from '@/types/artifact';

export enum ArtifactDisplayMode {
  Code = 'code',
  Preview = 'preview',
}

export interface PortalFile {
  chunkId?: string;
  chunkText?: string;
  fileId: string;
}

export interface ChatPortalState {
  portalArtifact?: PortalArtifact;
  portalArtifactDisplayMode?: ArtifactDisplayMode;
  portalFile?: PortalFile;
  portalMessageDetail?: string;
  portalThreadId?: string;
  portalToolMessage?: { id: string; identifier: string };
  showPortal: boolean;
}

export const initialChatPortalState: ChatPortalState = {
  portalArtifactDisplayMode: ArtifactDisplayMode.Preview,
  showPortal: false,
};

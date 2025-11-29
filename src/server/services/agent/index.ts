/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { LobeChatDatabase } from '@lobechat/database';

import { SessionModel } from '@/database/models/session';
import { getServerDefaultAgentConfig } from '@/server/globalConfig';

export class AgentService {
  private readonly userId: string;
  private readonly db: LobeChatDatabase;

  constructor(db: LobeChatDatabase, userId: string) {
    this.userId = userId;
    this.db = db;
  }

  async createInbox() {
    const sessionModel = new SessionModel(this.db, this.userId);
    const defaultAgentConfig = getServerDefaultAgentConfig();
    await sessionModel.createInbox(defaultAgentConfig);
  }
}

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import Cognito from 'next-auth/providers/cognito';

const provider = {
  id: 'cognito',
  provider: Cognito({}),
};

export default provider;

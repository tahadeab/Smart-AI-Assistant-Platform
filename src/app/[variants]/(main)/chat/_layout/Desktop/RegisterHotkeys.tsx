/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { memo } from 'react';

import { useRegisterChatHotkeys } from '@/hooks/useHotkeys';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const RegisterHotkeys = memo(() => {
  useRegisterChatHotkeys();

  return '';
});

export default RegisterHotkeys;

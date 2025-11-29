/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { useSessionStore } from '@/store/session';
import { useUserStore } from '@/store/user';
import { authSelectors } from '@/store/user/slices/auth/selectors';

export const useFetchSessions = () => {
  const isLogin = useUserStore(authSelectors.isLogin);
  const useFetchSessions = useSessionStore((s) => s.useFetchSessions);

  useFetchSessions(true, isLogin);
};

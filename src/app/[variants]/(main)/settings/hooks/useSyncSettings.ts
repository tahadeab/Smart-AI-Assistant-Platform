/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { FormInstance } from 'antd/es/form/hooks/useForm';
import { useLayoutEffect } from 'react';

import { useUserStore } from '@/store/user';

export const useSyncSettings = (form: FormInstance) => {
  useLayoutEffect(() => {
    // set the first time
    form.setFieldsValue(useUserStore.getState().settings);

    // sync with later updated settings
    const unsubscribe = useUserStore.subscribe(
      (s) => s.settings,
      (settings) => {
        form.setFieldsValue(settings);
      },
    );

    return () => {
      unsubscribe();
    };
  }, []);
};

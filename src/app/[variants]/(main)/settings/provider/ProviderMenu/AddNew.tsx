/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { ActionIcon } from '@lobehub/ui';
import { PlusIcon } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import CreateNewProvider from '../features/CreateNewProvider';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const AddNewProvider = () => {
  const { t } = useTranslation('modelProvider');
  const [open, setOpen] = useState(false);

  return (
    <>
      <ActionIcon
        icon={PlusIcon}
        onClick={() => setOpen(true)}
        size={{
          blockSize: 34,
          size: 18,
        }}
        title={t('menu.addCustomProvider')}
        variant={'filled'}
      />
      <CreateNewProvider onClose={() => setOpen(false)} open={open} />
    </>
  );
};

export default AddNewProvider;

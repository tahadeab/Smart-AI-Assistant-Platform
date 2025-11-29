/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { EditorProvider } from '@lobehub/editor/react';
import { PropsWithChildren, memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const Editor = memo<PropsWithChildren>(({ children }) => {
  const {
    i18n: { language, getResourceBundle },
  } = useTranslation('editor');

  const localization = useMemo(() => getResourceBundle(language, 'editor'), [language]);

  return (
    <EditorProvider
      config={{
        locale: localization,
      }}
    >
      {children}
    </EditorProvider>
  );
});

Editor.displayName = 'Editor';

export default Editor;

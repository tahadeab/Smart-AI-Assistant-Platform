/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { GlobalState, initialState } from '@/store/global/initialState';
import { merge } from '@/utils/merge';

import { globalGeneralSelectors } from './general';

describe('settingsSelectors', () => {
  describe('currentLanguage', () => {
    it('should return the correct language setting', () => {
      const s: GlobalState = merge(initialState, {
        status: { language: 'fr' },
      });

      const result = globalGeneralSelectors.currentLanguage(s);

      expect(result).toBe('fr');
    });
  });
});

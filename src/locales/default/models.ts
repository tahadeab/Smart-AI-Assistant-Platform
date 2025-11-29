/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { LOBE_DEFAULT_MODEL_LIST } from 'model-bank';

const locales: {
  [key: string]: {
    description?: string;
  };
} = {};

LOBE_DEFAULT_MODEL_LIST.forEach((model) => {
  if (!model.description) return;
  locales[model.id] = {
    description: model.description,
  };
});

export default locales;

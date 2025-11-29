/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { parse } from 'partial-json';
import { stringify } from 'yaml';

export const useYamlArguments = (args?: string) => {
  if (!args) return '';

  try {
    const obj = parse(args);

    if (Object.keys(obj).length === 0) return '';

    return stringify(obj);
  } catch {
    return args;
  }
};

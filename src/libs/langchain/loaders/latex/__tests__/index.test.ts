/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
// @vitest-environment node
import * as fs from 'node:fs';
import { join } from 'node:path';
import { expect } from 'vitest';

import { LatexLoader } from '../index';

describe('LatexLoader', () => {
  it('should run', async () => {
    const content = fs.readFileSync(join(__dirname, `./demo.tex`), 'utf-8');

    const data = await LatexLoader(content);

    expect(data).toMatchSnapshot();
  });
});

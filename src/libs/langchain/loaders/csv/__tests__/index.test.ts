/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
// @vitest-environment node
import * as fs from 'node:fs';
import { join } from 'node:path';
import { expect } from 'vitest';

import { CsVLoader } from '../index';

describe('CSVLoader', () => {
  it('should run', async () => {
    const content = fs.readFileSync(join(__dirname, `./demo.csv`), 'utf-8');

    const fileBlob = new Blob([Buffer.from(content)]);

    const data = await CsVLoader(fileBlob);

    expect(data).toMatchSnapshot();
  });
});

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { existsSync } from 'fs';
import { join } from 'path';
import { describe, expect, it } from 'vitest';

describe('Desktop TRPC Route', () => {
  it('should have desktop directory', () => {
    const desktopPath = join(__dirname, 'desktop');
    expect(existsSync(desktopPath)).toBe(true);
  });
});

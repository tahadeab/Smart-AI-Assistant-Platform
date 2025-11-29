/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { ComponentType, Suspense } from 'react';

// @ts-ignore
export const withSuspense: <T>(Comp: T) => T = (Component: ComponentType<any>) => (props: any) => (
  <Suspense>
    <Component {...props} />
  </Suspense>
);

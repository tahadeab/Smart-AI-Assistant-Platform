/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { StoreApiWithSelector } from '@lobechat/types';
import { createContext } from 'zustand-utils';
import { subscribeWithSelector } from 'zustand/middleware';
import { shallow } from 'zustand/shallow';
import { createWithEqualityFn } from 'zustand/traditional';

import { Store, store } from './action';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

export type { State } from './initialState';

export const createStore = () => createWithEqualityFn(subscribeWithSelector(store), shallow);

export const { useStore, useStoreApi, Provider } = createContext<StoreApiWithSelector<Store>>();

export { selectors } from './selectors';

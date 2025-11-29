/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { supportLocales } from '@/locales/resources';

export const DEFAULT_LANG = 'en-US';
export const LOBE_LOCALE_COOKIE = 'LOBE_LOCALE';

/**
 * Check if the language is supported
 * @param locale
 */
export const isLocaleNotSupport = (locale: string) => !supportLocales.includes(locale);

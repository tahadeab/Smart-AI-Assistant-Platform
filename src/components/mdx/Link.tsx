/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import Link, { LinkProps } from 'next/link';
import { FC } from 'react';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const EXTERNAL_HREF_REGEX = /https?:\/\//;

const A: FC<LinkProps> = ({ href = '', ...props }) => {
  const isOutbound = EXTERNAL_HREF_REGEX.test(href as string);
  const isOfficial = String(href).includes('lobechat') || String(href).includes('lobehub');
  return (
    <Link
      href={href}
      rel={isOutbound && !isOfficial ? 'nofollow' : undefined}
      target={isOutbound ? '_blank' : undefined}
      {...props}
    />
  );
};

export default A;

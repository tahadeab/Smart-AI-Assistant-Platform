/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import React, { memo } from 'react';
import { Link as ReactRouterLink, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

interface LinkProps extends Omit<ReactRouterLinkProps, 'to'> {
  children?: React.ReactNode;
  href?: string;
  to?: string;
}

/**
 * Link component for React Router
 * Provides a Next.js-like API (href prop) while using React Router internally
 */
const Link = memo<LinkProps>(({ href, to, ...props }) => {
  const linkTo = href || to || '/';
  return <ReactRouterLink {...props} to={linkTo} />;
});

Link.displayName = 'Link';

export default Link;

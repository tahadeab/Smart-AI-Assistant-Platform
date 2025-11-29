/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import Page from './(list)';

type ProviderPageType = {
  mobile?: boolean;
};

export default (props: ProviderPageType) => {
  const { mobile } = props;

  return <Page mobile={mobile} />;
};

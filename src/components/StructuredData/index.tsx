/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { FC } from 'react';

const StructuredData: FC<{ ld: any }> = ({ ld }) => {
  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      id="structured-data"
      type="application/ld+json"
    />
  );
};
export default StructuredData;

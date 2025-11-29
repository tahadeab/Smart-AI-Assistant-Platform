/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
'use client';

import { RefreshCw } from 'lucide-react';
import { memo } from 'react';

import Header from '../../features/Header';
import Table from '../../features/Table';
import { useCachePanelContext } from '../cacheProvider';

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */

const DataTable = memo(() => {
  const { entries, isLoading, refreshData } = useCachePanelContext();
  return (
    <>
      <Header
        actions={[
          {
            icon: RefreshCw,
            onClick: () => refreshData(),
            title: 'Refresh',
          },
        ]}
        title="Cache Entries"
      />
      <Table
        columns={['url', 'headers.content-type', 'body', 'kind', 'tags', 'revalidate', 'timestamp']}
        dataSource={entries}
        loading={isLoading}
      />
    </>
  );
});

export default DataTable;

/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { lambdaClient } from '@/libs/trpc/client';
import { ExportDatabaseData } from '@/types/export';

class ExportService {
  exportData = async (): Promise<ExportDatabaseData> => {
    return await lambdaClient.exporter.exportData.mutate();
  };
}

export const exportService = new ExportService();

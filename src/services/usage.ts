/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { lambdaClient } from '@/libs/trpc/client';

class UsageService {
  findByMonth = async (mo?: string) => {
    return lambdaClient.usage.findByMonth.query({ mo });
  };

  findAndGroupByDay = async (mo?: string) => {
    return lambdaClient.usage.findAndGroupByDay.query({ mo });
  };
}

export const usageService = new UsageService();

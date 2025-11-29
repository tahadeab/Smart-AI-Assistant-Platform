/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import ChangelogModal from '@/features/ChangelogModal';
import { ChangelogService } from '@/server/services/changelog';

const Changelog = async () => {
  const service = new ChangelogService();
  const id = await service.getLatestChangelogId();

  return <ChangelogModal currentId={id} />;
};

export default Changelog;

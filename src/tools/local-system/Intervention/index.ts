/*
 * Copyright (c) 2025 Taha Deab
 * Licensed under the LobeHub Community License.
 * See LICENSE file for more information.
 */
import { LocalSystemApiName } from '../index';
import EditLocalFile from './EditLocalFile';
import MoveLocalFiles from './MoveLocalFiles';
import RunCommand from './RunCommand';
import WriteFile from './WriteFile';

/**
 * Local System Intervention Components Registry
 */
export const LocalSystemInterventions = {
  [LocalSystemApiName.editLocalFile]: EditLocalFile,
  [LocalSystemApiName.moveLocalFiles]: MoveLocalFiles,
  [LocalSystemApiName.runCommand]: RunCommand,
  [LocalSystemApiName.writeLocalFile]: WriteFile,
};

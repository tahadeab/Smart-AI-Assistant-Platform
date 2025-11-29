import { CreateFileParams, DeleteFilesResponse, FileMetadata } from '../types/file';

export interface FileDispatchEvents {
  createFile: (param: CreateFileParams) => { metadata: FileMetadata; success: boolean };
  deleteFiles: (paths: string[]) => DeleteFilesResponse;
  getFileHTTPURL: (path: string) => string;
  getStaticFilePath: (id: string) => string;
}

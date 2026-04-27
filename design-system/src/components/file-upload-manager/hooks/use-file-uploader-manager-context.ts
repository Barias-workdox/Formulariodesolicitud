import { useContext } from 'react';

import { FileUploadManagerContext } from '../contexts/file-uploader-manager.context';

import type { FileUploadManagerContextValue } from '../contexts/file-uploader-manager.context';

/**
 * Hook that returns the file uploader manager context value
 */
export const useFileUploadManagerContext = (): FileUploadManagerContextValue => {
  return useContext(FileUploadManagerContext);
};

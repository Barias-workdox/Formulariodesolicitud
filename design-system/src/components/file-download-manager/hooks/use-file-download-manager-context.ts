import { useContext } from 'react';

import { FileDownloadManagerContext } from '../contexts/file-download-manager.context';

import type { FileDownloadManagerContextValue } from '../contexts/file-download-manager.context';

/**
 * Hook that returns the file download manager context value
 */
export const useFileDownloadManagerContext = (): FileDownloadManagerContextValue => {
  return useContext(FileDownloadManagerContext);
};

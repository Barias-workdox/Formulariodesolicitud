import { useContext } from 'react';

import { FileDownloadManagerDragContext } from '../contexts/file-download-manager-drag.context';

import type { FileDownloadManagerDragContextValue } from '../contexts/file-download-manager-drag.context';

/**
 * Hook to access the file download manager drag context
 */
export const useFileDownloadManagerDragContext = (): FileDownloadManagerDragContextValue =>
  useContext(FileDownloadManagerDragContext);

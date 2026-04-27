import { useMemo, type ReactNode } from 'react';

import {
  FileDownloadManagerContext,
  type FileDownloadManagerContextValue,
} from '../contexts/file-download-manager.context';

export interface FileDownloadManagerProviderProps extends FileDownloadManagerContextValue {
  children: ReactNode;
}

/** Provider for the file download manager context. */
export const FileDownloadManagerProvider = ({
  children,
  documentsToDownload,
  isDraggable,
  margin,
  position,
  status,
  onCloseDownload,
  onGoToDownloads,
}: FileDownloadManagerProviderProps): JSX.Element => {
  const values = useMemo(
    () => ({
      documentsToDownload,
      isDraggable,
      margin,
      position,
      status,
      onCloseDownload,
      onGoToDownloads,
    }),
    [documentsToDownload, isDraggable, margin, position, status, onCloseDownload, onGoToDownloads],
  );

  return (
    <FileDownloadManagerContext.Provider value={values}>
      {children}
    </FileDownloadManagerContext.Provider>
  );
};

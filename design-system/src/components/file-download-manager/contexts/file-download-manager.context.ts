import { createContext } from 'react';

import { noop } from '@utils/noop';

import type { FileDownloadStatus, ManagerPosition } from '../file-download-manager.interfaces';

export interface FileDownloadManagerContextValue {
  documentsToDownload?: number;
  isDraggable?: boolean;
  margin?: number;
  position?: ManagerPosition;
  status: FileDownloadStatus;
  onCloseDownload?(): void;
  onGoToDownloads?(): void;
}

const initialFileDownloadManagerContextValue: FileDownloadManagerContextValue = {
  documentsToDownload: 0,
  isDraggable: false,
  margin: 0,
  position: 'BOTTOM',
  status: 'idle',
  onCloseDownload: noop,
  onGoToDownloads: noop,
};

export const FileDownloadManagerContext = createContext<FileDownloadManagerContextValue>(
  initialFileDownloadManagerContextValue,
);

import { createContext } from 'react';

import { noop } from '@utils/noop';

export interface FileDownloadManagerDragContextValue {
  onPointerDown(event: React.PointerEvent<HTMLDivElement>): void;
}

const initialValue: FileDownloadManagerDragContextValue = {
  onPointerDown: noop,
};

export const FileDownloadManagerDragContext =
  createContext<FileDownloadManagerDragContextValue>(initialValue);

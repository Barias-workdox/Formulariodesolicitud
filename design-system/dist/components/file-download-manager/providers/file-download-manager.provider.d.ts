import { ReactNode } from 'react';
import { FileDownloadManagerContextValue } from '../contexts/file-download-manager.context';
export interface FileDownloadManagerProviderProps extends FileDownloadManagerContextValue {
    children: ReactNode;
}
/** Provider for the file download manager context. */
export declare const FileDownloadManagerProvider: ({ children, documentsToDownload, isDraggable, margin, position, status, onCloseDownload, onGoToDownloads, }: FileDownloadManagerProviderProps) => JSX.Element;

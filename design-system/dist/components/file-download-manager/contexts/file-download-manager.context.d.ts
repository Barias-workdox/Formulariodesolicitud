import { FileDownloadStatus, ManagerPosition } from '../file-download-manager.interfaces';
export interface FileDownloadManagerContextValue {
    documentsToDownload?: number;
    isDraggable?: boolean;
    margin?: number;
    position?: ManagerPosition;
    status: FileDownloadStatus;
    onCloseDownload?(): void;
    onGoToDownloads?(): void;
}
export declare const FileDownloadManagerContext: import('react').Context<FileDownloadManagerContextValue>;

import { FileType } from '../file-type-icon';
export type ManagerPosition = 'TOP' | 'BOTTOM';
export type FileDownloadStatus = 'idle' | 'downloading' | 'finished' | 'error';
export type FileDownloadItem = {
    /** Unique identifier for the file */
    id?: string;
    /** Name of the file */
    name: string;
    /** Type of file, used to determine which icon to show */
    fileType?: FileType;
    /** Optional download progress in percentage */
    downloadProgress?: number;
    /** Optional number of documents to download */
    documentsToDownload?: number;
    /** Optional function to start the file download */
    onDownload?(): void;
};
export type FileDownloadManagerProps = {
    /**
     * File or files to be downloaded.
     * It must mainly accept only one file but the component
     * is able to handle multiple files in case it's needed.
     */
    files: FileDownloadItem | FileDownloadItem[];
    /** Optional flag to enable dragging */
    isDraggable?: boolean;
    /** Optional margin in px for the component */
    margin?: number;
    /** Optional position for the file download manager */
    position?: ManagerPosition;
    /** The current state of the file download manager */
    status?: FileDownloadStatus;
    /** Optional function to close the file download manager */
    onCloseDownload?(): void;
    /** Optional function to go to the downloads */
    onGoToDownloads?(): void;
};

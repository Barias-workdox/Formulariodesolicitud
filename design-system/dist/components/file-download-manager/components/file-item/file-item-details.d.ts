import { FileDownloadStatus } from '../..';
export interface FileItemDetailsProps {
    fileStatus: FileDownloadStatus;
    fileDownloadProgress?: number;
}
/** Renders the details slot of the file item based on the current status */
export declare const FileItemDetails: ({ fileStatus, fileDownloadProgress, }: FileItemDetailsProps) => JSX.Element | null;

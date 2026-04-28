import { FileDownloadStatus } from '../..';
import { FileType } from '../../../file-type-icon';
export interface FileItemProps {
    fileStatus: FileDownloadStatus;
    fileName: string;
    fileExtension: FileType;
    fileDownloadProgress?: number;
    onClick(): void;
}
/** File item that is being downloaded */
export declare const FileItem: ({ fileStatus, fileName, fileExtension, fileDownloadProgress, onClick, }: FileItemProps) => JSX.Element;

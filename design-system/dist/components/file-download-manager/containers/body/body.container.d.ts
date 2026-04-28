import { FileDownloadItem, FileDownloadStatus } from '../../file-download-manager.interfaces';
export interface BodyContainerProps {
    files: FileDownloadItem[];
    status: FileDownloadStatus;
    handleFileClick(onDownload?: () => void): void;
}
/**
 * Component for displaying the list of files in the file download manager body, with dynamic height based on the number of files
 */
export declare const FileDownloadManagerBodyContainer: ({ files, status, handleFileClick, }: BodyContainerProps) => JSX.Element;

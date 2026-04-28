import { FileUploadItem } from '../file-upload-manager.interfaces';
import { FileUploadManagerStatus } from '../contexts/file-uploader-manager.context';
export interface FileUploadManagerTitleProps {
    files: FileUploadItem[];
    status: FileUploadManagerStatus;
}
/**
 * Title of the file upload manager panel
 */
export declare function FileUploadManagerTitle({ files, status, }: FileUploadManagerTitleProps): JSX.Element;

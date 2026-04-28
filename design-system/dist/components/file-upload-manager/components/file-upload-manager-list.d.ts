import { FileUploadManagerStatus, FileUploadManagerTabType } from '../contexts/file-uploader-manager.context';
import { FileUploadItem } from '../file-upload-manager.interfaces';
export interface FileUploadManagerListProps {
    dataTestId?: string;
    activeTab: FileUploadManagerTabType;
    files: FileUploadItem[];
    status: FileUploadManagerStatus;
}
export declare const StyledFilesList: import('styletron-react').StyletronComponent<"div", {
    $minHeight?: number;
}>;
export declare const StyledEmptyStateWrapper: import('styletron-react').StyletronComponent<"div", {}>;
/**
 * Component for displaying a list of files or empty state in the file upload manager
 */
export declare function FileUploadManagerList({ dataTestId, files, activeTab, status, }: FileUploadManagerListProps): JSX.Element;

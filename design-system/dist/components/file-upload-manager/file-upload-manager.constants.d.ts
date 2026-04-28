import { FileUploadManagerTabType } from './contexts/file-uploader-manager.context';
import { FileStatus } from './file-upload-manager.interfaces';
import { BackgroundIconProps } from '../background-icon/background-icon.interfaces';
/** Available tab options for filtering files */
export declare const TABS: FileUploadManagerTabType[];
export declare const TABS_OMITTED: FileUploadManagerTabType[];
export declare const FILE_ICON_MAP: Record<FileStatus, BackgroundIconProps>;
export declare const FILES_LIST_MAX_HEIGHT = 310;
export declare const FILES_LIST_ITEM_HEIGHT = 48;
export declare const FILE_UPLOAD_MANAGER_WIDTH = 450;
export declare const MAX_OVERFLOW_FILES_LENGTH = 6;

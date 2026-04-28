import { FileStatus, FileUploadItem } from './file-upload-manager.interfaces';
/**
 * Sort function to prioritize uploading files first, then pending, then others
 */
export declare const sortByUploadingFirst: (a: FileUploadItem, b: FileUploadItem) => number;
/**
 * Get the counts of files by status in a single iteration
 */
export declare const getFileCounts: (files: FileUploadItem[]) => Record<FileStatus | "all", number>;
/**
 * Get the minimum height of the list based on the number of files
 */
export declare const getListMinHeight: (filesLength: number) => number;

import { FileType } from '../file-type-icon/file-type-icon.interfaces';
export type FileStatus = 'pending' | 'canceled' | 'omitted' | 'rejected' | 'uploading' | 'completed';
export interface FileUploadItemDefault {
    status: Exclude<FileStatus, 'rejected' | 'uploading'>;
}
export interface FileUploadItemRejected {
    status: 'rejected';
    /** Reason for the file upload rejection */
    reason: string;
}
export interface FileUploadItemUploading {
    status: 'uploading';
    /** Progress of the file upload */
    progress: number;
}
export type FileUploadItemBase<T = object> = {
    id: string;
    name: string;
    /** Type of file, used to determine which icon to show */
    fileType: FileType;
    /** Path of the file */
    path?: string;
    onClickAction?(): void;
} & T;
export type FileUploadItem = FileUploadItemBase<FileUploadItemDefault | FileUploadItemRejected | FileUploadItemUploading>;

import { ReactElement, ReactNode } from 'react';
import { FileUploadManagerContextValue, FileUploadManagerTabType } from '../contexts/file-uploader-manager.context';
export interface FileUploadManagerProviderProps extends Omit<FileUploadManagerContextValue, 'activeTab' | 'setActiveTab'> {
    children: ReactNode;
    initialTab?: FileUploadManagerTabType;
}
/**
 * Provider for the file uploader manager context.
 */
export declare const FileUploadManagerProvider: ({ children, files, initialTab, hiddenTabs, isDraggable, status, contentHelper, showContentHelper, position, margin, onRetryUpload, onCancelUpload, onCloseUpload, }: FileUploadManagerProviderProps) => ReactElement;

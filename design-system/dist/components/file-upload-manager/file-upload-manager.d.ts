import { ReactElement } from 'react';
import { FileUploadManagerProviderProps } from './providers/file-uploader-manager.provider';
import { WithTestId } from '../../interfaces/common.interfaces';
export type FileUploadManagerProps = WithTestId<Omit<FileUploadManagerProviderProps, 'children'>>;
/**
 * Component for managing file uploads with status tracking and filtering
 *
 * @returns A file upload manager interface with tabs and file list
 */
export declare function FileUploadManager({ 'data-testid': dataTestId, files, status, isDraggable, initialTab, hiddenTabs, position, contentHelper, showContentHelper, margin, onCancelUpload, onRetryUpload, onCloseUpload, }: FileUploadManagerProps): ReactElement;

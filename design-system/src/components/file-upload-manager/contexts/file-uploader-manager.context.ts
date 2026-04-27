import { createContext } from 'react';
import type { ReactNode } from 'react';

import { noop } from '@utils/noop';

import type { FileStatus, FileUploadItem } from '../file-upload-manager.interfaces';

export type FileUploadManagerTabType = 'all' | FileStatus;

export type FileUploadManagerStatus = 'idle' | 'uploading' | 'canceled' | 'finished';

export type ManagerPosition = 'TOP' | 'BOTTOM';

export interface FileUploadManagerContextValue {
  /** Status of the file upload */
  status: FileUploadManagerStatus;
  /** Active tab for filtering files */
  activeTab: FileUploadManagerTabType;
  /** Files to display in the manager */
  files?: FileUploadItem[];
  /** Optional tabs to hide */
  hiddenTabs?: FileUploadManagerTabType[];
  /** Optional content to display in the manager */
  contentHelper?: ReactNode;
  /** Optional flag to show content helper */
  showContentHelper?: boolean;
  /** Optional flag to enable dragging */
  position?: ManagerPosition;
  /** Optional flag to enable dragging */
  isDraggable?: boolean;
  /** Optional margin in px for the component */
  margin?: number;
  /** Optional function to set the active tab */
  setActiveTab(tab: FileUploadManagerTabType): void;
  /** Optional function to cancel all uploads */
  onCancelUpload?(): void;
  /** Optional function to retry an upload */
  onRetryUpload?(fileId?: string): void;
  /** Optional function to close the file uploader manager */
  onCloseUpload?(): void;
}

const initialFileUploadManagerContextValue: FileUploadManagerContextValue = {
  status: 'uploading',
  files: [],
  activeTab: 'all',
  setActiveTab: noop,
};

export const FileUploadManagerContext = createContext<FileUploadManagerContextValue>(
  initialFileUploadManagerContextValue,
);

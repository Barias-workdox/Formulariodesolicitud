import { type ReactElement, type ReactNode, useMemo, useState } from 'react';

import { FileUploadManagerContext } from '@components/file-upload-manager/contexts/file-uploader-manager.context';

import type {
  FileUploadManagerContextValue,
  FileUploadManagerTabType,
} from '@components/file-upload-manager/contexts/file-uploader-manager.context';

export interface FileUploadManagerProviderProps extends Omit<
  FileUploadManagerContextValue,
  'activeTab' | 'setActiveTab'
> {
  children: ReactNode;
  initialTab?: FileUploadManagerTabType;
}

/**
 * Provider for the file uploader manager context.
 */
export const FileUploadManagerProvider = ({
  children,
  files,
  initialTab,
  hiddenTabs,
  isDraggable,
  status,
  contentHelper,
  showContentHelper,
  position,
  margin,
  onRetryUpload,
  onCancelUpload,
  onCloseUpload,
}: FileUploadManagerProviderProps): ReactElement => {
  const [activeTab, setActiveTab] = useState<FileUploadManagerTabType>(initialTab);

  const value = useMemo(
    () => ({
      files,
      activeTab,
      isDraggable,
      status,
      hiddenTabs,
      contentHelper,
      showContentHelper,
      position,
      margin,
      setActiveTab,
      onRetryUpload,
      onCancelUpload,
      onCloseUpload,
    }),
    [
      files,
      activeTab,
      isDraggable,
      status,
      hiddenTabs,
      contentHelper,
      showContentHelper,
      position,
      margin,
      setActiveTab,
      onRetryUpload,
      onCancelUpload,
      onCloseUpload,
    ],
  );

  return (
    <FileUploadManagerContext.Provider value={value}>{children}</FileUploadManagerContext.Provider>
  );
};

import type { ReactElement } from 'react';

import { MainContentContainer } from './containers/main-content.container';
import { TABS_OMITTED } from './file-upload-manager.constants';
import { FileUploadManagerProvider } from './providers/file-uploader-manager.provider';

import type { FileUploadManagerProviderProps } from './providers/file-uploader-manager.provider';
import type { WithTestId } from '@interfaces/common.interfaces';

export type FileUploadManagerProps = WithTestId<Omit<FileUploadManagerProviderProps, 'children'>>;

/**
 * Component for managing file uploads with status tracking and filtering
 *
 * @returns A file upload manager interface with tabs and file list
 */
export function FileUploadManager({
  'data-testid': dataTestId = 'file-upload-manager',
  files,
  status,
  isDraggable = false,
  initialTab = 'all',
  hiddenTabs = TABS_OMITTED,
  position = 'BOTTOM',
  contentHelper = <></>,
  showContentHelper = false,
  margin = 0,
  onCancelUpload,
  onRetryUpload,
  onCloseUpload,
}: FileUploadManagerProps): ReactElement {
  return (
    <FileUploadManagerProvider
      files={files}
      initialTab={initialTab}
      status={status}
      isDraggable={isDraggable}
      hiddenTabs={hiddenTabs}
      contentHelper={contentHelper}
      showContentHelper={showContentHelper}
      position={position}
      margin={margin}
      onCancelUpload={onCancelUpload}
      onRetryUpload={onRetryUpload}
      onCloseUpload={onCloseUpload}
    >
      <MainContentContainer data-testid={dataTestId} />
    </FileUploadManagerProvider>
  );
}

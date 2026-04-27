import { useCallback, useMemo } from 'react';

import { FileDownloadManagerBodyContainer } from './containers/body/body.container';
import { FileDownloadManagerFooterContainer } from './containers/footer';
import { FileDownloadManagerHeaderContainer } from './containers/header';
import { FileDownloadManagerMainContentContainer } from './containers/main-content';
import { FileDownloadManagerProvider } from './providers/file-download-manager.provider';

import type { FileDownloadManagerProps } from './file-download-manager.interfaces';

/** Component for managing file downloads */
export const FileDownloadManager = (props: FileDownloadManagerProps): JSX.Element => {
  const { status = 'idle', files, ...rest } = props;

  const normalizedFiles = useMemo(() => (Array.isArray(files) ? files : [files]), [files]);

  const documentsToDownload = useMemo(
    () =>
      normalizedFiles.reduce(
        (filesToDownload, currentFile) => filesToDownload + (currentFile.documentsToDownload ?? 0),
        0,
      ),
    [normalizedFiles],
  );

  /** Handle file item click based on the current status */
  const handleFileClick = useCallback(
    (onDownload?: () => void): void => {
      if (status === 'finished') {
        onDownload?.();
      }
    },
    [status],
  );

  return (
    <FileDownloadManagerProvider
      {...rest}
      documentsToDownload={documentsToDownload}
      status={status}
    >
      <FileDownloadManagerMainContentContainer>
        <FileDownloadManagerHeaderContainer />
        <FileDownloadManagerBodyContainer
          handleFileClick={handleFileClick}
          status={status}
          files={normalizedFiles}
        />
        <FileDownloadManagerFooterContainer />
      </FileDownloadManagerMainContentContainer>
    </FileDownloadManagerProvider>
  );
};

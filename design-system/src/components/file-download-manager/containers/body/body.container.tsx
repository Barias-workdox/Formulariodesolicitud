import { useCallback, useMemo } from 'react';

import { FileItem } from '@components/file-download-manager/components/file-item';
import {
  FILES_LIST_ITEM_HEIGHT,
  MAX_OVERFLOW_FILES_LENGTH,
} from '@components/file-download-manager/file-download-manager.constants';

import { StyledFilesList } from './body.container.styles';

import type {
  FileDownloadItem,
  FileDownloadStatus,
} from '@components/file-download-manager/file-download-manager.interfaces';

export interface BodyContainerProps {
  files: FileDownloadItem[];
  status: FileDownloadStatus;
  handleFileClick(onDownload?: () => void): void;
}

interface FileItemRowProps {
  file: FileDownloadItem;
  status: FileDownloadStatus;
  handleFileClick(onDownload?: () => void): void;
}

/** Renders a single file item row with a stable onClick reference per item. */
const FileItemRow = ({ file, status, handleFileClick }: FileItemRowProps): JSX.Element => {
  const { name, fileType = 'zip', downloadProgress = 0, onDownload } = file;

  const handleClick = useCallback(() => handleFileClick(onDownload), [handleFileClick, onDownload]);

  return (
    <FileItem
      fileStatus={status}
      fileName={name}
      fileExtension={fileType}
      onClick={handleClick}
      fileDownloadProgress={downloadProgress ?? 0}
    />
  );
};

/**
 * Component for displaying the list of files in the file download manager body, with dynamic height based on the number of files
 */
export const FileDownloadManagerBodyContainer = ({
  files,
  status,
  handleFileClick,
}: BodyContainerProps): JSX.Element => {
  const minHeight = useMemo(() => {
    if (files.length < MAX_OVERFLOW_FILES_LENGTH) {
      return files.length * FILES_LIST_ITEM_HEIGHT;
    }

    return 0;
  }, [files.length]);

  return (
    <StyledFilesList $minHeight={minHeight}>
      {files.map((file) => (
        <FileItemRow
          key={file.id ?? file.name}
          file={file}
          status={status}
          handleFileClick={handleFileClick}
        />
      ))}
    </StyledFilesList>
  );
};

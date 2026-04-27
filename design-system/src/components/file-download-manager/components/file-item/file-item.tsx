import { useCallback, useMemo, useState } from 'react';

import { FileListItem } from '@components/list';
import { useCss } from '@components/utils/hooks/use-css';

import { FileItemDetails } from './file-item-details';
import { FileItemEndEnhancer } from './file-item-end-enhancer';
import { getFileListItemOverrides } from './file-item.styles';

import type { FileDownloadStatus } from '@components/file-download-manager';
import type { FileType } from '@components/file-type-icon';

export interface FileItemProps {
  fileStatus: FileDownloadStatus;
  fileName: string;
  fileExtension: FileType;
  fileDownloadProgress?: number;
  onClick(): void;
}

/** File item that is being downloaded */
export const FileItem = ({
  fileStatus,
  fileName,
  fileExtension,
  fileDownloadProgress,
  onClick,
}: FileItemProps): JSX.Element => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useCss();

  /** Handles the mouse enter event */
  const handleMouseEnter = useCallback(() => setIsHovered(true), []);

  /** Handles the mouse leave event */
  const handleMouseLeave = useCallback(() => setIsHovered(false), []);

  const fileListItemOverrides = useMemo(
    () => getFileListItemOverrides(fileStatus, theme.spacing),
    [fileStatus, theme.spacing],
  );

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      data-testid="file-download-manager--file-item--container"
    >
      <FileListItem
        aria-label={fileName}
        size="sm"
        details={
          <FileItemDetails
            fileStatus={fileStatus}
            fileDownloadProgress={fileDownloadProgress}
          />
        }
        endEnhancer={
          <FileItemEndEnhancer
            fileStatus={fileStatus}
            isHovered={isHovered}
            onClick={onClick}
          />
        }
        fileExtension={fileExtension}
        label={fileName}
        onClick={onClick}
        overrides={fileListItemOverrides}
      />
    </div>
  );
};

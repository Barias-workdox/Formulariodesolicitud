import { useMemo } from 'react';

import { ProgressBar } from '@components/progress/progress-bar';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { getFileProgressBarOverrides } from './file-item.styles';

import type { FileDownloadStatus } from '@components/file-download-manager';

export interface FileItemDetailsProps {
  fileStatus: FileDownloadStatus;
  fileDownloadProgress?: number;
}

interface FileItemProgressBarProps {
  fileDownloadProgress?: number;
}

/** Renders the progress bar for the downloading status. Owns its own override computation. */
const FileItemProgressBar = ({ fileDownloadProgress }: FileItemProgressBarProps): JSX.Element => {
  const { theme } = useCss();

  const overrides = useMemo(() => getFileProgressBarOverrides(theme.spacing), [theme.spacing]);

  return (
    <ProgressBar
      value={fileDownloadProgress ?? 0}
      completed={false}
      data-testid="file-download-manager--file-item--loading-progress-bar"
      overrides={overrides}
    />
  );
};

/** Renders the details slot of the file item based on the current status */
export const FileItemDetails = ({
  fileStatus,
  fileDownloadProgress,
}: FileItemDetailsProps): JSX.Element | null => {
  const { t } = useTranslation();

  if (fileStatus === 'downloading') {
    return <FileItemProgressBar fileDownloadProgress={fileDownloadProgress} />;
  }

  if (fileStatus === 'idle') return null;

  return (
    <Text
      margin={0}
      variant="microCopy"
    >
      {fileStatus === 'finished'
        ? t('fileDownloadManager.fileItemStatusLabel.finished')
        : t('fileDownloadManager.fileItemStatusLabel.error')}
    </Text>
  );
};

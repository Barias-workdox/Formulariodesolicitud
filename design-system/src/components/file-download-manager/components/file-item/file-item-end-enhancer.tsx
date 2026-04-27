import type { SyntheticEvent } from 'react';
import { useCallback } from 'react';

import { CheckmarkOutline, Download, Error } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon/next';
import { IconButton } from '@components/button';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import type { FileDownloadStatus } from '@components/file-download-manager';

export interface FileItemEndEnhancerProps {
  fileStatus: FileDownloadStatus;
  isHovered: boolean;
  onClick(): void;
}

/** Renders the end enhancer slot of the file item based on the current status and hover state */
export const FileItemEndEnhancer = ({
  fileStatus,
  isHovered,
  onClick,
}: FileItemEndEnhancerProps): JSX.Element | null => {
  const { t } = useTranslation();
  const { theme } = useCss();

  /** Handles the download button click event */
  const handleDownload = useCallback(
    (event: SyntheticEvent<HTMLButtonElement, Event>): void => {
      event.stopPropagation();
      onClick();
    },
    [onClick],
  );

  if (fileStatus === 'downloading' || fileStatus === 'idle') return null;

  if (isHovered && fileStatus === 'finished') {
    return (
      <StatefulTooltipNext
        content={t('fileDownloadManager.ariaLabels.downloadFileButton')}
        zIndex={theme.zIndex.modal}
        showArrow={true}
      >
        <IconButton
          kind="tertiary"
          size="24px"
          aria-label={t('fileDownloadManager.ariaLabels.downloadFileButton')}
          dataTestId="file-download-manager--file-item--download-button"
          onClick={handleDownload}
        >
          <Download />
        </IconButton>
      </StatefulTooltipNext>
    );
  }

  if (fileStatus === 'finished') {
    return (
      <BackgroundIcon
        appearance="tonal"
        dataTestId="file-download-manager--file-item--finished-icon"
        kind="positive"
        icon={CheckmarkOutline}
        size="24px"
      />
    );
  }

  if (fileStatus === 'error') {
    return (
      <BackgroundIcon
        appearance="tonal"
        dataTestId="file-download-manager--file-item--error-icon"
        kind="negative"
        icon={Error}
        size="24px"
      />
    );
  }

  return null;
};

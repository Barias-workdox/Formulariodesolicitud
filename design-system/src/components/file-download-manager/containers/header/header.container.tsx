import { Close } from '@carbon/icons-react';

import { IconButton } from '@components/button';
import { HeaderStatus } from '@components/file-download-manager/components/header-status';
import { useFileDownloadManagerContext } from '@components/file-download-manager/hooks/use-file-download-manager-context';
import { useFileDownloadManagerDragContext } from '@components/file-download-manager/hooks/use-file-download-manager-drag-context';
import { Text } from '@components/text';
import { StatefulTooltipNext } from '@components/tooltip-next';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';

import { StyledHeaderContainer, StyledHeaderRightContainer } from './header.container.styles';

const headerTitleStatusMap = {
  idle: 'fileDownloadManager.headerTitle.downloading',
  downloading: 'fileDownloadManager.headerTitle.downloading',
  finished: 'fileDownloadManager.headerTitle.finished',
  error: 'fileDownloadManager.headerTitle.error',
};

/** Header container for the file download manager */
export const FileDownloadManagerHeaderContainer = (): JSX.Element => {
  const { t } = useTranslation();
  const {
    onCloseDownload,
    status,
    isDraggable,
    documentsToDownload = 0,
  } = useFileDownloadManagerContext();
  const { onPointerDown } = useFileDownloadManagerDragContext();
  const { theme } = useCss();

  return (
    <StyledHeaderContainer
      onPointerDown={onPointerDown}
      $isDraggable={isDraggable}
      data-testid="file-download-manager--header-container"
    >
      <Text
        variant="body"
        margin={0}
      >
        {t(headerTitleStatusMap[status])}
      </Text>
      <StyledHeaderRightContainer>
        <HeaderStatus
          status={status}
          documentCount={documentsToDownload}
        />

        <StatefulTooltipNext
          ignoreBoundary
          content={t('fileDownloadManager.ariaLabels.closeButton')}
          zIndex={theme.zIndex.modal}
          showArrow={true}
        >
          <IconButton
            size="24px"
            kind="control"
            aria-label={t('fileDownloadManager.ariaLabels.closeButton')}
            onClick={onCloseDownload}
            dataTestId="file-download-manager--header--close-button"
          >
            <Close />
          </IconButton>
        </StatefulTooltipNext>
      </StyledHeaderRightContainer>
    </StyledHeaderContainer>
  );
};

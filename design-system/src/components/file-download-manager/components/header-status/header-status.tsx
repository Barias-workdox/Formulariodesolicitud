import { useMemo } from 'react';

import { CheckmarkOutline, Error } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon/next';
import { Spinner } from '@components/spinner';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';

import { StyledHeaderStatusContainer } from './header-status.styles';

import type { FileDownloadManagerProps } from '@components/file-download-manager/file-download-manager.interfaces';

type Status = NonNullable<FileDownloadManagerProps['status']>;

export interface HeaderStatusProps {
  status: Status;
  documentCount: number;
}

/** Returns the status icon for the given status */
const getStatusIcon = (status: Status): React.ReactNode => {
  if (status === 'downloading') return <Spinner size="sm" />;

  if (status === 'finished') {
    return (
      <BackgroundIcon
        appearance="tonal"
        dataTestId="file-download-manager--header-status--finished-icon"
        icon={CheckmarkOutline}
        kind="positive"
        size="24px"
      />
    );
  }

  if (status === 'error') {
    return (
      <BackgroundIcon
        appearance="tonal"
        dataTestId="file-download-manager--header-status--error-icon"
        icon={Error}
        kind="negative"
        size="24px"
      />
    );
  }

  return null;
};

/** Component to display the header status of the file download manager */
export const HeaderStatus = ({ status, documentCount }: HeaderStatusProps): React.ReactNode => {
  const { t } = useTranslation();

  const statusText = useMemo(() => {
    if (status === 'downloading') {
      return `${t('fileDownloadManager.headerStatusLabels.downloading')} ${t('general.items', { count: documentCount, data: documentCount })}`;
    }

    if (status === 'finished') return t('fileDownloadManager.headerStatusLabels.finished');
    if (status === 'error') return t('fileDownloadManager.headerStatusLabels.error');

    return null;
  }, [status, documentCount, t]);

  if (status === 'idle') return null;

  return (
    <StyledHeaderStatusContainer data-testid="file-download-manager--header-status">
      {getStatusIcon(status)}
      <Text
        margin={0}
        variant="bodySmall"
      >
        {statusText}
      </Text>
    </StyledHeaderStatusContainer>
  );
};

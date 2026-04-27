import { type ReactElement, useMemo } from 'react';

import { Close, Restart } from '@carbon/icons-react';

import { Button } from '@components/button';
import { useTranslation } from '@components/utils';

import { StyledFooterContainer } from '../components/styled-components';
import { useFileUploadManagerContext } from '../hooks/use-file-uploader-manager-context';

import type { WithTestId } from '@interfaces/common.interfaces';

type FooterContainerProps = WithTestId & {};

/**
 * Footer container for the file upload manager.
 */
export const FooterContainer = ({ dataTestId }: FooterContainerProps): ReactElement => {
  const { t } = useTranslation();
  const { activeTab, status, files, onCancelUpload, onRetryUpload } = useFileUploadManagerContext();

  const isUploading = status === 'uploading';
  const isFinished = status === 'finished';
  const isRejectedTabActive = activeTab === 'rejected';

  const showFooter = useMemo(() => {
    // If there are no files, do not show the footer with buttons
    if (files.length < 1) {
      return false;
    }

    // if teh component status is uploading, always show the footer
    if (isUploading) {
      return true;
    }

    // if the component status is finished and the rejected tab is active, show the footer
    if (isFinished && isRejectedTabActive) {
      return true;
    }

    return false;
  }, [files.length, isUploading, isFinished, isRejectedTabActive]);

  return showFooter ? (
    <StyledFooterContainer>
      {activeTab === 'rejected' ? (
        <Button
          data-testid={`${dataTestId}__retry-button`}
          kind="ghost-secondary"
          size="compact"
          startEnhancer={() => <Restart />}
          onClick={() => onRetryUpload()}
        >
          {t('fileUploadManager.retry')}
        </Button>
      ) : (
        <Button
          data-testid={`${dataTestId}__cancel-button`}
          kind="ghost-secondary"
          size="compact"
          startEnhancer={() => <Close />}
          onClick={onCancelUpload}
        >
          {t('fileUploadManager.cancel')}
        </Button>
      )}
    </StyledFooterContainer>
  ) : (
    <></>
  );
};

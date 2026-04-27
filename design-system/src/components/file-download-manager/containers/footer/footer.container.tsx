import { ArrowRight } from '@carbon/icons-react';

import { Button } from '@components/button/next';
import { useFileDownloadManagerContext } from '@components/file-download-manager/hooks/use-file-download-manager-context';
import { useTranslation } from '@components/utils';

import { StyledFooterContainer } from './footer.container.styles';

/** Footer container for the file download manager */
export const FileDownloadManagerFooterContainer = (): JSX.Element => {
  const { t } = useTranslation();
  const { onGoToDownloads } = useFileDownloadManagerContext();

  return (
    <StyledFooterContainer data-testid="file-download-manager--footer-container">
      <Button
        dataTestId="file-download-manager--footer--button"
        appearance="tonal"
        size="32px"
        endEnhancer={ArrowRight}
        onClick={onGoToDownloads}
      >
        {t('fileDownloadManager.goToDownloads')}
      </Button>
    </StyledFooterContainer>
  );
};

import { Copy } from '@carbon/icons-react';

import { Button } from '@components/button';
import { CopyToClipboardButton } from '@components/copy-to-clipboard-button';
import { useTranslation } from '@components/utils';

import {
  StyledBusinessSummaryFooterButtonContainer,
  StyledBusinessSummaryFooterContainer,
  StyledBusinessSummaryFooterContent,
} from '../../../business-summary.styles';

interface BusinessSummaryDesktopFooterProps {
  summary: string;
  date?: string;
  onDownload?(): void;
}

/**
 * Business Summary Desktop Footer component that displays the date and provides buttons to copy the summary text and download
 */
export const BusinessSummaryDesktopFooter = ({
  summary,
}: BusinessSummaryDesktopFooterProps): JSX.Element => {
  const { t } = useTranslation();

  return (
    <StyledBusinessSummaryFooterContainer>
      <StyledBusinessSummaryFooterContent>
        <StyledBusinessSummaryFooterButtonContainer>
          <CopyToClipboardButton
            data-testid="copy-summary-button"
            text={summary}
          >
            <Button
              data-testid="copy-summary-button--trigger"
              kind="tertiary-brain"
              size="32px"
              startEnhancer={<Copy />}
            >
              {t('copyToClipboardButton.defaultText')}
            </Button>
          </CopyToClipboardButton>
        </StyledBusinessSummaryFooterButtonContainer>
      </StyledBusinessSummaryFooterContent>
    </StyledBusinessSummaryFooterContainer>
  );
};

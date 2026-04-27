import { CopyToClipboardButton } from '@components/copy-to-clipboard-button';

import {
  StyledBusinessSummaryFooterButtonContainer,
  StyledBusinessSummaryFooterContainer,
  StyledBusinessSummaryFooterContent,
} from '../../../business-summary.styles';

import type { BusinessSummaryControllerProps } from '@components/webdox-ai/controllers/business-summary-controller';

type BusinessSummaryMobileFooterProps = Pick<BusinessSummaryControllerProps, 'summary'>;

/**
 * A footer component for the business summary mobile view that displays the date and
 * provides buttons to copy the summary text and download
 */
export const BusinessSummaryMobileFooter = ({
  summary,
}: BusinessSummaryMobileFooterProps): JSX.Element => {
  return (
    <StyledBusinessSummaryFooterContainer>
      <StyledBusinessSummaryFooterContent>
        <StyledBusinessSummaryFooterButtonContainer>
          <CopyToClipboardButton
            data-testid="copy-summary-button"
            text={summary}
            buttonKind="tertiary-brain"
            buttonSize="32px"
          />
        </StyledBusinessSummaryFooterButtonContainer>
      </StyledBusinessSummaryFooterContent>
    </StyledBusinessSummaryFooterContainer>
  );
};

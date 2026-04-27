/* eslint-disable jsx-a11y/heading-has-content */
import { Close } from '@carbon/icons-react';
import { useMedia } from 'react-use';

import { IconButton } from '@components/button';
import { Markdown } from '@components/markdown';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { mediaQueries } from '@tokens/breakpoints';

import { ReactComponent as BrainIcon } from '../../../../assets/icons/webdox-ai/brain-icon.svg';
import { WEBDOX_AI_BUTTON_ICON_SMALL_SIZE } from '../webdox-ai-button';

import { BusinessSummaryDesktopFooter } from './business-summary-desktop/components/business-summary-desktop-footer';
import { BusinessSummaryMobileFooter } from './business-summary-mobile/components/business-symmary-mobile-footer';
import {
  StyledBrainIconContainer,
  StyledBusinessSummaryContainer,
  StyledBusinessSummaryContent,
  StyledBusinessSummaryHeader,
  StyledBusinessSummaryHeaderContent,
  StyledBusinessSummaryHeaderTitle,
} from './business-summary.styles';

const dataTestId = 'business-summary';

export interface BusinessSummaryProps {
  summary?: string;
  date?: string;
  toggleOpen?(): void;
  onDownload?(): void;
}

/**
 * Business Summary component that displays a summary of business information
 */
export const BusinessSummary = ({ summary, toggleOpen }: BusinessSummaryProps): JSX.Element => {
  const isMedium = useMedia(mediaQueries.medium);
  const { t } = useTranslation();

  return (
    <StyledBusinessSummaryContainer>
      <StyledBusinessSummaryHeader>
        <StyledBrainIconContainer>
          <BrainIcon
            height={WEBDOX_AI_BUTTON_ICON_SMALL_SIZE}
            width={WEBDOX_AI_BUTTON_ICON_SMALL_SIZE}
          />
        </StyledBrainIconContainer>
        <StyledBusinessSummaryHeaderContent>
          <StyledBusinessSummaryHeaderTitle>
            <Text
              variant="h2"
              fontWeight={700}
              color="neutral"
              margin={0}
            >
              {t('webdoxAI.assistantOptions.brainCompanion')}
            </Text>
            <Text
              variant="body"
              fontWeight={400}
              color="neutral"
              margin={0}
            >
              {`${isMedium ? ' - ' : ''} ${t('webdoxAI.assistantOptions.businessSummary')}`}
            </Text>
          </StyledBusinessSummaryHeaderTitle>
          <IconButton
            data-testid={`${dataTestId}__close-button`}
            kind="control"
            size="32px"
            onClick={toggleOpen}
          >
            <Close />
          </IconButton>
        </StyledBusinessSummaryHeaderContent>
      </StyledBusinessSummaryHeader>
      <StyledBusinessSummaryContent>
        <Text
          variant="bodySmall"
          color="neutralSubdued"
          overflow="auto"
          margin={0}
          as="span"
        >
          <Markdown
            extraComponents={{
              h1: <h4 />,
              h2: <h4 />,
              h3: <h4 />,
            }}
          >
            {summary}
          </Markdown>
        </Text>
      </StyledBusinessSummaryContent>
      {isMedium ? (
        <BusinessSummaryDesktopFooter summary={summary} />
      ) : (
        <BusinessSummaryMobileFooter summary={summary} />
      )}
    </StyledBusinessSummaryContainer>
  );
};

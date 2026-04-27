import { useMedia } from 'react-use';

import {
  DynamicDialog,
  DynamicDialogBody,
  DynamicDialogHeader,
} from '@components/dynamic-dialog/next';
import { Markdown } from '@components/markdown';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { mediaQueries } from '@tokens/breakpoints';

import { ReactComponent as BrainIcon } from '../../../../../assets/icons/webdox-ai/brain-icon.svg';
import { WEBDOX_AI_BUTTON_ICON_SMALL_SIZE } from '../../webdox-ai-button';
import { BusinessSummaryMobileFooter } from '../business-summary-mobile/components';
import {
  StyledBrainIconContainer,
  StyledBusinessSummaryContainer,
  StyledBusinessSummaryContent,
} from '../business-summary.styles';

import { BusinessSummaryDesktopFooter } from './components/business-summary-desktop-footer';

import type { BusinessSummaryControllerProps } from '@components/webdox-ai/controllers/business-summary-controller';

type BusinessSummaryDesktopProps = BusinessSummaryControllerProps;

/**
 * Business Summary Desktop component that displays a summary of business information
 * using the new DynamicDialog compound component pattern
 */
export const BusinessSummaryDesktop = ({
  isOpen,
  summary,
  toggleOpen,
}: BusinessSummaryDesktopProps): JSX.Element => {
  const isMedium = useMedia(mediaQueries.medium);
  const { t } = useTranslation();

  // Create custom icon with gradient background
  const CustomBrainIcon = (
    <StyledBrainIconContainer>
      <BrainIcon
        height={WEBDOX_AI_BUTTON_ICON_SMALL_SIZE}
        width={WEBDOX_AI_BUTTON_ICON_SMALL_SIZE}
      />
    </StyledBrainIconContainer>
  );

  return (
    <DynamicDialog
      isOpen={isOpen}
      placement="bottomRight"
      onClose={toggleOpen}
      closable={true}
      draggable={true}
      resizable={true}
    >
      <DynamicDialogHeader
        title={t('webdoxAI.assistantOptions.brainCompanion')}
        description={t('webdoxAI.assistantOptions.businessSummary')}
        icon={CustomBrainIcon}
        showBackButton={false}
      />
      <DynamicDialogBody padding="0px">
        <StyledBusinessSummaryContainer>
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
                  h1: <h4>Heading</h4>,
                  h2: <h4>Heading</h4>,
                  h3: <h4>Heading</h4>,
                }}
              >
                {summary ?? ''}
              </Markdown>
            </Text>
          </StyledBusinessSummaryContent>
          {isMedium ? (
            <BusinessSummaryDesktopFooter summary={summary ?? ''} />
          ) : (
            <BusinessSummaryMobileFooter summary={summary ?? ''} />
          )}
        </StyledBusinessSummaryContainer>
      </DynamicDialogBody>
    </DynamicDialog>
  );
};

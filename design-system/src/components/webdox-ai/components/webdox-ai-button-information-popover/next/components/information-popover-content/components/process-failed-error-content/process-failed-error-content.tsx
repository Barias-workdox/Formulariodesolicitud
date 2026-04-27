import { Help } from '@carbon/icons-react';

import { Button } from '@components/button';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { INVALID_DOCUMENT_URL } from '@components/webdox-ai/constants/external-urls.constants';

import { styles } from '../../../../webdox-ai-button-information-popover.styles';
import { actionButtonOverrides } from '../../information-popover-content.overrides';
import { StyledActionsContainer, StyledContentWithActionsContainer } from '../../styled-components';

import type { InformationPopoverContentCommonProps } from '../../information-popover-content.interfaces';

/**
 * A component that displays a detailed process failed error message and includes
 * an action for viewing reasons.
 */
export const ProcessFailedErrorContent = ({
  'data-testid': dataTestId,
}: InformationPopoverContentCommonProps): JSX.Element => {
  const { boldTextStyles, theme } = useCss(styles);
  const { t } = useTranslation();

  return (
    <StyledContentWithActionsContainer>
      <Text
        variant="bodySmall"
        margin={0}
        color={theme.colors.neutralSubdued}
      >
        <DSTrans
          i18nKey="webdoxAI.webdoxAIButton.processFailedErrorInformation.detail"
          components={{
            bold: <span className={boldTextStyles} />,
          }}
        />
      </Text>
      <StyledActionsContainer>
        <Button
          data-testid={`${dataTestId}--reasons`}
          startEnhancer={Help}
          kind="tertiary"
          overrides={actionButtonOverrides}
          onClick={() => window.open(INVALID_DOCUMENT_URL)}
        >
          {t('webdoxAI.webdoxAIButton.processFailedErrorInformation.actions.reasons')}
        </Button>
      </StyledActionsContainer>
    </StyledContentWithActionsContainer>
  );
};

import { Repeat } from '@carbon/icons-react';

import { Button } from '@components/button';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';

import { styles } from '../../../../webdox-ai-button-information-popover.styles';
import { actionButtonOverrides } from '../../information-popover-content.overrides';
import { StyledActionsContainer, StyledContentWithActionsContainer } from '../../styled-components';

import type { InformationPopoverContentCommonProps } from '../../information-popover-content.interfaces';

/**
 * A component that displays a detailed legal whisper error message and includes
 * action for reloading the page.
 */
export const LegalWhisperGenericErrorContent = ({
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
          components={{
            bold: <span className={boldTextStyles} />,
          }}
          i18nKey="webdoxAI.webdoxAIButton.legalWhisperGenericError.detail"
        />
      </Text>
      <StyledActionsContainer>
        <Button
          data-testid={`${dataTestId}--reloadPage`}
          startEnhancer={Repeat}
          kind="tertiary"
          overrides={actionButtonOverrides}
          onClick={() => location.reload()}
        >
          {t('webdoxAI.webdoxAIButton.genericErrorInformation.actions.reloadPage')}
        </Button>
      </StyledActionsContainer>
    </StyledContentWithActionsContainer>
  );
};

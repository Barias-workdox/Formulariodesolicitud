import { Help, Repeat } from '@carbon/icons-react';

import { Button } from '@components/button';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { DOCUMENT_NOT_PROCESSED_URL } from '@components/webdox-ai/constants/external-urls.constants';

import { styles } from '../../../../webdox-ai-button-information-popover.styles';
import { actionButtonOverrides } from '../../information-popover-content.overrides';
import { StyledActionsContainer, StyledContentWithActionsContainer } from '../../styled-components';

import type { InformationPopoverContentCommonProps } from '../../information-popover-content.interfaces';

/**
 * A component that displays a detailed error message and includes
 * actions for viewing reasons or reloading the page.
 */
export const GenericErrorContent = ({
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
          i18nKey="webdoxAI.webdoxAIButton.genericErrorInformation.detail"
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
          onClick={() => window.open(DOCUMENT_NOT_PROCESSED_URL)}
        >
          {t('webdoxAI.webdoxAIButton.genericErrorInformation.actions.reasons')}
        </Button>
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

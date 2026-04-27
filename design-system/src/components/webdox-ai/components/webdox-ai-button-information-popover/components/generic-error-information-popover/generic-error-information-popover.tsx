import { useMemo } from 'react';

import { Help, Repeat } from '@carbon/icons-react';

import { Button } from '@components/button';
import { InformationPopover } from '@components/information-popover';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { DOCUMENT_NOT_PROCESSED_URL } from '@components/webdox-ai/constants/external-urls.constants';

import {
  StyledActionsContainer,
  StyledEmoji,
  actionButtonOverrides,
  informationPopoverWithActionsOverrides,
  styles,
} from '../../webdox-ai-button-information-popover.styles';
import { PopoverTitleWithIcon } from '../popover-title-with-icon';

import type { InformationPopoverCommonProps } from '../../webdox-ai-button-information-popover.interfaces';

/**
 * Component for rendering an information popover for generic errors.
 */
export const GenericErrorInformationPopover = ({
  'data-testid': dataTestId,
  children,
  overrides,
  isOpen,
  onClick,
  onClickOutside,
  onEsc,
  close,
}: InformationPopoverCommonProps): JSX.Element => {
  const { t } = useTranslation();
  const { boldTextStyles, theme } = useCss(styles);

  const mergedOverrides: InformationPopoverCommonProps['overrides'] = useMemo(() => {
    return mergeOverridesDeep(informationPopoverWithActionsOverrides, overrides);
  }, [overrides]);

  return (
    <InformationPopover
      data-testid={dataTestId}
      isOpen={isOpen}
      onClick={onClick}
      onClickOutside={onClickOutside}
      onEsc={onEsc}
      close={close}
      title={
        <PopoverTitleWithIcon>
          <StyledEmoji>🚧</StyledEmoji>
          {t('webdoxAI.webdoxAIButton.genericErrorInformation.title')}
        </PopoverTitleWithIcon>
      }
      content={
        <>
          <Text
            variant="bodySmall"
            margin={0}
            color={theme.colors.neutralSubdued}
          >
            <DSTrans
              components={{
                bold: <span className={boldTextStyles} />,
              }}
              i18nKey="webdoxAI.webdoxAIButton.genericErrorInformation.detail"
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
        </>
      }
      placement="top"
      overrides={mergedOverrides}
    >
      {children}
    </InformationPopover>
  );
};

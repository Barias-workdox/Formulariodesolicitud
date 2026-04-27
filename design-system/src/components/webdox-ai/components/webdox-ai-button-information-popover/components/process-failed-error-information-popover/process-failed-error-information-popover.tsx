import { useMemo } from 'react';

import { Help } from '@carbon/icons-react';

import { Button } from '@components/button';
import { InformationPopover } from '@components/information-popover';
import { Text } from '@components/text';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { INVALID_DOCUMENT_URL } from '@components/webdox-ai/constants/external-urls.constants';

import {
  StyledActionsContainer,
  StyledEmoji,
  actionButtonOverrides,
  informationPopoverWithActionsOverrides,
  styles,
} from '../../webdox-ai-button-information-popover.styles';
import { PopoverTitleWithIcon } from '../popover-title-with-icon';

import type { InformationPopoverCommonProps } from '../../webdox-ai-button-information-popover.interfaces';
import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';

/**
 * Component for rendering an information popover for process failed error.
 */
export const ProcessFailedErrorInformationPopover = ({
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

  const mergedOverrides = useMemo(() => {
    return mergeOverridesDeep<InformationPopoverOverrides>(
      informationPopoverWithActionsOverrides,
      overrides,
    );
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
          <StyledEmoji>⚠️</StyledEmoji>
          {t('webdoxAI.webdoxAIButton.processFailedErrorInformation.title')}
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
        </>
      }
      placement="top"
      overrides={mergedOverrides}
    >
      {children}
    </InformationPopover>
  );
};

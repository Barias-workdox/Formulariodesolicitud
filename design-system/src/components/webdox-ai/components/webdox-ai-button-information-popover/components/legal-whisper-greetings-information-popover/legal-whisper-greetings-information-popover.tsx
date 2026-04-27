import { useMemo } from 'react';

import { InformationPopover } from '@components/information-popover';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';

import {
  StyledEmoji,
  legalWhisperInformationPopoverOverrides,
  styles,
} from '../../webdox-ai-button-information-popover.styles';
import { PopoverTitleWithIcon } from '../popover-title-with-icon';

import type { InformationPopoverCommonProps } from '../../webdox-ai-button-information-popover.interfaces';
import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';

/**
 * Component for rendering an information popover for legal whisper greetings.
 */
export const LegalWhisperGreetingsInformationPopover = ({
  'data-testid': dataTestId,
  user: { firstName: userName },
  children,
  overrides,
  isOpen,
  onClick,
  onClickOutside,
  onEsc,
  close,
}: InformationPopoverCommonProps): JSX.Element => {
  const { t } = useTranslation();
  const { boldTextStyles } = useCss(styles);

  const mergedOverrides = useMemo(() => {
    return mergeOverridesDeep<InformationPopoverOverrides>(
      legalWhisperInformationPopoverOverrides,
      overrides,
    );
  }, [overrides]);

  const popoverTitle = t('webdoxAI.webdoxAIButton.greetings', {
    userName,
  });

  return (
    <InformationPopover
      data-testid={dataTestId}
      isOpen={isOpen}
      onClick={onClick}
      onClickOutside={onClickOutside}
      onEsc={onEsc}
      close={close}
      title={
        <PopoverTitleWithIcon
          showIcon
          iconType="legalWhisper"
        >
          <StyledEmoji>👋</StyledEmoji>
          <TruncatedText
            textProps={{
              variant: 'bodySmall',
              fontWeight: '500',
              margin: '0',
              as: 'div',
            }}
            tooltipProps={{
              content: popoverTitle,
            }}
          >
            {popoverTitle}
          </TruncatedText>
        </PopoverTitleWithIcon>
      }
      content={
        <DSTrans
          i18nKey="webdoxAI.webdoxAIButton.legalWhisperGreetings.detail"
          components={{
            bold: <span className={boldTextStyles} />,
          }}
        />
      }
      placement="top"
      overrides={mergedOverrides}
    >
      {children}
    </InformationPopover>
  );
};

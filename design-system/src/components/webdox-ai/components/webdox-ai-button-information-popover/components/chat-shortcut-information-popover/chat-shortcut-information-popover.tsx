import { useCallback, useMemo, useState } from 'react';

import { InformationPopover } from '@components/information-popover';
import { MessageComposer } from '@components/messages';
import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { noop } from '@utils/noop';

import {
  StyledEmoji,
  informationPopoverOverrides,
  styles,
} from '../../webdox-ai-button-information-popover.styles';
import { PopoverTitleWithIcon } from '../popover-title-with-icon';

import {
  getChatShortcutInformationPopoverOverrides,
  getMessageComposerOverrides,
} from './chat-shortcut-overrides';
import { StyledChatShortcutWrapper } from './styled-chat-shortcut-wrapper';
import { StyledDetailChatShortcutWrapper } from './styled-detail-chat-shortcut-wrapper';

import type { InformationPopoverCommonProps } from '../../webdox-ai-button-information-popover.interfaces';
import type { InformationPopoverOverrides } from '@components/information-popover/information-popover.interfaces';

/**
 * Component for rendering an information popover for document processing.
 */
export const ChatShortcutInformationPopover = ({
  'data-testid': dataTestId,
  user: { firstName: userName },
  children,
  overrides,
  isOpen,
  onClick,
  onClickOutside,
  onEsc,
  close,
  onSendClick = noop,
  isDisabled = false,
  sendTextValue,
}: InformationPopoverCommonProps): JSX.Element => {
  const { t } = useTranslation();
  const [text, setText] = useState('');
  const { boldTextStyles } = useCss(styles);

  const isActive = text.length > 0;

  const mergedOverrides = useMemo(() => {
    return mergeOverridesDeep<InformationPopoverOverrides>(
      informationPopoverOverrides,
      getChatShortcutInformationPopoverOverrides({ isActive }),
      overrides,
    );
  }, [overrides, isActive]);

  /**
   * Handle text change
   */
  const handleTextChange = useCallback((text: string): void => {
    setText(text);
  }, []);

  const messageComposerOverrides = useMemo(() => {
    return getMessageComposerOverrides({
      placeholder: t('webdoxAI.composerPlaceholder'),
      buttonText: t('general.send'),
    });
  }, [t]);

  const popoverTitle = t('webdoxAI.webdoxAIButton.greetings', { userName });

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
          iconType="brainCompanion"
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
        <StyledChatShortcutWrapper>
          <StyledDetailChatShortcutWrapper>
            <DSTrans
              i18nKey="webdoxAI.webdoxAIButton.chatShortcutInformation.detail"
              components={{
                bold: <span className={boldTextStyles} />,
              }}
            />
          </StyledDetailChatShortcutWrapper>
          <MessageComposer
            data-testid={dataTestId}
            isDisabled={isDisabled}
            isMentionable={false}
            value={sendTextValue}
            $maxHeight="90px"
            overrides={messageComposerOverrides}
            onCreate={onSendClick}
            onChange={handleTextChange}
          />
        </StyledChatShortcutWrapper>
      }
      placement="top"
      overrides={mergedOverrides}
    >
      {children}
    </InformationPopover>
  );
};

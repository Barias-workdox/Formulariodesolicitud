import { useMemo } from 'react';

import { MessageComposer } from '@components/messages';
import { Text } from '@components/text';
import { useCss } from '@components/utils/hooks/use-css';
import { DSTrans } from '@components/utils/i18n/translation-component';
import { MAX_CHAT_SHORTCUT_HEIGHT } from '@components/webdox-ai/constants/webdox-ai.constants';

import { styles } from '../../../../webdox-ai-button-information-popover.styles';
import { StyledContentWithActionsContainer } from '../../styled-components';

import { getMessageComposerOverrides } from './chat-shortcut-content.overrides';

import type { InformationPopoverContentCommonProps } from '../../information-popover-content.interfaces';
import type { ButtonProps } from '@components/button';

export interface ChatShortcutContentProps extends Pick<
  InformationPopoverContentCommonProps,
  'data-testid' | 'isDisabled' | 'sendTextValue' | 'onInputChange'
> {
  buttonKind: ButtonProps['kind'];
  buttonText: string;
  description: string;
  placeholder: string;
  onSubmit(value: string): void;
}

/**
 * A component that renders the content of the "Chat Shortcut" popover.
 *
 * This component provides a styled wrapper with detailed information and a message composer
 * that allows users to send input or interact with the chat shortcut functionality.
 */
export const ChatShortcutContent = ({
  'data-testid': dataTestId,
  buttonKind,
  buttonText,
  description,
  isDisabled = false,
  placeholder,
  sendTextValue,
  onInputChange,
  onSubmit,
}: ChatShortcutContentProps): JSX.Element => {
  const { boldTextStyles } = useCss(styles);

  const messageComposerOverrides = useMemo(() => {
    return getMessageComposerOverrides({
      placeholder,
      buttonText,
      buttonKind,
    });
  }, [buttonKind, buttonText, placeholder]);

  return (
    <StyledContentWithActionsContainer>
      <Text
        variant="bodySmall"
        margin={0}
      >
        <DSTrans
          components={{
            bold: <span className={boldTextStyles} />,
          }}
          i18nKey={description}
        />
      </Text>
      <MessageComposer
        data-testid={dataTestId}
        isDisabled={isDisabled}
        isMentionable={false}
        value={sendTextValue}
        $maxHeight={MAX_CHAT_SHORTCUT_HEIGHT}
        overrides={messageComposerOverrides}
        onCreate={onSubmit}
        onChange={onInputChange}
      />
    </StyledContentWithActionsContainer>
  );
};

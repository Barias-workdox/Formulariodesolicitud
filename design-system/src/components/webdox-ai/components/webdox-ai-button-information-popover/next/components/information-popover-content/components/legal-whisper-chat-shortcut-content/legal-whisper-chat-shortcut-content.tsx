import { useTranslation } from '@components/utils';

import { ChatShortcutContent } from '../chat-shortcut-content';

import type { InformationPopoverContentCommonProps } from '../../information-popover-content.interfaces';
import type { ChatShortcutContentProps } from '../chat-shortcut-content';

/**
 * A component that renders the content of the "LegalWhisperChatShortcut" popover.
 */
export const LegalWhisperChatShortcutContent = ({
  'data-testid': dataTestId = 'chat-shortcut-content',
  onSubmit,
  ...rest
}: InformationPopoverContentCommonProps): JSX.Element => {
  const { t } = useTranslation();

  /**
   * Handles the submission of the chat shortcut content.
   */
  const handleSubmit: ChatShortcutContentProps['onSubmit'] = (value) => {
    onSubmit({ optionType: 'legalWhisper', value });
  };

  return (
    <ChatShortcutContent
      data-testid={dataTestId}
      {...rest}
      onSubmit={handleSubmit}
      description="webdoxAI.webdoxAIButton.legalWhisperChatShortcut.detail"
      buttonKind="primary-whisper"
      buttonText={t('general.send')}
      placeholder={t('webdoxAI.webdoxAIButton.legalWhisperChatShortcut.composerPlaceholder')}
    />
  );
};

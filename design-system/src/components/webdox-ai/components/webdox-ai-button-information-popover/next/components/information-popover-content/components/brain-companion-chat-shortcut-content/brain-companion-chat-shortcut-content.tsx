import { useTranslation } from '@components/utils';

import { ChatShortcutContent } from '../chat-shortcut-content';

import type { InformationPopoverContentCommonProps } from '../../information-popover-content.interfaces';
import type { ChatShortcutContentProps } from '../chat-shortcut-content';

/**
 * A component that renders the content of the "Brain Companion Chat Shortcut" popover.
 */
export const BrainCompanionChatShortcutContent = ({
  'data-testid': dataTestId = 'chat-shortcut-content',
  onSubmit,
  ...rest
}: InformationPopoverContentCommonProps): JSX.Element => {
  const { t } = useTranslation();

  /**
   * Handles the submission of the chat shortcut content.
   */
  const handleSubmit: ChatShortcutContentProps['onSubmit'] = (value) => {
    onSubmit({ optionType: 'brainCompanion', value });
  };

  return (
    <ChatShortcutContent
      data-testid={dataTestId}
      {...rest}
      onSubmit={handleSubmit}
      description="webdoxAI.webdoxAIButton.chatShortcutInformation.detail"
      buttonKind="primary-brain"
      buttonText={t('general.send')}
      placeholder={t('webdoxAI.composerPlaceholder')}
    />
  );
};

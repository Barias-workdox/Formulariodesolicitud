import { TruncatedText } from '@components/truncated-text';
import { useTranslation } from '@components/utils';
import { checkNotEmptyValue } from '@utils/check-not-empty-value.util';

import { PopoverTitleWithIcon } from '..';

import { StyledEmoji } from './styled-components';

import type { IconType } from '..';
import type { PopoverVariant } from '../../webdox-ai-button-information-popover.interfaces';
import type { ChatBotUser } from '@components/webdox-ai/interfaces';
import type { WithTestId } from '@interfaces/common.interfaces';

interface InformationPopoverTitleProps extends WithTestId {
  popoverVariant: PopoverVariant;
  user?: Pick<ChatBotUser, 'firstName'>;
}

const iconTypeByVariant: Partial<Record<PopoverVariant, IconType>> = {
  active: 'brainCompanion',
  legalWhisperActive: 'legalWhisper',
  legalWhisperGreetings: 'legalWhisper',
  loading: 'brainCompanion',
  suiteAIGreetings: 'suiteAI',
};

const emojiByVariant: Partial<Record<PopoverVariant, string>> = {
  active: '👋',
  genericError: '🚧',
  legalWhisperActive: '👋',
  legalWhisperGenericError: '🚧',
  legalWhisperGreetings: '👋',
  loading: '👋',
  processFailedError: '⚠️',
  encryptedDocumentError: '⚠️',
  suiteAIGreetings: '👋',
};

const textKeyByVariant: Record<PopoverVariant, string> = {
  active: 'webdoxAI.webdoxAIButton.greetings',
  genericError: 'webdoxAI.webdoxAIButton.genericErrorInformation.title',
  legalWhisperActive: 'webdoxAI.webdoxAIButton.greetings',
  legalWhisperGenericError: 'webdoxAI.webdoxAIButton.legalWhisperGenericError.title',
  legalWhisperGreetings: 'webdoxAI.webdoxAIButton.greetings',
  loading: 'webdoxAI.webdoxAIButton.greetings',
  processFailedError: 'webdoxAI.webdoxAIButton.processFailedErrorInformation.title',
  suiteAIGreetings: 'webdoxAI.webdoxAIButton.greetings',
  encryptedDocumentError: 'webdoxAI.webdoxAIButton.encryptedDocumentError.title',
};

/**
 * A component that renders the title for an information popover based on the provided variant.
 *
 * The title includes an optional icon, an emoji, and a translated text string personalized with the user's name.
 */
export const InformationPopoverTitle = ({
  popoverVariant,
  user: { firstName },
}: InformationPopoverTitleProps): JSX.Element => {
  const { t } = useTranslation();

  const selectedIconType = iconTypeByVariant[popoverVariant];
  const selectedEmoji = emojiByVariant[popoverVariant];
  const selectedTextKey = textKeyByVariant[popoverVariant];

  const translatedText = t(selectedTextKey, { userName: firstName });

  return (
    <PopoverTitleWithIcon
      showIcon={checkNotEmptyValue(selectedIconType)}
      iconType={selectedIconType}
    >
      {selectedEmoji && <StyledEmoji>{selectedEmoji}</StyledEmoji>}
      <TruncatedText
        textProps={{
          variant: 'bodySmall',
          fontWeight: '500',
          margin: '0',
          as: 'div',
        }}
        tooltipProps={{
          content: translatedText,
        }}
      >
        {translatedText}
      </TruncatedText>
    </PopoverTitleWithIcon>
  );
};

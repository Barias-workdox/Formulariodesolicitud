import { useCallback, useMemo } from 'react';
import type { ReactElement } from 'react';

import { useTranslation } from '@components/utils';
import { StyledChatContainer } from '@components/webdox-ai/components/assistant-layout/assistant-layout.styles';
import { LegalWhisperChatMessages } from '@components/webdox-ai/components/chat';

import { conversationUtils } from '../utils/conversation.util';
import { messageUtils } from '../utils/message.util';

import type { ChatMessageTypeV2 } from '../interfaces';
import type { LegalWhisperConversation } from '../interfaces/legal-whisper.interfaces';
import type { ChatBotCopyToClipboardPayload } from '../interfaces/webdox-ai.interfaces';
import type { LegalWhisperChatMessagesProps } from '@components/webdox-ai/components/chat';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type LegalWhisperChatControllerProps = WithTestId<
  WithZIndex<
    Pick<
      LegalWhisperChatMessagesProps,
      | 'suggestionList'
      | 'disabled'
      | 'onCreateMessage'
      | 'onSuggestionClick'
      | 'isGeneratingAnswer'
      | 'areaOptions'
      | 'selectedArea'
      | 'countryOptions'
      | 'selectedCountry'
      | 'onAreaChange'
      | 'onCountryChange'
      | 'onRateAnswer'
      | 'showUnratedAnswerAlert'
      | 'showSettingsSelector'
      | 'showSuggestionList'
    > & {
      conversation?: LegalWhisperConversation;
      onCopyToClipboardButtonClick(payload: ChatBotCopyToClipboardPayload): void;
    }
  >
>;

/**
 * Legal Whisper Chat Controller
 * This controller is used to manage the legal whisper chat.
 * It includes the chat messages, the chat composer, and the chat messages list.
 */
export const LegalWhisperChatController = ({
  areaOptions,
  selectedArea,
  conversation,
  countryOptions,
  selectedCountry,
  dataTestId,
  disabled = false,
  isGeneratingAnswer = false,
  showSettingsSelector = false,
  showSuggestionList = false,
  showUnratedAnswerAlert,
  suggestionList,
  zIndex,
  onAreaChange,
  onCopyToClipboardButtonClick,
  onCountryChange,
  onCreateMessage,
  onRateAnswer,
  onSuggestionClick,
}: LegalWhisperChatControllerProps): ReactElement => {
  const { t } = useTranslation();

  const { questions = [] } = conversation ?? {};
  const isConversationEmpty = questions.length === 0;

  /** Handles the message's copy to clipboard button click */
  const handleCopyToClipboardButtonClick = useCallback(
    ({ id }: ChatBotCopyToClipboardPayload): void => {
      const foundAnswer = conversationUtils.findAnswerByAnswerId(questions, id);

      if (foundAnswer) {
        onCopyToClipboardButtonClick({ id: foundAnswer.id });
      }
    },
    [onCopyToClipboardButtonClick, questions],
  );

  const defaultMessages: ChatMessageTypeV2[] = [
    {
      variant: 'systemAnswer',
      id: 'legal-whisper-default-message',
      kind: 'answer',
      value: t('webdoxAI.legalWhisperDefaultMessage.content'),
      tempProps: {
        title: t('webdoxAI.legalWhisperDefaultMessage.title'),
        footerText: t('webdoxAI.legalWhisperDefaultMessage.disclaimer'),
      },
      content: '',
      read: true,
    },
  ];

  const messages = useMemo(
    () =>
      messageUtils.mapQuestionsIntoMessages(questions, {
        onCopyToClipboardButtonClick: handleCopyToClipboardButtonClick,
        disclaimer: t('webdoxAI.chat.legalWhisper.disclaimer'),
        showFeedback: false,
        zIndex,
        questionLayoutKind: 'tertiary',
        loadingVariant: 'descriptiveLoading',
        suiteAIOption: 'legalWhisper',
      }),

    [questions, handleCopyToClipboardButtonClick, t, zIndex],
  );

  return (
    <StyledChatContainer>
      <LegalWhisperChatMessages
        areaOptions={areaOptions}
        selectedArea={selectedArea}
        countryOptions={countryOptions}
        selectedCountry={selectedCountry}
        dataTestId={dataTestId}
        disabled={disabled}
        isGeneratingAnswer={isGeneratingAnswer}
        messages={isConversationEmpty ? defaultMessages : messages}
        onAreaChange={onAreaChange}
        onCountryChange={onCountryChange}
        onCreateMessage={onCreateMessage}
        onRateAnswer={onRateAnswer}
        onSuggestionClick={onSuggestionClick}
        showSettingsSelector={showSettingsSelector}
        showSuggestionList={showSuggestionList}
        showUnratedAnswerAlert={showUnratedAnswerAlert}
        suggestionList={suggestionList}
        zIndex={zIndex}
      />
    </StyledChatContainer>
  );
};

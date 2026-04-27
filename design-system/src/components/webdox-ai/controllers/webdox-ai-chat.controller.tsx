import { useCallback, useEffect, useMemo, useState } from 'react';
import type { ReactElement } from 'react';

import { useTranslation } from '@components/utils';
import { ChatMessages } from '@components/webdox-ai/components/chat';
import { assistantConstants } from '@components/webdox-ai/constants';
import { ChatBotNegativeFeedbackModalContainer } from '@components/webdox-ai/modals';
import { noop } from '@utils/noop';

import { conversationUtils } from '../utils/conversation.util';
import { messageUtils } from '../utils/message.util';

import type { FeedbackKind } from '../../feedback-button';
import type { ChatBotAnswerTypeV2, ChatBotMessageTypePropsV2 } from '../interfaces';
import type {
  ChatBotCopyToClipboardPayload,
  ChatBotFeedback,
  NegativeFeedbackFormValues,
  PositiveFeedbackFormValues,
} from '../interfaces/webdox-ai.interfaces';

export type WebdoxAIChatControllerProps = Required<Pick<ChatBotMessageTypePropsV2, 'data-testid'>> &
  Partial<
    Pick<
      ChatBotMessageTypePropsV2,
      | 'conversation'
      | 'chatComposerSuggestionList'
      | 'disabled'
      | 'isFeedbackLoading'
      | 'isFeedbackSuccess'
      | 'isQuestionWritingAllowed'
      | 'onCopyToClipboardButtonClick'
      | 'onCreateMessage'
      | 'onSettingsClick'
      | 'onSubmitFeedback'
      | 'onSuggestionsClick'
      | 'onSuggestionClick'
      | 'onTempAnswerSubmit'
      | 'onStopAnswerGeneration'
      | 'onRetryAnswerGeneration'
      | 'showFeedback'
      | 'showSettings'
      | 'showSuggestions'
      | 'showSuggestionList'
      | 'suggestionListTitle'
      | 'zIndex'
      | 'isSuggestionsLoading'
      | 'isGeneratingAnswer'
      | 'showLegalWhisperSelector'
      | 'legalWhisperAreaOptions'
      | 'legalWhisperAreaSelected'
      | 'legalWhisperCountryOptions'
      | 'legalWhisperCountrySelected'
      | 'onLegalWhisperAreaChange'
      | 'onLegalWhisperCountryChange'
      | 'updateActiveMessage'
      | 'updateAnswerReference'
      | 'selectedAnswerReference'
      | 'activeAnswerId'
      | 'customPrompts'
      | 'onExecuteCustomPromptAction'
    >
  >;

/**
 * Controller to manage chat bot messages conversation.
 *
 * Will handle the feedback modals and return callbacks to parent
 */
export const WebdoxAIChatController = ({
  'data-testid': dataTestId,
  conversation,
  chatComposerSuggestionList = [],
  customPrompts = [],
  suggestionListTitle = '',
  disabled = false,
  isFeedbackLoading = false,
  isFeedbackSuccess = false,
  isQuestionWritingAllowed = true,
  showSuggestions = false,
  showSuggestionList = false,
  showLegalWhisperSelector = false,
  legalWhisperAreaOptions = [],
  legalWhisperAreaSelected,
  legalWhisperCountryOptions,
  legalWhisperCountrySelected,
  onLegalWhisperAreaChange = noop,
  onLegalWhisperCountryChange = noop,
  showSettings = false,
  showFeedback = false,
  isSuggestionsLoading = false,
  zIndex,
  isGeneratingAnswer = false,
  activeAnswerId,
  onSuggestionsClick = noop,
  onSubmitFeedback = noop,
  onSettingsClick,
  onCreateMessage = noop,
  onCopyToClipboardButtonClick = noop,
  onTempAnswerSubmit = noop,
  onStopAnswerGeneration = noop,
  onRetryAnswerGeneration = noop,
  onSuggestionClick = noop,
  updateActiveMessage = noop,
  updateAnswerReference = noop,
  selectedAnswerReference,
  onExecuteCustomPromptAction = noop,
}: WebdoxAIChatControllerProps): ReactElement => {
  const [selectedFeedback, setSelectedFeedback] = useState<ChatBotFeedback | undefined>(undefined);
  const [shouldShowFeedbackModal, setShouldShowFeedbackModal] = useState(false);

  const { t } = useTranslation();

  const { questions = [] } = conversation ?? {};
  const { feedbackKind: selectedFeedbackKind } = selectedFeedback ?? {};

  /** When the feedback is submitted on the server, close the feedback modal */
  useEffect(() => {
    if (!isFeedbackLoading && isFeedbackSuccess) {
      setSelectedFeedback(undefined);
    }
  }, [isFeedbackLoading, isFeedbackSuccess]);

  /** Handles the message's copy to clipboard button click */
  const handleCopyToClipboardButtonClick = useCallback(
    ({ id }: ChatBotCopyToClipboardPayload, isError?: boolean): void => {
      const foundAnswer = conversationUtils.findAnswerByAnswerId(questions, id);

      onCopyToClipboardButtonClick(foundAnswer, isError);
    },
    [onCopyToClipboardButtonClick, questions],
  );

  /** When a feedback modal is submitted, trigger the parent submit to the server */
  const handleFeedbackSubmit = useCallback(
    (values: PositiveFeedbackFormValues | NegativeFeedbackFormValues): void => {
      if (selectedFeedback !== undefined) {
        const { messageId } = selectedFeedback;
        const foundAnswer = conversationUtils.findAnswerByAnswerId(questions, messageId);
        const shouldUndoFeedback = foundAnswer?.feedback?.value === selectedFeedback.feedbackKind;

        /**
         * clear the selected feedback to next render (after the feedback is submitted)
         */
        setSelectedFeedback(undefined);
        setShouldShowFeedbackModal(false);

        return onSubmitFeedback({
          ...selectedFeedback,
          feedbackKind: shouldUndoFeedback ? undefined : selectedFeedback.feedbackKind,
          values,
          answer: foundAnswer,
        });
      }
    },
    /**
     * we cannot add onSubmitFeedback as dependency because it is not a memoized function
     * we should update how we are passing this variable from the parent component to add it here.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [questions, selectedFeedback],
  );

  /** When closing a feed back modal, remove the selected value */
  const handleModalClose = (): void => {
    setShouldShowFeedbackModal(false);
    setSelectedFeedback(undefined);
  };

  /** Handle the ChatMessages component inserted question */
  const handleChatQuestion = useCallback<ChatBotMessageTypePropsV2['onCreateMessage']>(
    async (questionText: string, options): Promise<void> => {
      onCreateMessage(questionText, {
        ...options,
        origin: assistantConstants.assistantOptionMap.brainCompanion,
      });
    },
    [onCreateMessage],
  );

  /**
   * When a positive feedback is submitted, trigger the parent submit to the server
   */
  useEffect(() => {
    if (!shouldShowFeedbackModal) {
      handleFeedbackSubmit({ option: 'custom', comments: '' });
    }
  }, [selectedFeedbackKind, handleFeedbackSubmit, shouldShowFeedbackModal]);

  /**
   * Set the current selected feedback kind and the message id in the component's state to render the
   * required confirmation modal
   */
  const handleFeedbackButtonClick = useCallback(
    (messageId: ChatBotAnswerTypeV2['id'], kind: FeedbackKind): void => {
      const foundAnswer = conversationUtils.findAnswerByAnswerId(questions, messageId);

      if (foundAnswer?.feedback?.value !== kind && kind === 'negative') {
        setShouldShowFeedbackModal(true);
      }

      setSelectedFeedback({ messageId, feedbackKind: kind });
    },
    [questions],
  );

  const messages = useMemo(
    () =>
      messageUtils.mapQuestionsIntoMessages(questions, {
        activeAnswerId,
        isFeedbackLoading,
        onCopyToClipboardButtonClick: handleCopyToClipboardButtonClick,
        onFeedbackButtonClick: handleFeedbackButtonClick,
        onRetryAnswerGeneration,
        onTempAnswerSubmit,
        selectedAnswerReference,
        showFeedback,
        suiteAIOption: 'brainCompanion',
        updateActiveMessage,
        updateAnswerReference,
        zIndex,
      }),

    [
      questions,
      activeAnswerId,
      isFeedbackLoading,
      handleCopyToClipboardButtonClick,
      handleFeedbackButtonClick,
      onRetryAnswerGeneration,
      onTempAnswerSubmit,
      selectedAnswerReference,
      showFeedback,
      updateActiveMessage,
      updateAnswerReference,
      zIndex,
    ],
  );

  return (
    <>
      <ChatBotNegativeFeedbackModalContainer
        data-testid={dataTestId}
        isLoading={isFeedbackLoading}
        isOpen={shouldShowFeedbackModal}
        zIndex={zIndex}
        onClose={handleModalClose}
        onSubmit={handleFeedbackSubmit}
      />
      <ChatMessages
        data-testid={dataTestId}
        disabled={disabled}
        composerPlaceholder={t('webdoxAI.composerPlaceholderWithPrompts')}
        isGeneratingAnswer={isGeneratingAnswer}
        isSuggestionsLoading={isSuggestionsLoading}
        isQuestionWritingAllowed={isQuestionWritingAllowed}
        messages={messages}
        showSettings={showSettings}
        showSuggestions={showSuggestions}
        showSuggestionList={showSuggestionList}
        onSuggestionClick={onSuggestionClick}
        chatComposerSuggestionList={chatComposerSuggestionList}
        suggestionListTitle={suggestionListTitle}
        zIndex={zIndex}
        onCreateMessage={handleChatQuestion}
        onSettingsClick={onSettingsClick}
        onStopAnswerGeneration={onStopAnswerGeneration}
        onSuggestionsClick={onSuggestionsClick}
        showLegalWhisperSelector={showLegalWhisperSelector}
        legalWhisperAreaOptions={legalWhisperAreaOptions}
        legalWhisperAreaSelected={legalWhisperAreaSelected}
        legalWhisperCountryOptions={legalWhisperCountryOptions}
        legalWhisperCountrySelected={legalWhisperCountrySelected}
        onLegalWhisperAreaChange={onLegalWhisperAreaChange}
        onLegalWhisperCountryChange={onLegalWhisperCountryChange}
        webdoxAIOption="brainCompanion"
        customPrompts={customPrompts}
        onExecuteCustomPromptAction={onExecuteCustomPromptAction}
      />
    </>
  );
};

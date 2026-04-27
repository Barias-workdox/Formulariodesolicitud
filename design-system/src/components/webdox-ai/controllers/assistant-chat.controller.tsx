import { type ReactElement, useCallback } from 'react';

import { conversationConstants, messageConstants } from '@components/webdox-ai';
import { noop } from '@utils/noop';

import { WebdoxAIChatController } from './webdox-ai-chat.controller';

import type { AssistantTypeProps } from '@components/webdox-ai';
import type { TempAnswerSubmitCallbackType } from '@components/webdox-ai/interfaces/chat-bot-component.interface';

export type AssistantChatControllerProps = Pick<
  AssistantTypeProps,
  | 'conversation'
  | 'conversationDispatch'
  | 'data-testid'
  | 'conversationDisabled'
  | 'isFeedbackLoading'
  | 'isFeedbackSuccess'
  | 'isPreparingDocument'
  | 'isPreparingConversation'
  | 'isConversationEmpty'
  | 'onCopyToClipboardButtonClick'
  | 'selectedTab'
  | 'onCreateMessage'
  | 'onFeedbackButtonClick'
  | 'onSettingsClick'
  | 'onSubmitFeedback'
  | 'onSuggestionsClick'
  | 'onTempAnswerSubmit'
  | 'prompts'
  | 'showFeedback'
  | 'showSettings'
  | 'showSuggestions'
  | 'suggestions'
  | 'zIndex'
  | 'contractKind'
  | 'isSuggestionsLoading'
  | 'isGeneratingAnswer'
  | 'onStopAnswerGeneration'
  | 'isQuestionWritingAllowed'
  | 'customPrompts'
  | 'onExecuteCustomPromptAction'
  | 'selectedAnswerReference'
  | 'activeAnswerId'
  | 'updateAnswerReference'
  | 'updateActiveMessage'
>;

/**
 * The assistant chat section view of the assistant controller.
 * Will render the chat messages conversation with some repetitive
 * placeholder tasks handled by the controller
 */
export const AssistantChatController = (props: AssistantChatControllerProps): ReactElement => {
  const {
    'data-testid': dataTestId = 'assistant-chat',
    conversationDisabled,
    conversationDispatch = noop,
    selectedTab,
    onSuggestionsClick = noop,
    onTempAnswerSubmit = noop,
    onCreateMessage = noop,
    suggestions = [],
  } = props;

  /** Trigger the dispatch on the conversation to render the suggestions from the list */
  const handleSuggestionsClick = useCallback((): void => {
    conversationDispatch({
      type: conversationConstants.actions.suggestionsAnswer,
      payload: {
        question: {
          value: '',
          variant: 'temp',
        },
        answer: {
          tempProps: {
            options: suggestions,
          },
        },
      },
    });

    onSuggestionsClick();
  }, [suggestions, onSuggestionsClick, conversationDispatch]);

  /**
   * Check for special answers that are relative to the internal conversation to make
   * updates on the current conversation
   */
  const handleTempAnswerSubmit: TempAnswerSubmitCallbackType = useCallback(
    (variant, payload = {}) => {
      const { item = {} } = payload;
      if (messageConstants.specialAnswerId.suggestions === item.id) {
        conversationDispatch({
          type: conversationConstants.actions.suggestionsAnswer,
          payload: {
            question: {
              value: '',
              variant: 'temp',
            },
            answer: {
              tempProps: {
                options: suggestions,
              },
            },
          },
        });
      }

      onTempAnswerSubmit(variant, payload);
    },
    [suggestions, onTempAnswerSubmit, conversationDispatch],
  );

  /** Add the assistant selected tab to the question payload */
  const handleCreateMessage = useCallback(
    (content: string) => {
      return onCreateMessage(content, { tab: selectedTab });
    },
    [onCreateMessage, selectedTab],
  );

  return (
    <WebdoxAIChatController
      {...props}
      data-testid={dataTestId}
      disabled={conversationDisabled}
      onSuggestionsClick={handleSuggestionsClick}
      onTempAnswerSubmit={handleTempAnswerSubmit}
      onCreateMessage={handleCreateMessage}
    />
  );
};

import { memo, useMemo } from 'react';

import { Messages } from '@components/messages';
import { CHAT_MESSAGES_KIND_MAP } from '@components/webdox-ai/constants/chat-messages.constants';
import { noop } from '@utils/noop';

import { ChatComposer, LegalWhisperChatComposer } from '../chat-composer';

import { VirtualizedMessagesList } from './components/virtualized-messages-list';

import type { MessageItemProps, MessageOverrides } from '@components/messages';
import type {
  ChatBotMessageTypePropsV2,
  ChatMessageTypeV2,
} from '@components/webdox-ai/interfaces/chat-message.interface';
import type { WebdoxAIOptionType } from '@components/webdox-ai/interfaces/webdox-ai.interfaces';

export interface ChatMessagesProps extends Pick<
  ChatBotMessageTypePropsV2,
  | 'zIndex'
  | 'onCreateMessage'
  | 'onSettingsClick'
  | 'onSuggestionsClick'
  | 'showSettings'
  | 'showSuggestions'
  | 'showSuggestionList'
  | 'data-testid'
  | 'disabled'
  | 'isSuggestionsLoading'
  | 'isGeneratingAnswer'
  | 'isQuestionWritingAllowed'
  | 'onStopAnswerGeneration'
  | 'onSuggestionClick'
  | 'suggestionListTitle'
  | 'chatComposerSuggestionList'
  | 'showLegalWhisperSelector'
  | 'onLegalWhisperAreaChange'
  | 'onLegalWhisperCountryChange'
  | 'legalWhisperAreaOptions'
  | 'legalWhisperCountryOptions'
  | 'legalWhisperAreaSelected'
  | 'legalWhisperCountrySelected'
  | 'customPrompts'
  | 'onExecuteCustomPromptAction'
  | 'onOpenChatComposer'
  | 'showUnratedAnswerAlert'
  | 'onRateAnswer'
> {
  messages: ChatMessageTypeV2[];
  composerPlaceholder?: string;
  showStopButton?: boolean;
  webdoxAIOption?: WebdoxAIOptionType;
}

/**
 * Custom MessageItem component used in ChatMessages.
 *
 * This component dynamically selects and renders the appropriate message component
 * based on the kind of message provided.
 */
const MessageItem = ({ message }: MessageItemProps<ChatMessageTypeV2>): JSX.Element => {
  const { kind } = message;
  const { Component } = CHAT_MESSAGES_KIND_MAP[kind];

  return <Component {...message} />;
};

/**
 * Styled chat messages component with a custom message composer override component
 * using a custom section with a text and a button
 */
const ChatMessages = ({
  'data-testid': dataTestId,
  zIndex,
  customPrompts = [],
  disabled = false,
  showSettings,
  showSuggestions,
  showLegalWhisperSelector,
  onLegalWhisperAreaChange = noop,
  onLegalWhisperCountryChange = noop,
  legalWhisperAreaOptions = [],
  legalWhisperCountryOptions,
  legalWhisperAreaSelected,
  legalWhisperCountrySelected,
  showSuggestionList,
  chatComposerSuggestionList,
  suggestionListTitle,
  isQuestionWritingAllowed,
  isSuggestionsLoading,
  messages,
  isGeneratingAnswer,
  composerPlaceholder,
  showStopButton,
  webdoxAIOption = 'brainCompanion',
  showUnratedAnswerAlert,
  onRateAnswer = noop,
  onCreateMessage,
  onSuggestionsClick,
  onSuggestionClick = noop,
  onSettingsClick,
  onStopAnswerGeneration,
  onExecuteCustomPromptAction = noop,
  onOpenChatComposer = noop,
}: ChatMessagesProps): JSX.Element => {
  const overrides = useMemo(
    () => ({
      MessageComposer: {
        component: webdoxAIOption === 'legalWhisper' ? LegalWhisperChatComposer : ChatComposer,
        props: {
          customPrompts,
          showSettings,
          showSuggestions,
          showSuggestionList,
          isSuggestionsLoading,
          'data-testid': dataTestId,
          disabled,
          isGeneratingAnswer,
          isQuestionWritingAllowed,
          chatComposerSuggestionList,
          showStopButton,
          // Always show the settings selector for legal whisper within chat messages
          showSettingsSelector: true,
          onStopAnswerGeneration,
          onCreateMessage,
          onSuggestionsClick,
          onSettingsClick,
          onSuggestionClick,
          onLegalWhisperAreaChange,
          onLegalWhisperCountryChange,
          legalWhisperAreaOptions,
          legalWhisperCountryOptions,
          legalWhisperAreaSelected,
          legalWhisperCountrySelected,
          suggestionListTitle,
          showLegalWhisperSelector,
          zIndex,
          placeholder: composerPlaceholder,
          webdoxAIOption,
          onExecuteCustomPromptAction,
          onOpenChatComposer,
          showUnratedAnswerAlert,
          onRateAnswer,
        },
      },
      MessageItem: {
        component: MessageItem,
      },
      MessageList: {
        component: VirtualizedMessagesList,
        props: {
          isGeneratingAnswer,
        },
      },
    }),
    [
      chatComposerSuggestionList,
      composerPlaceholder,
      customPrompts,
      dataTestId,
      disabled,
      isGeneratingAnswer,
      isQuestionWritingAllowed,
      isSuggestionsLoading,
      legalWhisperAreaOptions,
      legalWhisperAreaSelected,
      legalWhisperCountryOptions,
      legalWhisperCountrySelected,
      onCreateMessage,
      onExecuteCustomPromptAction,
      onLegalWhisperAreaChange,
      onLegalWhisperCountryChange,
      onOpenChatComposer,
      onRateAnswer,
      onSettingsClick,
      onStopAnswerGeneration,
      onSuggestionClick,
      onSuggestionsClick,
      showLegalWhisperSelector,
      showSettings,
      showStopButton,
      showSuggestionList,
      showSuggestions,
      showUnratedAnswerAlert,
      suggestionListTitle,
      webdoxAIOption,
      zIndex,
    ],
  );

  return (
    <Messages
      data-testid={dataTestId}
      isLoading={disabled}
      isMentionable={false}
      isPaginated={false}
      direction="reverse"
      showBorder={false}
      canCreate
      canUpdate={false}
      canDelete={false}
      currentUserId={-1}
      messages={messages}
      overrides={overrides as MessageOverrides}
    />
  );
};

const MemoizedChatMessages = memo(ChatMessages);

export { MemoizedChatMessages as ChatMessages };

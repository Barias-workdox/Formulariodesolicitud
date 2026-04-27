import { memo, useMemo } from 'react';

import { Messages } from '@components/messages';
import { CHAT_MESSAGES_KIND_MAP } from '@components/webdox-ai/constants/chat-messages.constants';

import { LegalWhisperChatComposer } from '../chat-composer';
import { VirtualizedMessagesList } from '../chat-messages/components/virtualized-messages-list';

import type { ChatMessageTypeV2 } from '../../../interfaces';
import type { LegalWhisperChatComposerProps } from '../chat-composer';
import type { MessageItemProps, MessageOverrides } from '@components/messages';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

export type LegalWhisperChatMessagesProps = LegalWhisperChatComposerProps &
  WithTestId<
    WithZIndex<{
      messages: ChatMessageTypeV2[];
    }>
  >;

/**
 * Custom MessageItem component used in LegalWhisperChatMessages.
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
 * Legal Whisper chat messages component.
 *
 * This component is used to display the chat messages for the legal whisper chat.
 */
const LegalWhisperChatMessages = ({
  areaOptions,
  selectedArea,
  countryOptions,
  selectedCountry,
  dataTestId,
  disabled,
  isGeneratingAnswer,
  messages,
  showSuggestionList,
  showSettingsSelector,
  showUnratedAnswerAlert,
  suggestionList,
  zIndex,
  onAreaChange,
  onCountryChange,
  onCreateMessage,
  onRateAnswer,
  onSuggestionClick,
}: LegalWhisperChatMessagesProps): JSX.Element => {
  const overrides = useMemo(
    () => ({
      MessageComposer: {
        component: LegalWhisperChatComposer,
        props: {
          dataTestId,
          areaOptions,
          selectedArea,
          countryOptions,
          selectedCountry,
          disabled,
          isGeneratingAnswer,
          showSuggestionList,
          showSettingsSelector,
          showUnratedAnswerAlert,
          suggestionList,
          zIndex,
          onAreaChange,
          onCountryChange,
          onCreateMessage,
          onRateAnswer,
          onSuggestionClick,
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
      dataTestId,
      areaOptions,
      selectedArea,
      countryOptions,
      selectedCountry,
      disabled,
      isGeneratingAnswer,
      showSuggestionList,
      showSettingsSelector,
      showUnratedAnswerAlert,
      suggestionList,
      zIndex,
      onAreaChange,
      onCountryChange,
      onCreateMessage,
      onRateAnswer,
      onSuggestionClick,
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

const MemoizedChatMessages = memo(LegalWhisperChatMessages);

export { MemoizedChatMessages as LegalWhisperChatMessages };

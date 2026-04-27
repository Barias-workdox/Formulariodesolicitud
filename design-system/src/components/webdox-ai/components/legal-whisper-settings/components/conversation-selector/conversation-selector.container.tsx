import type { ReactElement } from 'react';

import { useLegalWhisperConversationsContext } from '@components/webdox-ai/hooks/use-legal-whisper-conversations-context.hook';

import { ConversationSelector } from './conversation-selector';

import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

type ConversationSelectorContainerProps = WithZIndex & WithTestId;

/**
 * Container for the ConversationSelector component that uses
 * the useLegalWhisperConversationsContext hook to get all the necessary values.
 * It passes these values to the ConversationSelector component.
 */
export const ConversationSelectorContainer = ({
  dataTestId,
  zIndex,
}: ConversationSelectorContainerProps): ReactElement => {
  const {
    conversations,
    isLoadingMoreConversations,
    onDeleteConversation,
    onEditConversation,
    onLoadMoreConversations,
    onSearch,
    onSelectConversation,
    searchValue,
    selectedConversation,
  } = useLegalWhisperConversationsContext();

  return (
    <ConversationSelector
      conversations={conversations}
      dataTestId={dataTestId}
      isLoadingMore={isLoadingMoreConversations}
      onDeleteConversation={onDeleteConversation}
      onEditConversation={onEditConversation}
      onLoadMoreConversations={onLoadMoreConversations}
      onSearch={onSearch}
      onSelectConversation={onSelectConversation}
      searchValue={searchValue}
      selectedConversation={selectedConversation}
      zIndex={zIndex}
    />
  );
};

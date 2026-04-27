import type { ReactElement } from 'react';

import { useLegalWhisperConversationsContext } from '@components/webdox-ai/hooks/use-legal-whisper-conversations-context.hook';

import { ConversationSelectorWithPopover } from './conversation-selector-with-popover';

import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

type ConversationSelectorWithPopoverContainerProps = WithZIndex & WithTestId;

/**
 * Container for the ConversationSelectorWithPopover component that uses
 * the useLegalWhisperConversationsContext hook to get all the necessary values.
 * It passes these values to the ConversationSelectorWithPopover component.
 */
export const ConversationSelectorWithPopoverContainer = ({
  dataTestId,
  zIndex,
}: ConversationSelectorWithPopoverContainerProps): ReactElement => {
  const {
    conversations,
    isLoadingMoreConversations,
    onCreateConversation,
    onDeleteConversation,
    onEditConversation,
    onLoadMoreConversations,
    onSearch,
    onSelectConversation,
    searchValue,
    selectedConversation,
  } = useLegalWhisperConversationsContext();

  return (
    <ConversationSelectorWithPopover
      conversations={conversations}
      dataTestId={dataTestId}
      isLoadingMore={isLoadingMoreConversations}
      onCreateConversation={onCreateConversation}
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

import { createContext } from 'react';

import { noop } from '@utils/noop';

import type { LegalWhisperConversationListItemType } from '../interfaces/legal-whisper.interfaces';

export type LegalWhisperConversationsContextValue = {
  conversations: LegalWhisperConversationListItemType[];
  isLoadingMoreConversations?: boolean;
  selectedConversation?: LegalWhisperConversationListItemType;
  searchValue?: string;
  onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
  onCreateConversation(): void;
  onEditConversation(conversation: LegalWhisperConversationListItemType): void;
  onDeleteConversation(conversation: LegalWhisperConversationListItemType): void;
  onLoadMoreConversations(): void;
  onSearch(query: string): void;
};

/**
 * A context for managing actions related to legal whisper conversations.
 */
export const LegalWhisperConversationsContext =
  createContext<LegalWhisperConversationsContextValue>({
    conversations: [],
    isLoadingMoreConversations: false,
    selectedConversation: undefined,
    searchValue: undefined,
    onSelectConversation: noop,
    onCreateConversation: noop,
    onEditConversation: noop,
    onDeleteConversation: noop,
    onLoadMoreConversations: noop,
    onSearch: noop,
  });

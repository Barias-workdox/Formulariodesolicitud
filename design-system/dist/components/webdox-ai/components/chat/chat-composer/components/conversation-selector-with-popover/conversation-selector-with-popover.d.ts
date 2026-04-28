import { ReactElement } from 'react';
import { LegalWhisperConversationListItemType } from '../../../../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../interfaces/common.interfaces';
export interface ConversationSelectorWithPopoverProps extends WithZIndex, WithTestId {
    conversations: LegalWhisperConversationListItemType[];
    isLoadingMore?: boolean;
    selectedConversation?: LegalWhisperConversationListItemType;
    searchValue?: string;
    onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
    onCreateConversation(): void;
    onEditConversation(conversation: LegalWhisperConversationListItemType): void;
    onDeleteConversation(conversation: LegalWhisperConversationListItemType): void;
    onLoadMoreConversations(): void;
    onSearch(query: string): void;
}
/**
 * Component that displays a conversation selector with a popover.
 */
export declare const ConversationSelectorWithPopover: ({ dataTestId, conversations, isLoadingMore, selectedConversation, searchValue, onSelectConversation, onCreateConversation, onEditConversation, onDeleteConversation, onSearch, onLoadMoreConversations, zIndex, }: ConversationSelectorWithPopoverProps) => ReactElement;

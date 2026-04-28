import { LegalWhisperConversationListItemType } from '../../../../interfaces/legal-whisper.interfaces';
import { WithZIndex, WithTestId } from '../../../../../../interfaces/common.interfaces';
export interface ConversationSelectorProps extends WithZIndex, WithTestId {
    conversations: LegalWhisperConversationListItemType[];
    isLoadingMore?: boolean;
    selectedConversation?: LegalWhisperConversationListItemType;
    searchValue?: string;
    onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
    onEditConversation(conversation: LegalWhisperConversationListItemType): void;
    onDeleteConversation(conversation: LegalWhisperConversationListItemType): void;
    onLoadMoreConversations(): void;
    onSearch(query: string): void;
}
/**
 * Component that displays the conversation selector.
 * It is used in the legal whisper settings component.
 * It displays the recent conversations and allows the user to search for a specific conversation.
 * It also allows the user to select a conversation and edit or delete it.
 */
export declare const ConversationSelector: ({ dataTestId, zIndex, conversations, isLoadingMore, selectedConversation, searchValue, onSelectConversation, onEditConversation, onDeleteConversation, onLoadMoreConversations, onSearch, }: ConversationSelectorProps) => JSX.Element;

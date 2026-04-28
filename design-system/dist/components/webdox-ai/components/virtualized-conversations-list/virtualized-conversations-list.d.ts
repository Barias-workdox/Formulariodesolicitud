import { LegalWhisperConversationListItemType } from '../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../interfaces/common.interfaces';
interface ConversationListItemProps extends WithTestId, WithZIndex {
    conversation: LegalWhisperConversationListItemType;
    isSelected: boolean;
    isLast: boolean;
    onDeleteConversation(): void;
    onEditConversation(): void;
    onClick(): void;
}
interface VirtualizedConversationsListProps extends WithZIndex, WithTestId {
    conversations: LegalWhisperConversationListItemType[];
    selectedConversation?: LegalWhisperConversationListItemType;
    isLoadingMore?: boolean;
    estimateSize: number;
    listGap?: number;
    ConversationListItemComponent: React.ComponentType<ConversationListItemProps>;
    onPageEnd(): void;
    onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
    onDeleteConversation(conversation: LegalWhisperConversationListItemType): void;
    onEditConversation(conversation: LegalWhisperConversationListItemType): void;
}
/**
 * Component that displays a virtualized list of conversations.
 * It is used in the conversation selector component.
 * It displays the recent conversations and allows the user to search for a specific conversation.
 * It also allows the user to select a conversation and edit or delete it.
 */
export declare const VirtualizedConversationsList: ({ conversations, dataTestId, isLoadingMore, estimateSize, ConversationListItemComponent, listGap, onDeleteConversation, onEditConversation, onPageEnd, onSelectConversation, selectedConversation, zIndex, }: VirtualizedConversationsListProps) => JSX.Element;
export {};

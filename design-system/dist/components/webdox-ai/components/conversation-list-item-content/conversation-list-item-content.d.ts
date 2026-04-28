import { LegalWhisperConversationListItemType } from '../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../interfaces/common.interfaces';
interface ConversationListItemContentProps extends WithTestId, WithZIndex {
    conversation: LegalWhisperConversationListItemType;
    isHovered?: boolean;
    isSelected: boolean;
    onEditConversation(): void;
    onDeleteConversation(): void;
}
/**
 * Component that displays the content of a conversation list item.
 * It shows the title of the conversation and the actions to edit or delete it.
 * It is used in the conversation selector component.
 */
export declare const ConversationListItemContent: ({ dataTestId, zIndex, conversation, isHovered, isSelected, onEditConversation, onDeleteConversation, }: ConversationListItemContentProps) => JSX.Element;
export {};

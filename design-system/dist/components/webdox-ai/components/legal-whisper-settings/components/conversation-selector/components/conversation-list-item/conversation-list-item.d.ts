import { LegalWhisperConversationListItemType } from '../../../../../../interfaces/legal-whisper.interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../../interfaces/common.interfaces';
interface ConversationListItemProps extends WithTestId, WithZIndex {
    conversation: LegalWhisperConversationListItemType;
    isHovered?: boolean;
    isSelected: boolean;
    onEditConversation(): void;
    onDeleteConversation(): void;
    onClick(): void;
}
export declare const ConversationListItem: (props: ConversationListItemProps) => import('react').ReactElement;
export {};

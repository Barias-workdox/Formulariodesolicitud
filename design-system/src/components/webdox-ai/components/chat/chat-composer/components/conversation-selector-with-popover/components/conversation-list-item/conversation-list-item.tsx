import { withIsHovered } from '@components/hocs/with-is-hovered';
import { ConversationListItemContent } from '@components/webdox-ai/components/conversation-list-item-content';

import { StyledListItem } from '../../styled-components';

import type { LegalWhisperConversationListItemType } from '@components/webdox-ai/interfaces/legal-whisper.interfaces';
import type { WithTestId, WithZIndex } from '@interfaces/common.interfaces';

interface ConversationListItemProps extends WithTestId, WithZIndex {
  conversation: LegalWhisperConversationListItemType;
  isHovered?: boolean;
  isLast: boolean;
  isSelected: boolean;
  onEditConversation(): void;
  onDeleteConversation(): void;
  onClick(): void;
}

/**
 * Component that displays a conversation list item.
 * It shows the title of the conversation and the actions to edit or delete it.
 */
const ConversationListItemComponent = ({
  dataTestId = 'conversation-list-item',
  zIndex,
  conversation,
  isHovered,
  isLast,
  isSelected,
  onEditConversation,
  onDeleteConversation,
  onClick,
}: ConversationListItemProps): JSX.Element => {
  return (
    <StyledListItem
      $isLast={isLast}
      $isSelected={isSelected}
      onClick={onClick}
    >
      <ConversationListItemContent
        conversation={conversation}
        dataTestId={dataTestId}
        isHovered={isHovered}
        isSelected={isSelected}
        onDeleteConversation={onDeleteConversation}
        onEditConversation={onEditConversation}
        zIndex={zIndex}
      />
    </StyledListItem>
  );
};

export const ConversationListItem = withIsHovered(ConversationListItemComponent);

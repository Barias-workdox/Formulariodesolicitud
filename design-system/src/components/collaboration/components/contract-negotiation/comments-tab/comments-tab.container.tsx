import { activeCollaborationStates } from '../../../logic/business/contract-negotiation.business';
import { useContractNegotiationContext } from '../../../logic/contexts';

import { CommentsTab } from './comments-tab';

export interface CommentsTabContainerProps {
  'data-testid'?: string;
  onClose(): void;
}

/**
 * Comments Tab container, which makes all context connections,
 * supplying clean props to data rendering component.
 */
export const CommentsTabContainer = ({
  'data-testid': dataTestId = 'comments-tab',
  onClose,
}: CommentsTabContainerProps): JSX.Element => {
  const {
    collaborationDetails: { status: collaborationStatus },
    currentThirdParty: { id: currentUserId },
    isSendMessageLoading,
    messages,
    stakeholders,
    loadMoreMessages,
    onSendMessage,
  } = useContractNegotiationContext();

  const isActiveCollaboration = activeCollaborationStates.includes(collaborationStatus);

  return (
    <CommentsTab
      data-testid={dataTestId}
      canCreate={isActiveCollaboration}
      currentUserId={Number(currentUserId)}
      isLoading={isSendMessageLoading}
      messages={messages}
      users={stakeholders}
      onCreate={onSendMessage}
      onPageEnd={loadMoreMessages}
      onClose={onClose}
    />
  );
};

import { useCallback, useMemo, useState, type PropsWithChildren } from 'react';

import { LegalWhisperConversationsContext } from '../contexts';
import { DeleteLegalWhisperConversationModal } from '../modals';
import { EditLegalWhisperConversationFormModalContainer } from '../modals/edit-legal-whisper-conversation-modal';

import type { LegalWhisperConversationListItemType } from '../interfaces/legal-whisper.interfaces';
import type { EditLegalWhisperConversationForm } from '../modals/edit-legal-whisper-conversation-modal/edit-legal-whisper-conversation-form-modal.interfaces';
import type { WithZIndex } from '@interfaces/common.interfaces';

enum LegalWhisperConversationAction {
  Edit = 'edit',
  Delete = 'delete',
}

type OnEditConversationParams = {
  conversation: LegalWhisperConversationListItemType;
  newValues: Pick<LegalWhisperConversationListItemType, 'title'>;
};

export type LegalWhisperConversationsProviderProps = WithZIndex<
  PropsWithChildren<{
    conversations: LegalWhisperConversationListItemType[];
    isLoadingMoreConversations?: boolean;
    selectedConversation?: LegalWhisperConversationListItemType;
    searchValue?: string;
    onSelectConversation(conversation: LegalWhisperConversationListItemType): void;
    onCreateConversation(): void;
    onEditConversation(params: OnEditConversationParams): Promise<void>;
    onDeleteConversation(conversation: LegalWhisperConversationListItemType): Promise<void>;
    onSearch(query: string): void;
    onLoadMoreConversations(): void;
  }>
>;

/**
 * Provider for the component props PlanUsageCounter to handle plan status
 * across the AssistantController component
 */
export const LegalWhisperConversationsProvider = ({
  children,
  conversations,
  isLoadingMoreConversations = false,
  onCreateConversation,
  onDeleteConversation,
  onEditConversation,
  onLoadMoreConversations,
  onSearch,
  onSelectConversation,
  searchValue,
  selectedConversation,
  zIndex,
}: LegalWhisperConversationsProviderProps): JSX.Element => {
  const [openedModal, setOpenedModal] = useState<LegalWhisperConversationAction | undefined>();
  const [conversationUnderAction, setConversationUnderAction] =
    useState<LegalWhisperConversationListItemType>();
  const [isActionLoading, setIsActionLoading] = useState(false);

  /**
   * Callback to handle the closing of a modal.
   */
  const handleCloseModal = useCallback(() => {
    setOpenedModal(undefined);
    setIsActionLoading(false);

    // Wait for the modal animation to complete before resetting the conversation under action
    setTimeout(() => {
      setConversationUnderAction(undefined);
    }, 500);
  }, []);

  /**
   * Callback to handle the deletion of a conversation.
   */
  const handleDeleteConversation = useCallback(async () => {
    if (!conversationUnderAction) return;

    setIsActionLoading(true);
    try {
      await onDeleteConversation(conversationUnderAction);
      handleCloseModal();
    } catch {
      setIsActionLoading(false);
    }
  }, [handleCloseModal, onDeleteConversation, conversationUnderAction]);

  /**
   * Callback to handle the editing of a conversation.
   */
  const handleEditConversation = useCallback(
    async (newConversationValues: EditLegalWhisperConversationForm) => {
      const { title } = newConversationValues;

      if (!conversationUnderAction || !title) return;

      setIsActionLoading(true);
      try {
        await onEditConversation({
          conversation: conversationUnderAction,
          newValues: { title },
        });
        handleCloseModal();
      } catch {
        setIsActionLoading(false);
      }
    },
    [conversationUnderAction, handleCloseModal, onEditConversation],
  );

  /**
   * Callback to handle the editing of a conversation.
   */
  const handleClickEditAction = useCallback(
    (conversation: LegalWhisperConversationListItemType) => {
      setOpenedModal(LegalWhisperConversationAction.Edit);
      setConversationUnderAction(conversation);
    },
    [],
  );

  /**
   * Callback to handle the deletion of a conversation.
   */
  const handleClickDeleteAction = useCallback(
    (conversation: LegalWhisperConversationListItemType) => {
      setOpenedModal(LegalWhisperConversationAction.Delete);
      setConversationUnderAction(conversation);
    },
    [],
  );

  const providerValue = useMemo(
    () => ({
      conversations,
      isLoadingMoreConversations,
      searchValue,
      selectedConversation,
      onCreateConversation,
      onDeleteConversation: handleClickDeleteAction,
      onEditConversation: handleClickEditAction,
      onLoadMoreConversations,
      onSearch,
      onSelectConversation,
    }),
    [
      conversations,
      handleClickDeleteAction,
      handleClickEditAction,
      isLoadingMoreConversations,
      onCreateConversation,
      onLoadMoreConversations,
      onSearch,
      onSelectConversation,
      searchValue,
      selectedConversation,
    ],
  );

  return (
    <LegalWhisperConversationsContext.Provider value={providerValue}>
      {children}
      <DeleteLegalWhisperConversationModal
        conversationTitle={conversationUnderAction?.title ?? ''}
        isLoading={isActionLoading}
        isOpen={openedModal === LegalWhisperConversationAction.Delete}
        onClose={handleCloseModal}
        onSubmit={handleDeleteConversation}
        zIndex={zIndex}
      />
      <EditLegalWhisperConversationFormModalContainer
        conversation={conversationUnderAction}
        isOpen={openedModal === LegalWhisperConversationAction.Edit}
        onClose={handleCloseModal}
        onSubmit={handleEditConversation}
        zIndex={zIndex}
      />
    </LegalWhisperConversationsContext.Provider>
  );
};

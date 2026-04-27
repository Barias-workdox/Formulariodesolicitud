import { useCallback, useState } from 'react';
import type { PropsWithChildren } from 'react';

import { CustomPromptAction } from '@components/webdox-ai/constants';
import { noop } from '@utils/noop';

import { CustomPromptModalsContext } from '../contexts/custom-prompt-modals.context';
import { CustomPromptFormModalContainer } from '../modals/custom-prompt-form-modal/custom-prompt-form-modal.container';
import { DeleteCustomPromptModal } from '../modals/delete-custom-prompt-modal';

import type { CustomPromptModalsContextValue } from '../contexts/custom-prompt-modals.context';
import type { CustomPromptForm } from '../modals/custom-prompt-form-modal/custom-prompt-form-modal.interfaces';
import type { CustomPrompt } from '@components/webdox-ai/interfaces';
import type { WithZIndex } from '@interfaces/common.interfaces';

export type CustomPromptModalsProviderProps = WithZIndex<
  PropsWithChildren<{
    isEditingDisabled?: boolean;
    onExecuteCustomPromptAction?(
      action: CustomPromptAction,
      payload: Partial<CustomPrompt>,
    ): Promise<void>;
  }>
>;

/**
 * Provider component for Custom Prompt modals.
 * Wraps its children with the CustomPromptModalsContext.Provider and provides the context value to them.
 */
export const CustomPromptModalsProvider = ({
  children,
  isEditingDisabled = false,
  onExecuteCustomPromptAction = noop,
  zIndex,
}: CustomPromptModalsProviderProps): JSX.Element => {
  const [openedModal, setOpenedModal] = useState<CustomPromptAction | undefined>();
  const [selectedCustomPrompt, setSelectedCustomPrompt] = useState<CustomPrompt | undefined>();
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Callback to close the modal.
   */
  const handleClose = useCallback(() => {
    if (isLoading) return;

    setOpenedModal(undefined);
    setSelectedCustomPrompt(undefined);
  }, [isLoading]);

  /**
   * Callback to open a modal.
   * It sets the opened modal type and the selected custom prompt.
   */
  const openModal = useCallback<CustomPromptModalsContextValue['openModal']>(
    ({ kind, customPrompt }) => {
      if (isEditingDisabled) return;

      setOpenedModal(kind);
      setSelectedCustomPrompt(customPrompt);
    },
    [isEditingDisabled],
  );

  /**
   * Callback to handle the click event on the delete button.
   */
  const handleDelete = useCallback(async () => {
    if (!selectedCustomPrompt) return;

    setIsLoading(true);

    await onExecuteCustomPromptAction(CustomPromptAction.Delete, selectedCustomPrompt);

    setIsLoading(false);
    handleClose();
  }, [handleClose, onExecuteCustomPromptAction, selectedCustomPrompt]);

  /**
   * Callback to handle the click event on the edit button.
   */
  const handleEdit = useCallback(
    async (formValues: CustomPromptForm) => {
      if (!selectedCustomPrompt) return;

      setIsLoading(true);

      await onExecuteCustomPromptAction(CustomPromptAction.Edit, {
        id: selectedCustomPrompt.id,
        ...formValues,
      });

      setIsLoading(false);
      handleClose();
    },
    [handleClose, onExecuteCustomPromptAction, selectedCustomPrompt],
  );

  /**
   * Callback to handle the click event on the create button.
   */
  const handleCreate = useCallback(
    async (formValues: CustomPromptForm) => {
      setIsLoading(true);

      await onExecuteCustomPromptAction(CustomPromptAction.Create, formValues);

      setIsLoading(false);
      handleClose();
    },
    [handleClose, onExecuteCustomPromptAction],
  );

  /**
   * Callback to handle the form submission.
   * It will call the handleEdit or handleCreate function depending on the selected custom prompt.
   */
  const handleFormSubmit = useCallback(
    (formValues: CustomPromptForm): Promise<void> => {
      if (selectedCustomPrompt) {
        return handleEdit(formValues);
      }

      return handleCreate(formValues);
    },
    [handleCreate, handleEdit, selectedCustomPrompt],
  );

  return (
    <CustomPromptModalsContext.Provider
      value={{
        isEditingDisabled,
        openModal,
      }}
    >
      {children}
      <DeleteCustomPromptModal
        isOpen={openedModal === CustomPromptAction.Delete}
        onClose={handleClose}
        isLoading={isLoading}
        onSubmit={handleDelete}
        zIndex={zIndex}
      />
      <CustomPromptFormModalContainer
        isOpen={
          openedModal === CustomPromptAction.Create || openedModal === CustomPromptAction.Edit
        }
        customPrompt={selectedCustomPrompt}
        onClose={handleClose}
        onSubmit={handleFormSubmit}
        zIndex={zIndex}
      />
    </CustomPromptModalsContext.Provider>
  );
};

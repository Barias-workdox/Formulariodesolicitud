import { useCallback } from 'react';

import { CustomPromptAction } from '@components/webdox-ai/constants';

import { useCustomPromptModalsContext } from '../../hooks';

import { AddCustomPromptButton } from './add-custom-prompt-button';

import type { AddCustomPromptButtonProps } from './add-custom-prompt-button';
import type { CustomPrompt } from '@components/webdox-ai/interfaces';

export type AddCustomPromptButtonContainerProps = Omit<
  AddCustomPromptButtonProps,
  'onCreateButtonClick' | 'onCustomPromptDelete' | 'onCustomPromptEdit'
>;

/**
 * Button to add a custom prompt.
 * It will open a popover with the list of custom prompts.
 * The popover will have a button to create a new custom prompt.
 */
export const AddCustomPromptButtonContainer = (
  props: AddCustomPromptButtonContainerProps,
): JSX.Element => {
  const { openModal, isEditingDisabled } = useCustomPromptModalsContext();

  /**
   * Callback to handle the click event on the delete button.
   */
  const handleDelete = useCallback(
    (customPrompt: CustomPrompt): void => {
      openModal({
        kind: CustomPromptAction.Delete,
        customPrompt,
      });
    },
    [openModal],
  );

  /**
   * Callback to handle the click event on the create button.
   */
  const handleCreate = useCallback((): void => {
    openModal({
      kind: CustomPromptAction.Create,
    });
  }, [openModal]);

  /**
   * Callback to handle the click event on the edit button.
   */
  const handleEdit = useCallback(
    (customPrompt: CustomPrompt): void => {
      openModal({
        kind: CustomPromptAction.Edit,
        customPrompt,
      });
    },
    [openModal],
  );

  return (
    <AddCustomPromptButton
      {...props}
      isEditingDisabled={isEditingDisabled}
      onCustomPromptDelete={handleDelete}
      onCreateButtonClick={handleCreate}
      onCustomPromptEdit={handleEdit}
    />
  );
};

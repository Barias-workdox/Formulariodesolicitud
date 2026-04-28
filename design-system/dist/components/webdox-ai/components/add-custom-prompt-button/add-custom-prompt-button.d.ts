import { CustomPrompt } from '../../interfaces';
import { WithTestId, WithZIndex } from '../../../../interfaces/common.interfaces';
export type AddCustomPromptButtonProps = WithZIndex<WithTestId<{
    customPrompts: CustomPrompt[];
    isEditingDisabled: boolean;
    isOpen: boolean;
    onClose(): void;
    onCreateButtonClick(): void;
    onCustomPromptClick(prompt: CustomPrompt): void;
    onCustomPromptDelete(prompt: CustomPrompt): void;
    onCustomPromptEdit(prompt: CustomPrompt): void;
    onOpen(): void;
}>>;
/**
 * Button to add a custom prompt.
 * It will open a popover with the list of custom prompts.
 * The popover will have a button to create a new custom prompt.
 */
export declare const AddCustomPromptButton: ({ dataTestId, customPrompts, isEditingDisabled, isOpen, zIndex, onClose, onCreateButtonClick, onCustomPromptClick, onCustomPromptDelete, onCustomPromptEdit, onOpen, }: AddCustomPromptButtonProps) => JSX.Element;

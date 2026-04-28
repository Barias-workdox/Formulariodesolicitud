import { PropsWithChildren } from 'react';
import { CustomPrompt } from '../../../../interfaces';
import { WithTestId, WithZIndex } from '../../../../../../interfaces/common.interfaces';
export type CustomPromptsPopoverProps = PropsWithChildren<WithTestId<WithZIndex<{
    isEditingDisabled: boolean;
    isOpen: boolean;
    prompts?: CustomPrompt[];
    onClose(): void;
    onCreateButtonClick(): void;
    onCustomPromptClick(prompt: CustomPrompt): void;
    onCustomPromptDelete(prompt: CustomPrompt): void;
    onCustomPromptEdit(prompt: CustomPrompt): void;
}>>>;
/**
 * Component to display a popover with custom prompts.
 * It shows a list of custom prompts and allows the user to add, edit, or delete them.
 * If there are no custom prompts, it shows an empty state.
 */
export declare const CustomPromptsPopover: ({ "data-testid": dataTestId, zIndex, children, prompts, isEditingDisabled, isOpen, onClose, onCreateButtonClick, onCustomPromptClick, onCustomPromptDelete, onCustomPromptEdit, }: CustomPromptsPopoverProps) => JSX.Element;

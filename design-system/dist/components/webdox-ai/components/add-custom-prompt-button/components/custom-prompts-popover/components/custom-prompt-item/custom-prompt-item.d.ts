import { CustomPrompt } from '../../../../../../interfaces';
import { WithTestId, WithZIndex } from '../../../../../../../../interfaces/common.interfaces';
export type CustomPromptItemProps = WithTestId<WithZIndex<{
    isEditingDisabled: boolean;
    itemData: CustomPrompt;
    onClick(): void;
    onDelete(): void;
    onEdit(): void;
}>>;
/**
 * Component to display a custom prompt item in a list.
 * It shows the title and content of the prompt, and provides buttons to edit or delete it.
 */
export declare const CustomPromptItem: ({ "data-testid": dataTestId, isEditingDisabled, itemData: { content, title }, zIndex, onClick, onDelete, onEdit, }: CustomPromptItemProps) => JSX.Element;

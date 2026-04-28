import { ReactElement } from 'react';
import { WithTestId } from '../../../../../interfaces/common.interfaces';
export interface IUseTextSelection {
    /** The selected text as a string. */
    selectedText: string;
    /**
     * A React node that serves as an indicator for the selection position.
     * This node is typically used to show others components on selected text position.
     */
    selectionPositionNode: ReactElement;
    /** Callback to execute when the event onMouseUp is detected. */
    onMouseUp(): void;
    /** Callback to execute to reset all selection conditions. */
    resetSelection(): void;
}
export interface UseTextSelectionProps extends WithTestId {
    /** Callback to execute when a text is selected. */
    onSelectText(): void;
    /** Callback to execute when selection is reset. */
    onResetSelection(): void;
}
/** Custom hook to handle text selection. */
export declare const useTextSelection: ({ "data-testid": dataTestId, onSelectText, onResetSelection, }: UseTextSelectionProps) => IUseTextSelection;

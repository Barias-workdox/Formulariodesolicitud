import { CustomPrompt } from '../..';
import { WithTestId, WithZIndex } from '../../../../interfaces/common.interfaces';
export interface QuickActionOption {
    id: number;
    title?: string;
    content: string;
}
export interface PromptQuickActionsProps extends WithTestId, WithZIndex {
    isOpen: boolean;
    filterValue: string;
    allOptions: CustomPrompt[];
    setIsOpen(isOpen: boolean): void;
    handleChange(val: string): void;
}
/**
 * PromptQuickActions
 *
 * Renders a floating quick actions menu positioned near the caret.
 * Supports keyboard navigation (ArrowUp, ArrowDown) and selection (Enter).
 * Handles outside clicks to close the menu.
 */
export declare const PromptQuickActions: ({ dataTestId, isOpen, filterValue, allOptions, zIndex, handleChange, setIsOpen, }: PromptQuickActionsProps) => React.ReactElement;

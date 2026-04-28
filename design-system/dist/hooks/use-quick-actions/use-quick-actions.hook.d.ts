import { CustomPrompt } from '../../components/webdox-ai';
export interface UseQuickActionsParams {
    allOptions: CustomPrompt[];
    setIsOpen(isOpen: boolean): void;
    onSelect(val: string): void;
}
export interface UseQuickActionsReturn {
    options: CustomPrompt[];
    setFilterValue: React.Dispatch<React.SetStateAction<string>>;
    handleSelect(item: CustomPrompt): void;
}
/**
 * Hook to manage the quick actions menu.
 * It filters the options based on the filter string (matching both title and content)
 * and handles the selection of an item from the list.
 */
export declare const useQuickActions: ({ allOptions, setIsOpen, onSelect, }: UseQuickActionsParams) => UseQuickActionsReturn;

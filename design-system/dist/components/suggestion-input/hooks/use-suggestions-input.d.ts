import { KeyboardEventHandler } from 'react';
interface UseSuggestionsInputProps<Item> {
    /** The current value of the input. */
    value: string;
    /** Whether the suggestion list is open. */
    isOpen?: boolean;
    /** The items to display as suggestions. */
    items: Item[];
    /** Maps an item to its string representation. */
    mapItemToString?(item: Item): string;
    /** Callback when an item is selected or the user presses Enter. */
    handleChange(newValue: string): void;
}
interface UseSuggestionsInputReturn {
    /** Ref for the Popover's internal container. */
    innerRef: React.RefObject<HTMLElement>;
    /** Ref for the suggestions list container. */
    listRef: React.RefObject<HTMLUListElement>;
    /** Ref for the input element. */
    inputRef: React.RefObject<HTMLInputElement>;
    /** The index of the currently highlighted (active) item. */
    highlightedIndex: number;
    /** Function to manually update the highlighted index. */
    updateHighlightedIndex: React.Dispatch<React.SetStateAction<number>>;
    /** Keydown event handler for the input (ArrowUp/ArrowDown/Enter). */
    onKeyDown: KeyboardEventHandler<HTMLInputElement>;
}
/**
 * Custom hook for handling suggestion input logic such as keyboard navigation,
 * highlighted item tracking, and item selection.
 */
export declare function useSuggestionsInput<Item>({ value, isOpen, items, mapItemToString, handleChange, }: UseSuggestionsInputProps<Item>): UseSuggestionsInputReturn;
export {};

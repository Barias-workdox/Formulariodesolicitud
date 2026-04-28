import { ReactElement } from 'react';
import { MapItemToNodeProps } from '../suggestion-input.interfaces';
interface SuggestionsInputListProps<Item> {
    dataTestId?: string;
    /** The width to apply to the content wrapper (often derived from anchor width). */
    width?: string;
    /** A node to render above the list, often used for headers or additional context. */
    topEnhancer?: React.ReactNode;
    /** A ref for the list container element. */
    listRef: React.RefObject<HTMLUListElement>;
    /** An array of items to display as suggestions. */
    items: Item[];
    /** The index of the currently highlighted (active) item. */
    highlightedIndex: number;
    /** Maps each item to its visual ReactNode in the suggestion list. */
    mapItemToNode?(props: MapItemToNodeProps<Item>): ReactElement;
    /** Maps each item to its string representation (for selection). */
    mapItemToString?(item: Item): string;
    /** Handler for selecting or changing the current item. */
    handleChange(newValue: string): void;
}
/**
 * Renders the list of suggestions within a styled content wrapper.
 */
export declare function SuggestionsInputList<Item>({ dataTestId, listRef, items, width, topEnhancer, highlightedIndex, mapItemToNode, mapItemToString, handleChange, }: SuggestionsInputListProps<Item>): ReactElement;
export {};

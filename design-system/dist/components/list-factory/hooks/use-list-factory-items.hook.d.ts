import { ReactElement } from 'react';
import { Item } from '../list-factory.interfaces';
interface UseListFactoryItemsReturn {
    /**
     * Function that renders the list items as an array of React elements
     */
    renderListItems(): ReactElement[];
}
export interface UseListFactoryProps {
    dataTestId?: string;
    /**
     * Array of items to be rendered in the list
     * Each item contains properties like id, label, checked, disabled, etc.
     */
    items: Item[];
    /**
     * Callback function triggered when an item is clicked
     */
    handleItemClick(item: Item): void;
}
/**
 * A hook that provides a factory for rendering list items.
 */
export declare const useListFactoryItems: ({ dataTestId, items, handleItemClick, }: UseListFactoryProps) => UseListFactoryItemsReturn;
export {};

import { ReactElement, ReactNode } from 'react';
import { InputProps } from '../input/next';
/**
 * Describes how each suggestion item should be rendered in the list.
 */
export interface MapItemToNodeProps<Item> {
    dataTestId?: string;
    item: Item;
    $isActive: boolean;
    handleClick?(): void;
}
export type SuggestionInputProps<Item> = Omit<InputProps, 'onChange' | 'onKeyDown' | 'value'> & {
    /**
     * An array of items to display as suggestions.
     * Each item can be a string or a custom object, depending on how `mapItemToString` and `mapItemToNode` are implemented.
     */
    items: Item[];
    /**
     * The current value of the input field.
     */
    value: string;
    /**
     * A node to render above the suggestion list, often used for headers or additional context.
     */
    topEnhancer?: ReactNode;
    /**
     * Delay in milliseconds before rendering the popover content.
     * This is useful for adding smooth transitions or waiting for data to load.
     */
    delayRenderContent?: number;
    /**
     * Function to map an item to a custom ReactNode to render in the suggestion list.
     * Allows customization of the appearance of list items.
     */
    mapItemToNode?(props: MapItemToNodeProps<Item>): ReactElement;
    /**
     * Function to map an item to a string representation within the text field.
     */
    mapItemToString?(item: Item): string;
    /**
     * Callback function triggered when the input value changes.
     */
    onChange(value: string): void;
    /**
     * Callback function triggered when a suggestion is selected.
     */
    onSelect(value: string): void;
    /**
     * Callback function triggered when showing/hiding the suggestion list.
     */
    onIsOpenChange?(isOpen: boolean): void;
};
export type InputType = 'text' | 'number' | 'email' | 'chile-rut';

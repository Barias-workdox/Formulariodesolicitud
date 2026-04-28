import { ReactElement } from 'react';
import { SuggestionInputProps } from './suggestion-input.interfaces';
/**
 * `SuggestionInput` is a component that renders an input field with an attached
 * suggestion list, displayed in a popover. As the user types or navigates via
 * keyboard, they can select from the list of suggestions.
 *
 * @typeParam T - The type of each suggestion item (e.g., string or a custom object).
 */
export declare function SuggestionInput<T>({ 'data-testid': dataTestId, items, value, topEnhancer, placeholder, delayRenderContent, onChange, onSelect, onIsOpenChange, mapItemToNode, mapItemToString, ...restInputProps }: SuggestionInputProps<T>): ReactElement;

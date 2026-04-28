import { ReactElement } from 'react';
import { InputType } from '../../suggestion-input.interfaces';
import { WithTestId } from '../../../../interfaces/common.interfaces';
import { StyleObject } from 'styletron-react';
type FlatSuggestionsInputProps = WithTestId & {
    value: string;
    suggestions: string[];
    width?: StyleObject['width'];
    type?: InputType;
    autoFocus?: boolean;
    onChange(value: string): void;
};
/**
 * Renders a flat suggestion input without a popover.
 * Displays an input field and a list of suggestions inline.
 */
export declare const FlatSuggestionsInput: ({ dataTestId, value, suggestions, width, type, autoFocus, onChange, }: FlatSuggestionsInputProps) => ReactElement;
export {};

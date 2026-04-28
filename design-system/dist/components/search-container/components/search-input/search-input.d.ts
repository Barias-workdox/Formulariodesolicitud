import { ReactElement } from 'react';
import { WithTestId } from '../../../../interfaces/common.interfaces';
export type SearchInputProps = WithTestId & {
    autoFocus?: boolean;
    searchValue: string;
    searchPlaceholder?: string;
    onSearchChange(value: string): void;
};
/**
 * Renders a search input with a Carbon Search icon and optional placeholder.
 */
export declare const SearchInput: ({ dataTestId, autoFocus, searchValue, searchPlaceholder, onSearchChange, }: SearchInputProps) => ReactElement;

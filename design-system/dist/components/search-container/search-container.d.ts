import { PropsWithChildren, ReactElement } from 'react';
import { SearchInputProps } from './components/search-input';
import { StyleObject } from 'styletron-react';
export type SearchContainerProps = SearchInputProps & PropsWithChildren<{
    minWidth?: StyleObject['minWidth'];
    isFiltrable?: boolean;
    maxWidth?: StyleObject['maxWidth'];
    maxHeight?: StyleObject['maxHeight'];
}>;
/**
 * A container component that displays a search input at the top and
 * renders its children in a scrollable body area.
 */
export declare const SearchContainer: ({ dataTestId, children, searchValue, searchPlaceholder, minWidth, maxWidth, maxHeight, isFiltrable, autoFocus, onSearchChange: onChange, }: SearchContainerProps) => ReactElement;

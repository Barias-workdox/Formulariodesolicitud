import { SuggestionInputProps } from '../../../suggestion-input';
export type SearchIconButtonWithModalProps<T> = SuggestionInputProps<T>;
/**
 * `SearchIconButtonWithModal` is a component that displays an icon button.
 * When clicked, it opens a modal containing a search input.
 */
export declare function SearchIconButtonWithModal<T>({ 'data-testid': dataTestId, onSelect, ...restProps }: SearchIconButtonWithModalProps<T>): JSX.Element;

import { ReactElement } from 'react';
import { SuggestionInputProps } from '../../../suggestion-input';
export type PageHeaderSearchProps<T> = SuggestionInputProps<T>;
/**
 * `MobilePageHeaderSearch` is a component that renders a search icon button with a modal for mobile view.
 */
export declare function MobilePageHeaderSearch<T>(props: SuggestionInputProps<T>): ReactElement;
/**
 * `DesktopPageHeaderSearch` is a component that renders a search input for desktop view.
 */
export declare function DesktopPageHeaderSearch<T>({ onIsOpenChange, ...props }: SuggestionInputProps<T>): ReactElement;
/**
 * `PageHeaderSearch` is a component that conditionally renders either a mobile or
 * desktop version of the search input based on toolbar visibility.
 */
export declare function PageHeaderSearch<T>(props: SuggestionInputProps<T>): ReactElement;

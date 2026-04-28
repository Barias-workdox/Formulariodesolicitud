import { ReactElement } from 'react';
import { ListFactoryProps } from './list-factory.interfaces';
/**
 * Renders a searchable list of items using a factory-driven approach
 * for different "kinds" of list items.
 *
 * This component displays a search input for filtering by item label,
 * then renders each item using either a "basic" or an "avatar" variant.
 * The "basic" variant displays a checkbox as a `startEnhancer`, while
 * the "avatar" variant displays an avatar image.
 */
export declare const ListFactory: ({ "data-testid": dataTestId, items, isFiltrable, minWidth, maxWidth, maxHeight, emptyStateProps, searchValue, multi, paginationProps, onSearchValueChange, onItemClick, }: ListFactoryProps) => ReactElement;

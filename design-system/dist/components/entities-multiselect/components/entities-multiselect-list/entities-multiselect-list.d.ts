import { EntityOption } from '../../entities-multiselect.types';
interface EntitiesMultiSelectListProps {
    type: 'people' | 'company';
    dataTestId: string | undefined;
    options: EntityOption[];
    values: EntityOption[];
    isLoading: boolean;
    isDisabled?: boolean;
    totalElements?: number;
    handleCheck(entity: EntityOption): void;
    handleLoadMore(type: 'people' | 'company'): void;
}
/**
 * Component rendering a scrollable list of selectable entities (people or companies).
 *
 * Features:
 * - Displays a header with entity type and total count.
 * - Renders each entity with a checkbox, optional avatar, and validation tag.
 * - Supports infinite scroll by calling `handleLoadMore` when the user scrolls near the bottom.
 * - Disabled state for all checkboxes if `isDisabled` is true.
 *
 */
export declare const EntitiesMultiSelectList: ({ dataTestId, type, options, values, handleCheck, handleLoadMore, isLoading, totalElements, isDisabled, }: EntitiesMultiSelectListProps) => JSX.Element;
export {};

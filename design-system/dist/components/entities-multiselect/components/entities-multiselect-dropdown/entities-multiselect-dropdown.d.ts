import { EntitiesMultiSelectDropdownProps } from './entities-multiselect-dropdown.types';
/**
 * Dropdown component that displays a searchable, multi-select list of entities.
 *
 * Features:
 * - Search input to filter entities by label.
 * - Two separate lists: people and companies.
 * - Infinite scroll support via `onLoadMore`.
 * - Selected entities are managed via `values` and `updateValues`.
 * - Disabled state for input and checkboxes.
 * - Displays a spinner when loading data.
 *
 */
export declare const EntitiesMultiSelectDropdown: ({ dataTestId, options, isLoading, values, placeholder, updateValues, onSearch, onLoadMore, peopleTotalElements, companyTotalElements, isDisabled, }: EntitiesMultiSelectDropdownProps) => JSX.Element;

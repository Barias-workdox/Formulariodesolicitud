import type {
  EntityOption,
  FetchingState,
} from '@components/entities-multiselect/entities-multiselect.types';

export interface EntitiesMultiSelectDropdownProps {
  /** Test ID for automated testing */
  dataTestId?: string;

  /** List of all selectable entities (people or companies) */
  options: EntityOption[];

  /** Currently selected entities */
  values: EntityOption[];

  /** Placeholder text for the search input */
  placeholder?: string;

  /** Loading state: can specify which type is loading or "all" */
  isLoading?: FetchingState;

  /** Whether interactions are disabled */
  isDisabled?: boolean;

  /** total amount of people available */
  peopleTotalElements?: number;

  /** total amount of people available */
  companyTotalElements?: number;

  /** Callback when the selected entities change */
  updateValues(updatedValues: EntityOption[]): void;

  /** Callback triggered when a search query changes */
  onSearch(query: string | null): void;

  /** Callback triggered when scrolling near the bottom for lazy loading */
  onLoadMore(type: 'people' | 'company'): void;
}

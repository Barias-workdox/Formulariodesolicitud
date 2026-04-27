import type { Ref } from 'react';

import type { WithTestId } from '@interfaces/common.interfaces';

export type EntityType = 'people' | 'company';

export type FetchingState = EntityType | 'all' | null;

export interface EntityOption {
  id: string;
  label: string;
  email?: string;
  type?: EntityType;
  isValidated?: boolean;
}

export interface EntitiesMultiSelectProps extends WithTestId {
  name?: string;
  /** Array of available selectable options */
  options: EntityOption[];
  /** Array of currently selected values */
  values: EntityOption[];
  /** Placeholder to be displayed in the main input */
  placeholder?: string;
  /**  Placeholder to be displayed in the search input*/
  searchPlaceholder?: string;
  /** Whether the list is loading — can be boolean or entity type */
  isLoading?: FetchingState;
  /** Whether the component is disabled */
  disabled?: boolean;
  /** total amount of people available */
  peopleTotalElements?: number;
  /** total amount of company available */
  companyTotalElements?: number;
  /** Optional external container reference */
  containerRef?: Ref<HTMLDivElement>;
  leading?: React.ReactNode; // can be an HTML tag or a React component
  zIndex?: number;
  /** Error message to be displayed */
  error?: boolean;
  /** Callback when user selection changes */
  onChange(updatedValues: EntityOption[]): void;
  /** Callback when the search input changes */
  onSearch?(query: string | null): void;
  /** Callback when scrolling near the bottom */
  onLoadMore?(type: 'people' | 'company'): void;
}

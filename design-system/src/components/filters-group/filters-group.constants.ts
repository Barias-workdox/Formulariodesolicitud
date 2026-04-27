import { noop } from '@utils/noop';

import type { FiltersGroupContextType } from './filters-group.context';

export const MIN_VISIBLE_FILTERS_NUMBER = 2;

export const FILTERS_GROUP_CONTEXT_DEFAULT_VALUES: FiltersGroupContextType = {
  showClearAllFiltersButton: false,
  visibleFiltersId: [],
  addVisibleFilter: noop,
  onClearAllFilters: noop,
};

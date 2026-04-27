import { Star } from '@carbon/icons-react';

import { ContentTypes } from '../filter-group-factory.constants';

import type { FilterFactoryConfig } from '../filters-group-factory.interfaces';

export const filtersFactoryConfigMocks: FilterFactoryConfig[] = [
  {
    id: 'filter1',
    label: 'Filter 1',
    startEnhancer: Star,
    multi: true,
    content: {
      type: ContentTypes.List,
      isFiltrable: true,
      items: [
        { id: 'item1', label: 'Item 1', withCheckbox: true },
        { id: 'item2', label: 'Item 2', withCheckbox: true },
      ],
      pathIds: [],
      checkedIds: [],
    },
  },
  {
    id: 'filter2',
    label: 'Filter 2',
    startEnhancer: Star,
    multi: false,
    content: {
      type: ContentTypes.List,
      isFiltrable: false,
      items: [{ id: 'item3', label: 'Item 3', withCheckbox: false }],
      pathIds: [],
      checkedIds: [],
    },
  },
];

export const extendedFiltersFactoryConfigMocks: FilterFactoryConfig[] = [
  ...filtersFactoryConfigMocks,
  {
    id: 'filter3',
    label: 'Filter 3',
    startEnhancer: Star,
    multi: true,
    content: {
      type: ContentTypes.List,
      isFiltrable: true,
      items: [
        { id: 'item4', label: 'Item 4', withCheckbox: true },
        { id: 'item5', label: 'Item 5', withCheckbox: true },
      ],
      pathIds: [],
      checkedIds: [],
    },
  },
];

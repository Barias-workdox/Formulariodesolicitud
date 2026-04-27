import { Star } from '@carbon/icons-react';

import type { FilterConfig } from '../filters-group.interfaces';

export const filtersConfigMock: FilterConfig[] = [
  {
    id: 'status',
    label: 'status-label',
  },
  {
    id: 'users',
    label: 'users-label',
  },
  {
    id: 'date',
    label: 'date-label',
    startEnhancer: <Star />,
  },
];

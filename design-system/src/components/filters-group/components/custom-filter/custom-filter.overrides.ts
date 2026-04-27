import type { FilterProps } from '@components/filter/filter.interfaces';

export const filterOverrides: FilterProps['overrides'] = {
  Popover: {
    props: {
      ignoreBoundary: true,
      placement: 'bottomLeft',
    },
  },
};

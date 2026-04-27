import { useMemo } from 'react';

import { Filter } from '@components/filter';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { filterOverrides } from './custom-filter.overrides';

import type { FilterProps } from '@components/filter/filter.interfaces';

/**
 * Component that extends `Filter` to apply specific logic for `FiltersGroup`.
 */
export const CustomFilter = ({ overrides, ...rest }: FilterProps): JSX.Element => {
  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(overrides, filterOverrides),
    [overrides],
  );

  return (
    <Filter
      {...rest}
      overrides={mergedOverrides}
    />
  );
};

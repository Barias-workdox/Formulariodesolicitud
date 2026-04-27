import { useMemo } from 'react';
import type { ReactElement } from 'react';

import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { StatefulMenuWithInfiniteScroll } from '../menu/stateful-menu-with-infinite-scroll';
import { Select } from '../select';

import { optionContentOverrideStyle } from './select-with-pagination.styles';

import type { SelectWithPaginationProps } from './select-with-pagination.interfaces';
import type { SelectOverrides } from 'baseui/select';

/**
 * Select with a sensor to observe if the end of the list have been reached.
 * If the end has been reached, it calls the "onLoadMore" function.
 */
export const SelectWithPagination = ({
  'data-testid': dataTestId = 'select',
  isLoadingMore,
  options = [],
  overrides,
  onLoadMore,
  ...rest
}: SelectWithPaginationProps): ReactElement => {
  const baseOverrides: SelectOverrides = useMemo(
    () => ({
      OptionContent: {
        style: optionContentOverrideStyle,
      },
      StatefulMenu: {
        component: StatefulMenuWithInfiniteScroll,
        props: { dataTestId, isLoadingMore, onLoadMore },
      },
    }),
    [dataTestId, isLoadingMore, onLoadMore],
  );

  const mergedOverrides = useMemo(
    () => mergeOverridesDeep(baseOverrides, overrides),
    [baseOverrides, overrides],
  );

  return (
    <Select
      data-testid={dataTestId}
      options={options}
      overrides={mergedOverrides}
      {...rest}
    />
  );
};

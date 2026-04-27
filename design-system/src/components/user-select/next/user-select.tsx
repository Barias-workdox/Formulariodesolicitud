import { useMemo } from 'react';
import type { ReactNode } from 'react';

import { DEFAULT_SIZE } from '@components/input/next';
import { SelectWithPagination } from '@components/select-with-pagination/next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';

import { SelectOption } from './components/select-option';
import { SelectValue } from './components/select-value';
import { getUserSelectOverrides } from './user-select.overrides';

import type { UserOption, UserSelectProps } from './user-select.interfaces';
import type { SelectOverrides } from 'baseui/select';

/** Component extending SelectWithPagination with custom label options to list users */
export const UserSelect = ({
  isLoadingMore,
  onLoadMore,
  onChange,
  overrides = {},
  'data-testid': dataTestId = 'user-select',
  size = DEFAULT_SIZE,
  disabled = false,
  placeholder,
  ...rest
}: UserSelectProps): JSX.Element => {
  const mergedOverrides = useMemo((): SelectOverrides => {
    const baseOverrides: SelectOverrides = getUserSelectOverrides({ placeholder });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [overrides, placeholder]);

  return (
    <SelectWithPagination
      {...rest}
      size={size}
      disabled={disabled}
      data-testid={dataTestId}
      isLoadingMore={isLoadingMore}
      overrides={mergedOverrides}
      onLoadMore={onLoadMore}
      onChange={onChange}
      getOptionLabel={({ option }): ReactNode => (
        <SelectOption
          option={option as UserOption}
          size={size}
        />
      )}
      getValueLabel={({ option }): ReactNode => (
        <SelectValue
          option={option as UserOption}
          size={size}
          disabled={disabled}
        />
      )}
    />
  );
};

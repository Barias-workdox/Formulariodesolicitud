import type { ReactElement } from 'react';

import { Search } from '@carbon/icons-react';

import { Input } from '@components/input/next';
import { useTranslation } from '@components/utils/i18n';

import { inputOverrides } from './search-input.styles';

import type { WithTestId } from '@interfaces/common.interfaces';

export type SearchInputProps = WithTestId & {
  autoFocus?: boolean;
  searchValue: string;
  searchPlaceholder?: string;
  onSearchChange(value: string): void;
};

/**
 * Renders a search input with a Carbon Search icon and optional placeholder.
 */
export const SearchInput = ({
  dataTestId,
  autoFocus = true,
  searchValue,
  searchPlaceholder,
  onSearchChange,
}: SearchInputProps): ReactElement => {
  const { t } = useTranslation();

  return (
    <Input
      data-testid={dataTestId}
      clearable
      kind="white"
      autoFocus={autoFocus}
      value={searchValue}
      overrides={inputOverrides}
      startEnhancer={<Search />}
      placeholder={searchPlaceholder ?? t('general.search')}
      onChange={({ target: { value } }) => onSearchChange(value)}
      onClear={() => onSearchChange('')}
    />
  );
};

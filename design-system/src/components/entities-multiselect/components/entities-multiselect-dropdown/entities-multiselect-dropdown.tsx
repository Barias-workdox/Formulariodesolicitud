import { useCallback } from 'react';

import { Search } from '@carbon/icons-react';
import { debounce } from 'lodash';

import { entitiesMultiSelectListStyles } from '@components/entities-multiselect/entities-multiselect.styles';
import { Spinner } from '@components/spinner';
import { useTranslation } from '@components/utils/i18n';

import { Input } from '../../../input';
import { Text } from '../../../text';
import { useCss } from '../../../utils/hooks/use-css';
import { EntitiesMultiSelectList } from '../entities-multiselect-list/entities-multiselect-list';

import { inputStyledOverrides } from './entities-multiselect-dropdown.styles';

import type { EntitiesMultiSelectDropdownProps } from './entities-multiselect-dropdown.types';
import type { EntityOption } from '@components/entities-multiselect/entities-multiselect.types';

/**
 * Dropdown component that displays a searchable, multi-select list of entities.
 *
 * Features:
 * - Search input to filter entities by label.
 * - Two separate lists: people and companies.
 * - Infinite scroll support via `onLoadMore`.
 * - Selected entities are managed via `values` and `updateValues`.
 * - Disabled state for input and checkboxes.
 * - Displays a spinner when loading data.
 *
 */
export const EntitiesMultiSelectDropdown = ({
  dataTestId,
  options,
  isLoading,
  values,
  placeholder,
  updateValues,
  onSearch,
  onLoadMore,
  peopleTotalElements,
  companyTotalElements,
  isDisabled,
}: EntitiesMultiSelectDropdownProps): JSX.Element => {
  const { wrapper, inputWrapper, noResultsWrapper, separatorStyle, theme } = useCss(
    entitiesMultiSelectListStyles,
  );

  const { t } = useTranslation();

  /**
   * Function to select and deselect when the customer clicks on a user item
   */
  const handleCheckEntity = useCallback(
    (selectedEntity: EntityOption) => {
      const { id } = selectedEntity;
      const foundEntity = values.find((value) => value.id === String(id));

      const updatedValues =
        foundEntity !== undefined ? values.filter((v) => v.id !== id) : [...values, selectedEntity];

      updateValues(updatedValues);
    },
    [values, updateValues],
  );

  const handleSearch = debounce((value: string) => {
    onSearch(value ?? null);
  }, 300);

  const peopleOptions = options.filter((option) => option.type === 'people');
  const companyOptions = options.filter((option) => option.type === 'company');

  const hasData = peopleOptions.length > 0 || companyOptions.length > 0;

  const shouldRenderSeparator = peopleOptions.length > 0 && companyOptions.length > 0;

  const isReFetching = isLoading === 'all';

  return (
    <div className={wrapper}>
      <div className={inputWrapper}>
        <Input
          data-testid={`${dataTestId}__search-input`}
          placeholder={placeholder}
          overrides={inputStyledOverrides()}
          onChange={(event): void => handleSearch(event.target.value)}
          autoFocus
          clearable={true}
          onClear={(): void => handleSearch('')}
          disabled={isLoading === 'all'}
          startEnhancer={
            <Search
              size={16}
              color={theme.colors.neutralSubdued}
              title="SearchIcon"
            />
          }
        />
      </div>
      {!isReFetching && (
        <>
          <EntitiesMultiSelectList
            dataTestId={dataTestId}
            type="people"
            options={peopleOptions}
            values={values}
            totalElements={peopleTotalElements}
            isDisabled={isDisabled}
            isLoading={isLoading === 'people'}
            handleCheck={handleCheckEntity}
            handleLoadMore={onLoadMore}
          />
          {shouldRenderSeparator && <div className={separatorStyle} />}
          <EntitiesMultiSelectList
            dataTestId={dataTestId}
            type="company"
            options={companyOptions}
            values={values}
            totalElements={companyTotalElements}
            isDisabled={isDisabled}
            isLoading={isLoading === 'company'}
            handleCheck={handleCheckEntity}
            handleLoadMore={onLoadMore}
          />
          {!hasData && (
            <div
              data-testid={`${dataTestId}__no-results`}
              className={noResultsWrapper}
            >
              <Text
                variant="bodySmall"
                color={theme.colors.neutralSubdued}
              >
                {t('entitiesMultiselect.noResults')}
              </Text>
            </div>
          )}
        </>
      )}
      {isReFetching && (
        <div
          data-testid={`${dataTestId}__dropdown-loading`}
          className={noResultsWrapper}
        >
          <Spinner size="md" />
        </div>
      )}
    </div>
  );
};

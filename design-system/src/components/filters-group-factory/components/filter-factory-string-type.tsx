import { useCallback, useMemo } from 'react';
import type { ReactElement } from 'react';

import { FiltersGroup } from '@components/filters-group';
import { FlatSuggestionsInput } from '@components/suggestion-input/variants/flat-suggestions-input/flat-suggestions-input';

import { ContentTypes } from '../filter-group-factory.constants';

import type { FilterFactoryProps } from './filter-factory';
import type { FilterFactoryConfigContentMap } from '@components/filters-group-factory/filters-group-factory.interfaces';

export type FilterFactoryStringTypeProps = Omit<FilterFactoryProps, 'type'> & {
  content: FilterFactoryConfigContentMap[ContentTypes.String];
};

/**
 * Renders a string-based filter within a `FiltersGroup`. It allows users
 * to input text or choose from provided suggestions, if any.
 */
export const FilterFactoryStringType = ({
  dataTestId = 'filters-group__text-filter',
  id,
  label,
  value,
  multi,
  startEnhancer,
  tooltipText,
  minWidth,
  maxWidth,
  focusOnShow,
  content,
  disabled,
  disabledReason = '',
  onFilterChange,
  hideVisibleFilter,
}: FilterFactoryStringTypeProps): ReactElement => {
  /**
   * Invoked when the user changes the filter value. Notifies the parent
   * filter factory of the new filter value and updates state accordingly.
   */
  const handleFilterChange = useCallback(
    (value: string): void => {
      onFilterChange({ filterId: id, type: ContentTypes.String, value });
    },
    [id, onFilterChange],
  );

  /**
   * Resets the filter to an empty string value.
   */
  const handleReset = useCallback(() => {
    onFilterChange({ filterId: id, type: ContentTypes.String, value: '' });
    hideVisibleFilter?.(id);
  }, [id, onFilterChange, hideVisibleFilter]);

  // Renders the FlatSuggestionsInput with any provided suggestions.
  const contentNode = useMemo(() => {
    const { suggestions = [], value, typeVariant } = content;

    return (
      <FlatSuggestionsInput
        dataTestId={`${dataTestId}__suggestion`}
        autoFocus
        value={value.toString()}
        suggestions={suggestions}
        type={typeVariant}
        onChange={handleFilterChange}
      />
    );
  }, [dataTestId, content, handleFilterChange]);

  return (
    <FiltersGroup.Filter
      data-testid={`${dataTestId}--${id}`}
      key={id}
      id={id}
      label={label}
      value={value}
      multi={multi}
      startEnhancer={startEnhancer}
      tooltipText={tooltipText}
      minWidth={minWidth}
      maxWidth={maxWidth}
      initialIsOpen={focusOnShow}
      content={contentNode}
      onClear={handleReset}
      disabled={disabled}
      disabledReason={disabledReason}
    />
  );
};

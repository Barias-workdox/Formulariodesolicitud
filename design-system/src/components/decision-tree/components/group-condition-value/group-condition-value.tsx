import { useCallback, useEffect, useRef, useState } from 'react';

import { debounce } from 'lodash';

import { Datepicker } from '@components/datepicker';
import { getGroupConditionDataType } from '@components/decision-tree/utils/decision-tree.utils';
import { Input } from '@components/input';
import { SelectWithPagination } from '@components/select-with-pagination';
import { useTranslation } from '@components/utils';

import { selectOverrides } from '../group-conditions/group-conditions.styles';

import { dateInputOverrides, inputOverrides } from './group-condition-value.styles';

import type { ConditionType, GroupConditionDataType } from '../../interfaces';
import type { CommonOption } from '@components/select/next';
import type { WithTestId } from '@interfaces/common.interfaces';

export type GroupConditionValueProps = WithTestId<{
  condition: ConditionType;
  disabled: boolean;
  valueOptions: CommonOption[];
  isLoadingData(type: GroupConditionDataType): boolean;
  onLoadMore(type: GroupConditionDataType): void;
  onUpdateCondition(updates: Partial<ConditionType>): void;
}>;

/**
 * Component that renders the appropriate input element based on the dataType provided.
 * It ensures that users can interact with the input in a way that matches the expected
 * data type, enhancing the flexibility and usability of the decision tree interface
 */
export const GroupConditionValue = ({
  dataTestId,
  disabled,
  condition: { objectToEval, dataType, field, value },
  valueOptions,
  isLoadingData,
  onLoadMore,
  onUpdateCondition,
}: GroupConditionValueProps): JSX.Element => {
  const { t } = useTranslation();
  const [inputValue, setInputValue] = useState(
    value !== undefined && typeof value === 'string' ? value : '',
  );

  const groupConditionDataType = getGroupConditionDataType({
    objectToEval,
    field,
    dataType,
  });

  const debouncedHandleInputChange = useRef<ReturnType<typeof debounce>>();

  const isLoadingMore = isLoadingData(groupConditionDataType!);

  /** Handle loading more options */
  const handleLoadMore = useCallback((): void => {
    onLoadMore(groupConditionDataType!);
  }, [groupConditionDataType, onLoadMore]);

  /**
   * Keeps the state updated regarding the data type and `field` option.
   * When a new `field` option es selected, the value is set to `undefined` so this effect
   * resets the value
   */
  useEffect(() => {
    if (value === undefined) {
      setInputValue('');
    }
  }, [value]);

  /** Update the debounce input reference */
  useEffect(() => {
    debouncedHandleInputChange.current = debounce(async (value: string | Date) => {
      onUpdateCondition({ value });
    }, 500);

    return (): void => {
      debouncedHandleInputChange?.current?.cancel();
    };
  }, [onUpdateCondition]);

  /**
   * Handler function that processes input changes and debounces them.
   * If the value is handler by the `Input` it also updates the inner state
   */
  const handleInputChange = useCallback((value: string | Date, input: 'string' | 'date') => {
    if (input === 'string' && typeof value === 'string') {
      setInputValue(value);
    }

    if (debouncedHandleInputChange.current) {
      debouncedHandleInputChange.current(value);
    }
  }, []);

  switch (dataType) {
    case 'string': {
      /**
       * This validation is required bc the users and groups should be displayed
       * as a list but the final `dataType` is a `string`
       */
      if (objectToEval === 'User') {
        return (
          <SelectWithPagination
            size="compact"
            data-testid={`${dataTestId}--${dataType}-select`}
            overrides={selectOverrides}
            disabled={disabled}
            placeholder={t('decisionTree.selectObject')}
            options={valueOptions}
            value={value ? [{ id: value }] : []}
            isLoadingMore={isLoadingMore}
            onChange={([value]: CommonOption[]) => onUpdateCondition({ value: value.id })}
            onLoadMore={handleLoadMore}
          />
        );
      }

      return (
        <Input
          size="compact"
          data-testid={`${dataTestId}--${dataType}-input`}
          overrides={inputOverrides}
          disabled={disabled}
          placeholder={t('decisionTree.selectObject')}
          value={inputValue}
          onChange={({ target: { value } }) => handleInputChange(value, 'string')}
        />
      );
    }

    case 'numeric':
      return (
        <Input
          size="compact"
          data-testid={`${dataTestId}--${dataType}-input`}
          overrides={inputOverrides}
          disabled={disabled}
          placeholder={t('decisionTree.selectObject')}
          value={inputValue}
          onChange={({ target: { value } }) => handleInputChange(value, 'string')}
        />
      );

    case 'date':
      return (
        <Datepicker
          size="compact"
          data-testid={`${dataTestId}--${dataType}-input`}
          overrides={dateInputOverrides}
          disabled={disabled}
          zIndex={50}
          value={value !== undefined ? (value as Date) : null}
          onChange={({ date }) => handleInputChange(date as Date, 'date')}
        />
      );

    case 'boolean':
    case 'list':
      return (
        <SelectWithPagination
          size="compact"
          data-testid={`${dataTestId}--${dataType}-select`}
          overrides={selectOverrides}
          disabled={disabled}
          placeholder={t('decisionTree.selectObject')}
          options={valueOptions}
          value={value ? [{ id: value }] : []}
          isLoadingMore={isLoadingMore}
          onChange={([value]: CommonOption[]) => onUpdateCondition({ value: value.id })}
          onLoadMore={handleLoadMore}
        />
      );

    default:
      return <></>;
  }
};

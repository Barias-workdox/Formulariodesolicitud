import {
  useCallback,
  useMemo,
  useState,
  type ChangeEvent,
  type ReactElement,
  type ReactNode,
} from 'react';

import { AddFilled } from '@carbon/icons-react';
import { Select as BaseWebSelect } from 'baseui/select';

import { withIsHovered } from '@components/hocs/with-is-hovered';
import { DEFAULT_KIND, DEFAULT_SIZE } from '@components/input/next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { useCss } from '@components/utils/hooks/use-css';
import { useTranslation } from '@components/utils/i18n';
import { includesStringNormalized } from '@components/utils/strings/text.utils';

import { getSelectOverrides } from './select.overrides';
import { styles } from './select.styles';

import type { SelectProps } from './select.interfaces';
import type { OnChangeParams, Option, SelectOverrides, Value } from 'baseui/select';

/**
 * Design System Select component that provides a customizable dropdown selection interface.
 *
 * This component extends the BaseUI Select with additional features including:
 * - Custom styling and theming support
 * - Creatable options for adding new items
 * - Multi-select capabilities
 * - Custom filtering with normalized string matching
 * - Hover state management
 * - Internationalization support
 */
const SelectComponent = ({
  'data-testid': dataTestId,
  isHovered = false,
  clearable = true,
  creatable = false,
  filterOutSelected = true,
  placeholder,
  value,
  kind = DEFAULT_KIND,
  labelKey = 'label',
  maxDropdownHeight = '300px',
  valueKey = 'id',
  leading,
  options,
  width,
  size = DEFAULT_SIZE,
  zIndex,
  name,
  overrides,
  onChange,
  onCreate,
  onInputChange,
  filterOptions,
  getOptionLabel,
  ...rest
}: SelectProps): ReactElement => {
  const [isInputDirty, setIsInputDirty] = useState(false);
  const { t } = useTranslation();
  const { creatableIconStyles, creatableOptionStyles, theme } = useCss(styles);

  const valueAsArray = [value].flat().filter(Boolean);

  /**
   * Filters the options for the select component based on the provided filter value.
   * This function first checks if a custom filterOptions function is provided in the props,
   * and if so, uses that function. If not, it defaults to filtering options based on a
   * normalized string comparison using includesStringNormalized.
   *
   * @example
   * ```typescript
   * const options = [{ label: 'Crème Brûlée' }, { label: 'Schrödinger' }, { label: 'Mañana' }];
   * const filterValue = 'creme';
   * const filteredOptions = handleFilterOptions(options, filterValue);
   * // filteredOptions will include only the option with label 'Crème Brûlée'
   * ```
   */
  const handleFilterOptions = (...args: Parameters<SelectProps['filterOptions']>): Value => {
    if (filterOptions) {
      return filterOptions(...args);
    }

    const [options, filterValue] = args;

    return options.filter((option) => {
      const label =
        option.label ||
        option[labelKey] ||
        getOptionLabel?.({
          option,
          optionState: { $disabled: false, $isHighlighted: false, $selected: false },
        });

      return label && includesStringNormalized(label.toString(), filterValue);
    });
  };

  /**
   * Calls the onChange function and checks if the new option has the 'isCreatable' property to invoke onCreate callback afterwards
   */
  const handleOnChange = useCallback(
    ({ option, value: newValue, type }: OnChangeParams): void => {
      const { isCreatable = false } = option || {};

      if (onInputChange) {
        if (type === 'clear') {
          onInputChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
        } else if (newValue.length === 0 && valueAsArray.length === 1) {
          // Handle removal of the last item from the previous value
          const [{ [labelKey]: searchValue }] = valueAsArray;

          // Update the input with the last character removed
          onInputChange({
            target: { value: searchValue.slice(0, -1) },
          } as ChangeEvent<HTMLInputElement>);
        }
      }

      onChange(newValue);

      if (isCreatable && onCreate !== undefined) {
        onCreate(newValue);
      }
    },
    [labelKey, valueAsArray, onChange, onCreate, onInputChange],
  );

  /**
   * Clears the input value and focuses the input field again.
   */
  const handleClear = useCallback(() => {
    handleOnChange({ option: null, value: [], type: 'clear' });
    setIsInputDirty(false);
  }, [handleOnChange]);

  /**
   * Handles the input change event, updating the isInputDirty state
   * based on whether the input value is empty or not.
   */
  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.currentTarget.value;

      setIsInputDirty(inputValue !== '');

      if (onInputChange) onInputChange(event);
    },
    [onInputChange],
  );

  const mergedOverrides: SelectOverrides = useMemo(() => {
    const baseOverrides: SelectOverrides = getSelectOverrides({
      kind,
      zIndex,
      dataTestId,
      isHovered,
      options,
      size,
      isInputDirty,
      onClear: handleClear,
      leading,
      width,
      name,
    });

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [
    isInputDirty,
    kind,
    zIndex,
    dataTestId,
    isHovered,
    options,
    size,
    leading,
    width,
    name,
    overrides,
    handleClear,
  ]);

  /**
   * Basic select option label option used to add custom property `data-testid` to each option if it exists
   */
  const getCustomOption = useCallback(
    (
      { option }: { option?: Option },
      valueKey: SelectProps['valueKey'],
      labelKey: SelectProps['labelKey'],
    ): ReactNode => {
      const { isCreatable = false } = option;
      const id = option[valueKey];
      const label = option[labelKey];

      const optionDataTestId = dataTestId ? `${dataTestId}-option-${id}` : undefined;

      if (isCreatable) {
        return (
          <div
            data-testid={optionDataTestId}
            className={creatableOptionStyles}
          >
            {`${t('select.create')} “${label}”`}
            <span className={creatableIconStyles}>
              <AddFilled
                color={theme.colors.brand}
                size={16}
              />
            </span>
          </div>
        );
      }

      return <div data-testid={optionDataTestId}>{label}</div>;
    },
    [t, theme.colors.brand, dataTestId, creatableIconStyles, creatableOptionStyles],
  );

  /**
   * Handles the rendering of option labels in the select dropdown.
   */
  const handleGetOptionLabel = useCallback(
    (currentOption: Parameters<SelectProps['getOptionLabel']>[0]): ReactNode =>
      getOptionLabel !== undefined
        ? getOptionLabel(currentOption)
        : getCustomOption(currentOption, valueKey, labelKey),
    [labelKey, valueKey, getCustomOption, getOptionLabel],
  );

  return (
    <BaseWebSelect
      valueKey={valueKey}
      labelKey={labelKey}
      value={valueAsArray}
      placeholder={placeholder || t('select.placeholder')}
      clearable={clearable}
      filterOutSelected={filterOutSelected}
      maxDropdownHeight={maxDropdownHeight}
      creatable={creatable}
      overrides={mergedOverrides}
      onChange={handleOnChange}
      onInputChange={handleInputChange}
      filterOptions={handleFilterOptions}
      getOptionLabel={handleGetOptionLabel}
      options={options}
      {...rest}
    />
  );
};

export const Select = withIsHovered(SelectComponent);

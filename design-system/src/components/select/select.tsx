import { useCallback, useMemo, useState } from 'react';
import type { ChangeEvent, ReactElement, ReactNode } from 'react';

import { AddFilled } from '@carbon/icons-react';
import { Select as BaseWebSelect } from 'baseui/select';

import { useTranslation } from '@components/utils/i18n';
import { includesStringNormalized } from '@components/utils/strings/text.utils';

import { mergeOverridesDeep } from '../utils/baseui/helpers';
import { useCss } from '../utils/hooks/use-css';

import { getOverrides } from './select.overrides';
import { styles } from './select.styles';

import type { SelectProps } from './select.interfaces';
import type { OnChangeParams, Option, SelectOverrides, Value } from 'baseui/select';

export type SelectOption = Option;

export type SelectValue = Value;

/**
 * DS Select component.
 *
 * Has two main props that can change its normal behavior and work along each other.
 *  - Creatable, which allows the user to add a new option besides the options array
 *  - Multi, allowing the user to select many options.
 *
 * Link: https://www.figma.com/file/eMhywyfWwKMjIyemY3PDoK/Design-System-Webdox-1.0?node-id=174%3A2567
 */
export const Select = ({
  'data-testid': dataTestId = 'select',
  value,
  name,
  zIndex,
  className,
  placeholder,
  isBorderless = false,
  creatable = false,
  clearable = true,
  filterOutSelected = true,
  kind = 'gray',
  valueKey = 'id',
  labelKey = 'label',
  maxDropdownHeight = '300px',
  overrides,
  onOpen,
  onChange,
  onClose,
  getOptionLabel,
  onCreate,
  onInputChange,
  filterOptions,
  options,
  ...rest
}: SelectProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false);
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

  const mergedOverrides: SelectOverrides = useMemo(() => {
    const baseOverrides: SelectOverrides = getOverrides({
      kind,
      zIndex,
      dataTestId,
      isBorderless,
      isOpen,
      options,
      name,
    });

    return mergeOverridesDeep(baseOverrides, overrides);

    // TODO: Evaluate if we can add the missing dependencies
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTestId, isBorderless, isOpen, kind, overrides, zIndex]);

  /** Callback called when opening the select */
  const handleOnOpen = (): void => {
    setIsOpen(true);
    if (onOpen) {
      onOpen();
    }
  };

  /** Callback called when closing the select */
  const handleOnClose = (): void => {
    setIsOpen(false);
    if (onClose) {
      onClose();
    }
  };

  /** Calls the onChange function and checks if the new option has the 'isCreatable' property to invoke onCreate callback afterwards */
  const handleOnChange = useCallback(
    ({ option, value: newValue }: OnChangeParams): void => {
      const { isCreatable = false } = option || {};

      if (onInputChange) {
        // Handle removal of the last item from the previous value
        if (newValue.length === 0 && valueAsArray.length === 1) {
          const [{ [labelKey]: searchValue }] = valueAsArray;

          // Update the input with the last character removed
          onInputChange({
            target: { value: searchValue.slice(0, -1) },
          } as ChangeEvent<HTMLInputElement>);
        } else {
          // Reset input
          onInputChange({ target: { value: '' } } as ChangeEvent<HTMLInputElement>);
        }
      }

      onChange(newValue);

      if (isCreatable && onCreate !== undefined) {
        onCreate(newValue);
      }
    },
    [labelKey, valueAsArray, onChange, onCreate, onInputChange],
  );

  /** Basic select option label option used to add custom property `data-testid` to each option if it exists */
  const getCustomOption = useCallback(
    (
      { option }: { option?: Option },
      valueKey: SelectProps['valueKey'],
      labelKey: SelectProps['labelKey'],
    ): ReactNode => {
      const { isCreatable = false } = option;
      const id = option[valueKey];
      const label = option[labelKey];

      // Prefer index over ids for easier lookup
      const index = Array.isArray(options)
        ? options.findIndex((option) => option.id === id)
        : undefined;

      const optionDataTestId = dataTestId ? `${dataTestId}-option-${index ?? id}` : undefined;

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t],
  );

  return (
    <div className={className}>
      <BaseWebSelect
        valueKey={valueKey}
        labelKey={labelKey}
        value={valueAsArray}
        getOptionLabel={(currentOption): ReactNode =>
          getOptionLabel !== undefined
            ? getOptionLabel(currentOption)
            : getCustomOption(currentOption, valueKey, labelKey)
        }
        placeholder={placeholder || t('select.placeholder')}
        clearable={clearable}
        filterOutSelected={filterOutSelected}
        maxDropdownHeight={maxDropdownHeight}
        creatable={creatable}
        overrides={mergedOverrides}
        onChange={handleOnChange}
        onOpen={handleOnOpen}
        onClose={handleOnClose}
        onInputChange={onInputChange}
        filterOptions={handleFilterOptions}
        options={options}
        {...rest}
      />
    </div>
  );
};

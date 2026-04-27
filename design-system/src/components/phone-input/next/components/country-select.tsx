import { forwardRef, useMemo, type RefObject, type ReactElement, useCallback } from 'react';

import { Flag } from '@carbon/icons-react';

import { BackgroundIcon } from '@components/background-icon';
import { Select } from '@components/select/next';
import { mergeOverridesDeep } from '@components/utils/baseui/helpers';
import { BASE_INPUT_HEIGHTS } from '@constants/common.constants';

import type { SelectProps } from '@components/select/next';
import type { WithTestId } from '@interfaces/common.interfaces';
import type { SelectOverrides, Value } from 'baseui/select';

type SelectCustomProps = WithTestId & {
  inputRef: RefObject<HTMLInputElement>;
  countryCodeAriaLabel?: string;
  onCountryChange(params: Value): void;
};

type CountrySelectProps = SelectProps & SelectCustomProps;

/**
 * A country selection component that extends the base Select component with country-specific functionality.
 *
 * - Displays a flag icon when no country is selected
 * - Automatically focuses the associated phone input after country selection
 */
export const CountrySelect = forwardRef(function Component(
  {
    dataTestId,
    value,
    overrides,
    inputRef,
    size,
    countryCodeAriaLabel,
    onCountryChange,
    ...rest
  }: CountrySelectProps,
  ref,
): ReactElement {
  const firstSelection = value?.[0] as unknown as { id?: string } | undefined;
  const hasNoValue =
    !Array.isArray(value) ||
    value.length === 0 ||
    !firstSelection ||
    !firstSelection.id ||
    Object.keys(firstSelection).length === 0;

  const mergedOverrides = useMemo(() => {
    const baseOverrides: SelectOverrides = {
      ...(hasNoValue
        ? {
            // When there's no value selected, BaseWeb renders `Placeholder` (not `SingleValue`).
            // We override it to show our empty-state flag icon instead of placeholder text.
            Placeholder: {
              component: (): JSX.Element => (
                <BackgroundIcon
                  data-testid={`${dataTestId}__empty-value-flag`}
                  Icon={Flag}
                  size="24px"
                  backgroundColor="neutralSubtle"
                  iconColor="neutral"
                  shape="square"
                />
              ),
            },
            // Keep SingleValue override as well for edge-cases where BaseWeb treats an "empty"
            // option object as a selected value.
            SingleValue: {
              component: (): JSX.Element => (
                <BackgroundIcon
                  data-testid={`${dataTestId}__empty-value-flag`}
                  Icon={Flag}
                  size="24px"
                  backgroundColor="neutralSubtle"
                  iconColor="neutral"
                  shape="square"
                />
              ),
            },
          }
        : {
            SingleValue: {
              style: {
                fontSize: '22px',
                lineHeight: 1,
              },
            },
          }),
      Root: {
        props: {
          ref,
          'aria-label': countryCodeAriaLabel,
        },
      },
      ValueContainer: {
        style: {
          minHeight: 'none',
          height: BASE_INPUT_HEIGHTS[size],
        },
      },
    };

    return mergeOverridesDeep(baseOverrides, overrides);
  }, [ref, overrides, size, dataTestId, countryCodeAriaLabel, hasNoValue]);

  /**
   * Handles the country change event and shifts focus to the text input
   */
  const handleChange = useCallback(
    (event: Value) => {
      onCountryChange?.(event);

      // After choosing a country, shift focus to the text input
      if (inputRef && inputRef.current) {
        inputRef.current.focus();
      }
    },
    [onCountryChange, inputRef],
  );

  return (
    <Select
      {...rest}
      value={value}
      overrides={mergedOverrides}
      onChange={handleChange}
    />
  );
});

CountrySelect.displayName = 'CountrySelect';

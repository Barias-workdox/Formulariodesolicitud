import { useMemo } from 'react';

import { mergeOverrides } from 'baseui';
import { PhoneInput as BaseWebPhoneInput } from 'baseui/phone-input';

import { getPhoneInputBaseOverrides } from './phone-input.styles';

import type { PhoneInputProps } from './phone-input.interfaces';
import type { PhoneInputOverrides } from 'baseui/phone-input';

const MAX_DROPDOWN_HEIGHT = '264px';
const MAX_DROPDOWN_WIDTH = '323px';

/**
 * Component used to write phone numbers,
 * contains a country selector which automatically writes the dial code
 * of the selected country and a tel input to write the phone number.
 */
export const PhoneInput = ({
  'data-testid': dataTestId = 'phone-input',
  overrides,
  maxDropdownHeight = MAX_DROPDOWN_HEIGHT,
  maxDropdownWidth = MAX_DROPDOWN_WIDTH,
  ...rest
}: PhoneInputProps): JSX.Element => {
  const mergedOverrides: PhoneInputOverrides = useMemo(
    () => mergeOverrides(getPhoneInputBaseOverrides({ dataTestId }), overrides),
    [overrides, dataTestId],
  );

  return (
    <BaseWebPhoneInput
      {...rest}
      maxDropdownHeight={maxDropdownHeight}
      maxDropdownWidth={maxDropdownWidth}
      clearable={false}
      overrides={mergedOverrides}
    />
  );
};

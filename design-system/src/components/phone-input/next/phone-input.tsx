import { forwardRef, useMemo } from 'react';

import { mergeOverrides } from 'baseui';
import { PhoneInput as BaseWebPhoneInput } from 'baseui/phone-input';

import { DEFAULT_KIND, DEFAULT_SIZE } from '@components/input/next';
import { useTranslation } from '@components/utils';
import { useSyncedRef } from '@hooks/use-synced-ref.hook';

import { getPhoneInputBaseOverrides } from './phone-input.overrides';

import type { PhoneInputProps } from './phone-input.interfaces';
import type { Country, PhoneInputOverrides } from 'baseui/phone-input';

const MAX_DROPDOWN_HEIGHT = '264px';
const MAX_DROPDOWN_WIDTH = '323px';
// BaseWeb's `Country['id']` is a strict union of ISO codes, but we intentionally use an
// "empty" sentinel value to represent the absence of a selection.
// It is safe because we also force the CountrySelect UI into an explicit empty state.
const EMPTY_COUNTRY = { id: '', dialCode: '', label: '' } as unknown as Country;

/**
 * Component used to write phone numbers,
 * contains a country selector which automatically writes the dial code
 * of the selected country and a tel input to write the phone number.
 */
export const PhoneInput = forwardRef<HTMLElement, PhoneInputProps>(function PhoneInput(
  {
    'data-testid': dataTestId = 'phone-input',
    overrides,
    maxDropdownHeight = MAX_DROPDOWN_HEIGHT,
    maxDropdownWidth = MAX_DROPDOWN_WIDTH,
    size = DEFAULT_SIZE,
    kind = DEFAULT_KIND,
    clearable,
    inputRef: externalInputRef,
    country,
    countryCodeAriaLabel,
    name,
    onCountryChange,
    ...rest
  },
  ref,
): JSX.Element {
  const inputRef = useSyncedRef<HTMLInputElement>({
    externalRef: externalInputRef,
  });
  const { t } = useTranslation();

  // BaseWeb defaults to US when `country` is `undefined` (via defaultProps).
  // In our design-system we treat "no country" as an explicit empty state
  // so the country select can render the placeholder/empty flag icon.
  //
  // BaseWeb's internals assume `country` has shape `{id, dialCode, label}`; passing `{}` causes
  // runtime issues (e.g. reading `country.dialCode`), so we use a safe sentinel object.
  const normalizedCountry: Country = country?.id ? country : EMPTY_COUNTRY;

  const mergedOverrides: PhoneInputOverrides = useMemo(
    () =>
      mergeOverrides(
        getPhoneInputBaseOverrides({
          dataTestId,
          size,
          kind,
          ref,
          clearable,
          inputRef,
          name,
          countryCodeAriaLabel: countryCodeAriaLabel ?? t('phoneInput.countryCodeAriaLabel'),
          onCountryChange,
        }),
        overrides,
      ),
    [
      t,
      dataTestId,
      size,
      kind,
      ref,
      clearable,
      overrides,
      countryCodeAriaLabel,
      inputRef,
      name,
      onCountryChange,
    ],
  );

  return (
    <BaseWebPhoneInput
      {...rest}
      country={normalizedCountry}
      name={name}
      placeholder={t('phoneInput.placeholder')}
      maxDropdownHeight={maxDropdownHeight}
      maxDropdownWidth={maxDropdownWidth}
      clearable={false}
      overrides={mergedOverrides}
    />
  );
});

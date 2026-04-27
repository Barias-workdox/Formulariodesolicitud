import { Input } from '@components/input/next';

import { CountrySelect } from './components/country-select';
import {
  countrySelectDropdownDialcodeColumnStyles,
  countrySelectDropdownFlagColumnStyles,
  countrySelectDropdownListItemStyles,
  countrySelectDropdownNameColumnStyles,
  dialCodeStyles,
  flagContainerStyles,
  rootStyles,
} from './phone-input.styles';

import type { PhoneInputBaseOverridesProps } from './phone-input.interfaces';
import type { PhoneInputOverrides } from 'baseui/phone-input';

/**
 * Get the phone input base styles overrides
 */
export const getPhoneInputBaseOverrides = ({
  dataTestId,
  ref,
  name,
  size,
  kind,
  clearable,
  inputRef,
  countryCodeAriaLabel,
  onCountryChange,
}: PhoneInputBaseOverridesProps): PhoneInputOverrides => ({
  Root: {
    props: {
      ref,
    },
    style: rootStyles,
  },
  Input: {
    props: {
      'data-testid': `${dataTestId}--tel-input`,
      size,
      kind,
      clearable,
      inputRef,
      ...(name && { name }),
    },
    component: Input,
  },
  FlagContainer: {
    props: {
      $size: size,
    },
    style: flagContainerStyles,
  },
  DialCode: {
    props: {
      $size: size,
    },
    style: dialCodeStyles,
  },
  CountrySelect: {
    props: {
      size,
      kind,
    },
    component: (props) => (
      <CountrySelect
        dataTestId={`${dataTestId}__country-select`}
        inputRef={inputRef}
        countryCodeAriaLabel={countryCodeAriaLabel}
        onCountryChange={onCountryChange}
        {...props}
      />
    ),
  },
  CountrySelectDropdownListItem: {
    style: countrySelectDropdownListItemStyles,
  },
  CountrySelectDropdownNameColumn: {
    props: {
      $size: size,
    },
    style: countrySelectDropdownNameColumnStyles,
  },
  CountrySelectDropdownDialcodeColumn: {
    props: {
      $size: size,
    },
    style: countrySelectDropdownDialcodeColumnStyles,
  },
  CountrySelectDropdownFlagColumn: {
    props: {
      $size: size,
    },
    style: countrySelectDropdownFlagColumnStyles,
  },
});

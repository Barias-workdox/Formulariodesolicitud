import { COUNTRY_ALPHA3_TO_ALPHA2 } from '@constants/country-alpha-codes.constants';
import { getFlagEmoji } from '@utils/string.util';

import type { SelectProps } from '@components/select/next';
import type { CountryCodeType } from '@components/utils/interfaces';
import type { Option } from 'baseui/select';

/**
 * Returns the label (flag emoji and country name) for the country option
 */
export const getSelectorCountryOptionLabel = ({
  option: { id, label },
  withLabel = true,
}: {
  option: Option;
  withLabel?: boolean;
}): string =>
  `${getFlagEmoji(COUNTRY_ALPHA3_TO_ALPHA2[id as CountryCodeType] || '')}${withLabel ? ` ${label}` : ''}`;

/**
 * Returns the value (flag emoji and country name) for the country and area option
 */
export const getCountryAndAreaValueLabel = ({
  countryOption,
  areaOption,
  defaultLabel = '',
}: {
  countryOption?: SelectProps['value'];
  areaOption?: SelectProps['value'];
  defaultLabel?: string;
}): string =>
  countryOption && areaOption
    ? `${getFlagEmoji(COUNTRY_ALPHA3_TO_ALPHA2[countryOption[0].id as CountryCodeType])} ${areaOption[0].label}`
    : defaultLabel;

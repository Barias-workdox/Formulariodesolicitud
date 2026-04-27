import { cleanCHLNic, formatCHLNic } from '../nic/chl/chl.format';
import { cleanDefaultNic, formatDefaultNic } from '../nic/default/default.format';
import { cleanMEXNic } from '../nic/mex/mex.format';

import type { CountryCodeType } from '../../../utils/interfaces';
import type { NicPayloadType } from '../../../utils/interfaces/nic.interface';

/** Map all raw nic clean and format rules to consume them dynamically based on the desired country */
export const allRawNicFormatMap = new Map<
  CountryCodeType | undefined,
  {
    cleanRawNic?(payload: NicPayloadType): string;
    formatRawNic?(payload: NicPayloadType): string;
  }
>([
  [
    'CHL',
    {
      cleanRawNic: cleanCHLNic,
      formatRawNic: formatCHLNic,
    },
  ],
  [
    'MEX',
    {
      cleanRawNic: cleanMEXNic,
    },
  ],
  // Default values
  [
    undefined,
    {
      cleanRawNic: cleanDefaultNic,
      formatRawNic: formatDefaultNic,
    },
  ],
]);

/** Utility to find the cleanRawNic for the desired country or the default value if undefined */
export const cleanRawNic = ({ rawNic, countryCode }: NicPayloadType): string => {
  const cleanRawNicCallback =
    allRawNicFormatMap.get(countryCode)?.cleanRawNic ??
    allRawNicFormatMap.get(undefined).cleanRawNic;

  return cleanRawNicCallback({ rawNic });
};

/**
 * Format a raw nic value according to rules for every country, Removing
 * any trash before formatting nic
 */
export const formatRawNic = ({ rawNic = '', countryCode }: NicPayloadType): string => {
  if (rawNic.trim() === '') {
    return '';
  }

  const cleanNic = cleanRawNic({ rawNic, countryCode });

  const formatRawNicCallback =
    allRawNicFormatMap.get(countryCode)?.formatRawNic ??
    allRawNicFormatMap.get(undefined).formatRawNic;

  return formatRawNicCallback({ rawNic: cleanNic });
};

/**
 * Formats a numeric string with commas as thousands separators.
 *
 * @param amount - The numeric string to format.
 * @returns The formatted string with commas.
 */
export const commaSeparatedAmount = (amount?: string): string => {
  if (amount === undefined) {
    return '';
  }

  const cleanedAmount = amount.replace(/[^0-9,]/g, '');
  const [integerPart, decimalPart = ''] = cleanedAmount.split(',');
  const formattedInteger = integerPart.replace(/(\d)(?=(\d{3})+(\.(\d){0,2})*$)/g, `$1.`);

  if (cleanedAmount.includes(',')) {
    return `${formattedInteger || 0},${decimalPart}`;
  }

  return formattedInteger;
};

import { cleanRawNic } from '../../utils';
import { validateBRANic } from '../bra';
import { validateCHLNic } from '../chl';
import { validateCOLNic } from '../col';
import { validateDefaultNic } from '../default';
import { validateECUNic } from '../ecu';
import { validateMEXNic } from '../mex';
import { validatePERNic } from '../per';

import type { CountryCodeType } from '../../../../utils/interfaces';
import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

export const allRawNicValidationMap = new Map<
  CountryCodeType | undefined,
  {
    validateRawNic(payload: NicPayloadType): boolean;
  }
>([
  [
    'CHL',
    {
      validateRawNic: validateCHLNic,
    },
  ],
  [
    'COL',
    {
      validateRawNic: validateCOLNic,
    },
  ],
  [
    'PER',
    {
      validateRawNic: validatePERNic,
    },
  ],
  [
    'ECU',
    {
      validateRawNic: validateECUNic,
    },
  ],
  [
    'MEX',
    {
      validateRawNic: validateMEXNic,
    },
  ],
  [
    'BRA',
    {
      validateRawNic: validateBRANic,
    },
  ],
  [
    undefined,
    {
      validateRawNic: validateDefaultNic,
    },
  ],
]);

/** Controller utility to validate any National Identification Card (NIC) by a countryCode & a National Identification Kind. */
export const validateRawNic = ({
  rawNic,
  countryCode,
  nationalIdentificationKindCode,
}: NicPayloadType): boolean => {
  if (!rawNic) {
    return false;
  }
  // Sanitize nic
  const nic = cleanRawNic({ rawNic, countryCode });

  // Validate if only trash is sent
  if (!nic) {
    return false;
  }

  const selectedCountry =
    allRawNicValidationMap.get(countryCode) ?? allRawNicValidationMap.get(undefined);

  return selectedCountry.validateRawNic({ rawNic, countryCode, nationalIdentificationKindCode });
};

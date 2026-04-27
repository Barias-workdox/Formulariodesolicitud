import { checkCIandCEEcuador, checkRUCEcuador, legacyCheckECURUC } from './ecu-validation.util';

import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/**
 * Validate ECU National Identification Card (NIC) depending selected National Identification Kind.
 */
export const validateECUNic = ({
  rawNic,
  nationalIdentificationKindCode,
}: NicPayloadType): boolean => {
  switch (nationalIdentificationKindCode) {
    case 'RUC': {
      return checkRUCEcuador(rawNic);
    }
    case 'PAS': {
      // The Ecuadorian passport number is a 10-digit number that starts with the letter "A" followed by 9 digits
      const ecuadorPassportRegEx = new RegExp(/^A[0-9]{9}$/);

      return ecuadorPassportRegEx.test(rawNic);
    }
    case 'CI':
    case 'CE': {
      return checkCIandCEEcuador(rawNic);
    }
  }

  // For cases where nationalIdentificationKindCode not exists, NIC could be correct for all cases (CI, CE, RUC).
  // Also, keeps the old RUC validation to avoid confusion on users who don't know about this changes.
  return checkRUCEcuador(rawNic) || checkCIandCEEcuador(rawNic) || legacyCheckECURUC(rawNic);
};

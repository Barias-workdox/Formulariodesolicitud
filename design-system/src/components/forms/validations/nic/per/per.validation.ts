import { checkContainsOnlyNumbers } from '../util/nic-validation.util';

import { checkPERRUC } from './per-validation.util';

import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/**
 * Validate Peruvian National Identification Card (NIC) depending selected National Identification Kind.
 */
export const validatePERNic = ({
  rawNic,
  nationalIdentificationKindCode,
}: NicPayloadType): boolean => {
  switch (nationalIdentificationKindCode) {
    case 'DNI': {
      // "Documento Nacional de Identidad" (DNI) must contains only numbers and length = 8
      return checkContainsOnlyNumbers(rawNic) && rawNic.length === 8;
    }
    case 'CE': {
      // "Cédula de Extranjería" (CE) must contains only numbers and length in a range from 9 to 12
      return checkContainsOnlyNumbers(rawNic) && rawNic.length >= 9 && rawNic.length <= 12;
    }
    case 'RUC': {
      return checkPERRUC(rawNic);
    }
    case 'PAS': {
      // The Peruvian passport (PAS) number is a 9-digit number that starts with the letter "A" followed by 8 digits.
      const peruvianPassportRegEx = new RegExp(/^A[0-9]{8}$/);

      return peruvianPassportRegEx.test(rawNic);
    }
    default: {
      // For cases where nationalIdentificationKindCode not exists, rawNic could be correct for all cases (DNI, CE, RUC)
      return (
        (checkContainsOnlyNumbers(rawNic) && rawNic.length >= 8 && rawNic.length <= 12) ||
        checkPERRUC(rawNic)
      );
    }
  }
};

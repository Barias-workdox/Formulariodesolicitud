import { checkCOLNIT } from './col-validation.util';

import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/**
 * Validate Colombian National Identification Card (NIC) depending selected National Identification Kind.
 */
export const validateCOLNic = ({
  rawNic,
  nationalIdentificationKindCode,
}: NicPayloadType): boolean => {
  switch (nationalIdentificationKindCode) {
    case 'PAS': {
      // The Colombian passport (PAS) number is an 8-digit number and letter code that identifies the passport holder.
      const colombianPassportRegEx = new RegExp(/^[A-Z]{2}[0-9]{6}$/);

      return colombianPassportRegEx.test(rawNic);
    }
    default: {
      return checkCOLNIT(rawNic);
    }
  }
};

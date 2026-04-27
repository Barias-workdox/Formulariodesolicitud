import { cleanRawNic } from '../../utils';

import type { NicPayloadType } from '../../../../utils/interfaces/nic.interface';

/** A validation for Chilean "Rol Único Tributario" RUT */
export const validateCHLNic = ({ rawNic }: NicPayloadType): boolean => {
  if (rawNic === '') {
    return true;
  }

  const rawNicAlpha = cleanRawNic({ rawNic, countryCode: 'CHL' }).toUpperCase();

  if (!/^0*(\d{1,3}(\.?\d{3})*)-?([\dkK])$/.test(rawNicAlpha)) {
    return false;
  }

  let t = parseInt(rawNicAlpha.slice(0, -1), 10);
  let m = 0;
  let s = 1;
  while (t > 0) {
    s = (s + (t % 10) * (9 - (m++ % 6))) % 11;
    t = Math.floor(t / 10);
  }
  const v = s > 0 ? `${s - 1}` : 'K';

  return v === rawNicAlpha.slice(-1);
};

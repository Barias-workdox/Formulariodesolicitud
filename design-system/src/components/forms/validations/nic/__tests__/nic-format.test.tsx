import { cleanRawNic, formatRawNic } from '../../utils';

import { allNicMocks } from './nic.mock';

allNicMocks.forEach(({ format }, countryCode) => {
  if (format !== undefined) {
    describe(`${countryCode} clean and format raw nic - tests`, () => {
      format.forEach((values, nationalIdentificationKindCode) => {
        values.forEach(({ rawNic, clean, format }) => {
          it(`should clean raw nic correctly for nationalIdentificationKindCode : '${nationalIdentificationKindCode}'`, () => {
            expect(cleanRawNic({ rawNic, countryCode })).toEqual(clean);
          });
          it(`should format raw nic correctly for nationalIdentificationKindCode : '${nationalIdentificationKindCode}'`, () => {
            expect(formatRawNic({ rawNic, countryCode })).toEqual(format);
          });
        });
      });
    });
  }
});

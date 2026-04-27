import { validateRawNic } from '../../nic';

import { allNicMocks } from './nic.mock';

allNicMocks.forEach(({ validation }, countryCode) => {
  if (validation !== undefined) {
    describe(`${countryCode} validation - tests`, () => {
      validation.forEach(({ valid, invalid }, nationalIdentificationKindCode) => {
        it(`should validate valid values 'true' for nationalIdentificationKind: '${nationalIdentificationKindCode}'`, () => {
          valid.forEach((validValue) => {
            expect(
              validateRawNic({ rawNic: validValue, countryCode, nationalIdentificationKindCode }),
            ).toBeTruthy();
          });
        });

        it(`should validate invalid values 'false' for nationalIdentificationKind: '${nationalIdentificationKindCode}'`, () => {
          invalid.forEach((invalidValue) => {
            expect(
              validateRawNic({ rawNic: invalidValue, countryCode, nationalIdentificationKindCode }),
            ).toBeFalsy();
          });
        });
      });
    });
  }
});

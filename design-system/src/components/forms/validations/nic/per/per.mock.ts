import type { NicTestMockType } from '../__tests__/nic-test.interface';

export const PERMocks: NicTestMockType = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore - all ok but seems a TS bug with Maps
  validation: new Map([
    [
      undefined,
      {
        valid: ['20506078597', '10452856903', '20509037245'],
        invalid: ['2050607', '1045285', '2050903'],
      },
    ],
    [
      'DNI',
      {
        valid: ['20506078', '10452856', '20509037'],
        invalid: ['2050607859', '1045285690', '2050903724'],
      },
    ],
    [
      'CE',
      {
        valid: ['205060789', '1045285612', '205090372345'],
        invalid: ['ABC12345678', '12345678', '1234567891234'],
      },
    ],
    [
      'RUC',
      {
        valid: ['10453678901', '15234567890', '20453678901'],
        invalid: ['123456789012', '163456789013', '212345678904'],
      },
    ],
    [
      'PAS',
      {
        valid: ['A12345678', 'A22446688', 'A87654321'],
        invalid: ['123456789', 'B12345678', '12345678A'],
      },
    ],
  ]),
};
